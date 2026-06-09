<?php
if (!defined('ABSPATH')) exit;

class SimpleWay_Onboarding
{
    public static function init(): void
    {
        add_action('init', [__CLASS__, 'maybe_redirect']);
        add_action('admin_post_sw_complete_onboarding', [__CLASS__, 'handle_complete']);
    }

    public static function is_done(int $user_id): bool
    {
        return (bool) get_user_meta($user_id, 'sw_onboarding_done', true);
    }

    public static function mark_done(int $user_id): void
    {
        update_user_meta($user_id, 'sw_onboarding_done', 1);
    }

    public static function maybe_redirect(): void
    {
        if (!is_user_logged_in() || is_admin() || current_user_can('manage_options')) {
            return;
        }

        $doing = get_query_var('simpleway_app');
        $uri = isset($_SERVER['REQUEST_URI']) ? (string) $_SERVER['REQUEST_URI'] : '';
        if ($doing === 'public_onboarding' || strpos($uri, '/onboarding') !== false) {
            return;
        }

        if (!self::is_done(get_current_user_id())) {
            wp_safe_redirect(home_url('/onboarding'));
            exit;
        }
    }

    public static function handle_complete(): void
    {
        if (!is_user_logged_in()) {
            wp_die('Not logged in', '', ['response' => 403]);
        }

        check_admin_referer('sw_complete_onboarding');
        self::mark_done(get_current_user_id());
        wp_safe_redirect(home_url('/app'));
        exit;
    }

    public static function steps_for_student(int $user_id): array
    {
        $has_started = self::has_any_progress($user_id);
        $xp = (int) get_user_meta($user_id, 'sw_xp', true);

        return [
            ['title' => 'Entrar no portal', 'description' => 'Acesse seu dashboard e veja sua jornada.', 'done' => true],
            ['title' => 'Abrir a Lesson 1', 'description' => 'Comece pelo mapa de lições.', 'done' => $has_started, 'url' => home_url('/app/lessons')],
            ['title' => 'Concluir uma etapa', 'description' => 'Finalize uma etapa para ganhar XP.', 'done' => $xp > 0],
            ['title' => 'Chegar ao checkpoint', 'description' => 'Complete o ciclo de 7 etapas.', 'done' => $xp >= 70],
        ];
    }

    private static function has_any_progress(int $user_id): bool
    {
        global $wpdb;

        if (!class_exists('SimpleWay_Progress')) {
            return false;
        }

        $table = SimpleWay_Progress::table();
        $count = (int) $wpdb->get_var($wpdb->prepare("SELECT COUNT(*) FROM {$table} WHERE user_id = %d", $user_id));

        return $count > 0;
    }

    public static function render_student_widget(int $user_id): void
    {
        $steps = self::steps_for_student($user_id);
        echo '<section class="sw-card sw-card-large sw-onboarding"><span>Primeiros passos</span><h2>Comece sua jornada SimpleWay</h2><div class="sw-onboarding-list">';
        foreach ($steps as $step) {
            $class = $step['done'] ? 'is-done' : 'is-open';
            echo '<div class="sw-onboarding-step ' . esc_attr($class) . '"><strong>' . esc_html($step['done'] ? '✓ ' : '○ ') . esc_html($step['title']) . '</strong><p>' . esc_html($step['description']) . '</p>';
            if (!$step['done'] && !empty($step['url'])) {
                echo '<a class="sw-button sw-button-ghost" href="' . esc_url($step['url']) . '">Continuar</a>';
            }
            echo '</div>';
        }
        echo '</div></section>';
    }
}
