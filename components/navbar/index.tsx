/**
 * The external imports
 */
import Image from 'next/image'

/**
 * The internal imports
 */
import Logo from '@/public/wm-logo.png'
import { Flex, Box } from '@/styled-system/jsx'

const Navbar = () => {
  return (
    <Flex w='full' h={24} justifyContent='space-between'>
      <Box height={20} w={20} m={3} position='relative'>
        <Image
          src={Logo}
          layout='fill'
          objectFit='contain'
          alt='White logo'
          priority
        />
      </Box>
    </Flex>
  )
}

export default Navbar
