/**
 * The external imports
 */
import { defineTextStyles } from '@pandacss/dev'

export const textStyles = defineTextStyles({
  h1: {
    value: {
      fontSize: '3xl',
      fontStyle: 'bold',
      letterSpacing: 'normal',
    },
  },
  h2: {
    value: { fontSize: '2xl', fontWeight: 'bold', letterSpacing: 'widest' },
  },
  h3: {
    value: {
      fontSize: 'xl',
      fontWeight: 'bold',
      letterSpacing: 'extraWide',
    },
  },
  content: {
    value: { fontSize: 'md', fontWeight: 'book', letterSpacing: 'wider' },
  },
  '4xsBookNormal': {
    value: { fontSize: '4xs', fontWeight: 'book', letterSpacing: 'normal' },
  },
  '3xsBookWide': {
    value: { fontSize: '2xs', fontWeight: 'book', letterSpacing: 'wide' },
  },
  '2xsBookNormal': {
    value: { fontSize: '2xs', fontWeight: 'book', letterSpacing: 'normal' },
  },
  '2xsMediumNormal': {
    value: { fontSize: '2xs', fontWeight: 'medium', letterSpacing: 'normal' },
  },
  xsMediumNormal: {
    value: { fontSize: 'xs', fontWeight: 'medium', letterSpacing: 'normal' },
  },
  smMediumWider: {
    value: { fontSize: 'sm', fontWeight: 'medium', letterSpacing: 'wider' },
  },
  smBookWider: {
    value: { fontSize: 'sm', fontWeight: 'book', letterSpacing: 'wider' },
  },
  lgMediumNormal: {
    value: { fontSize: 'lg', fontWeight: 'medium', letterSpacing: 'normal' },
  },
  xlMediumNormal: {
    value: { fontSize: 'xl', fontWeight: 'medium', letterSpacing: 'normal' },
  },
})
