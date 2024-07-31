import React from 'react';
import { Box, Flex, Heading, Text, Link, SimpleGrid } from '@chakra-ui/react';
import { FaMailBulk, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <Box bg="rgba(61, 62, 66, 1)" color="white" position="relative" py={{ base: "30px", md: "50px", lg: "70px" }}>
      <Box position="absolute" top="0" left="0" right="0" height="4px" bg="transparent">
        <Box position="absolute" top="0" left="0" height="4px" width="30%" bg="#c49f31" />
        <Box position="absolute" top="0" right="0" height="4px" width="30%" bg="#c49f31" />
      </Box>
      <Box position="absolute" bottom="0" left="0" right="0" height="4px" bg="transparent">
        <Box position="absolute" bottom="0" left="0" height="4px" width="30%" bg="#c49f31" />
        <Box position="absolute" bottom="0" right="0" height="4px" width="30%" bg="#c49f31" />
      </Box>
      <Flex direction="column" align="center" mb="6">
        <Heading
          size="lg"
          mb="80px"
          textAlign="center"
          fontSize={{ base: "13px", sm: "2xl", md: "3xl", lg: "5xl",xl:"7xl" }}
          mt={{ base: "-38px", sm: "-45px", md: "-69px", lg: "-100px",xl: "-120px" }}
          _hover={{
            color: "#c49f31",
            transition: "0.5s",
          }}
          
        >
          CONTACTAME
        </Heading>
        <SimpleGrid
          columns={{ base: 1, md: 1, xl: 2 }}
          spacing={{ base: 4, md: 6, xl: 3 }}
          textAlign="center"
          align="center"
        >
          <Flex direction="column" align="center" justify="center">
            <Box
              bg="rgba(49, 51, 59, 1)"
              borderRadius="md"
              p={{ base: "20px", md: "30px" }}
              textAlign="center"
              maxWidth="350px"
              mx="auto"
              shadow="lg"
              _hover={{ bg: "rgba(40, 42, 46, 1)", transition: "background-color 0.3s" }}
            >
              <Text fontSize="xl" mb="3">
                <Link
                  href="mailto:vichendallape@gmail.com"
                  isExternal
                  _hover={{ color: "#c49f31", textDecoration: "none" }}
                >
                  <FaMailBulk size="40px" />
                </Link>
              </Text>
              <Link
                href="mailto:vichendallape@gmail.com"
                _hover={{ color: "#c49f31", textDecoration: "none" }}
                fontSize="lg"
              >
                vichendallape@gmail.com
              </Link>
            </Box>
          </Flex>
          <Flex direction="column" align="center" justify="center">
            <Box
              bg="rgba(49, 51, 59, 1)"
              borderRadius="md"
              p={{ base: "20px", md: "30px" }}
              textAlign="center"
              maxWidth="350px"
              mx="auto"
              shadow="lg"
              _hover={{ bg: "rgba(40, 42, 46, 1)", transition: "background-color 0.3s" }}
            >
              <Text fontSize="xl" mb="3">
                <Link
                  href="tel:+542612071048"
                  _hover={{ color: "#c49f31", textDecoration: "none" }}
                >
                  <FaPhoneAlt size="40px" />
                </Link>
              </Text>
              <Link
                href="tel:+542612071048"
                _hover={{ color: "#c49f31", textDecoration: "none" }}
                fontSize="lg"
              >
                (261) 2071048
              </Link>
            </Box>
          </Flex>
          <Flex direction="column" align="center" justify="center" display={{ base: "block", xl: "none" }}>
            <Box
              bg="rgba(49, 51, 59, 1)"
              borderRadius="md"
              p={{ base: "20px", md: "30px" }}
              textAlign="center"
              maxWidth="350px"
              mx="auto"
              shadow="lg"
              _hover={{ bg: "rgba(40, 42, 46, 1)", transition: "background-color 0.3s" }}
            >
              <Text fontSize="xl" mb="3">
                <Link
                  href="https://www.google.com/maps/search/?api=1&query=Mendoza%2C%20Argentina"
                  isExternal
                  _hover={{ color: "#c49f31", textDecoration: "none" }}
                >
                  <FaMapMarkerAlt size="40px" />
                </Link>
              </Text>
              <Link
                href="https://www.google.com/maps/search/?api=1&query=Mendoza%2C%20Argentina"
                _hover={{ color: "#c49f31", textDecoration: "none" }}
                fontSize="lg"
              >
                Mendoza, Argentina
              </Link>
            </Box>
          </Flex>
          <Flex direction="column" align="center" justify="center" display={{ base: "none", xl: "flex" }} mr="-300px">
            <Box
              bg="rgba(49, 51, 59, 1)"
              borderRadius="md"
              p={{ base: "20px", md: "30px" }}
              textAlign="center"
              maxWidth="350px"
              mx="auto"
              shadow="lg"
              _hover={{ bg: "rgba(40, 42, 46, 1)", transition: "background-color 0.3s" }}
            >
              <Text fontSize="xl" mb="3">
                <Link
                  href="https://www.google.com/maps/search/?api=1&query=Mendoza%2C%20Argentina"
                  isExternal
                  _hover={{ color: "#c49f31", textDecoration: "none" }}
                >
                  <FaMapMarkerAlt size="40px" />
                </Link>
              </Text>
              <Link
                href="https://www.google.com/maps/search/?api=1&query=Mendoza%2C%20Argentina"
                _hover={{ color: "#c49f31", textDecoration: "none" }}
                fontSize="lg"
              >
                Mendoza, Argentina
              </Link>
            </Box>
          </Flex>
        </SimpleGrid>
      </Flex>
    </Box>
  );
};

export default Footer;
