// fonts.ts
import localFont from 'next/font/local'

// Font-titulo (FunnelDisplay)
export const fontTitulo = localFont({
  src: [
    {
      path: '../../public/fonts/FunnelDisplay-Light.ttf',
      weight: '300',
      style: 'normal'
    },
    {
      path: '../../public/fonts/FunnelDisplay-Regular.ttf',
      weight: '400',
      style: 'normal'
    },
    {
      path: '../../public/fonts/FunnelDisplay-Medium.ttf',
      weight: '500',
      style: 'normal'
    },
    {
      path: '../../public/fonts/FunnelDisplay-SemiBold.ttf',
      weight: '600',
      style: 'normal'
    },
    {
      path: '../../public/fonts/FunnelDisplay-Bold.ttf',
      weight: '700',
      style: 'normal'
    },
    {
      path: '../../public/fonts/FunnelDisplay-ExtraBold.ttf',
      weight: '800',
      style: 'normal'
    }
  ],
  variable: '--font-titulo',
  display: 'swap'
})

// Font-cuerpo (FunnelSans)
export const fontCuerpo = localFont({
  src: [
    {
      path: '../../public/fonts/FunnelSans-Light.ttf',
      weight: '300',
      style: 'normal'
    },
    {
      path: '../../public/fonts/FunnelSans-LightItalic.ttf',
      weight: '300',
      style: 'italic'
    },
    {
      path: '../../public/fonts/FunnelSans-Regular.ttf',
      weight: '400',
      style: 'normal'
    },
    {
      path: '../../public/fonts/FunnelSans-Italic.ttf',
      weight: '400',
      style: 'italic'
    },
    {
      path: '../../public/fonts/FunnelSans-Medium.ttf',
      weight: '500',
      style: 'normal'
    },
    {
      path: '../../public/fonts/FunnelSans-MediumItalic.ttf',
      weight: '500',
      style: 'italic'
    },
    {
      path: '../../public/fonts/FunnelSans-SemiBold.ttf',
      weight: '600',
      style: 'normal'
    },
    {
      path: '../../public/fonts/FunnelSans-SemiBoldItalic.ttf',
      weight: '600',
      style: 'italic'
    },
    {
      path: '../../public/fonts/FunnelSans-Bold.ttf',
      weight: '700',
      style: 'normal'
    },
    {
      path: '../../public/fonts/FunnelSans-BoldItalic.ttf',
      weight: '700',
      style: 'italic'
    },
    {
      path: '../../public/fonts/FunnelSans-ExtraBold.ttf',
      weight: '800',
      style: 'normal'
    },
    {
      path: '../../public/fonts/FunnelSans-ExtraBoldItalic.ttf',
      weight: '800',
      style: 'italic'
    }
  ],
  variable: '--font-cuerpo',
  display: 'swap'
})
