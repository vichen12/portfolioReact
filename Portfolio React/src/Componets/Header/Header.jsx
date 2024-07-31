import React, { useRef } from 'react';
import { Box, Flex, Link, Text, IconButton, Image, useDisclosure } from '@chakra-ui/react';
import { FaLinkedin, FaGithub, FaTwitter, FaWhatsapp, FaBars, FaTimes } from 'react-icons/fa';
import FotoHeader from '../../assets/Img/FotoHeader.jpeg';
import FotoLogo from '../../assets/Img/LOGO.jpeg';
import Curriculum from '../../assets/Docs/Curriculum.pdf';

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const menuRef = useRef(null);

  const handleClickInside = (event) => {
    if (menuRef.current && menuRef.current.contains(event.target)) {
      return;
    }
    onClose();
  };

  return (
    <Box
      as="header"
      p={4}
      bgImage={`url(${FotoHeader})`}
      bgSize="cover"
      bgRepeat="no-repeat"
      color="white"
      height="100vh"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      position="relative"
      overflowX="hidden"
      bgPosition="center 30%"
    >
      <Image
        src={FotoLogo}
        position="absolute"
        top="10px"
        left="10px"
        width={{ base: "50px", sm: "60px", md: "80px", lg: "100px" }}
        height={{ base: "25px", sm: "30px", md: "40px", lg: "50px" }}
        borderRadius="10px"
      />

      <Flex
        as="nav"
        align="center"
        justify="center"
        p={4}
        fontSize={{ base: "20px", md: "25px" }}
        gap={{ base: 0, md: 14 }}
        position="absolute"
        top="10px"
        left="50%" 
        transform="translateX(-50%)"
        flexDirection={{ base: 'column', md: 'row' }}
        display={{ base: 'none', md: 'flex' }}
        zIndex="1"
      >
        <Link href="#contact" fontSize={{ md: "35px", lg: "45px" }} _hover={{ color: "#f5c31f", transition: "0.3s" }}>Contacto</Link>
        <Link href="#portfolio" fontSize={{ md: "35px", lg: "45px" }} _hover={{ color: "#f5c31f", transition: "0.3s" }}>Portfolio</Link>
        <Link href="#home" fontSize={{ md: "35px", lg: "45px" }} _hover={{ color: "#f5c31f", transition: "0.3s" }}>Sobre mí</Link>
      </Flex>

      <Box
        display={{ base: 'block', md: 'none' }}
        position="absolute"
        top="0px"
        right="0px"
        zIndex="2"
      >
        <IconButton
          aria-label="Menu"
          icon={isOpen ? <FaTimes /> : <FaBars />}
          variant="outline"
          colorScheme="yellow"
          fontSize="30px" 
          onClick={isOpen ? onClose : onOpen}
          backgroundColor="transparent" 
          border="none" 
        />
        {isOpen && (
          <Box
            ref={menuRef}
            position="absolute"
            top="0"
            right="0"
            bg="rgba(49,51,59,1)"
            borderColor="rgba(64,60,68,255)"
            borderRadius="md"
            p={4}
            m="0"
            width="50vw"
            height="100vh"
            boxShadow="lg"
            zIndex="popover"
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            overflow="auto" 
            onClick={handleClickInside} 
          >
            <Box>
              <Box display="flex" justifyContent="flex-end" mb={2}>
                <IconButton
                  aria-label="Close menu"
                  icon={<FaTimes />}
                  variant="outline"
                  colorScheme="yellow"
                  onClick={onClose}
                  backgroundColor="transparent"
                  border="none" 
                  fontSize="30px" 
                />
              </Box>
              <Flex direction="column" mb={4} gap={4} align="center">
                <Link href="#contact" fontSize={{ base: "30px", sm: "35px"}} _hover={{ color: "#f5c31f", transition: "0.3s" }}>Contacto</Link>
                <Link href="#portfolio" fontSize={{ base: "30px", sm: "35px" }} _hover={{ color: "#f5c31f", transition: "0.3s" }}>Portfolio</Link>
                <Link href="#home" fontSize={{ base: "30px", sm: "35px" }} _hover={{ color: "#f5c31f", transition: "0.3s" }}>Sobre mí</Link>
              </Flex>
            </Box>
            <Flex direction="row" align="center" justify="center" wrap="wrap" gap={{ base: "10px", sm: "15px" }}>
              <IconButton
                as="a"
                href="https://github.com/vichen12"
                target="_blank"
                aria-label="GitHub"
                icon={<FaGithub />}
                bg="none"
                color="white"
                fontSize={{ base: "20px", sm: "25px", md: "35px", lg: "45px" }}
                _hover={{ color: "#f5c31f", transition: "0.3s" }}
              />
              <IconButton
                as="a"
                href="https://twitter.com/vichendalla"
                target="_blank"
                aria-label="Twitter"
                icon={<FaTwitter />}
                bg="none"
                color="white"
                fontSize={{ base: "20px", sm: "25px", md: "35px", lg: "45px" }} 
                _hover={{ color: "#f5c31f", transition: "0.3s" }}
              />
              <IconButton
                as="a"
                href="https://www.linkedin.com/in/vincenzo-dallape-50a426304/"
                target="_blank"
                aria-label="LinkedIn"
                icon={<FaLinkedin />}
                bg="none"
                color="white"
                fontSize={{ base: "20px", sm: "25px", md: "35px", lg: "45px" }} 
                _hover={{ color: "#f5c31f", transition: "0.3s" }}
              />
              <IconButton
                as="a"
                href="https://api.whatsapp.com/send?phone=542612071048&text=Hola%20Vincenzo,%0D%0A%0D%0A Te%20escribo%20por%20tu%20portfolio.%20El%20motivo%20del%20mensaje%20es:%20[escribe%20aquí%20el%20motivo%20del%20mensaje].%0D%0A%0D%0ASaludos,%0D%0A[tu%20nombre]"
                target="_blank"
                aria-label="WhatsApp"
                bg="none"
                color="white"
                icon={<FaWhatsapp />}
                fontSize={{ base: "20px", sm: "25px", md: "35px", lg: "45px" }} 
                _hover={{ color: "#f5c31f", transition: "0.3s" }}
              />
            </Flex>
          </Box>
        )}
      </Box>

      <Box
        display="flex"
        flexDirection="column"
        alignItems="flex-start"
        justifyContent="center"
        textAlign="left"
        ml={{ base: 0, sm: '-13%', md: '-30%' }}
        mt={{ base: "-10%", md: '-5%' }}
        gap={4}
      >
        <Text fontSize={{ base: "20px", sm: "30px", md: "40px", lg: "55px" }} fontWeight="bold">
          Soy <Text fontSize={{ base: "35px", sm: "45px", md: "55px", lg: "70px" }} as="span" color="#f5c31f">Vincenzo Dallape</Text>
        </Text>
        <Text fontSize={{ base: "15px", sm: "20px", md: "35px", lg: "40px" }}>Desarrollador Web</Text>
        <Link
          href={Curriculum}
          color="#f5c31f"
          isExternal
          border="2px solid"
          borderColor='#f5c31f'
          p={2}
          marginTop="20px"
          borderRadius="xl"
          fontSize={{ base: "15px", sm: "20px", md: "35px", lg: "40px" }}
          _hover={{
            backgroundColor: '#f5c31f',
            borderColor: '#f5c31f',
            color: 'gray.700',
            transition: '0.7s',
          }}
        >
          Curriculum
        </Link>
      </Box>

      <Box
        position="absolute"
        top="50%"
        right="10"
        transform="translateY(0%)"
        display={{ base: 'none', md: 'flex' }}
        flexDirection="column"
        alignItems="center"
        gap={4}
      >
        <Box height="100px" width="2px" bgColor="#f5c31f" mb={2} />
        <IconButton
          as="a"
          href="https://github.com/vichen12"
          target="_blank"
          aria-label="GitHub"
          icon={<FaGithub />}
          bg="none"
          color="white"
          fontSize={{ base: "20px", sm: "25px", md: "35px", lg: "45px" }}
          _hover={{ color: "#f5c31f", transition: "0.3s" }}
        />
        <IconButton
          as="a"
          href="https://twitter.com/vichendalla"
          target="_blank"
          aria-label="Twitter"
          icon={<FaTwitter />}
          bg="none"
          color="white"
          fontSize={{ base: "20px", sm: "25px", md: "35px", lg: "45px" }}
          _hover={{ color: "#f5c31f", transition: "0.3s" }}
        />
        <IconButton
          as="a"
          href="https://www.linkedin.com/in/vincenzo-dallape-50a426304/"
          target="_blank"
          aria-label="LinkedIn"
          icon={<FaLinkedin />}
          bg="none"
          color="white"
          fontSize={{ base: "20px", sm: "25px", md: "35px", lg: "45px" }}
          _hover={{ color: "#f5c31f", transition: "0.3s" }}
        />
        <IconButton
          as="a"
          href="https://api.whatsapp.com/send?phone=542612071048&text=Hola%20Vincenzo,%0D%0A%0D%0A Te%20escribo%20por%20tu%20portfolio.%20El%20motivo%20del%20mensaje%20es:%20[escribe%20aquí%20el%20motivo%20del%20mensaje].%0D%0A%0D%0ASaludos,%0D%0A[tu%20nombre]"
          target="_blank"
          aria-label="WhatsApp"
          bg="none"
          color="white"
          icon={<FaWhatsapp />}
          fontSize={{ base: "20px", sm: "25px", md: "35px", lg: "45px" }}
          _hover={{ color: "#f5c31f", transition: "0.3s" }}
        />
      </Box>
    </Box>
  );
};

export default Header;
