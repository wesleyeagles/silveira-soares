import { Box, Button, Container, Heading, Text } from '@chakra-ui/react';

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay } from "swiper";

export function Carousel() {



    return (
        <Swiper
        parallax
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        pagination={{
            clickable: true,
          }}
        modules={[Pagination]}
        spaceBetween={0}
        slidesPerView={1}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        >
            <SwiperSlide>
                <Box display='flex' alignItems='center' className='slide-1' w='100vw' h='100vh'>
                    <Container maxW='8xl'>
                        <Heading color='white' fontFamily='inter'>
                        O GUIA COMPLETO
                        </Heading>
                        <Heading as='h1' size='2xl' w='50rem' color='white' fontFamily='inter'>
                        DA REENGENHARIA ADMINISTRATIVA PARA
                        </Heading>
                        <Heading paddingBottom={20} color='red' size='4xl'>
                        SUPERMERCADOS
                        </Heading>
                        <Button bg='brand.red' color='white' w='10rem' h='4rem' fontSize='xl'>
                            Baixar E-book
                        </Button>
                    </Container>
                </Box>
            </SwiperSlide>

            <SwiperSlide>
                <Box display='flex' alignItems='center' className='slide-2' w='100vw' h='100vh'>
                    <Container maxW='8xl'>
                        <Heading as='h1' size='3xl' w='25rem' color='white' fontFamily='volkhov'>
                            Há mais de 20 anos fazendo a conta bater
                        </Heading>
                        <Text paddingBottom={20} color='white' fontFamily='inter' w='28rem' marginTop={10}>
                        Possuímos uma carteira com mais de 1000 clientes ativos espalhados por todo o Brasil em mais de 17 estados.
                        </Text>
                    </Container>
                </Box>
            </SwiperSlide>
        </Swiper>
    )
}