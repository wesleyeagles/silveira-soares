import { Box, Container, Heading, Image, Text } from "@chakra-ui/react";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

export function WhoSwiper() {
    return (
        <Box className="bg-slide py-16">
            <Container maxW={{ md: '3xl', lg: '5xl', xl: '6xl', '2xl': '8xl'}}>
            <Swiper
            className="h-[740px]"
            centeredSlides
            grabCursor
            initialSlide={0}
            pagination={{
                clickable: true,
              }}
            modules={[Pagination]}
            slidesPerView='auto'
            spaceBetween={80}
            
            >
                <SwiperSlide className="whoSlide-single">
                    <Image w='80px' h='80px' borderRadius={100} src='/images/foto-lisandro.png'/>
                    <Box display='flex' flexDirection='column' gap={2}>
                    <Heading as='span' size='md' color='#A00000'>Lisandro Silveira Soares</Heading>
                    <Text color='#FFF'>CEO</Text>
                    </Box>
                    <Box display='flex' flexDirection='column' gap={4}>
                    <Text color='#FFF'>
                    Fundador da Silveira Soares, Lisandro é contabilista e gestor financeiro. Mestre em Gestão e Ética, pós-graduado em Gestão de Tributos e Planejamento Tributário (especialização pela PUC/RS) e Gestão Fiscal e Tributária (pela Confeb - São Paulo, certificado pela Accreditation Service for International Schools, Colleges and Universities). É especialista na área alimentar e varejista com amplos conhecimentos em Planejamento Tributário Financeiro.
                    </Text>
                    <Text color='#FFF'>
                    Desde que fundou o escritório, em 1999, se especializou no atendimento personalizado e construiu, junto com sua sócia e irmã, uma carteira de clientes que reúne empresas de médio e grande porte em mais de 17 estados do país.
                    </Text>
                    <Text color='#FFF'>
                    Em 2011, também publicou — juntamente com os professores: o economista Maurício Salvia e o advogado tributarista Fernando Steinbruch — o livro “Pilotando Sua Empresa na Velocidade dos Campeões”. 
                    </Text>
                    </Box>
                </SwiperSlide>

                <SwiperSlide className="whoSlide-single">
                <Image w='80px' h='80px' borderRadius={100} src='/images/foto-cristiane.png'/>
                    <Box display='flex' flexDirection='column' gap={2}>
                    <Heading as='span' size='md' color='#A00000'>Cristiane Silveira Soares</Heading>
                    <Text color='#FFF'>CEO</Text>
                    </Box>
                    <Box display='flex' flexDirection='column' gap={4}>
                    <Text color='#FFF'>
                    Desde 2001, Cristiane Silveira Soares é sócia do escritório Silveira Soares Contabilidade e Gestão Tributária e participou do crescimento e de todos os processos de expansão da empresa. Focada na gestão e no desenvolvimento de pessoas, é contabilista e gestora de Recursos Humanos.
                    </Text>
                    <Text color='#FFF'>
                    No escritório, é responsável pelo gerenciamento administrativo interno da equipe, faz atendimentos externos e trabalha junto ao setor de departamento pessoal de clientes e certificadora AR. Também gerencia processos de controladoria e certificação do ISO 9001.
                    </Text>
                    <Text color='#FFF'>
                    Além de ressaltar a importância do diálogo constante para uma comunicação eficaz dentro das empresas, Cristiane também acredita na capacitação e organização constante das equipes de profissionais para que o escritório consiga oferecer informações e serviços além da expectativa e das demandas governamentais e de clientes.  
                    </Text>
                    </Box>
                </SwiperSlide>

            </Swiper>
            </Container>
        </Box>
    )
}