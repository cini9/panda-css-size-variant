/**
 * The internal imports
 */
import Navbar from '@/components/navbar'
import { Button, IconButton } from '@/components/ui/button'
import { Box, HStack, VStack } from '@/styled-system/jsx'
import { Text } from '@/components/ui/text'
import { ArrowUpRight, ArrowRight, ArrowUpLeft } from 'lucide-react'
import { css } from '@/styled-system/css'

export default function Home() {
  return (
    <Box>
      <Navbar />

      <VStack py={10} px={10}>
        <HStack>
          <Text textStyle='2xsBookNormal'>Navbar</Text>
          <Button variant='navbar' size='sm'>
            Accueil
          </Button>
        </HStack>

        <HStack>
          <Text textStyle='2xsBookNormal'>Navbar Active</Text>
          <Button variant='navbarActive' size='sm'>
            Accueil
          </Button>
        </HStack>

        <HStack>
          <Text textStyle='2xsBookNormal'>Icon Button Uppercase</Text>
          <IconButton
            aria-label='iconButton'
            additionalStyle={css({ textTransform: 'uppercase' })}
            icon={<ArrowUpRight />}
          >
            Parlons-en
          </IconButton>
        </HStack>

        <HStack>
          <Text textStyle='2xsBookNormal'>Icon Button Normal</Text>
          <IconButton
            aria-label='iconButton'
            icon={<ArrowUpRight size='64px' />}
            hasCircle
            gap={9}
            size='lg'
          >
            Parlons-en
          </IconButton>
          <IconButton
            aria-label='iconButton'
            icon={<ArrowUpLeft size='56px' />}
            rtl
            gap={6}
            size='md'
          >
            Projet précédent
          </IconButton>
          <IconButton aria-label='iconButton' icon={<ArrowUpRight />}>
            Découvrir
          </IconButton>
          <IconButton aria-label='iconButton' icon={<ArrowRight />}>
            En savoir plus
          </IconButton>
        </HStack>

        <HStack bg='lightgrey' p={10}>
          <Text textStyle='2xsBookNormal'>Icon Button White</Text>
          <IconButton
            aria-label='iconButton'
            variant='iconButtonWhite'
            icon={<ArrowRight />}
          >
            Voir tous les projets
          </IconButton>
        </HStack>
      </VStack>
    </Box>
  )
}
