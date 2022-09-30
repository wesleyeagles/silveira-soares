import { useRef, useState } from 'react'
import { Box, Button, Container, FormLabel, Heading, Icon, Image, ListItem, Radio, RadioGroup, Tab, TabList, TabPanel, TabPanels, Tabs, Text, UnorderedList, useRadio } from "@chakra-ui/react";
import { FaCoffee } from 'react-icons/fa'
import { Navbar } from "../components/Navbar";


import { Footer } from "../components/Footer";
import { BackToTop } from '../components/BackToTop';

import Shield from '../svgs/Shield'
import Lapis from '../svgs/Lapis'
import Dolar from '../svgs/Dolar'
import Escrita from '../svgs/Escrita'
import User from '../svgs/User'
import Users from '../svgs/Users'
import Contabilidade from '../svgs/Contabilidade'
import Planejamento from '../svgs/Planejamento'

import { Link } from 'react-router-dom';

export function Services() {


    const nameInput = useRef<any>(null)

    const filter = useRef<any>(null)

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


    return (
        <Box>
            <Navbar />
            <Box h='100vh' className="bg-servicos">
            <Box display='flex' alignItems='center' h='100vh'>
                <Container maxW={{ md: '3xl', lg: '5xl', xl: '6xl', '2xl': '8xl'}}>
                        <Heading color='white' size='2xl'>
                        NOSSOS
                        </Heading>
                        <Heading size='4xl' w={{sm: '100%', lg: '50rem'}} color='red'>
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

                    <Box marginTop='60px' id='reengenharia'>
                        <Box>
                        <Tabs variant='unstyled' display='flex' flexDirection={{sm: 'column', lg: 'row'}} justifyContent='space-between'>
                            <TabList flexDirection={{lg: 'column'}} flexWrap={{sm: 'wrap', lg: 'nowrap'}} gap={{sm: '6px', xl: '2px'}}>
                                <Tab fontSize={{sm: '14px', lg: '18px', xl: '20px'}} fontWeight='400' justifyContent='start' textAlign='start' color='#C53030' h={{sm: '55px', lg: '50px', xl: '60px'}} w={{sm: '49%', lg: '290px', xl: '385px'}} borderRadius='5px' marginTop='20px' border='2px solid #C53030' _selected={{ color: 'white', bg: '#C53030' }}>Reengenharia Administrativa</Tab>
                                <Tab fontSize={{sm: '14px', lg: '18px', xl: '20px'}} fontWeight='400' justifyContent='start' textAlign='start' color='#C53030' h={{sm: '55px', lg: '50px', xl: '60px'}} w={{sm: '49%', lg: '290px', xl: '385px'}} borderRadius='5px' marginTop='20px' border='2px solid #C53030' _selected={{ color: 'white', bg: '#C53030' }}>Escrituração Contábil</Tab>
                                <Tab fontSize={{sm: '14px', lg: '18px', xl: '20px'}} fontWeight='400' justifyContent='start' textAlign='start' color='#C53030' h={{sm: '55px', lg: '50px', xl: '60px'}} w={{sm: '49%', lg: '290px', xl: '385px'}} borderRadius='5px' marginTop={{lg: '20px'}} border='2px solid #C53030' _selected={{ color: 'white', bg: '#C53030' }}>Gestão Tributária</Tab>
                                <Tab fontSize={{sm: '14px', lg: '18px', xl: '20px'}} fontWeight='400' justifyContent='start' textAlign='start' color='#C53030' h={{sm: '55px', lg: '50px', xl: '60px'}} w={{sm: '49%', lg: '290px', xl: '385px'}} borderRadius='5px' marginTop={{lg: '20px'}} border='2px solid #C53030' _selected={{ color: 'white', bg: '#C53030' }}>Escrita Fiscal</Tab>
                                <Tab fontSize={{sm: '14px', lg: '18px', xl: '20px'}} fontWeight='400' justifyContent='start' textAlign='start' color='#C53030' h={{sm: '55px', lg: '50px', xl: '60px'}} w={{sm: '49%', lg: '290px', xl: '385px'}} borderRadius='5px' marginTop={{lg: '20px'}} border='2px solid #C53030' _selected={{ color: 'white', bg: '#C53030' }}>Departamento Pessoal</Tab>
                                <Tab fontSize={{sm: '14px', lg: '18px', xl: '20px'}} fontWeight='400' justifyContent='start' textAlign='start' color='#C53030' h={{sm: '55px', lg: '50px', xl: '60px'}} w={{sm: '49%', lg: '290px', xl: '385px'}} borderRadius='5px' marginTop={{lg: '20px'}} border='2px solid #C53030' _selected={{ color: 'white', bg: '#C53030' }}>Gestão Societária</Tab>
                                <Tab fontSize={{sm: '14px', lg: '18px', xl: '20px'}} fontWeight='400' justifyContent='start' textAlign='start' color='#C53030' h={{sm: '55px', lg: '50px', xl: '60px'}} w={{sm: '49%', lg: '290px', xl: '385px'}} borderRadius='5px' marginTop={{lg: '20px'}} border='2px solid #C53030' _selected={{ color: 'white', bg: '#C53030' }}>Contabilidade</Tab>
                                <Tab fontSize={{sm: '14px', lg: '18px', xl: '20px'}} fontWeight='400' justifyContent='start' textAlign='start' color='#C53030' h={{sm: '55px', lg: '50px', xl: '60px'}} w={{sm: '49%', lg: '290px', xl: '385px'}} borderRadius='5px' marginTop={{lg: '20px'}} border='2px solid #C53030' _selected={{ color: 'white', bg: '#C53030' }}>Planejamento Estratégico</Tab>
                            </TabList>

                            <TabPanels className='black-gradient styled-scrollbar' border='solid black 1px' marginLeft={{lg: 33}} display='block' h={{sm: '360px', lg: '540px', xl: '632px'}} marginTop='16px' borderRadius='12px' paddingTop='5px' paddingLeft={{lg: '12px', xl: '33px'}} paddingRight={{lg: '12px', xl: '60px'}} overflow='auto'>
                                <TabPanel className='styled-scrollbar'>
                                <Box display='flex' alignItems='center'>
                                    <Box>
                                    <Shield />
                                    </Box>
                                    <Heading as='h2' color='#FFF' fontSize={{sm: '25px', lg:'32px', xl: '40px'}} fontWeight='400' marginLeft='10px'>
                                        Reengenharia Administrativa
                                    </Heading>
                                </Box>
                                <Text fontWeight='500' color='#FFF' marginTop='15px'>
                                    Reengenharia administrativa visa reformular as atividades da sua empresa para torná-la mais competitiva no mercado.
                                </Text>
                                <Text fontWeight='500' color='#FFF' marginBlock='26px'>
                                Repensamos e organizamos serviços e setores importantes da sua empresa, tais como o serviço prestado ao cliente, a matriz financeira, os custos e a rentabilidade, o desenvolvimento de novos produtos, a cultura organizacional, entre outros
                                </Text>
                                <Link to='/reengenharia'>
                                    <Text fontWeight='500' w='260px' h='35px' border='1px solid #FFF' display='flex' color='#FFF' justifyContent='center' alignItems='center' borderRadius='5px' _hover={{bg: '#FFF', color: '#C53030'}} transition='300ms'>
                                        Saiba mais sobre o serviço
                                    </Text>
                                </Link>
                                </TabPanel>
                                <TabPanel>
                                <Box display='flex' alignItems='center'>
                                    <Box>
                                    <Lapis />
                                    </Box>
                                    <Heading as='h2' color='#FFF' fontSize={{sm: '25px', lg:'32px', xl: '40px'}} fontWeight='400' marginLeft='10px'>
                                        Escrituração Contábil
                                    </Heading>
                                </Box>
                                <Text fontWeight='500' color='#FFF' marginTop='15px'>
                                A Escrituração contábil representa o conjunto de lançamentos contábeis. Trata-se do registro cronológico e específico da origem de todos os fatos que aconteceram na empresa para que seja possível controlar o seu patrimônio.
                                </Text>
                                <Text fontWeight='500' color='#FFF' marginBlock='26px'>
                                Desde quando uma empresa é fundada, todas as suas atividades precisam ser registradas e catalogadas — seja de forma manual, em um livro registro, ou digital, por meio de um software.
                                </Text>
                                <Text fontWeight='500' color='#FFF' marginBlock='26px'>
                                Além de ser um documento exigido por lei, a Escrituração Contábil precisa ser encarada com seriedade e preenchida da maneira certa, afinal, a partir dela outros relatórios contábeis essenciais podem ser emitidos, como:
                                </Text>
                                <UnorderedList spacing='2px' color='#FFF'>
                                    <ListItem>
                                        <Text>
                                            Balanço Patrimonial;
                                        </Text>
                                    </ListItem>
                                    <ListItem>
                                        <Text>
                                            Balancetes;
                                        </Text>
                                    </ListItem>
                                    <ListItem>
                                        <Text>
                                            Demonstração de Resultados;
                                        </Text>
                                    </ListItem>
                                    <ListItem>
                                        <Text>
                                            Fluxo de Caixa e muitos outros;
                                        </Text>
                                    </ListItem>
                                    <ListItem>
                                        <Text>
                                            Outro motivo para desenvolver a Escrituração corretamente é a fiscalização da Receita Federal, que, ao identificar irregularidades, pode aplicar multas e penalizações à empresa.
                                        </Text>
                                    </ListItem>
                                </UnorderedList>
                                <Text fontWeight='500' color='#FFF' marginBlock='26px'>
                                Realizamos a Escrituração Contábil da sua empresa conforme as regras do Conselho Federal de Contabilidade e a Legislação.
                                </Text>
                                </TabPanel>
                                <TabPanel>
                                <Box display='flex' alignItems='center'>
                                    <Box>
                                    <Dolar />
                                    </Box>
                                    <Heading as='h2' color='#FFF' fontSize={{sm: '25px', lg:'32px', xl: '40px'}} fontWeight='400' marginLeft='10px'>
                                        Gestão tributária
                                    </Heading>
                                </Box>
                                <Text fontWeight='500' color='#FFF' marginTop='15px'>
                                A Gestão Tributária é o processo de gerenciamento que envolve tudo o que se refere a tributos, tendo como objetivo a redução de riscos ao negócio, com a interpretação exata das leis e o acompanhamento dos impostos pagos, e até mesmo, a redução da carga tributária, visando um maior controle das operações com relação a aspectos tributários.
                                </Text>
                                <Text fontWeight='500' color='#FFF' marginBlock='26px'>
                                Os impostos, taxas e contribuições são peças fundamentais na composição do preço de seu produto ou serviço e podem ser fundamentais na hora de trazer competitividade para a sua empresa.
                                </Text>
                                <Text fontWeight='500' color='#FFF' marginBlock='26px'>
                                Além disso, uma boa gestão tributária diminui os riscos de irregularidades com os órgãos fiscais, trazendo maior segurança na quitação de suas obrigações.
                                </Text>
                                <Text fontWeight='500' color='#FFF' marginBlock='26px'>
                                Conduzimos uma rotina de gestão tributária dentro da empresa, independente do porte ou segmento em que ela atua. Garantimos que todas as particularidades de sua atividade, cidade, estado e regime tributário serão levados em consideração.
                                </Text>
                                <Text fontWeight='500' color='#FFF' marginBlock='26px'>                          
                                Realizamos a manutenção e ajustamos a operação de acordo com as atualizações da legislação, além de avaliarmos periodicamente o crescimento do negócio e suas demandas atuais.
                                </Text>
                                </TabPanel>
                                <TabPanel>
                                <Box display='flex' alignItems='center'>
                                    <Escrita />
                                    <Heading as='h2' color='#FFF' fontSize={{sm: '25px', lg:'32px', xl: '40px'}} fontWeight='400' marginLeft='10px'>
                                        Escrita fiscal
                                    </Heading>
                                </Box>
                                <Text fontWeight='500' color='#FFF' marginTop='15px'>
                                A escrita fiscal serve para comprovar as operações e receitas de compra e venda de mercadorias e de serviços prestados ou tomados. Todo negócio, independentemente do seu porte ou ramo de atuação, precisa realizar a escrita fiscal.
                                </Text>
                                <Text fontWeight='500' color='#FFF' marginBlock='26px'>
                                A escrituração fiscal é um serviço de prestação de contas sobre as movimentações financeiras e tributárias que a maioria das empresas precisa ter com o Fisco. Isso inclui o seu faturamento, os impostos e outras informações que são do interesse do Estado.
                                </Text>
                                <Text fontWeight='500' color='#FFF' marginBlock='26px'>
                                Através dela que várias análises são realizadas pelo governo, cruzando dados de compra e venda, fornecedores, clientes, estoques, produção, cartão de crédito, importação e exportação, inventário, dentre outros.
                                </Text>
                                <Text fontWeight='500' color='#FFF' marginBlock='26px'>
                                A regularidade das informações é crucial para que a empresa não sofra multas, em casos de fiscalização.
                                </Text>
                                <Text fontWeight='500' color='#FFF' marginBlock='26px'>                          
                                Atualmente, a escrituração é conhecida como EFD (Escrituração Fiscal Digital), devido à sua atualização. O apuramento das informações é realizado no meio virtual por um sistema chamado de SPED (Sistema Público de Escrituração Digital).
                                </Text>
                                <Text fontWeight='500' color='#FFF' marginBlock='26px'>                          
                                Realizamos a escrituração fiscal de entradas e saídas, serviços prestados e tomados, conhecimentos de transportes, livro de movimentação de combustíveis, entre outros.
                                </Text>
                                </TabPanel>
                                <TabPanel>
                                <Box display='flex' alignItems='center'>
                                    <Box>
                                    <User />
                                    </Box>
                                    <Heading as='h2' color='#FFF' fontSize={{sm: '25px', lg:'32px', xl: '40px'}} fontWeight='400' marginLeft='10px'>
                                        Departamento pessoal
                                    </Heading>
                                </Box>
                                <Text fontWeight='500' color='#FFF' marginTop='15px'>
                                O Departamento Pessoal é uma área técnica especializada na gestão dos funcionários de uma empresa. São atribuições do Departamento Pessoal gerenciar a folha de pagamento, admissões e demissões, eSocial, férias, benefícios, atestados e afastamentos, registro de ponto e passivos trabalhistas.
                                </Text>
                                <Text fontWeight='500' color='#FFF' marginBlock='26px'>
                                O principal objetivo do Departamento Pessoal é cumprir a legislação e as normas trabalhistas que estão em vigor.
                                </Text>
                                <Text fontWeight='500' color='#FFF' marginBlock='26px'>
                                Ou seja, o setor está encarregado principalmente das questões burocráticas e trabalhistas relacionadas aos colaboradores, garantindo a correta emissão e gerenciamento de documentos. Dessa forma, há mais agilidade e eficiência no controle desses fatores. Além disso, é um serviço fundamental para o cumprimento das normas trabalhistas.
                                </Text>
                                <Text fontWeight='500' color='#FFF' marginBlock='26px'>
                                Nós gerenciamos a parte técnica do seu quadro de pessoal desde a admissão, passando pelo correto controle de remunerações, assiduidade, pontualidade, até a demissão. Além disso, emitimos relatórios que permitem ao RH explorar índices de rotatividade (turnover) e absenteísmo.
                                </Text>
                                </TabPanel>
                                <TabPanel>
                                <Box display='flex' alignItems='center'>
                                    <Box>
                                    <Users />
                                    </Box>
                                    <Heading as='h2' color='#FFF' fontSize={{sm: '25px', lg:'32px', xl: '40px'}} fontWeight='400' marginLeft='10px'>
                                        Gestão societária
                                    </Heading>
                                </Box>
                                <Text fontWeight='500' color='#FFF' marginTop='15px'>
                                A Gestão Societária é um serviço realizado para orientar os clientes nas questões empresariais, realizando tarefas ou indicando a melhor solução para os problemas que possam surgir. Assim, você garante o atendimento às exigências dos órgãos municipais, estaduais e federais.
                                </Text>
                                <Text fontWeight='500' color='#FFF' marginBlock='26px'>
                                No serviço de Gestão Societária prestada por nós, realizamos:
                                </Text>
                                <Text fontWeight='500' color='#FFF' marginBlock='26px'>
                                Através dela que várias análises são realizadas pelo governo, cruzando dados de compra e venda, fornecedores, clientes, estoques, produção, cartão de crédito, importação e exportação, inventário, dentre outros.
                                </Text>
                                <Text fontWeight='500' color='#FFF' marginBlock='26px'>
                                Realizamos a escrituração fiscal de entradas e saídas, serviços prestados e tomados, conhecimentos de transportes, livro de movimentação de combustíveis, entre outros.
                                </Text>
                                <UnorderedList spacing='2px' color='#FFF'>
                                    <ListItem>
                                        <Text>
                                            Consultoria completa na elaboração do planejamento antes de iniciar sua empresa;
                                        </Text>
                                    </ListItem>
                                    <ListItem>
                                        <Text>
                                            Orientação sobre a melhor forma de legalização do seu negócio;
                                        </Text>
                                    </ListItem>
                                    <ListItem>
                                        <Text>
                                            Instruções personalizadas para ajudar a gerenciar seu negócio de maneira adequada;
                                        </Text>
                                    </ListItem>
                                    <ListItem>
                                        <Text>
                                            Realização de alterações contratuais e atendimento às órgãos públicos;
                                        </Text>
                                    </ListItem>
                                    <ListItem>
                                        <Text>
                                            Solicitação de Certidões de Tributos Federais, Estaduais e Municipais, da Dívida Ativa da União, da Justiça Federal, Forenses e Certidões junto aos Cartórios;
                                        </Text>
                                    </ListItem>
                                    <ListItem>
                                        <Text>
                                            Levantamento Fiscal e Societário, realizando o diagnóstico de irregularidades e pendências junto aos órgãos Públicos, Junta Comercial, Cartório de Registro, entre outros;
                                        </Text>
                                    </ListItem>
                                    <ListItem>
                                        <Text>
                                            Procedimentos de abertura e encerramento mais adequado para o seu caso.
                                        </Text>
                                    </ListItem>
                                </UnorderedList>
                                </TabPanel>
                                <TabPanel>
                                <Box display='flex' alignItems='center'>
                                    <Box>
                                    <Contabilidade/>
                                    </Box>
                                    <Heading as='h2' color='#FFF' fontSize={{sm: '25px', lg:'32px', xl: '40px'}} fontWeight='400' marginLeft='10px'>
                                        Contabilidade
                                    </Heading>
                                </Box>
                                <Text fontWeight='500' color='#FFF' marginTop='15px'>
                                A contabilidade é a fonte das informações para que o empreendedor tenha crescimento de forma segura, em conformidade com as leis e com ampla visão sobre seu negócio, já que inclui aspectos fiscais, tributários, previdenciários, legais e trabalhistas.
                                </Text>
                                <Text fontWeight='500' color='#FFF' marginBlock='26px'>
                                Além disso, a contabilidade é um importante alicerce do processo de gestão empresarial, já que fornece dados importantes para tomadas de decisões, definindo assim, diversos rumos que a empresa deverá seguir.
                                </Text>
                                <Text fontWeight='500' color='#FFF' marginBlock='26px'>
                                Com a Silveira Soares, sua empresa terá assessoria completa de profissionais atualizados com a legislação vigente, permitindo um alinhamento completo do seu negócio com as leis contábeis do país.
                                </Text>
                                </TabPanel>
                                <TabPanel>
                                <Box display='flex' alignItems='center'>
                                    <Box>
                                    <Planejamento />
                                    </Box>
                                    <Heading as='h2' color='#FFF' fontSize={{sm: '25px', lg:'32px', xl: '40px'}} fontWeight='400' marginLeft='10px'>
                                        Planejamento estratégico
                                    </Heading>
                                </Box>
                                <Text fontWeight='500' color='#FFF' marginTop='15px'>
                                Assim como a Gestão Tributária, o Planejamento Estratégico pode ser elaborado através das informações obtidas pela contabilidade.
                                </Text>
                                <Text fontWeight='500' color='#FFF' marginBlock='26px'>
                                Com o Planejamento Estratégico, é possível entender as necessidades da empresa para obter destaque no no mercado, assim como identificar cenários lucrativos para o negócio, garantindo sustentabilidade financeira e a otimização de resultados.
                                </Text>
                                <Text fontWeight='500' color='#FFF' marginBlock='26px'>
                                Com a elaboração do Planejamento Estratégico realizado pela Silveira Soares é possível obter:
                                </Text>
                                <UnorderedList spacing='2px' color='#FFF'>
                                    <ListItem>
                                        <Text>
                                            Análises detalhadas sobre riscos ao negócio;
                                        </Text>
                                    </ListItem>
                                    <ListItem>
                                        <Text>
                                            Redução de custos;
                                        </Text>
                                    </ListItem>
                                    <ListItem>
                                        <Text>
                                            Instruções personalizadas para ajudar a gerenciar seu negócio de maneira adequada;
                                        </Text>
                                    </ListItem>
                                    <ListItem>
                                        <Text>
                                            Retomada de controles.
                                        </Text>
                                    </ListItem>
                                </UnorderedList>
                                </TabPanel>
                            </TabPanels>
                        </Tabs>
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