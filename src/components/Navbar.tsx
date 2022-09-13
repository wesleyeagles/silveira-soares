import { Box, Button, Container, Text, useDisclosure, Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton, } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useRef } from 'react'


import { GiHamburgerMenu } from 'react-icons/gi'

export function Navbar() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = useRef<any>()

    return (
        <Box position='absolute' zIndex={100} bg='transparent' w='100%' h='110px'>
            <Container maxW={{ md: '3xl', lg: '5xl', xl: '6xl', '2xl': '8xl'}} h='100%'>
                <Box w='100%' h='100%' display='flex' alignItems='center'>
                    <Box className="logo" flex={1}>
                        <img className="w-[40px]" src="https://gistcdn.githack.com/wesleyeagles/ab2dfb43a59f5d3e4febbd345490962c/raw/1b142c8915d6a47ded29fab0e8bbc887dd4163df/logo_silveira.svg" alt="logo" />
                    </Box>

                    <Box display={{sm: 'none', md: 'block'}}>
                        <nav className="flex items-center">
                            <Link to=''>
                                <Text color='white' fontWeight={600} marginInline={3}>
                                Inicio
                                </Text>
                            </Link>

                            <Link to=''>
                                <Text color='white' fontWeight={600} marginInline={3}>
                                Serviços
                                </Text>
                            </Link>

                            <Link to=''>
                                <Text color='white' fontWeight={600} marginInline={3}>
                                Quem Somos
                                </Text>
                            </Link>

                            <Link to=''>
                                <Text color='white' fontWeight={600} marginInline={3}>
                                Contato
                                </Text>
                            </Link>

                            <Link to=''>
                                <Button  marginLeft={3} bg='brand.red' _hover={{ bg: 'brand.hover.red'}}>
                                    <Text color='white'>
                                    Baixar E-book
                                    </Text>
                                </Button>
                            </Link>
                        </nav>
                    </Box>

                    <Box ref={btnRef} onClick={onOpen} display={{sm: 'block', md: 'none'}}>
                        <GiHamburgerMenu color="#FFF" size={30}/>
                    </Box>
                </Box>
            </Container>

            <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
          <Link to=''>
            <Button w='12rem' h='3rem'  marginLeft={3} bg='brand.red' _hover={{ bg: 'brand.hover.red'}}>
                <Text color='white'>
                Baixar E-book
                </Text>
            </Button>
          </Link>
          </DrawerHeader>

          <DrawerBody>
            
          </DrawerBody>

          <DrawerFooter>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>


        </Box>
    )
}