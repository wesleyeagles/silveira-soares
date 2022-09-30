import { Box, Button, Container, Heading, Text } from '@chakra-ui/react';

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";
import { Link } from 'react-router-dom';

export function Carousel() {



    return (
        <Swiper
        parallax
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
                    <Container maxW={{ md: '3xl', lg: '5xl', xl: '6xl', '2xl': '8xl'}}>
                        <Heading color='white'>
                        O GUIA COMPLETO
                        </Heading>
                        <Heading size='2xl' w={{sm: '100%', md: '50rem'}} color='white'>
                        DA REENGENHARIA ADMINISTRATIVA PARA
                        </Heading>
                        <Heading paddingBottom={20} color='red' size={{sm: '3xl', md: '4xl'}}>
                        SUPERMERCADOS
                        </Heading>
                        <Link to='/reengenharia'>
                        <Button bg='brand.red' color='white' w='10rem' h='4rem' fontSize='xl' _hover={{ bg: 'brand.hover.red'}}>
                            Baixar E-book
                        </Button>
                        </Link>
                    </Container>
                </Box>
            </SwiperSlide>

            <SwiperSlide>
                <Box display='flex' alignItems='center' className='slide-2' w='100vw' h='100vh'>
                    <Container maxW={{ md: '3xl', lg: '5xl', xl: '6xl', '2xl': '8xl'}}>
                        <Heading as='h1' size='3xl' w={{sm: '100%', md: '25rem'}} color='white'>
                            Há mais de 20 anos fazendo a conta bater
                        </Heading>
                        <Text paddingBottom={20} color='white' w={{sm: '100%', md: '28rem'}} marginTop={10}>
                        Possuímos uma carteira com mais de 1000 clientes ativos espalhados por todo o Brasil em mais de 17 estados.
                        </Text>
                    </Container>
                </Box>
            </SwiperSlide>
        </Swiper>
    )
}