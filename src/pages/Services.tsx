import { useRef } from 'react'
import { Box, Button, Container, Heading, Icon, Image, ListItem, Text, UnorderedList } from "@chakra-ui/react";
import { FaCoffee } from 'react-icons/fa'
import { AiTwotoneContainer } from 'react-icons/ai'
import { Navbar } from "../components/Navbar";

import { BsArrowDownShort } from 'react-icons/bs'
import { Link } from "react-router-dom";
import { Footer } from "../components/Footer";
import { BackToTop } from '../components/BackToTop';

export function Services() {

    const nameInput = useRef<any>(null)

    const filter = useRef<any>(null)
    const reengenhariaHash = useRef<any>(null)
    const escrituracaoHash = useRef<any>(null)
    const gestaotributariaHash = useRef<any>(null)
    const escritafiscalHash = useRef<any>(null)
    const departamentopessoalHash = useRef<any>(null)
    const gestaosocietariaHash = useRef<any>(null)
    const contabilidadeHash = useRef<any>(null)
    const planejamentoestrategicoHash = useRef<any>(null)

    const scrollToFilter = () => {
        filter.current.scrollIntoView(scrollOptions)
    }

    const scrollOptions = {
        behavior: "smooth",
        block: "start",
        inline: "nearest"
    }

    const scrollToFooter = async () => {
        scrollTo({
            top: 10000,
            behavior: 'smooth'
        })

        setTimeout(() => {
         nameInput.current.focus()
        }, 500)
        
    }

    const scrollToHash = (e: any) => {
        console.log(e.target.textContent)
        if (e.target.textContent === 'Reengenharia Administrativa') {
            reengenhariaHash.current.scrollIntoView(scrollOptions)
        } else if (e.target.textContent === 'Escrituração Contábil') {
            escrituracaoHash.current.scrollIntoView(scrollOptions)
        } else if (e.target.textContent === 'Gestão Tributária') {
            gestaotributariaHash.current.scrollIntoView(scrollOptions)
        } else if (e.target.textContent === 'Escrita Fiscal') {
            escritafiscalHash.current.scrollIntoView(scrollOptions)
        } else if (e.target.textContent === 'Departamento Pessoal') {
            departamentopessoalHash.current.scrollIntoView(scrollOptions)
        } else if (e.target.textContent === 'Gestão Societária') {
            gestaosocietariaHash.current.scrollIntoView(scrollOptions)
        } else if (e.target.textContent === 'Contabilidade') {
            contabilidadeHash.current.scrollIntoView(scrollOptions)
        } else if (e.target.textContent === 'Planejamento Estratégico') {
            planejamentoestrategicoHash.current.scrollIntoView(scrollOptions)
        }

    }


    return (
        <Box>
            <Navbar />
            <Box h='100vh' className="bg-servicos">
            <Box display='flex' alignItems='center' h='100vh'>
                <Container maxW={{ md: '3xl', lg: '5xl', xl: '6xl', '2xl': '8xl'}}>
                        <Heading color='white' size='2xl'>
                        NOSSOS
                        </Heading>
                        <Heading size='4xl' w={{sm: '100%', md: '50rem'}} color='red'>
                        SERVIÇOS
                        </Heading>
                        <Text color='white' marginTop={5} fontSize='1.3rem'>
                        A conta não bate? Nós fazemos para você!
                        </Text>
                </Container>
            </Box>
            </Box>

            <Box paddingBlock={20}>
                <Container maxW={{ md: '3xl', lg: '5xl', xl: '6xl', '2xl': '8xl'}}>
                    <Box display='flex' flexDirection={{sm: 'column-reverse', lg: 'row'}} justifyContent='space-between'>
                        <Box w={{sm: '100%', lg:'70rem'}}>
                            <Box display='flex' flexWrap={{sm: 'wrap', lg: 'nowrap'}} flexDirection={{sm: 'row', lg:'column'}} marginTop={{sm: '2rem', lg: '0rem'}}>
                                <Box marginRight={{xs: '.5rem', lg: '0rem'}} ref={filter} onClick={scrollToHash} display='flex' alignItems='center' w={{sm: '100%', xs: '22.5rem', lg:'23rem'}} bg='brand.red' padding={2} cursor='pointer' marginBlock={1} borderRadius={6}>
                                    <Text flex={1} color='white' fontSize='1.1rem' paddingLeft={3}>
                                        Reengenharia Administrativa
                                    </Text>
                                    <Icon pointerEvents='none' as={BsArrowDownShort} w={30} h={30} color='white'/>
                                </Box>

                                <Box marginLeft={{xs: '.5rem', lg: '0rem'}} onClick={scrollToHash} display='flex' alignItems='center' w={{sm: '100%', xs: '22.5rem', lg:'23rem'}} bg='brand.red' padding={2} cursor='pointer' marginBlock={1} borderRadius={6}>
                                    <Text flex={1} color='white' fontSize='1.1rem' paddingLeft={3}>
                                        Escrituração Contábil
                                    </Text>
                                    <Icon pointerEvents='none' as={BsArrowDownShort} w={30} h={30} color='white'/>
                                </Box>

                                <Box marginRight={{xs: '.5rem', lg: '0rem'}} onClick={scrollToHash} display='flex' alignItems='center' w={{sm: '100%', xs: '22.5rem', lg:'23rem'}} bg='brand.red' padding={2} cursor='pointer' marginBlock={1} borderRadius={6}>
                                    <Text flex={1} color='white' fontSize='1.1rem' paddingLeft={3}>
                                        Gestão Tributária
                                    </Text>
                                    <Icon pointerEvents='none' as={BsArrowDownShort} w={30} h={30} color='white'/>
                                </Box>

                                <Box marginLeft={{xs: '.5rem', lg: '0rem'}} onClick={scrollToHash} display='flex' alignItems='center' w={{sm: '100%', xs: '22.5rem', lg:'23rem'}} bg='brand.red' padding={2} cursor='pointer' marginBlock={1} borderRadius={6}>
                                    <Text flex={1} color='white' fontSize='1.1rem' paddingLeft={3}>
                                        Escrita Fiscal
                                    </Text>
                                    <Icon pointerEvents='none' as={BsArrowDownShort} w={30} h={30} color='white'/>
                                </Box>

                                <Box marginRight={{xs: '.5rem', lg: '0rem'}} onClick={scrollToHash} display='flex' alignItems='center' w={{sm: '100%', xs: '22.5rem', lg:'23rem'}} bg='brand.red' padding={2} cursor='pointer' marginBlock={1} borderRadius={6}>
                                    <Text flex={1} color='white' fontSize='1.1rem' paddingLeft={3}>
                                        Departamento Pessoal
                                    </Text>
                                    <Icon pointerEvents='none' as={BsArrowDownShort} w={30} h={30} color='white'/>
                                </Box>

                                <Box marginLeft={{xs: '.5rem', lg: '0rem'}} onClick={scrollToHash} display='flex' alignItems='center' w={{sm: '100%', xs: '22.5rem', lg:'23rem'}} bg='brand.red' padding={2} cursor='pointer' marginBlock={1} borderRadius={6}>
                                    <Text flex={1} color='white' fontSize='1.1rem' paddingLeft={3}>
                                        Gestão Societária
                                    </Text>
                                    <Icon pointerEvents='none' as={BsArrowDownShort} w={30} h={30} color='white'/>
                                </Box>

                                <Box marginRight={{xs: '.5rem', lg: '0rem'}} onClick={scrollToHash} display='flex' alignItems='center' w={{sm: '100%', xs: '22.5rem', lg:'23rem'}} bg='brand.red' padding={2} cursor='pointer' marginBlock={1} borderRadius={6}>
                                    <Text flex={1} color='white' fontSize='1.1rem' paddingLeft={3}>
                                        Contabilidade
                                    </Text>
                                    <Icon pointerEvents='none' as={BsArrowDownShort} w={30} h={30} color='white'/>
                                </Box>

                                <Box marginLeft={{xs: '.5rem', lg: '0rem'}} onClick={scrollToHash} display='flex' alignItems='center' w={{sm: '100%', xs: '22.5rem', lg:'23rem'}} bg='brand.red' padding={2} cursor='pointer' marginBlock={1} borderRadius={6}>
                                    <Text flex={1} color='white' fontSize='1.1rem' paddingLeft={3}>
                                        Planejamento Estratégico
                                    </Text>
                                    <Icon pointerEvents='none' as={BsArrowDownShort} w={30} h={30} color='white'/>
                                </Box>
                            </Box>
                        </Box>

                        <Box w={{sm: '100%', lg:'75rem'}}>
                            <Text color='brand.gray' fontSize='1.3rem' fontWeight='300'>
                            Especializada em gestão tributária, fiscal e contábil, a Silveira Soares é uma empresa referência em planejamento tributário com ênfase na elisão fiscal contemplando as operações do mercado nacional e internacional. 
                            Além disso, trabalhamos com plena segurança fiscal e jurídica com foco na excelência na prestação de serviços.
                            </Text>
                            <Text color='brand.gray' fontSize='1.3rem' fontWeight='300' marginTop={5}>
                            Com estudos e análises, emitimos parecer técnico bem como exemplificação e prática nos processos contábeis e fiscais através dos resultados operacionais obtidos. 
                            </Text>
                        </Box>
                    </Box>
                </Container>  
            </Box>

            <Box>
                <Container maxW={{ md: '3xl', lg: '5xl', xl: '6xl', '2xl': '8xl'}}>
                    <Box>
                        <Heading className='scroll-mt-10' ref={reengenhariaHash} size='2xl' marginBottom={12}>
                            Reengenharia Administrativa
                        </Heading>

                        <Text fontSize='1.3rem' fontWeight='300' color='brand.gray' marginTop={5}>
                        Reengenharia administrativa visa reformular as atividades da sua empresa para torná-la mais competitiva no mercado.
                        </Text>
                        <Text marginTop={3} fontSize='1.3rem' fontWeight='300' color='brand.gray'>
                        Repensamos e organizamos serviços e setores importantes da sua empresa, tais como o serviço prestado ao cliente, a matriz financeira, os custos e a rentabilidade, o desenvolvimento de novos produtos, a cultura organizacional, entre outros.
                        </Text>

                        <Box marginTop={5}>
                        <Link to=''>
                        <Button bg='brand.red' color='white' padding={6} fontSize='xl' _hover={{ bg: 'brand.hover.red'}}>
                            QUER SABER MAIS!?
                        </Button>
                        </Link>
                        </Box>
                    </Box>
                </Container>
            </Box>

            <Box className="black-gradient" marginTop={16} paddingBlock={20}>
                <Container maxW={{ md: '3xl', lg: '5xl', xl: '6xl', '2xl': '8xl'}}>
                    <Box>
                        <Heading className='scroll-mt-10' ref={escrituracaoHash} color='white' size='2xl' marginBottom={12}>
                            Escrituração Contábil
                        </Heading>

                        <Text fontSize='1.3rem' fontWeight='300' color='white' marginTop={5}>
                        A Escrituração contábil representa o conjunto de lançamentos contábeis. Trata-se do registro cronológico e específico da origem de todos os fatos que aconteceram na empresa para que seja possível controlar o seu patrimônio.
                        </Text>
                        <Text marginTop={3} fontSize='1.3rem' fontWeight='300' color='white'>
                        Desde quando uma empresa é fundada, todas as suas atividades precisam ser registradas e catalogadas — seja de forma manual, em um livro registro, ou digital, por meio de um software.
                        </Text>
                        <Text marginTop={3} fontSize='1.3rem' fontWeight='300' color='white'>
                        Além de ser um documento exigido por lei, a Escrituração Contábil precisa ser encarada com seriedade e preenchida da maneira certa, afinal, a partir dela outros relatórios contábeis essenciais podem ser emitidos, como:
                        </Text>

                        <Box marginTop={3}>
                        <UnorderedList>
                        <ListItem color='white' fontWeight='300' fontSize='1.3rem'>Balanço Patrimonial;</ListItem>
                        <ListItem color='white' fontWeight='300' fontSize='1.3rem'>Balancetes;</ListItem>
                        <ListItem color='white' fontWeight='300' fontSize='1.3rem'>Demonstração de Resultados;</ListItem>
                        <ListItem color='white' fontWeight='300' fontSize='1.3rem'>Fluxo de Caixa e muitos outros.</ListItem>
                        </UnorderedList>
                        </Box>

                        <Text marginTop={3} fontSize='1.3rem' fontWeight='300' color='white'>
                        Outro motivo para desenvolver a Escrituração corretamente é a fiscalização da Receita Federal, que, ao identificar irregularidades, pode aplicar multas e penalizações à empresa.
                        </Text>
                        <Text marginTop={3} fontSize='1.3rem' fontWeight='300' color='white'>
                        Realizamos a Escrituração Contábil da sua empresa conforme as regras do Conselho Federal de Contabilidade e a Legislação.
                        </Text>


                    </Box>
                </Container>
            </Box>

            <Box paddingBlock={20}>
                <Container maxW={{ md: '3xl', lg: '5xl', xl: '6xl', '2xl': '8xl'}}>
                    <Box>
                        <Heading className='scroll-mt-10' ref={gestaotributariaHash} size='2xl' marginBottom={12}>
                            Gestão Tributária
                        </Heading>

                        <Text fontSize='1.3rem' fontWeight='300' color='brand.gray' marginTop={5}>
                        A Gestão Tributária é o processo de gerenciamento que envolve tudo o que se refere a tributos, tendo como objetivo a redução de riscos ao negócio, com a interpretação exata das leis e o acompanhamento dos impostos pagos, e até mesmo, a redução da carga tributária, visando um maior controle das operações com relação a aspectos tributários.
                        </Text>
                        <Text marginTop={3} fontSize='1.3rem' fontWeight='300' color='brand.gray'>
                        Os impostos, taxas e contribuições são peças fundamentais na composição do preço de seu produto ou serviço e podem ser fundamentais na hora de trazer competitividade para a sua empresa.
                        </Text>
                        <Text marginTop={3} fontSize='1.3rem' fontWeight='300' color='brand.gray'>
                        Além disso, uma boa gestão tributária diminui os riscos de irregularidades com os órgãos fiscais, trazendo maior segurança na quitação de suas obrigações.
                        </Text>
                        <Text marginTop={3} fontSize='1.3rem' fontWeight='300' color='brand.gray'>
                        Conduzimos uma rotina de gestão tributária dentro da empresa, independente do porte ou segmento em que ela atua. Garantimos que todas as particularidades de sua atividade, cidade, estado e regime tributário serão levados em consideração.
                        </Text>
                        <Text marginTop={3} fontSize='1.3rem' fontWeight='300' color='brand.gray'>
                        Realizamos a manutenção e ajustamos a operação de acordo com as atualizações da legislação, além de avaliarmos periodicamente o crescimento do negócio e suas demandas atuais.
                        </Text>

                    </Box>
                </Container>
            </Box>

            <Box className="black-gradient" marginTop={16} paddingTop={20} position='relative'>
                <Container maxW={{ md: '3xl', lg: '5xl', xl: '6xl', '2xl': '8xl'}}>
                    <Box>
                        <Box display='flex' alignItems='center' marginBottom={6}>
                        <Icon as={AiTwotoneContainer} color='white' w={38} h={38}/>
                        <Heading className='scroll-mt-10' ref={escritafiscalHash} color='white' size='2xl'>
                            Escrita Fiscal
                        </Heading>
                        </Box>

                        <Box display='flex' justifyContent='space-between'>
                        <Box w={{lg: '60rem'}}>
                        <Text fontSize='1.3rem' fontWeight='300' color='white' marginTop={5}>
                        A escrita fiscal serve para comprovar as operações e receitas de compra e venda de mercadorias e de serviços prestados ou tomados. Todo negócio, independentemente do seu porte ou ramo de atuação, precisa realizar a escrita fiscal.
                        </Text>
                        <Text marginTop={3} fontSize='1.3rem' fontWeight='300' color='white'>
                        A escrituração fiscal é um serviço de prestação de contas sobre as movimentações financeiras e tributárias que a maioria das empresas precisa ter com o Fisco. Isso inclui o seu faturamento, os impostos e outras informações que são do interesse do Estado.
                        </Text>
                        </Box>
                        <Box>
                            <Image src='/images/escrita-fiscal.png'/>
                        </Box>
                        </Box>
                        <Text marginTop={3} fontSize='1.3rem' fontWeight='300' color='white'>
                        Através dela que várias análises são realizadas pelo governo, cruzando dados de compra e venda, fornecedores, clientes, estoques, produção, cartão de crédito, importação e exportação, inventário, dentre outros.
                        </Text>
                        <Text marginTop={3} fontSize='1.3rem' fontWeight='300' color='white'>
                        A regularidade das informações é crucial para que a empresa não sofra multas, em casos de fiscalização.
                        </Text>
                        <Text marginTop={3} fontSize='1.3rem' fontWeight='300' color='white'>
                        Atualmente, a escrituração é conhecida como EFD (Escrituração Fiscal Digital), devido à sua atualização. O apuramento das informações é realizado no meio virtual por um sistema chamado de SPED (Sistema Público de Escrituração Digital).
                        </Text>
                        <Text marginTop={3} fontSize='1.3rem' fontWeight='300' color='white'>
                        Realizamos a escrituração fiscal de entradas e saídas, serviços prestados e tomados, conhecimentos de transportes, livro de movimentação de combustíveis, entre outros.
                        </Text>

                        
                    </Box>
                </Container>
                <Box  marginTop={10}>
                    <Image src='/images/escrita-fiscal-banner.jpg'/>
                </Box>
            </Box>

            <Box paddingBlock={20}>
                <Container maxW={{ md: '3xl', lg: '5xl', xl: '6xl', '2xl': '8xl'}}>
                    <Box>
                        <Heading className='scroll-mt-10' ref={departamentopessoalHash} size='2xl' marginBottom={12}>
                            Departamento Pessoal
                        </Heading>

                        <Text fontSize='1.3rem' fontWeight='300' color='brand.gray' marginTop={5}>
                        O Departamento Pessoal é uma área técnica especializada na gestão dos funcionários de uma empresa. São atribuições do Departamento Pessoal gerenciar a folha de pagamento, admissões e demissões, eSocial, férias, benefícios, atestados e afastamentos, registro de ponto e passivos trabalhistas.
                        </Text>
                        <Text marginTop={3} fontSize='1.3rem' fontWeight='300' color='brand.gray'>
                        O principal objetivo do Departamento Pessoal é cumprir a legislação e as normas trabalhistas que estão em vigor.
                        </Text>
                        <Text marginTop={3} fontSize='1.3rem' fontWeight='300' color='brand.gray'>
                        Ou seja, o setor está encarregado principalmente das questões burocráticas e trabalhistas relacionadas aos colaboradores, garantindo a correta emissão e gerenciamento de documentos. Dessa forma, há mais agilidade e eficiência no controle desses fatores. Além disso, é um serviço fundamental para o cumprimento das normas trabalhistas.
                        </Text>
                        <Text marginTop={3} fontSize='1.3rem' fontWeight='300' color='brand.gray'>
                        Nós gerenciamos a parte técnica do seu quadro de pessoal desde a admissão, passando pelo correto controle de remunerações, assiduidade, pontualidade, até a demissão. Além disso, emitimos relatórios que permitem ao RH explorar índices de rotatividade (turnover) e absenteísmo.
                        </Text>

                    </Box>
                </Container>
            </Box>


            <Box className="black-gradient" marginTop={16} paddingBlock={20}>
                <Container maxW={{ md: '3xl', lg: '5xl', xl: '6xl', '2xl': '8xl'}}>
                    <Box>
                        <Heading className='scroll-mt-10' ref={gestaosocietariaHash} color='white' size='2xl' marginBottom={12}>
                            Gestão Societária
                        </Heading>

                        <Text fontSize='1.3rem' fontWeight='300' color='white' marginTop={5}>
                        A Gestão Societária é um serviço realizado para orientar os clientes nas questões empresariais, realizando tarefas ou indicando a melhor solução para os problemas que possam surgir. Assim, você garante o atendimento às exigências dos órgãos municipais, estaduais e federais.
                        </Text>
                        <Text marginTop={3} fontSize='1.3rem' fontWeight='300' color='white'>
                        No serviço de Gestão Societária prestada por nós, realizamos:
                        </Text>
                        <Text marginTop={3} fontSize='1.3rem' fontWeight='300' color='white'>
                        Através dela que várias análises são realizadas pelo governo, cruzando dados de compra e venda, fornecedores, clientes, estoques, produção, cartão de crédito, importação e exportação, inventário, dentre outros.
                        </Text>
                        <Text marginTop={3} fontSize='1.3rem' fontWeight='300' color='white'>
                        A regularidade das informações é crucial para que a empresa não sofra multas, em casos de fiscalização.
                        </Text>
                        <Text marginTop={3} fontSize='1.3rem' fontWeight='300' color='white'>
                        Atualmente, a escrituração é conhecida como EFD (Escrituração Fiscal Digital), devido à sua atualização. O apuramento das informações é realizado no meio virtual por um sistema chamado de SPED (Sistema Público de Escrituração Digital).
                        </Text>
                        <Text marginTop={3} fontSize='1.3rem' fontWeight='300' color='white'>
                        Realizamos a escrituração fiscal de entradas e saídas, serviços prestados e tomados, conhecimentos de transportes, livro de movimentação de combustíveis, entre outros.
                        </Text>

                        <Box marginTop={3}>
                        <UnorderedList>
                        <ListItem color='white' fontWeight='300' fontSize='1.3rem'>Consultoria completa na elaboração do planejamento antes de iniciar sua empresa;</ListItem>
                        <ListItem color='white' fontWeight='300' fontSize='1.3rem'>Orientação sobre a melhor forma de legalização do seu negócio;</ListItem>
                        <ListItem color='white' fontWeight='300' fontSize='1.3rem'>Instruções personalizadas para ajudar a gerenciar seu negócio de maneira adequada;</ListItem>
                        <ListItem color='white' fontWeight='300' fontSize='1.3rem'>Realização de alterações contratuais e atendimento às órgãos públicos;</ListItem>
                        <ListItem color='white' fontWeight='300' fontSize='1.3rem'>Solicitação de Certidões de Tributos Federais, Estaduais e Municipais, da Dívida Ativa da União, da Justiça Federal, Forenses e Certidões junto aos Cartórios;</ListItem>
                        <ListItem color='white' fontWeight='300' fontSize='1.3rem'>Levantamento Fiscal e Societário, realizando o diagnóstico de irregularidades e pendências junto aos órgãos Públicos, Junta Comercial, Cartório de Registro, entre outros.</ListItem>
                        <ListItem color='white' fontWeight='300' fontSize='1.3rem'>Procedimentos de abertura e encerramento mais adequado para o seu caso.</ListItem>
                        </UnorderedList>
                        </Box>


                    </Box>
                </Container>
            </Box>

            <Box paddingBlock={20}>
                <Container maxW={{ md: '3xl', lg: '5xl', xl: '6xl', '2xl': '8xl'}}>
                    <Box>
                        <Heading className='scroll-mt-10' ref={contabilidadeHash} size='2xl' marginBottom={12}>
                            Contabilidade
                        </Heading>

                        <Text fontSize='1.3rem' fontWeight='300' color='brand.gray' marginTop={5}>
                        A contabilidade é a fonte das informações para que o empreendedor tenha crescimento de forma segura, em conformidade com as leis e com ampla visão sobre seu negócio, já que inclui aspectos fiscais, tributários, previdenciários, legais e trabalhistas.
                        </Text>
                        <Text marginTop={3} fontSize='1.3rem' fontWeight='300' color='brand.gray'>
                        Além disso, a contabilidade é um importante alicerce do processo de gestão empresarial, já que fornece dados importantes para tomadas de decisões, definindo assim, diversos rumos que a empresa deverá seguir.
                        </Text>
                        <Text marginTop={3} fontSize='1.3rem' fontWeight='300' color='brand.gray'>
                        Com a Silveira Soares, sua empresa terá assessoria completa de profissionais atualizados com a legislação vigente, permitindo um alinhamento completo do seu negócio com as leis contábeis do país.
                        </Text>
                    </Box>
                </Container>
            </Box>

            <Box className="black-gradient" marginTop={16} paddingBlock={20}>
                <Container maxW={{ md: '3xl', lg: '5xl', xl: '6xl', '2xl': '8xl'}}>
                    <Box>
                        <Heading className='scroll-mt-10' ref={planejamentoestrategicoHash} color='white' size='2xl' marginBottom={12}>
                            Planejamento Estratégico
                        </Heading>

                        <Text fontSize='1.3rem' fontWeight='300' color='white' marginTop={5}>
                        Assim como a Gestão Tributária, o Planejamento Estratégico pode ser elaborado através das informações obtidas pela contabilidade.
                        </Text>
                        <Text marginTop={3} fontSize='1.3rem' fontWeight='300' color='white'>
                        Com o Planejamento Estratégico, é possível entender as necessidades da empresa para obter destaque no no mercado, assim como identificar cenários lucrativos para o negócio, garantindo sustentabilidade financeira e a otimização de resultados. 
                        </Text>
                        <Text marginTop={3} fontSize='1.3rem' fontWeight='300' color='white'>
                        Com a elaboração do Planejamento Estratégico realizado pela Silveira Soares é possível obter: 
                        </Text>

                        <Box marginTop={3}>
                        <UnorderedList>
                        <ListItem color='white' fontWeight='300' fontSize='1.3rem'>Análises detalhadas sobre riscos ao negócio;</ListItem>
                        <ListItem color='white' fontWeight='300' fontSize='1.3rem'>Redução de custos;</ListItem>
                        <ListItem color='white' fontWeight='300' fontSize='1.3rem'>Retomada de controles.</ListItem>
                        </UnorderedList>
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
            <BackToTop scrollToTopFunction={scrollToFilter}/>
        </Box>
    )
}