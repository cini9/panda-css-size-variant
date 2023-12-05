/**
 * The external imports
 */
import localFont from 'next/font/local'

export const ppNeueMontreal = localFont({
  src: [
    {
      path: '../../public/fonts/PPNeueMontreal-SemiBold.otf',
      weight: '600',
    },
    {
      path: '../../public/fonts/PPNeueMontreal-Medium.otf',
      weight: '500',
    },
    {
      path: '../../public/fonts/PPNeueMontreal-Book.otf',
      weight: '400',
    },
  ],
  display: 'swap',
  variable: '--font-ppNeueMontreal',
})
