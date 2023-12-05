/**
 * The external imports
 */
import { ComponentPropsWithoutRef, FC, ReactElement } from 'react'
import { ark } from '@ark-ui/react'

/**
 * The internal imports
 */
import { Box, HStack, styled } from '@/styled-system/jsx'
import { type ButtonVariantProps, button } from '@/styled-system/recipes'

export const Button = styled(ark.button, button)
export type ButtonProps = typeof Button

type IconButtonProps = ButtonVariantProps &
  ComponentPropsWithoutRef<'button'> & {
    icon?: ReactElement
    'aria-label': string
    hasCircle?: boolean
    rtl?: boolean
    gap?: number
  }

// TODO : White button
export const IconButton: FC<IconButtonProps> = ({
  icon,
  children,
  gap = 3,
  hasCircle = false,
  rtl = false,
  ...rest
}) => {
  return (
    <Button variant='iconButton' {...rest}>
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
