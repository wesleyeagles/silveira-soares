import { Box } from '@chakra-ui/react'
import { BsWhatsapp } from 'react-icons/bs'

export function WhatsappButton() {
    return (
        <a target='_blank' href="">
        <Box className="fixed bottom-6 right-6 border-green-500 border z-50 w-[60px] h-[60px] rounded-full pulse-anima"></Box>
        <Box className="fixed bottom-6 right-6 border-green-500 border z-50 w-[60px] h-[60px] rounded-full pulse-anima2"></Box>
        <Box className="fixed bottom-6 right-6 border-green-500 border z-50 w-[60px] h-[60px] rounded-full pulse-anima3"></Box>
        <Box className="fixed bottom-6 right-6 bg-green-500 border z-50 w-[60px] h-[60px] rounded-full">
            <Box className="flex w-full h-full justify-center items-center">
                <BsWhatsapp color="#FFF" size={30}/>
            </Box>
        </Box>
        
        </a>
    )
}