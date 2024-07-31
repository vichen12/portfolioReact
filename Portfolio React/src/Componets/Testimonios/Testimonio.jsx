import { Box, Heading, Stack, Text, Image, Flex, SimpleGrid } from '@chakra-ui/react';
import testimonioImg from '../../assets/Img/testimonio.jpg'; 

const Dots = () => (
  <Flex 
    justify="left"
    position="absolute"
    top={{ base: '0%', md: '5%' }} 
    left={{ base: '3%', md: '4%' }} 
  
  >
    <SimpleGrid 
      columns={{ base: 3, sm: 3, md: 3, lg: 3 }}
      spacing={{ base: 4, sm: 6, md: 8, lg: 10 }}  
      width="100%" 
      maxW="1200px" 
    >
      {Array.from({ length: 6 }).map((_, index) => (
        <Box 
          key={index} 
          width={{ base: "8px", sm: "10px", md: "12px", lg: "15px", xl: "20px" }}  
          height={{ base: "8px", sm: "10px", md: "12px", lg: "15px", xl: "20px" }}  
          borderRadius="50%" 
          bg="rgba(106,94,75,255)"
        />
      ))}
    </SimpleGrid>
  </Flex>
);

const Testimonio = () => {
  return (
    <Box
      bg="rgba(49,51,59,1)"
      py={{ base: 6, sm: 8, md: 10, lg: 12, xl: 14 }} 
      px={{ base: '2%', sm: '5%', md: '8%', lg: '10%', xl: '12%' }} 
      mx="auto" 
      position="relative"
      overflow="hidden" 
    >
        <Dots />
        
      <Heading
        as="h1"
        color="white"
        mt={{ base: 6, sm: 8, md: 20, lg: 20, xl: 24 }}
        fontSize={{ base: '2xl', sm: '3xl', md: '4xl', lg: '5xl', xl: '6xl' }} 
        mb={{ base: 4, sm: 6, md: 8, lg: 10, xl: 12 }} 
        _hover={{ color: '#c49f31', transition: '0.5s' }}
      >
        TESTIMONIOS
      </Heading>

      

      <Flex
        direction={{ base: 'column', md: 'row' }}
        align={{ base: 'center', md: 'flex-start' }}
        justify="space-between"
        w="100%"
      >
       
        <Box
          p={{ base: 4, sm: 4, md: 5, lg: 6, xl: 8 }} 
          flex="1"
          display="flex"
          flexDirection="column"
          alignItems={{ base: 'center', md: 'flex-start' }} 
          maxW={{ base: '100%', md: '50%' }}
          pr={{ base: 0, md: 8 }} 
          textAlign={{ base: 'center', md: 'left' }}
        >
          <Stack spacing={{ base: 3, sm: 4, md: 5, lg: 6, xl: 7 }} 
          >
            <Text
              position="relative"
              pl={{ base: 0, sm: 0, md: '50px', lg: '120px', xl: '150px' }}
              mr={{base: 0, sm: 0, md: "-40%"}}
              
              color="rgba(184,185,185,255)"
              fontSize={{ base: 'md', sm: 'lg', md: 'xl', lg: '2xl', xl: '3xl' }} 
              _before={{
                content: '""',
                position: 'absolute',
                left: 0,
                height: '2px',
                width: '40px',
                backgroundColor: 'rgba(255,226,148,255)',
                top: '5%',
                transform: 'translateY(-50%)',
                display: { base: 'none', md: 'block' } 
              }}
              textIndent="0" 
              textAlign="left" 
            >
              En TyC (Transporte y Cargas), Vincenzo Dallapé ha transformado nuestra presencia en línea como desarrollador web y programador en el último año. Su trabajo ha mejorado significativamente la experiencia de nuestros clientes, haciendo nuestro sitio web estéticamente atractivo y funcional. Vincenzo muestra una dedicación impresionante, resolviendo problemas técnicos rápidamente y implementando nuevas funciones que han elevado nuestra plataforma a un nivel superior.
              <Text as="span" color="rgba(255,226,148,255)" />
            </Text>
            <Text
              fontSize={{ base: 'lg', sm: 'xl', md: '2xl', lg: '3xl', xl: '4xl' }}
              color="white"
              _hover={{ color: '#c49f31', transition: '0.5s' }}
            >
              Alejandro Dallape
            </Text>
            <Text
              position="relative"
              pl={{ base: 0, sm: 0, md: '30px', lg: '40px', xl: '50px' }}
              color="rgba(184,185,185,255)"
              fontSize={{ base: 'md', sm: 'lg', md: 'xl', lg: '2xl', xl: '3xl' }} 
              _before={{
                content: '""',
                position: 'absolute',
                left: 0,
                height: '2px',
                width: '20px',
                backgroundColor: 'rgba(255,226,148,255)',
                top: '50%',
                transform: 'translateY(-50%)',
                display: { base: 'none', md: 'block' } 
              }}
            >
              Presidente TyC
            </Text>
          </Stack>
        </Box>

        
        <Box
          flex="1"
          display={{ base: 'none', sm: 'none', md: 'none', lg: 'flex' }} 
          justifyContent="flex-end"
          alignItems="center"
          maxW={{ base: '100%', sm: '100%', md: '100%', lg: '50%' }}
          p={0}
          ml={{ base: 0, sm: 0, md: 0, lg: 'auto' }} 
        >
          <Image
            src={testimonioImg}
            alt="Testimonio"
            loading="lazy"
            maxW={{ base: '100%', sm: '100%', md: '100%', lg: '400px', xl: '500px' }} 
            height="auto"
            display="block"
            mr={{ base: 0, sm: 0, md: 0, lg: '-30%', xl: '-35%' }} 
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default Testimonio;
