import { Box, Button, Container, Heading, Text } from "@chakra-ui/react";
import { Carousel } from "../components/Carousel";
import { Navbar } from "../components/Navbar";
import { Player, Video } from '@vime/react';

import { AiOutlineFileDone } from 'react-icons/ai'
import { FaCoffee } from 'react-icons/fa'
import { Link } from "react-router-dom";
import { Footer } from "../components/Footer";

export function Home() {
    return (
        <Box>
            <Navbar />
            <Carousel />
            <Container maxW='8xl'>
            <Box display='flex' justifyContent='space-between' alignItems='center' h='50rem'>
                <Box>
                    <Heading color='brand.gray' as='h2' fontFamily='inter' size='3xl' w='38rem'>
                        Queremos <Text as='span' color='brand.red'>trabalhar</Text> para você também!
                    </Heading>
                    <Text fontFamily='inter' w='32rem' marginTop={10} fontSize='1.2rem'>
                        Somos uma empresa de gestão Tributária e Contábil com mais de <strong>20 anos</strong> de experiência e especializados em planejamento tributário para alcançar o melhor resultado para a sua empresa. 
                    </Text>
                </Box>

                <Box w='40rem'>
                <Player className="w-full" controls>
                    <Video>
                        <source data-src="/videos/videohome.mp4" type="video/mp4" />
                        <track
                        default
                        kind="subtitles"
                        src="/media/subs/en.vtt"
                        srcLang="en"
                        label="English"
                        />
                        <track
                        kind="captions"
                        src="/media/caps/es.vtt"
                        srcLang="es"
                        label="Spanish"
                        />
                    </Video>
                    {/* ... */}
                    </Player>
                </Box>
            </Box>
            </Container>
            <Box className="black-gradient" h='45rem'>
                <Container maxW='8xl'>
                <Heading textAlign='center' as='h2' color='white' size='2xl' paddingTop={20}>                
                    Conheça nossos serviços
                </Heading>

                <Box w='65rem' marginInline='auto' display='flex' flexWrap='wrap' marginTop='3rem' justifyContent='center'>
                    <Box bg='white' w='19rem' h='13rem' borderRadius={10} marginInline={5} paddingBlock={5}>
                        <Box display='flex' justifyContent='center' marginBottom={3}>
                            <AiOutlineFileDone size={60} color='#A00000'/>
                        </Box>
                        <Box marginBottom={2}>
                            <Text textAlign='center' fontFamily='inter' fontSize='1.3rem'>
                                Reengenharia Administrativa
                            </Text>
                        </Box>
                        <Box display='flex' justifyContent='center'>
                            <Link to=''>
                                <Text color='brand.red' fontSize='1.2rem'>
                                Acessar
                                </Text>
                            </Link>
                        </Box>
                    </Box>

                    <Box bg='white' w='19rem' h='13rem' borderRadius={10} marginInline={5} paddingBlock={5}>
                        <Box display='flex' justifyContent='center' marginBottom={3}>
                            <AiOutlineFileDone size={60} color='#A00000'/>
                        </Box>
                        <Box marginBottom={2}>
                            <Text textAlign='center' fontFamily='inter' fontSize='1.3rem'>
                                Escrituração Contábil
                            </Text>
                        </Box>
                        <Box display='flex' justifyContent='center'>
                            <Link to=''>
                                <Text color='brand.red' fontSize='1.2rem'>
                                Acessar
                                </Text>
                            </Link>
                        </Box>
                    </Box>

                    <Box bg='white' w='19rem' h='13rem' borderRadius={10} marginInline={5} paddingBlock={5}>
                        <Box display='flex' justifyContent='center' marginBottom={3}>
                            <AiOutlineFileDone size={60} color='#A00000'/>
                        </Box>
                        <Box marginBottom={2}>
                            <Text textAlign='center' fontFamily='inter' fontSize='1.3rem'>
                                Gestão Tributária
                            </Text>
                        </Box>
                        <Box display='flex' justifyContent='center'>
                            <Link to=''>
                                <Text color='brand.red' fontSize='1.2rem'>
                                Acessar
                                </Text>
                            </Link>
                        </Box>
                    </Box>

                    <Box marginTop={5} bg='white' w='19rem' h='13rem' borderRadius={10} marginInline={5} paddingBlock={5}>
                        <Box display='flex' justifyContent='center' marginBottom={3}>
                            <AiOutlineFileDone size={60} color='#A00000'/>
                        </Box>
                        <Box marginBottom={2}>
                            <Text textAlign='center' fontFamily='inter' fontSize='1.3rem'>
                                Escrita Fiscal
                            </Text>
                        </Box>
                        <Box display='flex' justifyContent='center'>
                            <Link to=''>
                                <Text color='brand.red' fontSize='1.2rem'>
                                Acessar
                                </Text>
                            </Link>
                        </Box>
                    </Box>

                    <Box marginTop={5} bg='white' w='19rem' h='13rem' borderRadius={10} marginInline={5} paddingBlock={5}>
                        <Box display='flex' justifyContent='center' marginBottom={3}>
                            <AiOutlineFileDone size={60} color='#A00000'/>
                        </Box>
                        <Box marginBottom={2}>
                            <Text textAlign='center' fontFamily='inter' fontSize='1.3rem'>
                                Departamento Pessoal
                            </Text>
                        </Box>
                        <Box display='flex' justifyContent='center'>
                            <Link to=''>
                                <Text color='brand.red' fontSize='1.2rem'>
                                Acessar
                                </Text>
                            </Link>
                        </Box>
                    </Box>

                    <Box marginTop={5} bg='white' w='19rem' h='13rem' borderRadius={10} marginInline={5} paddingBlock={5}>
                        <Box display='flex' justifyContent='center' marginBottom={3}>
                            <AiOutlineFileDone size={60} color='#A00000'/>
                        </Box>
                        <Box marginBottom={2}>
                            <Text textAlign='center' fontFamily='inter' fontSize='1.3rem'>
                                Gestão Societária
                            </Text>
                        </Box>
                        <Box display='flex' justifyContent='center'>
                            <Link to=''>
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
            <Button w='16rem' h='3rem' className="absolute-center" position='absolute' leftIcon={<FaCoffee size={23}/>} colorScheme='teal' variant='solid' fontSize='1.2rem' bg='brand.red' _hover={{ bg: 'brand.red' }}>
                Venha tomar um café!
            </Button>
            <iframe className="w-full h-full" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3465.835043309774!2d-51.130986484390135!3d-29.695561822098313!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x951942525f4d4775%3A0x4847f488bd473288!2sR.%20Jo%C3%A3o%20Pessoa%2C%20180%20-%20P%C3%A1tria%20Nova%2C%20Novo%20Hamburgo%20-%20RS%2C%2093410-120!5e0!3m2!1spt-BR!2sbr!4v1662663744072!5m2!1spt-BR!2sbr"></iframe>
            </Box>
            <Footer />
        </Box>
    )
}