import { useState, useEffect, useRef } from 'react'
import { Box, Button, Container, Heading, Image, Text } from "@chakra-ui/react";
import { Navbar } from "../components/Navbar";
import { Footer } from '../components/Footer';
import { FaCoffee } from 'react-icons/fa';
import { WhoSwiper } from '../components/WhoSwiper';

export function WhoWeAre() {

    const image1 = useRef<any>(null)
    const image2 = useRef<any>(null)
    const image3 = useRef<any>(null)
    const nameInput = useRef<any>(null)

    const scrollToFooter = async () => {
        scrollTo({
            top: 10000,
            behavior: 'smooth'
        })

        setTimeout(() => {
         nameInput.current.focus()
        }, 500)
        
    }


    const timer = 3000

    setInterval(() => {
        if (image1.current.classList.contains('opacity-100')) {
            image1.current.classList.remove('opacity-100')
            image1.current.classList.add('opacity-0')
            image2.current.classList.remove('opacity-0')
            image2.current.classList.add('opacity-100')
        } else if 
        
        (image2.current.classList.contains('opacity-100')) {
            image2.current.classList.remove('opacity-100')
            image2.current.classList.add('opacity-0')
            image3.current.classList.remove('opacity-0')
            image3.current.classList.add('opacity-100')
        } else if 
        
        (image3.current.classList.contains('opacity-100')) {
        image3.current.classList.remove('opacity-100')
        image3.current.classList.add('opacity-0')
        image1.current.classList.remove('opacity-0')
        image1.current.classList.add('opacity-100')
        }

    
    }, timer)

    return (
        <>
        <Navbar />
        <Box h='100vh' className="bg-quem-somos">
            <Box display='flex' alignItems='center' h='100vh'>
                <Container maxW={{ md: '3xl', lg: '5xl', xl: '6xl', '2xl': '8xl'}}>
                        <Heading color='white' size='2xl'>
                        QUEM
                        </Heading>
                        <Heading size='4xl' w={{sm: '100%', md: '50rem'}} color='red'>
                        SOMOS
                        </Heading>
                        <Text color='white' marginTop={5} fontSize='1.3rem'>
                        Nós fazemos a conta bater há mais de 20 anos
                        </Text>
                </Container>
            </Box>
        </Box>
        <Box paddingBlock={32}>
            <Container maxW={{ md: '3xl', lg: '5xl', xl: '6xl', '2xl': '8xl'}}>
                <Box display='flex' justifyContent={{lg: 'space-between'}} flexDirection={{sm:'column', lg: 'row'}}>
                    <Box w={{lg: '30rem', xl: '35rem', '2xl': '45rem'}}>
                        <Text color='brand.gray' fontSize='1.3rem' fontWeight='300'>
                        Possuímos uma carteira com mais de 1000 clientes ativos espalhados por todo o Brasil. Balizados pelo propósito de excelência e credibilidade, atuamos com consultoria e atendimento direto às empresas, oferecendo suporte de acordo com as características de cada negócio. 
                        </Text>
                        <Text color='brand.gray' fontSize='1.3rem' fontWeight='300' marginTop={5}>
                        Prestamos serviços de Escrituração Contábil; Escrita Fiscal; Departamento Pessoal; Gestão Tributária; Gestão Societária e Reengenharia Administrativa.
                        </Text>
                    </Box>

                    <Box w={{sm: '100%', lg: '30rem'}} h={{sm: '20rem', md: '25rem', lg: '17rem'}} position='relative' borderRadius={10} overflow='hidden' marginTop={{sm: '2rem', lg: '0rem'}}>
                        <Image ref={image1} className='opacity-100 h-full w-full' position='absolute' transitionDuration='300ms' src='https://uploaddeimagens.com.br/images/003/886/806/full/silveira-soares-equipe1-p-1600.jpeg?1653930298' />
                        <Image ref={image2} className='opacity-0 h-full w-full' position='absolute' transitionDuration='300ms' src='https://uploaddeimagens.com.br/images/003/886/828/full/silveira-soares-equipe2.jpg?1653931327' />
                        <Image ref={image3} className='opacity-0 h-full w-full' position='absolute' transitionDuration='300ms' src='https://uploaddeimagens.com.br/images/003/886/834/full/img_quemsomos_old2.jpg?1653931425' />
                    </Box>
                </Box>
            </Container>
        </Box>

        <WhoSwiper />

            <Box h='40rem' position='relative'>
            <Button display={{sm: 'none', xs: 'flex'}} onClick={scrollToFooter} w='16rem' h='3rem' className="absolute-center" position='absolute' leftIcon={<FaCoffee size={23}/>} colorScheme='teal' variant='solid' fontSize='1.2rem' bg='brand.red' _hover={{ bg: 'brand.red' }}>
                Venha tomar um café!
            </Button>
            <iframe className="w-full h-full" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3465.835043309774!2d-51.130986484390135!3d-29.695561822098313!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x951942525f4d4775%3A0x4847f488bd473288!2sR.%20Jo%C3%A3o%20Pessoa%2C%20180%20-%20P%C3%A1tria%20Nova%2C%20Novo%20Hamburgo%20-%20RS%2C%2093410-120!5e0!3m2!1spt-BR!2sbr!4v1662663744072!5m2!1spt-BR!2sbr"></iframe>
            </Box>
            <Footer foawardRef={nameInput}/>
        </>
    )
}