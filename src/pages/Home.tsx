import { useRef } from 'react'
import { Helmet } from 'react-helmet'

import { Box, Button, Container, Heading, Icon, Text } from "@chakra-ui/react";
import { Carousel } from "../components/Carousel";
import { Navbar } from "../components/Navbar";
import {
    Player,
    Dailymotion,
    Youtube,
  } from '@vime/react';

import { AiOutlineFileDone } from 'react-icons/ai'
import { FaCoffee, FaMoneyCheck } from 'react-icons/fa'
import { RiMoneyDollarBoxLine } from 'react-icons/ri'
import { MdManageAccounts, MdAssessment } from 'react-icons/md'
import { BsPencil } from 'react-icons/bs'
import { IoIosPeople } from 'react-icons/io'
import { SiMicrostrategy } from 'react-icons/si'


import { Link } from "react-router-dom";
import { Footer } from "../components/Footer";

export function Home() {

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

    const scrollTo1 = () => {
        setTimeout(() => {
            window.location.hash = "reengenharia"
        }, 300)
        
    }

    const scrollTo2 = () => {
        setTimeout(() => {
            window.location.hash = "reengenharia"
        }, 300)
        
    }

    const scrollTo3 = () => {
        setTimeout(() => {
            window.location.hash = "reengenharia"
        }, 300)
        
    }

    const scrollTo4 = () => {
        setTimeout(() => {
            window.location.hash = "reengenharia"
        }, 300)
        
    }

    const scrollTo5 = () => {
        setTimeout(() => {
            window.location.hash = "reengenharia"
        }, 300)
        
    }

    const scrollTo6 = () => {
        setTimeout(() => {
            window.location.hash = "reengenharia"
        }, 300)
        
    }

    const scrollTo7 = () => {
        setTimeout(() => {
            window.location.hash = "reengenharia"
        }, 300)
        
    }

    const scrollTo8 = () => {
        setTimeout(() => {
            window.location.hash = "reengenharia"
        }, 300)
        
    }


    return (
        <Box>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Silveira Soares</title>
            </Helmet>
            <Navbar />
            <Carousel />
            <Container maxW={{ md: '3xl', lg: '5xl', xl: '6xl', '2xl': '8xl'}}>
            <Box display='flex' flexDirection={{ sm: 'column', lg: 'row'}} justifyContent={{ sm: 'center', lg: 'space-between'}}  paddingBlock={44}>
                <Box>
                    <Heading color='brand.gray' as='h2' size='3xl' w={{ lg: '28rem', xl: '38rem', '2xl': '38rem'}}>
                        Queremos <Text as='span' color='brand.red'>trabalhar</Text> para voc?? tamb??m!
                    </Heading>
                    <Text w={{ lg: '25rem', xl: '32rem', '2xl': '32rem'}} marginTop={10} fontSize='1.2rem'>
                        Somos uma empresa de gest??o Tribut??ria e Cont??bil com mais de <strong>20 anos</strong> de experi??ncia e especializados em planejamento tribut??rio para alcan??ar o melhor resultado para a sua empresa. 
                    </Text>
                </Box>

                <Box w={{ sm: '100%', lg: '45rem', xl: '40rem', '2xl': '40rem'}} marginTop={{ sm: '4rem', lg: '0rem'}} borderRadius={6} overflow='hidden'>
                <Player controls>
                <Youtube videoId="vXZG3JQZHi4" />
                {/* ... */}
                </Player>
                </Box>
            </Box>
            </Container>
            <Box className="black-gradient" paddingBlock={24}>
                <Container maxW={{ md: '3xl', lg: '5xl', xl: '6xl', '2xl': '8xl'}}>
                <Heading textAlign='center' as='h2' color='white' size='2xl'>                
                    Conhe??a nossos servi??os
                </Heading>

                <Box w={{md: '40rem', lg: '100%'}} marginInline='auto' display='flex' flexWrap='wrap' marginTop={{sm: '3rem'}} justifyContent='center'>

                    <Box bg='white' w={{sm: '11rem', md: '17rem'}} h='13rem' borderRadius={10} marginInline={{sm: 3, md: 5}} paddingBlock={5} marginTop={{ sm: '1.25rem', md: '0rem' }}>
                        <Box display='flex' justifyContent='center' marginBottom={3} h={{sm:50, md:65}}>
                            <Icon as={AiOutlineFileDone} color='#A00000' w={{ sm: 50, md: 70}} h={{ sm: 50, md: 70}}/>
                        </Box>
                        <Box marginBottom={2} h='4rem' w='10rem' marginInline='auto'>
                            <Text textAlign='center' fontSize='1.3rem'>
                                Reengenharia Administrativa
                            </Text>
                        </Box>
                        <Box display='flex' justifyContent='center'>
                            <Link onClick={scrollTo1} to='/servi%C3%A7os'>
                                <Text color='brand.red' fontSize='1.2rem'>
                                Acessar
                                </Text>
                            </Link>
                        </Box>
                    </Box>

                    <Box bg='white' w={{sm: '11rem', md: '17rem'}} h='13rem' borderRadius={10} marginInline={{sm: 3, md: 5}} paddingBlock={5} marginTop={{ sm: '1.25rem', md: '0rem' }}>
                        <Box display='flex' justifyContent='center' marginBottom={3} h={{sm:50, md:65}}>
                            <Icon as={RiMoneyDollarBoxLine} color='#A00000' w={{ sm: 50, md: 70}} h={{ sm: 50, md: 70}}/>
                        </Box>
                        <Box marginBottom={2} h='4rem' w='10rem' marginInline='auto'>
                            <Text textAlign='center' fontSize='1.3rem'>
                                Escritura????o Cont??bil
                            </Text>
                        </Box>
                        <Box display='flex' justifyContent='center'>
                            <Link  onClick={scrollTo2} to='/servi%C3%A7os'>
                                <Text color='brand.red' fontSize='1.2rem'>
                                Acessar
                                </Text>
                            </Link>
                        </Box>
                    </Box>

                    <Box bg='white' w={{sm: '11rem', md: '17rem'}} h='13rem' borderRadius={10} marginInline={{sm: 3, md: 5}} paddingBlock={5} marginTop={{ sm: '1.25rem', lg: '0rem'}}>
                        <Box display='flex' justifyContent='center' marginBottom={3} h={{sm:50, md:65}}>
                            <Icon as={MdManageAccounts} color='#A00000' w={{ sm: 50, md: 70}} h={{ sm: 50, md: 70}}/>
                        </Box>
                        <Box marginBottom={2} h='4rem' w='10rem' marginInline='auto'>
                            <Text textAlign='center' fontSize='1.3rem'>
                                Gest??o Tribut??ria
                            </Text>
                        </Box>
                        <Box display='flex' justifyContent='center'>
                            <Link  onClick={scrollTo3} to='/servi%C3%A7os'>
                                <Text color='brand.red' fontSize='1.2rem'>
                                Acessar
                                </Text>
                            </Link>
                        </Box>
                    </Box>

                    <Box marginTop={{sm: '1.25rem', '2xl': '0rem'}} bg='white' w={{sm: '11rem', md: '17rem'}} h='13rem' borderRadius={10} marginInline={{sm: 3, md: 5}} paddingBlock={5}>
                        <Box display='flex' justifyContent='center' marginBottom={3} h={{sm:50, md:65}}>
                            <Icon as={BsPencil} color='#A00000' w={{ sm: 45, md: 55}} h={{ sm: 45, md: 55}}/>
                        </Box>
                        <Box marginBottom={2} h='4rem' w='10rem' marginInline='auto'>
                            <Text textAlign='center' fontSize='1.3rem'>
                                Escrita Fiscal
                            </Text>
                        </Box>
                        <Box display='flex' justifyContent='center'>
                            <Link  onClick={scrollTo4} to='/servi%C3%A7os'>
                                <Text color='brand.red' fontSize='1.2rem'>
                                Acessar
                                </Text>
                            </Link>
                        </Box>
                    </Box>

                    <Box marginTop={5} bg='white' w={{sm: '11rem', md: '17rem'}} h='13rem' borderRadius={10} marginInline={{sm: 3, md: 5}} paddingBlock={5}>
                        <Box display='flex' justifyContent='center' marginBottom={3} h={{sm:50, md:65}}>
                            <Icon as={MdAssessment} color='#A00000' w={{ sm: 45, md: 70}} h={{ sm: 45, md: 70}}/>
                        </Box>
                        <Box marginBottom={2} h='4rem' w='10rem' marginInline='auto'>
                            <Text textAlign='center' fontSize='1.3rem'>
                                Departamento Pessoal
                            </Text>
                        </Box>
                        <Box display='flex' justifyContent='center'>
                            <Link  onClick={scrollTo5} to='/servi%C3%A7os'>
                                <Text color='brand.red' fontSize='1.2rem'>
                                Acessar
                                </Text>
                            </Link>
                        </Box>
                    </Box>

                    <Box marginTop={5} bg='white' w={{sm: '11rem', md: '17rem'}} h='13rem' borderRadius={10} marginInline={{sm: 3, md: 5}} paddingBlock={5}>
                        <Box display='flex' justifyContent='center' marginBottom={3} h={{sm:50, md:65}}>
                            <Icon as={IoIosPeople}  color='#A00000' w={{ sm: 45, md: 70}} h={{ sm: 45, md: 70}}/>
                        </Box>
                        <Box marginBottom={2} h='4rem' w='10rem' marginInline='auto'>
                            <Text textAlign='center' fontSize='1.3rem'>
                                Gest??o Societ??ria
                            </Text>
                        </Box>
                        <Box display='flex' justifyContent='center'>
                            <Link  onClick={scrollTo6} to='/servi%C3%A7os'>
                                <Text color='brand.red' fontSize='1.2rem'>
                                Acessar
                                </Text>
                            </Link>
                        </Box>
                    </Box>
                    
                    <Box marginTop={5} bg='white' w={{sm: '11rem', md: '17rem'}} h='13rem' borderRadius={10} marginInline={{sm: 3, md: 5}} paddingBlock={5}>
                        <Box display='flex' justifyContent='center' marginBottom={3} h={{sm:50, md:65}}>
                            <Icon as={FaMoneyCheck} color='#A00000' w={{ sm: 45, md: 70}} h={{ sm: 45, md: 70}}/>
                        </Box>
                        <Box marginBottom={2} h='4rem' w='10rem' marginInline='auto'>
                            <Text textAlign='center' fontSize='1.3rem'>
                                Contabilidade
                            </Text>
                        </Box>
                        <Box display='flex' justifyContent='center'>
                            <Link  onClick={scrollTo7} to='/servi%C3%A7os'>
                                <Text color='brand.red' fontSize='1.2rem'>
                                Acessar
                                </Text>
                            </Link>
                        </Box>
                    </Box>

                    <Box marginTop={5} bg='white' w={{sm: '11rem', md: '17rem'}} h='13rem' borderRadius={10} marginInline={{sm: 3, md: 5}} paddingBlock={5}>
                        <Box display='flex' justifyContent='center' marginBottom={3} h={{sm:50, md:65}}>
                            <Icon as={SiMicrostrategy} color='#A00000' w={{ sm: 45, md: 70}} h={{ sm: 45, md: 70}}/>
                        </Box>
                        <Box marginBottom={2} h='4rem' w='10rem' marginInline='auto'>
                            <Text textAlign='center' fontSize='1.3rem'>
                                Planejamento Estrat??gico
                            </Text>
                        </Box>
                        <Box display='flex' justifyContent='center'>
                            <Link  onClick={scrollTo8} to='/servi%C3%A7os'>
                                <Text color='brand.red' fontSize='1.2rem'>
                                Acessar
                                </Text>
                            </Link>
                        </Box>
                    </Box>
                </Box>
                </Container>
            </Box>

            <Box h='40rem' position='relative'>
            <Button display={{sm: 'none', xs: 'flex'}} onClick={scrollToFooter} w='16rem' h='3rem' className="absolute-center" position='absolute' leftIcon={<FaCoffee size={23}/>} colorScheme='teal' variant='solid' fontSize='1.2rem' bg='brand.red' _hover={{ bg: 'brand.red' }}>
                Venha tomar um caf??!
            </Button>
            <iframe className="w-full h-full" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3465.835043309774!2d-51.130986484390135!3d-29.695561822098313!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x951942525f4d4775%3A0x4847f488bd473288!2sR.%20Jo%C3%A3o%20Pessoa%2C%20180%20-%20P%C3%A1tria%20Nova%2C%20Novo%20Hamburgo%20-%20RS%2C%2093410-120!5e0!3m2!1spt-BR!2sbr!4v1662663744072!5m2!1spt-BR!2sbr"></iframe>
            </Box>
            <Footer foawardRef={nameInput}/>
        </Box>
    )
}