/**
 * The external imports
 */
import type { FC, PropsWithChildren } from 'react'

/**
 * The internal imports
 */

type CustomLinkProps = LinkProps &
  HTMLProps<HTMLAnchorElement>

export type NavigationProps = FC<PropsWithChildren<CustomLinkProps>>
