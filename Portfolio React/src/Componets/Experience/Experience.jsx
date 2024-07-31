import React from 'react';
import { Box, Heading, Text, Stack } from '@chakra-ui/react';

const Experiencia = () => {
  return (
    <Box
      backgroundColor="#3D3E42"
      minHeight="100vh"
      p={0}
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      <Box backgroundColor="#3D3E42" w="100%">
        <Heading
          as="h1"
          color="#fff"
          fontSize={{ base: "4xl", sm: "5xl", md: "6xl", lg: "7xl" }}
          textAlign="left"
          ml="10%"
          mt={{ base: -5, sm: -8, md: -10, lg: -12 }}
          _hover={{
            color: "#c49f31",
            transition: "0.5s",
          }}
        >
          EXPERIENCIA
        </Heading>
      </Box>

      <Stack spacing={8} mt="5%" width="100%" alignItems="center">
        <Box width="100%">
          <Stack
            direction={{ base: 'column', md: 'row' }}
            spacing={4}
            alignItems={{ base: "center", md: "flex-start" }}
            justifyContent={{ base: "center", md: "flex-start" }}
            ml={{ base: 0, md: "7%" }}
            mr={{ base: 0, md: "17%" }}
          >
            <Box>
              <Heading
                as="h4"
                size="md"
                mt={{base: 10, sm: 10, md: 0, lg: 0}}
                mb={{base: -36, sm: -36, md: 0, lg: 0}}
                px="25px"
                py="5px"
                bg="rgba(92, 93, 96, 255)"
                color="white"
                clipPath={{ base: "none", md: "polygon(0 0, 75% 0, 100% 50%, 75% 100%, 0 100%)" }}
                borderRadius={{ base: 10, md: 0 }}
                textAlign={{ base: "center", md: "left" }}
                _hover={{
                  color: "#c49f31",
                  transition: "0.5s",
                  cursor:"pointer"
                }}
              >
                2021
              </Heading>
            </Box>
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
            >
              <Box
                width={{ base: "0", sm: "0", md: "50px", lg: "50px" }}
                height="50px"
                borderRadius="50%"
                bg="#FFC86B"
                mb={4}
              />
              <Box
                width={{ base: "0", sm: "0", md: "2px", lg: "2px" }}
                height={{ base: "0", sm: "0", md: "200px", lg: "200px" }}
                bgColor="#f5c31f"
              />
            </Box>
            <Box>
              <Heading
              mt={{base: 10, sm: 10, md: 0, lg: 0}}
                as="h2"
                size="lg"
                mb="5px"
                textAlign={{ base: "center", md: "left" }}
                fontSize={{ base: "25px", sm: "25px", md: "25px", lg: "30px" }}
                color="white"
                _hover={{
                  color: "#e9cb72",
                  transition: "0.5s",
                }}
              >
                Especialista en Logística
              </Heading>
              <Heading
                as="h3"
                size="md"
                color="gray.400"
                mb="2%"
                textAlign={{ base: "center", md: "left" }}
                fontSize={{ base: "xl", sm: "xl", md: "2xl", lg: "3xl" }}
                _hover={{
                  color: "#c49f31",
                  transition: "0.5s",
                }}
              >
                Mendoza, Argentina
              </Heading>
              <Text
                textAlign={{ base: "left", md: "left" }}  
                fontSize={{ base: "l", sm: "l", md: "xl", lg: "2xl" }}
               
                lineHeight="1.6"
                color="white"
                mx={{ base: "7%", md: "10%", lg: "12%" }}  
                textIndent="0" 
                mb={{ base: "10%", md: "15%", lg: "12%" }}  
              >
                Como parte del equipo logístico en TyC (Transporte y Cargas),
                coordiné y optimicé las operaciones de transporte y distribución.
                Planifiqué rutas eficientes, gestioné el inventario y aseguré envíos
                puntuales y en perfectas condiciones. Implementé sistemas de
                seguimiento en tiempo real, mejorando la transparencia y comunicación
                con los clientes. También optimicé procesos internos, reduciendo
                costos y tiempos de entrega. Mis contribuciones mejoraron la
                eficiencia operativa, la satisfacción del cliente y la reputación de
                la empresa.
              </Text>
            </Box>
          </Stack>

          <Stack
            direction={{ base: 'column', md: 'row' }}
            spacing={4}
            alignItems={{ base: "center", md: "flex-start" }}
            justifyContent={{ base: "center", md: "flex-start" }}
            ml={{ base: 0, md: "7%" }}
            mr={{ base: 0, md: "17%" }}
          >
            <Box>
              <Heading
                as="h4"
                size="md"
                mt={{base: 10, sm: 10, md: 0, lg: 0}}
                mb={{base: -20, sm: -20, md: 0, lg: 0}}
                px="25px"
                py="5px"
                bg="rgba(92, 93, 96, 255)"
                color="white"
                clipPath={{ base: "none", md: "polygon(0 0, 75% 0, 100% 50%, 75% 100%, 0 100%)" }}
                borderRadius={{ base: 10, md: 0 }}
                
                textAlign={{ base: "center", md: "left" }}
                _hover={{
                  color: "#c49f31",
                  transition: "0.5s",
                  cursor:"pointer"
                }}
              >
                2022
              </Heading>
            </Box>
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
            >
              <Box
                width={{ base: "0", sm: "0", md: "50px", lg: "50px" }}
                height="50px"
                borderRadius="50%"
                bg="#FFC86B"
                mb={4}
              />
              <Box
                width={{ base: "0", sm: "0", md: "2px", lg: "2px" }}
                height={{ base: "0", sm: "0", md: "200px", lg: "200px" }}
                bgColor="#f5c31f"
              />
            </Box>
            <Box>
              <Heading
                as="h2"
                size="lg"
                mb="5px"
                textAlign={{ base: "center", md: "left" }}
                fontSize={{ base: "25px", sm: "25px", md: "25px", lg: "30px" }}
                color="white"
                _hover={{
                  color: "#e9cb72",
                  transition: "0.5s",
                }}
              >
                Desarrollador WEB
              </Heading>
              <Heading
                as="h3"
                size="md"
                color="gray.400"
                mb="2%"
                textAlign={{ base: "center", md: "left" }}
                fontSize={{ base: "l", sm: "l", md: "xl", lg: "2xl" }}
                _hover={{
                  color: "#c49f31",
                  transition: "0.5s",
                }}
              >
                Mendoza, Argentina
              </Heading>
              <Text
                textAlign={{ base: "left", md: "left" }}  
                fontSize={{ base: "l", sm: "l", md: "xl", lg: "2xl" }}
                mb="20px"
                lineHeight="1.6"
                color="white"
                mx={{ base: "7%", md: "10%", lg: "12%" }}  
                textIndent="0"  
              >
                Como desarrollador web en TyC (Transporte y Cargas), diseñé y
                desarrollé el sitio web de la empresa, enfocándome en una plataforma
                intuitiva y fácil de navegar. Implementé sistemas de seguimiento de
                envíos en tiempo real, formularios de contacto interactivos y una
                interfaz optimizada para móviles. También integré herramientas de
                análisis y realicé actualizaciones regulares para mantener la
                seguridad y eficiencia del sitio. Mi trabajo resultó en un aumento
                significativo en la interacción, satisfacción del cliente y
                generación de nuevos leads.
              </Text>
            </Box>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
};

export default Experiencia;
