/**
 * The external imports
 */
import { defineTokens } from '@pandacss/dev'

/**
 * The interal imports
 */
import { colors } from './colors'
import { fontSizes } from './fontSizes'
import { sizes } from './sizes'

export const tokens = defineTokens({
  fontSizes,
  colors,
  sizes,
})
