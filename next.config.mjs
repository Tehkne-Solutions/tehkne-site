/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ protocol: 'https', hostname: '**' }]
  },
  async redirects() {
    return [
      {
        source: '/tehkne-os',
        destination: '/metodo',
        permanent: true
      },
      {
        source: '/servicos/ia-automacoes-agentes-inteligentes',
        destination: '/servicos/solucoes-ia',
        permanent: true
      }
    ];
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'index, follow'
          }
        ]
      }
    ];
  }
};

export default nextConfig;
