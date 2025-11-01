import localFont from 'next/font/local';

export const nunitoSans = localFont({
  src: [
    {
      path: './Nunito_Sans/NunitoSans-VariableFont_YTLC,opsz,wdth,wght.ttf',
      style: 'normal',
    },
    {
      path: './Nunito_Sans/NunitoSans-Italic-VariableFont_YTLC,opsz,wdth,wght.ttf',
      style: 'italic',
    },
  ],
  variable: '--font-nunito-sans',
  display: 'swap',
});

export const jetbrainsMono = localFont({
  src: [
    {
      path: './JetBrains_Mono/JetBrainsMono-VariableFont_wght.ttf',
      style: 'normal',
    },
    {
      path: './JetBrains_Mono/JetBrainsMono-Italic-VariableFont_wght.ttf',
      style: 'italic',
    },
  ],
  variable: '--font-jetbrains',
  display: 'swap',
});

export const firaCode = localFont({
  src: [
    {
      path: './Fira_Code/FiraCode-VariableFont_wght.ttf',
      style: 'normal',
    },
  ],
  variable: '--font-fira',
  display: 'swap',
});
