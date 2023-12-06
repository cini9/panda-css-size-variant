/**
 * The external imports
 */
import { ComponentPropsWithoutRef, FC, ReactElement } from 'react'

/**
 * The internal imports
 */
import { Box, HStack, styled } from '@/styled-system/jsx'
import { type ButtonVariantProps, button } from '@/styled-system/recipes'

export const Button = styled('button', button)
export type ButtonProps = typeof Button

type IconButtonProps = ButtonVariantProps &
  ComponentPropsWithoutRef<'button'> & {
    icon?: ReactElement
    'aria-label': string
    hasCircle?: boolean
    rtl?: boolean
    gap?: number
    additionalStyle?: any
  }

export const IconButton: FC<IconButtonProps> = ({
  icon,
  children,
  gap = 3,
  hasCircle = false,
  rtl = false,
  variant = 'iconButton',
  size = 'sm',
  ...rest
}) => {
  return (
    <Button {...rest} size={size} variant={variant}>
      <HStack gap={gap} direction={rtl ? 'rtl' : 'ltr'}>
        {children}
        <Box
          bg={hasCircle ? 'white' : 'primary'}
          color={hasCircle ? 'primary' : 'white'}
          borderRadius='full'
        >
          {icon}
        </Box>
      </HStack>
    </Button>
  )
}
