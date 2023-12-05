/**
 * The external imports
 */
import { defineConfig } from '@pandacss/dev'

/**
 * The internal imports
 */
import { semanticTokens } from './theme/sementicTokens'
import { textStyles } from './theme/textStyles'
import { tokens } from './theme/tokens'
import { recipes } from './theme/recipes'
import { globalCss } from './theme/globalCss'

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ['./app/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    semanticTokens,
    textStyles,
    tokens,
    extend: {
      recipes,
    },
  },

  globalCss,

  jsxFramework: 'react',

  // The output directory for your css system
  outdir: 'styled-system',
})
