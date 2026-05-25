import { ImageResponse } from 'next/og';

export const size = {
  width: 512,
  height: 512
};

export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#030711'
        }}
      >
        <img
          src="https://www.tehknesolutions.com.br/images/tehkne-simbolo-isolado-logo.png"
          alt="Tehkné"
          style={{ width: 440, height: 440, objectFit: 'contain' }}
        />
      </div>
    ),
    size
  );
}
