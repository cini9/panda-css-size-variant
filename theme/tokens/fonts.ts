/**
 * The external imports
 */
import localFont from 'next/font/local'

export const ppNeueMontreal = localFont({
  src: [
    {
      path: '../../public/fonts/PPNeueMontreal-SemiBold.otf',
      weight: '600',
      style: 'semibold',
    },
    {
      path: '../../public/fonts/PPNeueMontreal-Medium.otf',
      weight: '500',
      style: 'medium',
    },
    {
      path: '../../public/fonts/PPNeueMontreal-Book.otf',
      weight: '400',
      style: 'book',
    },
  ],
  display: 'swap',
  variable: '--font-ppNeueMontreal',
})
