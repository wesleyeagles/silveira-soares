import { Box, Button, Container, Heading, HStack, Icon, Image, Input, InputGroup, InputLeftElement, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

import { BsCheckLg, BsFillTelephoneFill } from 'react-icons/bs'
import { HiOutlineMail } from "react-icons/hi";
import { AiOutlineUser } from "react-icons/ai";
import { WhatsappButton } from "../components/WhatsappButton";

export function Reengenharia() {
    return (
        <Box>
        <Box position='absolute' zIndex={100} bg='transparent' w='100%' h='110px'>
            <Container maxW={{ md: '3xl', lg: '5xl', xl: '6xl', '2xl': '8xl'}} h='100%'>
                <Box w='100%' h='100%' display='flex' alignItems='center'>
                    <Box className="logo" flex={1}>
                        <img className="w-[40px]" src="https://gistcdn.githack.com/wesleyeagles/ab2dfb43a59f5d3e4febbd345490962c/raw/1b142c8915d6a47ded29fab0e8bbc887dd4163df/logo_silveira.svg" alt="logo" />
                    </Box>

                    <Box>
                        <nav className="flex items-center">
                             <Link to='/'>
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

        <Box h={{sm: '150vh', lg: '100vh'}} className="bg-reengenharia">
        <Container maxW={{ md: '3xl', lg: '5xl', xl: '6xl', '2xl': '8xl'}} h='100%'> 
            <Box h={{sm: '150vh', lg: '100vh'}} display='flex' flexDirection={{sm: 'column', lg: 'row'}} justifyContent={{sm: 'center', lg: 'space-between'}} alignItems='center'>
                <Box w={{sm: '100%', lg: '43rem', xl: '60rem'}}>
                    <Heading as='h2' color='#FFF' size={{sm: 'lg', md: 'xl'}}>
                        O GUIA COMPLETO
                    </Heading>
                    <Heading as='h1' color='#FFF' size={{sm: '2xl', md: '3xl'}}>
                        DA REENGENHARIA ADMINISTRATIVA PARA
                    </Heading>
                    <Heading as='h1' color='brand.red' size={{sm: '3xl', md: '4xl'}}>
                        SUPERMERCADOS
                    </Heading>
                    <Text color='#FFF' fontSize='1.3rem' marginTop={8} w={{sm: '100%', lg:'35rem'}}>
                    Organize os <strong>processos financeiros</strong> da sua empresa e descubra onde estão seus maiores custos
                    </Text>
                </Box>

                <Box position='relative' marginTop={10}>
                    <Image w={{sm: '15rem', lg: '13rem', xl: '15rem', '2xl': '18rem'}} src='/images/smartphone.png' position='relative' zIndex={2} marginRight={{lg: 20, xl: 48, '2xl': 40}}/>
                    <Image h={{lg: '22rem', xl: '28rem', '2xl': '32rem'}} position='absolute' bottom={0} src='/images/tablet.png' zIndex={1} marginLeft={28}/>
                </Box>
            </Box>
        </Container>
        </Box>
        
        <Box paddingBlock={32} bg='black'>
        <Container maxW={{ md: '3xl', lg: '5xl', xl: '6xl', '2xl': '8xl'}} h='100%'> 
            <Heading textAlign='center' color='#FFF' w={{sm: '100%', md: '50rem'}} margin='0 auto'>
                USE ESSES <strong className="text-[#A00000]">5 PASSOS</strong> PARA REALIZAR O PLANEJAMENTO ADMINISTRATIVO DO SEU <strong className="text-[#A00000]">SUPERMERCADO</strong> DE UMA VEZ POR TODAS
            </Heading>
        </Container>
        </Box>

        <Box paddingBlock={32} bg='black'>
            <Container maxW={{ md: '3xl', lg: '5xl', xl: '6xl', '2xl': '8xl'}} h='100%'> 
                <Box display='flex' justifyContent='space-between'>
                    <Box>
                        <Image src='/images/sumary.png'/>
                    </Box>

                    <Box w='45rem'>
                        <Heading color='#FFF'>
                            O que você vai encontrar nesse guia?
                        </Heading>
                        <Box display='flex' alignItems='center' marginTop={12}>
                        <Icon w='20px' h='20px' as={BsCheckLg} color='#FFF'/>
                        <Text fontSize='1.2rem' color='#FFF' marginLeft={5}>
                            Os <strong className="text-[#A00000]">5 passos necessários</strong> para você organizar e planejar a reengenharia administrativa da sua empresa, mesmo que você não tenha os controles todos planilhados.
                        </Text>
                        </Box>

                        <Box display='flex' alignItems='center' marginTop={12}>
                        <Icon w='20px' h='20px' as={BsCheckLg} color='#FFF'/>
                        <Text fontSize='1.2rem' color='#FFF' marginLeft={5}>
                            A <strong className="text-[#A00000]">metodologia de reengenharia</strong>, um fluxo de processo organizado para você seguir.
                        </Text>
                        </Box>

                        <Box display='flex' alignItems='center' marginTop={12}>
                        <Icon w='20px' h='20px' as={BsCheckLg} color='#FFF'/>
                        <Text fontSize='1.2rem' color='#FFF' marginLeft={5}>
                            O <strong className="text-[#A00000]">formato de planejamento</strong> de processos utilizado e validado por nossos top 10 clientes.
                        </Text>
                        </Box>

                        <Box display='flex' alignItems='center' marginTop={12}>
                        <Icon w='20px' h='20px' as={BsCheckLg} color='#FFF'/>
                        <Text fontSize='1.2rem' color='#FFF' marginLeft={5}>
                            Um <strong className="text-[#A00000]">checklist</strong> para você acompanhar todo o passo a passo da reengenharia da sua empresa. 
                        </Text>
                        </Box>

                        <Box marginTop={10}>
                        <Button textTransform='uppercase' fontSize='1.5rem' color='#FFF' bg='brand.red' _hover={{ bg: 'brand.hover.red'}} paddingInline={20} paddingBlock={8}>
                            Baixar Agora!
                        </Button>
                        </Box>
                    </Box>
                </Box>
            </Container>
        </Box>

        <Box paddingBlock={32} bg='black'>
        <Container maxW={{ md: '3xl', lg: '5xl', xl: '6xl', '2xl': '8xl'}} h='100%'> 
            <Heading textAlign='center' color='#FFF' w='50rem' margin='0 auto'>
                QUEM VAI TE <strong className="text-[#A00000]">ENTREGAR</strong> ESSE GUIA
            </Heading>
        </Container>
        </Box>

        <Box paddingBlock={32} bg='black'>
            <Container maxW={{ md: '3xl', lg: '5xl', xl: '6xl', '2xl': '8xl'}} h='100%'> 
                <Box display='flex' justifyContent='space-between'>
                    <Box>
                        <Image src='/images/silveira-lp.png'/>
                        <Box marginTop={10}>
                        <Button textTransform='uppercase' fontSize='1.5rem' color='#FFF' bg='brand.red' _hover={{ bg: 'brand.hover.red'}} paddingInline={20} paddingBlock={8}>
                            Baixar Agora!
                        </Button>
                        </Box>
                    </Box>

                    <Box w='45rem'>
                        <Heading color='#FFF'>
                            Silveira Soares Gestão Tributária e Contabilidade
                        </Heading>
                        <Box display='flex' alignItems='center' marginTop={12}>
                        <Text fontSize='1.2rem' color='#FFF'>
                            Possuímos uma carteira com mais de <strong className="text-[#A00000]">1000 clientes</strong> ativos, em sua grande maioria supermercados, espalhados por todo o Brasil em mais de 17 estados.
                        </Text>
                        </Box>

                        <Box display='flex' alignItems='center' marginTop={12}>
                        <Text fontSize='1.2rem' color='#FFF'>
                            Somos uma empresa de gestão Tributária e Contábil com mais de <strong className="text-[#A00000]">20 anos de experiência e especializados em planejamento tributário</strong> para alcançar o melhor resultado para a sua empresa.
                        </Text>
                        </Box>

                        <Box display='flex' alignItems='center' marginTop={12}>
                        <Text fontSize='1.2rem' color='#FFF'>
                            Possuímos uma carteira com mais de <strong className="text-[#A00000]">1000 clientes</strong> ativos espalhados por todo o Brasil em mais de <strong className="text-[#A00000]">17 estados</strong>.
                        </Text>
                        </Box>

                        <Box display='flex' alignItems='center' marginTop={12}>
                        <Text fontSize='1.2rem' color='#FFF'>
                            Balizados pelo propósito de <strong className="text-[#A00000]">excelência e credibilidade</strong> atuamos com consultoria e atendimento direto às empresas, oferecendo suporte de acordo com as características de cada negócio.
                        </Text>
                        </Box>

                        <Box display='flex' alignItems='center' marginTop={12}>
                        <Text fontSize='1.2rem' color='#FFF'>
                        <strong className="text-[#A00000]">Somos especialistas </strong> em reengenharia administrativa e processos administrativos organizados.
                        </Text>
                        </Box>
                    </Box>
                </Box>
            </Container>
        </Box>

        <Box paddingTop={32} bg='black'>
            <Container maxW={{ md: '3xl', lg: '5xl', xl: '6xl', '2xl': '8xl'}} h='100%'> 
                <Box display='flex' justifyContent='center'>
                    <Image src='/images/mockup-form.png'/>
                </Box>
            </Container>
        </Box>

        <Box paddingBlock={12} bg='black'>
        <Container maxW={{ md: '3xl', lg: '5xl', xl: '6xl', '2xl': '8xl'}} h='100%'> 
            <Heading textAlign='center' color='#FFF' w='50rem' margin='0 auto'>
                <strong className="text-[#A00000]">CADASTRE-SE AGORA</strong> E OTIMIZE OS PROCESSOS DO SEU <strong className="text-[#A00000]">SUPERMERCADO</strong> 
            </Heading>
            <Text textAlign='center' margin='0 auto' color='#FFF' marginTop={6}>
                Informe seu nome e e-mail abaixo para garantir o <strong className="text-[#A00000]">e-book gratuito</strong>
            </Text>

            <Box marginTop={28}>
                <form action="">
                <HStack spacing={4} marginTop={4}>
                        <InputGroup>
                            <InputLeftElement
                            h='3rem'
                            pointerEvents='none'
                            children={<AiOutlineUser color='white' />}
                            />
                            <Input h='3rem' color='#FFF' type='tel' placeholder='Digite seu primeiro nome' _focus={{ borderColor: 'brand.red', outlineColor: 'brand.red'}} _active={{ borderColor: 'brand.red', outlineColor: 'brand.red' }}/>
                        </InputGroup>

                        <InputGroup>
                            <InputLeftElement
                            h='3rem'
                            pointerEvents='none'
                            color='white'
                            children={<HiOutlineMail />}
                            borderColor='brand.red'
                            fontSize='1.2em'
                            />
                            <Input h='3rem' color='#FFF' placeholder='Digite seu melhor email' _focus={{ borderColor: 'brand.red', outlineColor: 'brand.red'}} _active={{ borderColor: 'brand.red', outlineColor: 'brand.red' }}/>
                        </InputGroup>
                        <Button w='30rem' h='3rem' fontSize='1.3rem' bg='brand.red' _hover={{ bg: 'brand.hover.red'}} color='#FFF'>
                            BAIXAR AGORA!
                        </Button>
                </HStack>
                </form>
            </Box>
        </Container>
        </Box>

        <Box bg='brand.gray' w='100%' h='3rem' display='flex' justifyContent='center' alignItems='center'>
            <Text color='#FFF'>
                Copyright - 2022 - Silveira Soares Gestão Tributária e Contabilidade - Todos os direitos reservados
            </Text>
        </Box>

        <WhatsappButton />
        </Box>
    )
}