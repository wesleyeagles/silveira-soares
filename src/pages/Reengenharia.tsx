import {useRef} from 'react'

import { Box, Button, Divider, Heading, Image, Input, Menu, MenuButton, MenuItem, MenuList, Text, Textarea, VStack } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import ReactInputMask from 'react-input-mask'
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import Edificio from '../svgs/Edificio'
import Data from '../svgs/Data'
import Checklist from '../svgs/Checklist'
import Metodologia from '../svgs/Metodologia'
import ArrowLink from '../svgs/ArrowLink'
import { Helmet } from 'react-helmet';

export const Reengenharia = () => {

    const footerForm = useRef<any>(null)
    const submitFooter = useRef<any>(null)
    const firstInputFooter = useRef<any>(null)

    const headerForm = useRef<any>(null)
    const submitHeader = useRef<any>(null)
    const firstInputHeader = useRef<any>(null)

    const moveToFormFooter = () => {
        footerForm.current.scrollIntoView({
            behavior: 'smooth'
        })

        setTimeout(() => {
            firstInputFooter.current.focus()

            submitFooter.current.click()
        }, 700)
    }

    const moveToFormHeader = () => {
        headerForm.current.scrollIntoView({
            behavior: 'smooth'
        })

        firstInputHeader.current.focus()
        submitHeader.current.click()
      
    }


    return (
        <>
        <Helmet>
        {/* charset */}
        <meta charSet="utf-8" />

        {/* url */}
        <meta content="https://silveirasoares.com.br/reengenharia" property="og:url" />
        <link href="https://silveirasoares.com.br/reengenharia" rel="canonical" />

        {/* title */}
        <title>Silveira Soares | Reengenharia</title>
        <meta content="Silveira Soares - Empresa de gestão tributária e Contábil" property="og:title" />
        <meta content="Silveira Soares - Empresa de gestão tributária e Contábil" property="og:site_name" />

        {/* description */}
        <meta content="Somos uma empresa de gestão Tributária e Contábil com mais de 20 anos de experiência especializados em planejamento tributário para alcançar o melhor resultado para a sua empresa." name="description" />
        <meta content="Somos uma empresa de gestão Tributária e Contábil com mais de 20 anos de experiência especializados em planejamento tributário para alcançar o melhor resultado para a sua empresa." property="og:description" />

        {/* keyword */}
        <meta name='keywords' content='supermercados, reengenharia tributária, planejamento tributário para supermercados, reengenharia administrativa para supermercados, otimize seu supermercado, contabilidade para supermercado, contabilidade, reengenharia contabilidade' />
    
        {/* og type */} 
        <meta content="website" property="og:type" />
    
        {/* og lang */} 
        <meta content="pt_BR" property="og:locale" />
        </Helmet>
        <Box bg='#FFF' h='80px'>
            <Box maxW={{sm: '90%', md: '720px', lg: '920px', xl: '1215px'}} margin='0 auto' display='flex' h='100%' alignItems='center' justifyContent='space-between'>
                <Box>
                    <Link to='/site-novo'>
                    <Image src='/images/logo.png'/>
                    </Link>
                </Box>

                <Box display={{sm: 'none', md: 'block'}}>
                    <Button onClick={moveToFormHeader} bg='#A80000' color='#FFF' fontWeight='500' fontSize='16px' marginRight='24px' w='176px' h='42px' _hover={{color: '#A80000', bg: '#FFF', border: 'solid 1px #A80000'}}>
                        Ebook gratuito
                    </Button>

                    <Link to='/site-novo'>
                        <Button border='solid 1px #A80000' bg='#FFF' color='#A80000' fontSize='16px' w='176px' h='42px' _hover={{color: '#FFF', bg: '#A80000'}}>
                            Ir para o site
                        </Button>
                    </Link>
                </Box>

                <Box display={{sm: 'block', md: 'none'}}>
                <Menu>
                <MenuButton as={Button} bg='#A80000' color='#FFF' h='45px' w='80px' fontSize='16px'>
                    Menu
                </MenuButton>
                <MenuList>
                    <MenuItem>
                        <Button onClick={moveToFormHeader} bg='#A80000' color='#FFF' fontWeight='500' fontSize='16px' marginRight='24px' w='176px' h='42px' _hover={{color: '#A80000', bg: '#FFF', border: 'solid 1px #A80000'}}>
                            Ebook gratuito
                        </Button>
                    </MenuItem>
                    <MenuItem>
                    <Link to='/site-novo'>
                        <Button border='solid 1px #A80000' bg='#FFF' color='#A80000' fontSize='16px' w='176px' h='42px' _hover={{color: '#FFF', bg: '#A80000'}}>
                            Ir para o site
                        </Button>
                    </Link>
                    </MenuItem>
                </MenuList>
                </Menu>
                </Box>
            </Box>
        </Box>
        <Box w='100%' h={{sm: '1080px', md: '1020px', lg: '577px', '2xl': '720px'}} backgroundImage='/images/bg-reengenharia.png' backgroundSize='cover' backgroundPosition={{sm: '-400px', md: 'initial'}}>
        <Box maxW={{sm: '90%', md: '720px', lg: '920px', xl: '1215px'}} margin='0 auto' display='flex' h='100%' alignItems='center' justifyContent='space-between'>
            <Box display='flex' alignItems='center' justifyContent={{lg: 'space-between'}} flexDirection={{sm: 'column', lg: 'row'}}>
                <Box w={{xl: '40%'}}>
                    <Heading display={{sm: 'none', md: 'block'}} color='#FFF' fontWeight='400' fontSize={{sm: '36px', md: '46px'}} lineHeight='140%'>
                    Somos especialistas em planejamento tributário
                    </Heading>
                    <Heading display={{sm: 'block', md: 'none'}} color='#FFF' fontWeight='400' fontSize={{sm: '36px', md: '46px'}} lineHeight='140%'>
                    Somos especialistas em planejamento tributário para
                    </Heading>
                    <Box bg='#A80000' w={{md: '458px'}} display={{sm: 'none', md: 'flex'}} alignItems='center' position='relative' right='8px' paddingBottom='15px' marginTop='15px'>
                    <Heading color='#FFF' fontWeight='700' fontSize={{md: '46px'}} lineHeight='140%' paddingLeft='8px'>
                    para supermercados
                    </Heading>
                    </Box>
                    <Box bg='#A80000' w={{sm: '288px'}} display={{sm: 'flex', md: 'none'}} alignItems='center' position='relative' right='8px' paddingBottom='10px' marginTop='15px'>
                    <Heading color='#FFF' fontWeight='700' fontSize='36px' lineHeight='140%' paddingLeft='8px'>
                    supermercados
                    </Heading>
                    </Box>
                    <Text fontSize='16px' color='#FFF' w={{md: '420px'}} marginTop='40px'>
                        Contratar um <strong>serviço de contabilidade especializado</strong> e eficiente é fundamental para o seu negócio!
                    </Text>
                    <Text fontSize='16px' color='#FFF' marginTop='25px'  w={{md: '420px'}}>
                        <strong>Entre em contato e saiba qual a melhor solução para sua empresa.</strong>
                    </Text>
                </Box>

                <Box ref={headerForm} w={{sm: '100%', md: 'auto'}} marginTop={{sm: '60px', lg: '0px'}}>
                    <Box w={{sm: '100%', md: '500px', lg: '360px', xl: '416px'}} h={{lg: '510px', '2xl': '547px'}} bg='#FFF' borderRadius='4px' paddingTop={{sm: '20px', lg: '25px', '2xl': '40px'}} paddingBottom={{sm: '20px', lg: '0px'}} paddingInline={{sm: '15px', md: '38px'}} >
                        <Box w='100%' display='flex' justifyContent='center'>
                            <Heading fontSize='24px' color='#5E5E5E' fontWeight='600'>
                                Entrar em contato
                            </Heading>
                        </Box>
                        <form action='https://submit-form.com/H7F4adKs'>
                        <input type='hidden' name='_redirect' value='https://silveirasoares.com.br/obrigado'/>
                        <VStack spacing='16px' marginTop='19px'>
                            <Input
                            ref={firstInputHeader}
                            bg='#F3F4F5'
                            fontSize='14px'
                            fontWeight='400'
                            type='text'
                            name='Nome'
                            h='48px'
                            border='none'
                            placeholder='Nome'
                            required
                            />
                            <Input
                            bg='#F3F4F5'
                            fontSize='14px'
                            fontWeight='400'
                            type='email'
                            h='48px'
                            border='none'
                            name='E-mail'
                            placeholder='E-mail'
                            required
                            />
                            <Input
                            as={ReactInputMask}
                            mask='(99) 9 9999-9999'
                            maskChar=''
                            bg='#F3F4F5'
                            fontSize='14px'
                            fontWeight='400'
                            type='text'
                            h='48px'
                            border='none'
                            name='Telefone'
                            placeholder='Telefone'
                            required
                            />
                            <Input
                            bg='#F3F4F5'
                            fontSize='14px'
                            fontWeight='400'
                            type='text'
                            h='48px'
                            border='none'
                            name='Empresa'
                            placeholder='Empresa'
                            required
                            />
                            <Textarea
                            resize='none'
                            bg='#F3F4F5'
                            fontSize='14px'
                            fontWeight='400'
                            h='48px'
                            border='none'
                            name='Mensagem'
                            placeholder='Mensagem'
                            />
                            <Button ref={submitHeader} w='100%' h='55px' bg='#289B5F' color='#FFF' fontSize='16px' fontWeight='700' type='submit' _hover={{bg: '#165b37'}}>
                                Enviar
                            </Button>
                        </VStack>
                        </form>
                    </Box>
                </Box>
            </Box>
        </Box>
        </Box>

        <Box w='100%' maxW={{sm: '90%', md: '720px', lg: '920px', xl: '1215px'}} margin='0 auto'>
            <Box display='flex' justifyContent='center' marginTop='160px'>
            <Heading textAlign='center'>
                Veja o que nossos clientes
                <Text as='span' color='#E40000'>
                <strong> dizem sobre nós</strong>
                </Text>
            </Heading>
            </Box>

            <Box className="styled-scrollbar" marginBottom='150px' paddingBottom={{sm: '32px', md: '0px'}} w='100%' display='flex' justifyContent={{md: 'center'}} marginTop='80px' flexWrap={{md: 'wrap', xl: 'nowrap'}} overflow={{sm: 'auto', md: 'hidden'}} gap={{sm: '16px', md: '0px'}}>
                <Box flex={{sm: 'none'}} marginRight={{md: '6px', lg: '16px', xl: '16px'}} w={{sm: '280px', md: '49%', lg: '380px', xl: '280px'}} h='430px' background='linear-gradient(180deg, rgba(0, 0, 0, 0.02) 0%, rgba(0, 0, 0, 0.2) 100%)'>

                </Box>

                <Box flex={{sm: 'none'}} marginLeft={{md: '6px', lg: '16px', xl: '0px'}} marginInline={{xl: '16px'}} w={{sm: '280px', md: '49%', lg: '380px', xl: '280px'}} h='430px' background='linear-gradient(180deg, rgba(0, 0, 0, 0.02) 0%, rgba(0, 0, 0, 0.2) 100%)'>

                </Box>

                <Box flex={{sm: 'none'}} marginTop={{md: '12px', lg: '32px', xl: '0px'}} marginRight={{md: '6px', lg: '16px', xl: '16px'}} marginInline={{xl: '16px'}} w={{sm: '280px', md: '49%', lg: '380px', xl: '280px'}} h='430px' background='linear-gradient(180deg, rgba(0, 0, 0, 0.02) 0%, rgba(0, 0, 0, 0.2) 100%)'>

                </Box>

                <Box flex={{sm: 'none'}} marginTop={{md: '12px', lg: '32px', xl: '0px'}} marginLeft={{md: '6px', lg: '16px', xl: '16px'}} w={{sm: '280px', md: '49%', lg: '380px', xl: '280px'}} h='430px' background='linear-gradient(180deg, rgba(0, 0, 0, 0.02) 0%, rgba(0, 0, 0, 0.2) 100%)'>

                </Box>
            </Box>
        </Box>

        <Box bg='#141414' h={{lg: '1080px', xl: '893px'}}>
        <Box w='100%' maxW={{sm: '90%', md: '720px', lg: '920px', xl: '1215px'}} margin='0 auto'>
            <Box paddingTop='95px'>
                <Heading textAlign='center' color='#FFF' fontWeight='400' w={{lg: '800px'}} mx='auto'>
                    Conheça o <strong>guia completo</strong> da reengenharia administrativa <Text color='#E40000' as='span'> <strong>para supermercado</strong></Text>
                </Heading>
            </Box>

            <Box display={{sm: 'none', lg: 'flex' }}flexWrap='wrap' marginTop='80px' gap='31px' justifyContent={{lg: 'center', xl: 'start'}}>
                <Box paddingLeft='33px' paddingRight='128px' paddingBlock='50px' w='384px' h='235px' border='1px solid rgba(94, 94, 94, 0.4)' borderRadius='4px'>
                    <Heading as='h2' color='#FFF' fontSize='32px' fontWeight='400'>
                        O que você vai encontrar nesse guia?
                    </Heading>
                </Box>

                <Box paddingTop='32px' paddingLeft='32px' paddingRight='60px' w='384px' h='235px' border='1px solid rgba(94, 94, 94, 0.4)' borderRadius='4px'>
                    <Box w='42px' h='42px' border='1px solid rgba(255, 255, 255, 0.2)' borderRadius='100%' display='flex' justifyContent='center' alignItems='center'>
                        <Edificio />
                    </Box>
                    <Heading color='#FFF' fontSize='18px' marginTop='14px'>
                        Organização
                    </Heading>
                    <Text marginTop='8px' color='#989898' fontSize='14px' fontWeight='500'>
                        Os 5 passos necessários para você organizar e planejar a reengenharia administrativa da sua empresa
                    </Text>
                </Box>

                <Box paddingTop='32px' paddingLeft='32px' paddingRight='80px' w='384px' h='235px' border='1px solid rgba(94, 94, 94, 0.4)' borderRadius='4px'>
                    <Box w='42px' h='42px' border='1px solid rgba(255, 255, 255, 0.2)' borderRadius='100%' display='flex' justifyContent='center' alignItems='center'>
                        <Data />
                    </Box>
                    <Heading color='#FFF' fontSize='18px' marginTop='14px'>
                        Planejamento
                    </Heading>
                    <Text marginTop='8px' color='#989898' fontSize='14px' fontWeight='500'>
                        O formato de planejamento de processos utilizado e validado por nossos top 10 clientes
                    </Text>
                </Box>

                <Box paddingTop='32px' paddingLeft='32px' paddingRight='80px' w='384px' h='235px' border='1px solid rgba(94, 94, 94, 0.4)' borderRadius='4px'>
                    <Box w='42px' h='42px' border='1px solid rgba(255, 255, 255, 0.2)' borderRadius='100%' display='flex' justifyContent='center' alignItems='center'>
                        <Checklist />
                    </Box>
                    <Heading color='#FFF' fontSize='18px' marginTop='14px'>
                        Checklist
                    </Heading>
                    <Text marginTop='8px' color='#989898' fontSize='14px' fontWeight='500'>
                        Um checklist para você acompanhar todo o passo a passo da reengenharia da sua empresa.
                    </Text>
                </Box>

                <Box paddingTop='32px' paddingLeft='32px' paddingRight='80px' w='384px' h='235px' border='1px solid rgba(94, 94, 94, 0.4)' borderRadius='4px'>
                    <Box w='42px' h='42px' border='1px solid rgba(255, 255, 255, 0.2)' borderRadius='100%' display='flex' justifyContent='center' alignItems='center'>
                        <Metodologia />
                    </Box>
                    <Heading color='#FFF' fontSize='18px' marginTop='14px'>
                        Metodologia
                    </Heading>
                    <Text marginTop='8px' color='#989898' fontSize='14px' fontWeight='500'>
                        A metodologia de reengenharia, um fluxo de processo organizado para você seguir.
                    </Text>
                </Box>

                <Box onClick={moveToFormFooter} role='group' w='384px' h='235px' bg='#A80000' borderRadius='4px' cursor='pointer' display='flex' flexDirection='column' justifyContent='space-between'>
                    <Box display='flex' justifyContent='flex-end' paddingTop='15px' paddingRight='21px'>
                        <Box _groupHover={{transform: 'translateX(10px)'}} transition='600ms'>
                        <ArrowLink />
                        </Box>
                    </Box>

                    <Box paddingBottom='20px' paddingLeft='20px'>
                        <Text color='#FFF' fontWeight='400' fontSize='18px'>
                        Baixar e-book <strong>agora</strong> 
                        </Text>
                    </Box>
                </Box>
            </Box>

            <Box display={{sm: 'block', lg: 'none'}} marginTop='95px'>
            <Swiper
            breakpoints={{
                640: {
                    slidesPerView: 2
                }
            }}
            className="h-[340px]"
            centeredSlides
            centerInsufficientSlides
            grabCursor
            initialSlide={0}
            pagination={{
                clickable: true,
              }}
            modules={[Pagination]}
            slidesPerView={1}
            spaceBetween={0} 
            >
                <SwiperSlide className="lp-slide-single">
                <Box paddingTop='32px' paddingLeft='32px' paddingRight={{sm: '40px', md: '60px'}} w={{sm: '280px', md: '334px', lg: '384px'}} h='235px' border='1px solid rgba(94, 94, 94, 0.4)' borderRadius='4px'>
                    <Box w='42px' h='42px' border='1px solid rgba(255, 255, 255, 0.2)' borderRadius='100%' display='flex' justifyContent='center' alignItems='center'>
                        <Edificio />
                    </Box>
                    <Heading color='#FFF' fontSize='18px' marginTop='14px'>
                        Organização
                    </Heading>
                    <Text marginTop='8px' color='#989898' fontSize='14px' fontWeight='500'>
                        Os 5 passos necessários para você organizar e planejar a reengenharia administrativa da sua empresa
                    </Text>
                </Box>
                </SwiperSlide>
                <SwiperSlide className="lp-slide-single">
                <Box paddingTop='32px' paddingLeft='32px' paddingRight={{sm: '40px', md: '80px'}} w={{sm: '280px', md: '334px', lg: '384px'}} h='235px' border='1px solid rgba(94, 94, 94, 0.4)' borderRadius='4px'>
                    <Box w='42px' h='42px' border='1px solid rgba(255, 255, 255, 0.2)' borderRadius='100%' display='flex' justifyContent='center' alignItems='center'>
                        <Data />
                    </Box>
                    <Heading color='#FFF' fontSize='18px' marginTop='14px'>
                        Planejamento
                    </Heading>
                    <Text marginTop='8px' color='#989898' fontSize='14px' fontWeight='500'>
                        O formato de planejamento de processos utilizado e validado por nossos top 10 clientes
                    </Text>
                </Box>
                </SwiperSlide>
                <SwiperSlide className="lp-slide-single">
                <Box paddingTop='32px' paddingLeft='32px' paddingRight={{sm: '40px', md: '80px'}} w={{sm: '280px', md: '334px', lg: '384px'}} h='235px' border='1px solid rgba(94, 94, 94, 0.4)' borderRadius='4px'>
                    <Box w='42px' h='42px' border='1px solid rgba(255, 255, 255, 0.2)' borderRadius='100%' display='flex' justifyContent='center' alignItems='center'>
                        <Checklist />
                    </Box>
                    <Heading color='#FFF' fontSize='18px' marginTop='14px'>
                        Checklist
                    </Heading>
                    <Text marginTop='8px' color='#989898' fontSize='14px' fontWeight='500'>
                        Um checklist para você acompanhar todo o passo a passo da reengenharia da sua empresa.
                    </Text>
                </Box>
                </SwiperSlide>
                <SwiperSlide className="lp-slide-single">
                <Box paddingTop='32px' paddingLeft='32px' paddingRight={{sm: '40px', md: '80px'}} w={{sm: '280px', md: '334px', lg: '384px'}} h='235px' border='1px solid rgba(94, 94, 94, 0.4)' borderRadius='4px'>
                    <Box w='42px' h='42px' border='1px solid rgba(255, 255, 255, 0.2)' borderRadius='100%' display='flex' justifyContent='center' alignItems='center'>
                        <Metodologia />
                    </Box>
                    <Heading color='#FFF' fontSize='18px' marginTop='14px'>
                        Metodologia
                    </Heading>
                    <Text marginTop='8px' color='#989898' fontSize='14px' fontWeight='500'>
                        A metodologia de reengenharia, um fluxo de processo organizado para você seguir.
                    </Text>
                </Box>
                </SwiperSlide>
                <SwiperSlide className="lp-slide-single">
                <Box onClick={moveToFormFooter} role='group' w={{sm: '280px', md: '334px', lg: '384px'}} h='235px' bg='#A80000' borderRadius='4px' cursor='pointer' display='flex' flexDirection='column' justifyContent='space-between'>
                    <Box display='flex' justifyContent='flex-end' paddingTop='15px' paddingRight='21px'>
                        <Box _groupHover={{transform: 'translateX(10px)'}} transition='600ms'>
                        <ArrowLink />
                        </Box>
                    </Box>

                    <Box paddingBottom='20px' paddingLeft='20px'>
                        <Text color='#FFF' fontWeight='400' fontSize='18px'>
                        Baixar e-book <strong>agora</strong> 
                        </Text>
                    </Box>
                </Box>
                </SwiperSlide>
            </Swiper>
            </Box>
        </Box>
        </Box>

        <Box w='100%' h={{sm: '1450px', lg: '1140px'}} display='flex' alignItems='center'>
          <Box w='100%' maxW={{sm: '90%', md: '720px', lg: '920px', xl: '1215px'}} margin='0 auto'>
            <Box display='flex' flexDirection={{sm: 'column', lg: 'row'}} justifyContent={{lg: 'space-between'}}>
                <Box>
                    <Heading w={{md: '400px'}} marginBottom='58px' as='h2' color='#141414' fontSize='40px' fontWeight='400' lineHeight='140%'>
                        Quem vai <strong>te entregar</strong> esse guia?
                    </Heading>
                    <Image src='/images/silveira-soares.png'/>
                </Box>

                <Box marginTop='40px' w={{lg: '42.8%'}}>
                    <Box marginBottom='40px'>
                    <Text as='span' color='#A80000' fontSize='24px' fontWeight='600'>
                        + de 1000 clientes ativos
                    </Text>
                    <Text as='p' color='' marginTop='16px' marginBottom='40px'>
                        Possuímos uma carteira com mais de 1000 clientes ativos espalhados por todo o Brasil em mais de 17 estados.
                    </Text>
                    <Divider border='1px solid rgba(0, 0, 0, 0.1)'/>
                    </Box>

                    <Box marginBottom='40px'>
                    <Text as='span' color='#A80000' fontSize='24px' fontWeight='600'>
                        + de 20 anos de experiência
                    </Text>
                    <Text as='p' color='' marginTop='16px' marginBottom='40px'>
                        Somos uma empresa de gestão Tributária e Contábil com mais de 20 anos de experiência e especializados em planejamento tributário para alcançar o melhor resultado para a sua empresa.
                    </Text>
                    <Divider border='1px solid rgba(0, 0, 0, 0.1)'/>
                    </Box>

                    <Box marginBottom='40px'>
                    <Text as='span' color='#A80000' fontSize='24px' fontWeight='600'>
                        Excelência e credibilidade
                    </Text>
                    <Text as='p' color='' marginTop='16px' marginBottom='40px'>
                        Balizados pelo propósito de excelência e credibilidade, atuamos com consultoria e atendimento direto às empresas, oferecendo suporte de acordo com as características de cada negócio.
                    </Text>
                    <Divider border='1px solid rgba(0, 0, 0, 0.1)'/>
                    </Box>

                    <Box marginBottom='40px'>
                    <Text as='span' color='#A80000' fontSize='24px' fontWeight='600'>
                        Especialistas em planejamento tributário
                    </Text>
                    <Text as='p' color='' marginTop='16px' marginBottom='40px'>
                        Somos especialistas em reengenharia administrativa e processos administrativos organizados.
                    </Text>
                    </Box>
                </Box>
            </Box>
         </Box>
        </Box>

        <Box w='100%' h={{sm: '960px', lg: '545px'}} bg='#000' display='flex' alignItems='center'>
            <Box w='100%' maxW={{sm: '90%', md: '720px', lg: '920px', xl: '1215px'}} margin='0 auto'>
                <Box display='flex' flexDirection={{sm: 'column', lg: 'row'}} justifyContent={{lg: 'space-between'}} alignItems='center'>
                    <Box w={{lg: '42%'}}>
                        <Heading textAlign={{sm: 'center', lg: 'start'}} as='h2' color='#FFF' fontSize='40px' fontWeight='400' lineHeight='140%'>
                            Cadastre-se agora e otimize os processos do seu
                        </Heading>
                        <Box display={{sm: 'flex', lg: 'block'}} justifyContent='center'>
                        <Box marginTop='12px' bg='#A80000' w='290px' paddingLeft='10px' paddingBottom='10px' position={{lg: 'relative'}} right='8px'>
                            <Heading as='h2' color='#FFF' fontSize='40px' fontWeight='700' lineHeight='140%'>
                                supermercado
                            </Heading>
                        </Box>
                        </Box>
                        <Text as='p' color='#FFF' marginTop='40px' textAlign={{sm: 'center', lg: 'start'}}>
                            Preencha os campos ao lado para <strong>garantir seu e-book</strong>
                        </Text>
                    </Box>

                    <Box w={{sm: '100%', lg: 'auto'}} marginTop={{sm: '40px', lg: '0px'}}>
                        <Box w={{sm: '100%', md: '415px'}} h='547px' bg='#111111' paddingTop='38px' paddingInline={{sm: '16px', md: '38px'}} position={{lg: 'relative'}} bottom='90px' borderRadius='8px'>
                        <Box ref={footerForm} w='100%' display='flex' justifyContent='center'>
                            <Heading fontSize='24px' color='#FFF' fontWeight='600'>
                                Entrar em contato
                            </Heading>
                        </Box>
                        <form action='https://submit-form.com/H7F4adKs'>
                        <input type='hidden' name='_redirect' value='https://silveirasoares.com.br/obrigado'/>
                        <VStack spacing='16px' marginTop='19px'>
                            <Input
                            ref={firstInputFooter}
                            bg='#202020'
                            color='#D4D4D4'
                            fontSize='14px'
                            fontWeight='400'
                            type='text'
                            h='48px'
                            name='Nome'
                            border='none'
                            placeholder='Nome'
                            required
                            />
                            <Input
                            bg='#202020'
                            color='#D4D4D4'
                            fontSize='14px'
                            fontWeight='400'
                            type='email'
                            h='48px'
                            name='E-mail'
                            border='none'
                            placeholder='E-mail'
                            required
                            />
                            <Input
                            as={ReactInputMask}
                            mask='(99) 9 9999-9999'
                            maskChar=''
                            bg='#202020'
                            color='#D4D4D4'
                            fontSize='14px'
                            fontWeight='400'
                            type='text'
                            h='48px'
                            name='Telefone'
                            border='none'
                            placeholder='Telefone'
                            required
                            />
                            <Input
                            bg='#202020'
                            color='#D4D4D4'
                            fontSize='14px'
                            fontWeight='400'
                            type='text'
                            h='48px'
                            name='Empresa'
                            border='none'
                            placeholder='Empresa'
                            required
                            />
                            <Textarea
                            resize='none'
                            bg='#202020'
                            color='#D4D4D4'
                            fontSize='14px'
                            fontWeight='400'
                            h='48px'
                            name='Mensagem'
                            border='none'
                            placeholder='Mensagem'
                            required
                            />
                            <Button ref={submitFooter} w='100%' h='55px' bg='#A80000' color='#FFF' fontSize='16px' fontWeight='700' type='submit' _hover={{bg: '#6c0303'}}>
                                Enviar
                            </Button>
                        </VStack>
                        </form>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
        <Box bg='#111111' h='88px' display='flex' alignItems='center' justifyContent='center'>
                <Text textAlign='center' color='#8E8E8E'>
                    Copyright - 2022 - Silveira Soares Gestão Tributária e Contabilidade - Todos os direitos reservados
                </Text>
        </Box>
        </>
    )   
}

   