/**
 * The external imports
 */
import type { FC, PropsWithChildren } from 'react'

/**
 * The internal imports
 */

type CustomLinkProps = LinkProps &
  HTMLProps<HTMLAnchorElement> & {
    ariaLabel: string
    notification?: boolean
  }

export type NavigationProps = FC<PropsWithChildren<CustomLinkProps>>
