import React from 'react';
import { Box, Flex, Link } from '@chakra-ui/react';
import { FaGithub, FaTwitter, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

const Final = () => {
  return (
    <Box bg="rgba(49,51,59,255)" color="white" position="relative" py="70px">
      <Flex
        justify="center"
        gap={{base: "8px" ,sm:"25px", md: "35px",}}
        mt={{ base: "-80px", sm: "-85px", md: "-90px", lg: "-90px", xl: "-92px" }}
      >
        <Link href="https://github.com/vichen12" isExternal>
          <Box
            fontSize={{ base: "17px", sm: "25px", md: "36px", lg: "40px" }}
            _hover={{ color: "#c49f31", transition: "0.5s" }}
          
          >
            <FaGithub />
          </Box>
        </Link>
        <Link href="https://x.com/Vichendalla" isExternal>
          <Box
            fontSize={{ base: "17px", sm: "25px", md: "36px", lg: "40px" }}
            _hover={{ color: "#c49f31", transition: "0.5s" }}
          >
            <FaTwitter />
          </Box>
        </Link>
        <Link href="https://www.linkedin.com/in/vincenzo-dallape-50a426304/" isExternal>
          <Box
            fontSize={{ base: "17px", sm: "25px", md: "36px", lg: "40px" }}
            _hover={{ color: "#c49f31", transition: "0.5s" }}
          >
            <FaLinkedin />
          </Box>
        </Link>
        <Link href="https://api.whatsapp.com/send?phone=542612071048" isExternal>
          <Box
            fontSize={{ base: "17px", sm: "25px", md: "36px", lg: "40px" }}
            _hover={{ color: "#c49f31", transition: "0.5s" }}
          >
            <FaWhatsapp />
          </Box>
        </Link>
      </Flex>
      <Box
        textAlign="center"
        color="rgba(244, 193, 108, 1)"
        fontSize={{ base: "3xl", sm: "4xl", md: "5xl", lg: "6xl" }}
        mt={{ base: "20px", sm: "30px", md: "40px", lg: "50px", xl: "60px" }}
        _hover={{ color: "#c49f31", transition: "0.5s" }}
      >
        "GRACIAS POR SCROLEAR"
      </Box>
    </Box>
  );
};

export default Final;
