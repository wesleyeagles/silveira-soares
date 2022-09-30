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
                            <Link to='/'>
                                <Text color='white' fontWeight={600} marginInline={3}>
                                Inicio
                                </Text>
                            </Link>

                            <Link to='/servi%C3%A7os'>
                                <Text color='white' fontWeight={600} marginInline={3}>
                                Serviços
                                </Text>
                            </Link>

                            <Link to='/quem-somos'>
                                <Text color='white' fontWeight={600} marginInline={3}>
                                Quem Somos
                                </Text>
                            </Link>

                            <Link to='/contato'>
                                <Text color='white' fontWeight={600} marginInline={3}>
                                Contato
                                </Text>
                            </Link>

                            <Link to='/reengenharia'>
                                <Button  marginLeft={3} bg='brand.red' _hover={{ bg: 'brand.hover.red'}}>
                                    <Text color='white'>
                                    Baixar E-book
                                    </Text>
                                </Button>
                            </Link>
                        </nav>
                    </Box>

                    <Box cursor='pointer' ref={btnRef} onClick={onOpen} display={{sm: 'block', md: 'none'}}>
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
        <DrawerContent bg='brand.red'>
          <DrawerCloseButton stroke='#FFF' color='#FFF'/>
          <DrawerHeader>
          <Link to='/reengenharia'>
            <Button w='12rem' h='3rem'  marginLeft={3} bg='#FFF' color='brand.gray'  _hover={{ bg: 'brand.gray', color: '#FFF'}}>
                Baixar E-book
            </Button>
          </Link>
            <Box marginLeft={3} marginTop={6}>
            <nav className="flex flex-col">
            <Link to='/'>
                <Text color='#FFF' fontWeight={600} marginBlock={3}>
                Inicio
                </Text>
            </Link>

            <Link to='/servi%C3%A7os'>
                <Text color='#FFF' fontWeight={600} marginBlock={3}>
                Serviços
                </Text>
            </Link>

            <Link to='/quem-somos'>
                <Text color='#FFF' fontWeight={600} marginBlock={3}>
                Quem Somos
                </Text>
            </Link>

            <Link to='/contato'>
                <Text color='#FFF' fontWeight={600} marginBlock={3}>
                Contato
                </Text>
            </Link>
            </nav>
            </Box>
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