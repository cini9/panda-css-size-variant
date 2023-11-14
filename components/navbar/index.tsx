/**
 * The external imports
 */
import { memo } from 'react'
import Image from 'next/image'

/**
 * The internal imports
 */
import Link from '@/components/ui/link'
import Logo from '@/public/wm-logo.png'
import { css } from '@/styled-system/css'
import { Flex, Box, HStack } from '@/styled-system/jsx'

const Navbar = () => {
  const linkStyle = {
    bg: 'black',
    color: 'white',
    borderRadius: '50px',
    px: 8,
    py: 2,
  }
  return (
    <Flex w='full' h={24} justifyContent={'space-between'}>
      <Box height={20} w={20} m={3} position='relative'>
        <Image
          src={Logo}
          layout='fill'
          objectFit='contain'
          alt='White logo'
          priority
        />
      </Box>
      <HStack alignContent={'center'} gap={4} mr={4}>
        <Link
          href={`/`}
          ariaLabel={'TODO'}
          variant='navbar'
          className={css(linkStyle)}
        >
          Accueil
        </Link>
        <Link
          href={`/`}
          ariaLabel={'TODO'}
          variant='navbar'
          className={css(linkStyle)}
        >
          Accueil
        </Link>
      </HStack>
    </Flex>
  )
}

export default memo(Navbar)
