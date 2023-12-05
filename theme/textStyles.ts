/**
 * The external imports
 */
import { defineTextStyles } from '@pandacss/dev'

export const textStyles = defineTextStyles({
  h1: {
    value: {
      fontSize: '3xl',
      fontWeight: '600',
      letterSpacing: 'normal',
    },
  },
  h2: {
    value: { fontSize: '2xl', fontWeight: '600', letterSpacing: 'widest' },
  },
  h3: {
    value: {
      fontSize: 'xl',
      fontWeight: '600',
      letterSpacing: 'extraWide',
    },
  },
  content: {
    value: { fontSize: 'md', fontWeight: '400', letterSpacing: 'wider' },
  },
  '4xsBookNormal': {
    value: { fontSize: '4xs', fontWeight: '400', letterSpacing: 'normal' },
  },
  '3xsBookWide': {
    value: { fontSize: '3xs', fontWeight: '400', letterSpacing: 'wide' },
  },
  '2xsBookNormal': {
    value: { fontSize: '2xs', fontWeight: '400', letterSpacing: 'normal' },
  },
  '2xsMediumNormal': {
    value: { fontSize: '2xs', fontWeight: '500', letterSpacing: 'normal' },
  },
  xsMediumNormal: {
    value: { fontSize: 'xs', fontWeight: '500', letterSpacing: 'normal' },
  },
  smMediumWider: {
    value: { fontSize: 'sm', fontWeight: '500', letterSpacing: 'wider' },
  },
  smBookWider: {
    value: { fontSize: 'sm', fontWeight: '400', letterSpacing: 'wider' },
  },
  lgMediumNormal: {
    value: { fontSize: 'lg', fontWeight: '500', letterSpacing: 'normal' },
  },
  xlMediumNormal: {
    value: { fontSize: 'xl', fontWeight: '500', letterSpacing: 'normal' },
  },
})
