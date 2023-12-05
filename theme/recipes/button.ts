import { defineRecipe } from '@pandacss/dev'

export const button = defineRecipe({
  className: 'button',
  base: {},
  defaultVariants: {},
  variants: {
    variant: {
      solid: {
        color: 'white',
        textStyle: 'xsMediumNormal',
      },
      outline: {},
      ghost: {},
      link: {},
    },
    size: {
      xs: {},
      sm: {},
      md: {},
      lg: {},
      xl: {},
      '2xl': {},
    },
  },
})
