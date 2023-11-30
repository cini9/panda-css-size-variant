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
import { spacing } from './spacing'
import { lineHeights } from './lineHeights'
import { radii } from './radii'

export const tokens = defineTokens({
  fontSizes,
  letterSpacings,
  colors,
  sizes,
  spacing,
  lineHeights,
  radii,
  fonts: {
    ppNeueMontreal: { value: 'var(--font-ppNeueMontreal), sans-serif' },
  },
})
