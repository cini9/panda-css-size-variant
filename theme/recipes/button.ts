import { defineRecipe } from '@pandacss/dev'

export const button = defineRecipe({
  className: 'button',
  base: {
    borderRadius: 'full',
    cursor: 'pointer',
  },
  defaultVariants: {},
  variants: {
    variant: {
      outline: {},
      ghost: {},
      link: {},
      navbar: {
        textStyle: 'xsMediumNormal',
        bg: 'white',
        px: 4,
        py: 1,
        color: 'primary',
        overflow: 'hidden',
        position: 'relative',
        zIndex: 1,
        transition: 'color 0.4s linear',
        _hover: {
          color: 'white',
          _before: {
            transform: 'translateY(-25%)',
          },
        },
        _before: {
          content: '""',
          zIndex: -1,
          position: 'absolute',
          top: 0,
          left: '-5%',
          backgroundImage: 'url("/wave.svg")',
          backgroundSize: '100%',
          width: '110%',
          height: '160%',
          transform: 'translateY(40px)',
          transition: 'transform 0.4s, opacity 0.3s',
          transitionTimingFunction: 'cubic-bezier(0.7, 0, 0.9, 1)',
        },
      },
      navbarActive: {
        textStyle: 'xsMediumNormal',
        bg: 'primary',
        cursor: 'default',
        px: 4,
        py: 1,
        color: 'white',
      },
      iconButton: {
        textStyle: 'xsMediumNormal',
        px: 4,
        py: 1,
        bg: 'primary',
        color: 'white',
      },
      iconButtonWhite: {
        textStyle: 'xsMediumNormal',
        px: 4,
        py: 1,
        bg: 'white',
        color: 'primary',
      },
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
