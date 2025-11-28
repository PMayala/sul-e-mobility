import localFont from 'next/font/local';

export const customFont = localFont({
  src: [
    {
      path: '../../public/fonts/eurostile.woff',
      weight: '400',
      style: 'normal',
    }
  ],
  display: 'swap',
  variable: '--font-custom',
});

