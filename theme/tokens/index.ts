/**
 * The external imports
 */
import { defineTokens } from '@pandacss/dev'

/**
 * The interal imports
 */
import { colors } from './colors'
import { fontSizes } from './fontSizes'
import { letterSpacings } from './letterSpacings'
import { sizes } from './sizes'

export const tokens = defineTokens({
  fontSizes,
  letterSpacings,
  colors,
  sizes,
  fonts: {
    ppNeueMontreal: { value: 'var(--font-ppNeueMontreal), sans-serif' },
  },
})
