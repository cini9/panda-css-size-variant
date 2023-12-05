/**
 * The external imports
 */
import { ark } from '@ark-ui/react'

/**
 * The internal imports
 */
import { styled } from '@/styled-system/jsx'
import { button } from '@/styled-system/recipes'

export const Button = styled(ark.button, button)
export type ButtonProps = typeof Button
