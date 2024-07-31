import { Box, Text } from '@chakra-ui/react';

const Hero = () => {
  return (
    <Box as="section" p={4} bg='#31333B'>
      <Box display="flex" alignItems="center" mb={4}>
        <Text
          as="h1"
          fontSize={{ base: "3xl", sm: "4xl", md: "5xl", lg: "6xl" }}
          fontWeight="bold"
          color="white"
          marginLeft="10%"
          _hover={{
            color: "#f5c31f",
            transition: "0.3s"
          }}
        >
          SOBRE MI
        </Text>
      </Box>
      <Box
        marginTop="3%"
        marginInline="15%"
        position="relative"
        
      >
        <Box
          position="absolute"
          height="2px"
          width="100px"
          bgColor="#f5c31f"
          top="0%"
          marginLeft="-120px"
          
        />
        <Text
          fontSize={{ base: "15px", sm: "20px", md: "25", lg: "30" }} 
          color='#f8fcfd'
          lineHeight="1.5"
        >
          Soy Vincenzo Dallape, un estudiante de Ingeniería en Sistemas de 20 años en la UTN, 
          <Text as="span" color="rgba(255,226,144,255)">
            especializándome tanto en front-end como en back-end. 
          </Text>
          Además de mis estudios, realizo cursos para mantenerme al día con las últimas tecnologías. Me apasiona la ciberseguridad y me dedico a adquirir competencias en este campo para desarrollar soluciones innovadoras y seguras. Mi objetivo es convertirme en un desarrollador versátil y altamente competente.
        </Text>
      </Box>
    </Box>
  );
};

export default Hero;
