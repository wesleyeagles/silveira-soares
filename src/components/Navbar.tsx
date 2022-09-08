import { Box, Button, Container, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export function Navbar() {
    return (
        <Box position='absolute' zIndex={100} bg='transparent' w='100%' h='110px'>
            <Container maxW='8xl' h='100%'>
                <Box w='100%' h='100%' display='flex' alignItems='center'>
                    <Box className="logo" flex={1}>
                        <img className="w-[40px]" src="https://gistcdn.githack.com/wesleyeagles/ab2dfb43a59f5d3e4febbd345490962c/raw/1b142c8915d6a47ded29fab0e8bbc887dd4163df/logo_silveira.svg" alt="logo" />
                    </Box>

                    <Box>
                        <nav className="flex items-center">
                            <Link to=''>
                                <Text fontFamily='inter' color='white' fontWeight={600} marginInline={3}>
                                Inicio
                                </Text>
                            </Link>

                            <Link to=''>
                                <Text fontFamily='inter' color='white' fontWeight={600} marginInline={3}>
                                Serviços
                                </Text>
                            </Link>

                            <Link to=''>
                                <Text fontFamily='inter' color='white' fontWeight={600} marginInline={3}>
                                Quem Somos
                                </Text>
                            </Link>

                            <Link to=''>
                                <Text fontFamily='inter' color='white' fontWeight={600} marginInline={3}>
                                Contato
                                </Text>
                            </Link>

                            <Link to=''>
                                <Button  marginLeft={3} bg='brand.red' _hover={{ bg: 'brand.red'}}>
                                    <Text fontFamily='inter' color='white'>
                                    Baixar E-book
                                    </Text>
                                </Button>
                            </Link>
                        </nav>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}