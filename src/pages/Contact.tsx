import { useRef, useState } from 'react'
import { Box, Button, Container, Heading, HStack, Icon, Input, InputGroup, InputLeftElement, Select, Stack, Text, Textarea } from "@chakra-ui/react";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { FaCoffee, FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import { AiOutlineUser } from 'react-icons/ai';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { HiOutlineMail } from 'react-icons/hi';
import { useEstados } from '../hooks/useStates';
import { useCidades } from '../hooks/useCities';

export function Contact() {

    const {estados} = useEstados()
    const [selectedState, setSelectedState] = useState('')
    const [selectedCity, setSelectedCity] = useState('')
    const {cidades, loading: loadingCidades} = useCidades({ uf: selectedState})

    const estadoRef = useRef<any>(null)
    const cidadeRef = useRef<any>(null)

    const handleStateChange = (e: any) => {
        setSelectedState(e.target.value)

    }

    const handleCityChange = (e:any) => {
        setSelectedCity(e.target.value)
    }

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


    return (
        <Box>
            <Navbar />
        <Box h='70vh' className="bg-contato">
            <Box display='flex' alignItems='center' h='70vh'>
                <Container maxW={{ md: '3xl', lg: '5xl', xl: '6xl', '2xl': '8xl'}}>
                        <Heading color='white' size='2xl'>
                        ENTRE EM
                        </Heading>
                        <Heading size='4xl' w={{sm: '100%', md: '50rem'}} color='red'>
                        CONTATO
                        </Heading>
                </Container>
            </Box>
        </Box>

        <Box paddingBlock={32}>
          <Container maxW={{ md: '3xl', lg: '5xl', xl: '6xl', '2xl': '8xl'}}>
            <Box display='flex' flexDirection={{sm: 'column', lg: 'row'}} justifyContent='space-between'>
                <Box w={{lg: '32rem', 'xl': '36rem', '2xl': '40rem'}}>
                    <Heading w='25rem' color='brand.gray' as='h2' size='2xl'>
                        No que podemos te ajudar hoje?
                    </Heading>
                    <Box display='flex' flexDirection={{sm:'column', md: 'row'}} justifyContent={{md: 'space-between'}} marginBottom={12}>
                        <Box w={{lg: '16rem', xl: '19rem'}} marginTop={10}>
                            <Heading as='span' size='lg'>
                                Localização
                            </Heading>
                            <Text marginTop={3}>
                            Rua João Pessoa, 180 - Pátria Nova
                            Novo Hamburgo/RS CEP: 93410-120
                            </Text>

                            <Heading display='block' as='span' size='lg' marginTop={5}>
                                Telefone
                            </Heading>
                            <Text>
                            (51) 98595-2070
                            </Text>
                            <Text>
                            (51) 3525-0037 | (51) 3525-2083
                            </Text>

                            <Heading display='block' as='span' size='lg' marginTop={5}>
                                Trabalhe Conosco
                            </Heading>
                            <Text>
                            Para trabalhar conosco, envie seu currículo para: rh@silveirasoares.com.br
                            </Text>
                        </Box>

                        <Box marginTop={10}>
                            <Heading as='span' size='lg'>
                                Nossos horários
                            </Heading>
                            <Text marginTop={3}>
                            Segunda a quinta
                            </Text>
                            <Text>
                            08h - 12h | 13h - 18h
                            </Text>

                            <Text marginTop={3}>
                            Sexta-feira
                            </Text>
                            <Text>
                            08h - 12h | 13h - 17h
                            </Text>
                        </Box>
                    </Box>

                    <Heading color='brand.gray' as='h2' size='lg'>
                        Acompanhe nossas redes sociais
                    </Heading>
                    <Box display='flex' gap={3} marginTop={5}>
                        <a href='https://www.facebook.com/Silveira-Soares-100286825389163' target='_blank'>
                        <Box display='flex' justifyContent='center' alignItems='center' className='black-gradient' w='40px' h='40px' borderRadius={10}>
                            <Icon as={FaFacebookF} color='#FFF' w='20px' h='20px'/>
                        </Box>
                        </a>

                        <a href='https://www.instagram.com/silveirasoarescontabilidade/' target='_blank'>
                        <Box display='flex' justifyContent='center' alignItems='center' className='black-gradient' w='40px' h='40px' borderRadius={10}>
                            <Icon as={FaInstagram} color='#FFF' w='20px' h='20px'/>
                        </Box>
                        </a>

                        <a href='https://www.linkedin.com/company/76959803/' target='_blank'>
                        <Box display='flex' justifyContent='center' alignItems='center' className='black-gradient' w='40px' h='40px' borderRadius={10}>
                            <Icon as={FaLinkedinIn} color='#FFF' w='20px' h='20px'/>
                        </Box>
                        </a>

                        <a href='https://www.youtube.com/channel/UCCG1BtoU0NB6NX1a8LpXkfw' target='_blank'>
                        <Box display='flex' justifyContent='center' alignItems='center' className='black-gradient' w='40px' h='40px' borderRadius={10}>
                            <Icon as={FaYoutube} color='#FFF' w='20px' h='20px'/>
                        </Box>
                        </a>
                    </Box>
                </Box>

                <Box marginTop={{sm: '2rem', lg: '0rem'}} display={{sm: 'flex', lg: 'block'}}>
                    <Box w={{sm: '31rem', lg: '27rem', xl: '30rem'}} className='bg-[#5D5D5D]' paddingInline={6} paddingBlock={10} borderRadius={8}>
                        <Text marginBottom={6} color='#FFF' fontSize='1.5rem'>
                            Entre em contato
                        </Text>
                        <form action="">
                        <Stack>
                        <InputGroup>
                            <InputLeftElement
                            pointerEvents='none'
                            children={<AiOutlineUser color='white' />}
                            />
                            <Input color='#FFF' type='text' placeholder='Nome completo' _focus={{ borderColor: 'brand.red', outlineColor: 'brand.red'}} _active={{ borderColor: 'brand.red', outlineColor: 'brand.red' }}/>
                        </InputGroup>
                        </Stack>
                        <HStack spacing={4} marginTop={4}>
                        <InputGroup>
                            <InputLeftElement
                            pointerEvents='none'
                            children={<BsFillTelephoneFill color='white' />}
                            />
                            <Input color='#FFF' type='tel' placeholder='Telefone' _focus={{ borderColor: 'brand.red', outlineColor: 'brand.red'}} _active={{ borderColor: 'brand.red', outlineColor: 'brand.red' }}/>
                        </InputGroup>

                        <InputGroup>
                            <InputLeftElement
                            pointerEvents='none'
                            color='white'
                            children={<HiOutlineMail />}
                            borderColor='brand.red'
                            fontSize='1.2em'
                            />
                            <Input color='#FFF' placeholder='Email' _focus={{ borderColor: 'brand.red', outlineColor: 'brand.red'}} _active={{ borderColor: 'brand.red', outlineColor: 'brand.red' }}/>
                        </InputGroup>
                        </HStack>
                        <HStack spacing={4} marginTop={4}>
                        <Select _focus={{ borderColor: 'brand.red', outlineColor: 'brand.red'}} _active={{ borderColor: 'brand.red', outlineColor: 'brand.red' }} bg='#5D5D5D' color='white' name="state" ref={estadoRef} onChange={handleStateChange} placeholder='Selecione seu estado'>
                        {estados.map(estado => 
                         <option className="text-black" value={estado.sigla}>{estado.nome}</option>
                        )}
                        </Select>
                        <Select _focus={{ borderColor: 'brand.red', outlineColor: 'brand.red'}} _active={{ borderColor: 'brand.red', outlineColor: 'brand.red' }} bg='#5D5D5D' color='white' name="city" ref={cidadeRef} onChange={handleCityChange} placeholder='Selecione sua cidade'>
                        {cidades.map(cidade => 
                        <option className="text-black" value={cidade.nome}>{cidade.nome}</option>
                        )}
                        </Select>
                        </HStack>
                        <HStack marginTop={4}>
                            <Textarea color='#FFF' _focus={{ borderColor: 'brand.red', outlineColor: 'brand.red'}} _active={{ borderColor: 'brand.red', outlineColor: 'brand.red' }} h='8rem' placeholder="Mensagem"/>
                        </HStack>
                        <Box display='flex' justifyContent='end' marginTop={4}>
                            <Button type="submit" bg='brand.red' color='white' w='6rem' fontSize='1.1rem' _hover={{ bg: 'brand.hover.red'}}>
                                Enviar
                            </Button>
                        </Box>
                        </form>
                    </Box>
                </Box>
            </Box>
          </Container>
        </Box>

        <Box h='40rem' position='relative'>
            <Button display={{sm: 'none', xs: 'flex'}} onClick={scrollToFooter} w='16rem' h='3rem' className="absolute-center" position='absolute' leftIcon={<FaCoffee size={23}/>} colorScheme='teal' variant='solid' fontSize='1.2rem' bg='brand.red' _hover={{ bg: 'brand.red' }}>
                Venha tomar um café!
            </Button>
            <iframe className="w-full h-full" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3465.835043309774!2d-51.130986484390135!3d-29.695561822098313!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x951942525f4d4775%3A0x4847f488bd473288!2sR.%20Jo%C3%A3o%20Pessoa%2C%20180%20-%20P%C3%A1tria%20Nova%2C%20Novo%20Hamburgo%20-%20RS%2C%2093410-120!5e0!3m2!1spt-BR!2sbr!4v1662663744072!5m2!1spt-BR!2sbr"></iframe>
            </Box>
        <Footer foawardRef={nameInput}/>
        </Box>
    )
}