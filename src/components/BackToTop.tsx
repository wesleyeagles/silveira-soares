import { useState, useEffect } from 'react'
import { Box, Text } from "@chakra-ui/react";

export function BackToTop({scrollToTopFunction}: any) {

    const [isBackToTop, setIsBackToTop] = useState(false)

    const handleScroll = () => {
        const position = window.pageYOffset
        console.log(position)

        if (position > 810 && position < 5800) {
            setIsBackToTop(true)
        } else if (position === 6100) {
            setIsBackToTop(false)
        } else {
            setIsBackToTop(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, {passive: true});

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <Box cursor='pointer' onClick={scrollToTopFunction} display={isBackToTop? 'block' : 'none'} position='fixed' bg='brand.red' paddingBlock={3} paddingInline={10} borderRadius={6} zIndex={999} bottom={6} right={6}>
            <Text color='white'>
                Voltar
            </Text>
        </Box>
    )
}