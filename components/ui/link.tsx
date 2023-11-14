/**
 * The external imports
 */
import NextLink from 'next/link'

/**
 * The internal imports
 */
import type { NavigationProps } from '@/types/components'

// TODO : Get this to work :
// https://nextjs.org/docs/app/building-your-application/configuring/typescript#statically-typed-links
const Link: NavigationProps = ({
  href,
  ariaLabel,
  children,
  className,
  ...rest
}) => (
  <NextLink href={href} aria-label={ariaLabel} className={className} {...rest}>
    {children}
  </NextLink>
)

export default Link
