import { Box, Button, Container, Divider, Heading, HStack, Input, InputGroup, InputLeftElement, InputRightElement, Select, Stack, Text, Textarea } from "@chakra-ui/react";
import { AiOutlineUser } from 'react-icons/ai'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { useRef, useState } from "react";
import { useCidades } from "../hooks/useCities";
import { useEstados } from "../hooks/useStates";

export function Footer({foawardRef}: any) {

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


    return (
        <footer>
            <Box bg='black' paddingBlock={16}>
                <Container maxW={{ md: '2xl', lg: '5xl', xl: '6xl', '2xl': '8xl'}}>
                <Box display='flex' flexWrap={{ sm: 'wrap', lg: 'nowrap'}} justifyContent='space-between'>
                    <Box w={{ sm: '100%', lg: '33%'}}>
                        <Heading w='18rem' as='h3' color='white' size='lg'>
                            No que podemos te ajudar hoje?
                        </Heading>
                        <Heading as='h4' color='white' size='md' marginTop={6}>
                            Contato
                        </Heading>
                        <Text color='white' marginTop={4}>
                            Rua João Pessoa, 180 - Pátria Nova
                        </Text>
                        <Text color='white'>
                            Novo Hamburgo/RS CEP: 93410-120
                        </Text>

                        <Text color='white' marginTop={6}>
                            Telefone: (51) 9 8595-2070
                        </Text>

                        <Text color='white'>
                            (51) 3525-0037 | (51) 3525-2083
                        </Text>

                        <Heading as='h4' color='white' size='md' marginTop={6}>
                            Trabalhe Conosco
                        </Heading>

                        <Text color='white' marginTop={4}>
                            Para encaminhar seu currículo, envie por
                        </Text>
                        <Text color='white'>
                            e-mail para: <strong>rh@silveirasoares.com.br</strong>
                        </Text>
                    </Box>

                    <Box w={{sm: '100%', md: '60%', lg: '40%', xl: '33%', '2xl': '33%'}} marginTop={{sm: '5rem', lg: '0rem'}}>
                        <form action="">
                        <Stack>
                        <InputGroup>
                            <InputLeftElement
                            pointerEvents='none'
                            children={<AiOutlineUser color='white' />}
                            />
                            <Input color='#FFF' ref={foawardRef} type='text' placeholder='Nome completo' _focus={{ borderColor: 'brand.red', outlineColor: 'brand.red'}} _active={{ borderColor: 'brand.red', outlineColor: 'brand.red' }}/>
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
                        <Select _focus={{ borderColor: 'brand.red', outlineColor: 'brand.red'}} _active={{ borderColor: 'brand.red', outlineColor: 'brand.red' }} bg='black' color='white' name="state" ref={estadoRef} onChange={handleStateChange} placeholder='Selecione seu estado'>
                        {estados.map(estado => 
                         <option className="text-black" value={estado.sigla}>{estado.nome}</option>
                        )}
                        </Select>
                        <Select _focus={{ borderColor: 'brand.red', outlineColor: 'brand.red'}} _active={{ borderColor: 'brand.red', outlineColor: 'brand.red' }} bg='black' color='white' name="city" ref={cidadeRef} onChange={handleCityChange} placeholder='Selecione sua cidade'>
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

                    <Box w={{sm: '100%', md: '33%', lg: '25%', xl: '33%', '2xl': '33%'}} marginTop={{sm: '5rem', lg: '0rem'}}>
                    <Box paddingLeft={{md: '1.9rem', lg: '1.8rem', xl:'8rem', '2xl': '8rem'}}>
                    <Heading w='18rem' as='h3' color='white' size='lg'>
                            Nosso horários
                    </Heading>
                    <Heading as='h4' color='white' size='md' marginTop={6}>
                            Segunda a Quinta
                    </Heading>
                    <Text color='white' marginTop={2}>
                            08h - 12h | 13h - 18h
                    </Text>
                    <Heading as='h4' color='white' size='md' marginTop={6}>
                            Sexta-Feira
                    </Heading>
                    <Text color='white' marginTop={2}>
                            08h - 12h | 13h - 17h
                    </Text>
                    <Box className="logo" marginTop={8}>
                        <img className="w-[170px]" src="https://gistcdn.githack.com/wesleyeagles/1849654e4a1c73a2e7f9cfdf3e11b954/raw/06f5a9f220c9c6d462b11c6d85918f0f3903807d/logo_silveira.svg" alt="logo" />
                    </Box>
                    </Box>
                    </Box>
                </Box>

                <Divider marginTop={10}/>

                <Box display='flex' justifyContent='space-between' marginTop={5}>
                <Text color='white' marginTop={2}>
                    Silveira Soares - 2022
                </Text>
                <Text color='white' marginTop={2}>
                    Desenvolvido por <strong>Eagles</strong>
                </Text>
                </Box>
                </Container>
            </Box>
        </footer>
    )
}