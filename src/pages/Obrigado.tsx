import { Box, Button, Container, Heading, Icon, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import { WhatsappButton } from "../components/WhatsappButton";

export function Obrigado() {
    return (
        <Box h='100vh' className="bg-obrigado">
            <Box position='absolute' zIndex={100} bg='transparent' w='100%' h='110px'>
            <Container maxW={{ md: '3xl', lg: '5xl', xl: '6xl', '2xl': '8xl'}} h='100%'>
                <Box w='100%' h='100%' display='flex' alignItems='center'>
                    <Box className="logo" flex={1}>
                        <img className="w-[40px]" src="https://gistcdn.githack.com/wesleyeagles/ab2dfb43a59f5d3e4febbd345490962c/raw/1b142c8915d6a47ded29fab0e8bbc887dd4163df/logo_silveira.svg" alt="logo" />
                    </Box>

                    <Box>
                        <nav className="flex items-center">
                             <Link to='/site-novo'>
                                <Button  marginLeft={3} bg='brand.red' _hover={{ bg: 'brand.hover.red'}}>
                                    <Text color='white'>
                                    Voltar ao site
                                    </Text>
                                </Button>
                            </Link>
                        </nav>
                    </Box>
                </Box>
            </Container>
        </Box>

        <Box h='100%' display='flex' alignItems='center'>
            <Container maxW={{ md: '3xl', lg: '5xl', xl: '6xl', '2xl': '8xl'}}>

            <Box margin='0 auto'>
            <Heading textAlign='center' color='#FFF' size='3xl'>
            Obrigado pelo interesse! 
            </Heading>
            <Text textAlign='center' color='#FFF' marginTop={6}>
            Para fazer o download do e-book, basta clicar no botão abaixo 
            </Text>
            <Box display='flex' justifyContent='center' marginTop={6}>
            <Button bg='brand.red' color='white' padding={6} fontSize='xl' _hover={{ bg: 'brand.hover.red'}}>
                ACESSAR MATERIAL
            </Button>
            </Box>
            <Heading textAlign='center' color='#FFF' marginTop={32} size='lg'>
            Acesse também nossas redes sociais!
            </Heading>
            <Box display='flex' justifyContent='center' marginTop={8}>
                <a className="mx-1" target="_blank" href="https://www.facebook.com/Silveira-Soares-100286825389163">
                    <Icon as={FaFacebookF} color='#FFF' w='2rem' h='2rem'/>
                </a>

                <a className="mx-1" target="_blank" href="https://www.instagram.com/silveirasoarescontabilidade/">
                    <Icon as={FaInstagram} color='#FFF' w='2rem' h='2rem'/>
                </a>

                <a className="mx-1" target="_blank" href="https://www.linkedin.com/company/76959803/">
                    <Icon as={FaLinkedinIn} color='#FFF' w='2rem' h='2rem'/>
                </a>

                <a className="mx-1" target="_blank" href="https://www.youtube.com/channel/UCCG1BtoU0NB6NX1a8LpXkfw">
                    <Icon as={FaYoutube} color='#FFF' w='2rem' h='2rem'/>
                </a>
            </Box>
            </Box>


            </Container>
        </Box>

       <WhatsappButton />
        </Box>
    )
}