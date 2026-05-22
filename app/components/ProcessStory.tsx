'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { ArrowUpRight, GitBranch } from 'lucide-react';

type ProcessStep = {
  number: string;
  title: string;
  text: string;
  detail?: string;
  bullets?: string[];
};

type ProcessStoryProps = {
  eyebrow: string;
  title: string;
  description: string;
  steps: ProcessStep[];
  id?: string;
  ctaHref?: string;
  ctaLabel?: string;
};

export default function ProcessStory({ eyebrow, title, description, steps, id, ctaHref, ctaLabel }: ProcessStoryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const stepRefs = useRef<Array<HTMLElement | null>>([]);

  const rotation = useMemo(() => activeIndex * (360 / Math.max(steps.length, 1)), [activeIndex, steps.length]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible) {
          const index = Number((visible.target as HTMLElement).dataset.storyIndex || 0);
          setActiveIndex(index);
        }
      },
      { threshold: [0.35, 0.55, 0.75], rootMargin: '-18% 0px -22% 0px' }
    );

    stepRefs.current.forEach((node) => {
      if (node) observer.observe(node);
    });

    return () => observer.disconnect();
  }, [steps.length]);

  const activeStep = steps[activeIndex] || steps[0];

  return (
    <section className="section-frame process-story-section" id={id}>
      <div className="section-heading process-story-heading">
        <span className="eyebrow">{eyebrow}</span>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>

      <div className="process-story-layout">
        <aside className="process-story-sticky" aria-label="Navegação do processo">
          <div className="story-book-card">
            <span className="story-kicker">Capítulo ativo</span>
            <strong>{activeStep?.number} · {activeStep?.title}</strong>
            <p>{activeStep?.text}</p>
            {ctaHref && ctaLabel ? (
              <a className="story-mini-link" href={ctaHref}>{ctaLabel}<ArrowUpRight size={14} /></a>
            ) : null}
          </div>

          <div className="story-wheel" style={{ '--rotation': `${rotation}deg` } as React.CSSProperties}>
            <div className="story-wheel-ring" />
            {steps.map((step, index) => {
              const angle = index * (360 / Math.max(steps.length, 1));
              return (
                <a
                  href={`#story-step-${id || 'process'}-${index}`}
                  className={`story-wheel-node ${activeIndex === index ? 'active' : ''}`}
                  style={{ '--angle': `${angle}deg` } as React.CSSProperties}
                  key={step.title}
                  onClick={() => setActiveIndex(index)}
                >
                  {step.number}
                </a>
              );
            })}
          </div>
        </aside>

        <div className="process-story-chapters">
          {steps.map((step, index) => (
            <article
              id={`story-step-${id || 'process'}-${index}`}
              className={`story-chapter ${activeIndex === index ? 'active' : ''}`}
              key={step.title}
              data-story-index={index}
              ref={(node) => { stepRefs.current[index] = node; }}
            >
              <div className="story-chapter-index"><span>{step.number}</span><GitBranch size={18} /></div>
              <div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
                {step.detail ? <p className="story-detail">{step.detail}</p> : null}
                {step.bullets?.length ? (
                  <ul>
                    {step.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
                  </ul>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
