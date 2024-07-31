import { Box, Heading, Image, SimpleGrid, Button, Link } from '@chakra-ui/react';
import trypify from '../../assets/Img/Proyecto-log-in.jpeg';
import yourUniversity from '../../assets/Img/Your-university.jpg';
import services from '../../assets/Img/services.jpeg';
import puente from '../../assets/Img/puente.webp';
import montaña from '../../assets/Img/montaña.jpg';
import notebook from '../../assets/Img/foto-notebook.avif';

const projects = [
  { src: trypify, alt: "Trypify", showButton: false },
  { src: yourUniversity, alt: "Your University", showButton: true, link: "https://github.com/vichen12/your-university" },
  { src: services, alt: "Services", showButton: false },
  { src: puente, alt: "Puente", showButton: false },
  { src: montaña, alt: "Montaña", showButton: false },
  { src: notebook, alt: "Notebook", showButton: false },
];

const ProjectItem = ({ src, alt, showButton, link }) => (
  <Box
    position="relative"
    borderRadius="md"
    overflow="hidden"
    width="100%"
    aspectRatio="1"
    _hover={{ 
      boxShadow: 'xl',
      transform: 'scale(1.05)',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    }}
    transition="transform 0.3s ease, box-shadow 0.3s ease"
  >
    <Image src={src} alt={alt} boxSize="100%" objectFit="cover" />
    {showButton && (
      <>
        <Box
          position="absolute"
          top="0"
          left="0"
          width="100%"
          height="100%"
          backgroundColor="rgba(0, 0, 0, 0.5)"
          zIndex="1"
        />
        <Link
          href={link}
          isExternal
          _hover={{ textDecoration: 'none' }} // Elimina el subrayado del enlace
        >
          <Button
            position="absolute"
            bottom="10px"
            left="50%"
            bg="#FFC86B"
            transform="translateX(-50%)"
            variant="solid"
            zIndex="2"
            transition="transform 0.3s, background-color 0.3s"
            _hover={{
              bg: "#E6A22F"
            }}
          >
            Ver Más ->
          </Button>
        </Link>
      </>
    )}
  </Box>
);

const PortfolioSection = () => {
  return (
    <Box as="section" id="portfolio" p={4} bg="rgba(49,51,59,1)">
      <Heading
        as="h1"
        textAlign="center"
        color="white"
        mb="5%"
        mt={{ base: 5, sm: 5, md: "-18%", lg: "-16%", xl: "-12%" }}
        _hover={{ color: "#f5c31f", cursor: "pointer" }}
        transition="color 0.3s ease"
        fontSize={{ base: "4xl", sm: "5xl", md: "6xl", lg: "7xl" }}
      >
        PORTFOLIO
      </Heading>

      <SimpleGrid
        mx={{ base: 4, sm: 8, md: 12, lg: 100, xl: 300 }}
        columns={{ base: 2, sm: 2, md: 3, lg: 3 }}
        spacing={6}
      >
        {projects.map((project) => (
          <ProjectItem 
            key={project.alt} 
            {...project} 
          />
        ))}
      </SimpleGrid>

      {/* Botón para el proyecto de GitHub */}
      <Link
        href="https://github.com/vichen12/image-based-web-project"
        isExternal
        _hover={{ textDecoration: 'none' }} // Elimina el subrayado del enlace
      >
        <Button
          display="block"
          mx="auto"
          mt={8}
          bg="#FFC86B"
          mb={{ base: 20, sm: 18, md: 16, lg: 14 }}
          variant="solid"
          transition="transform 0.3s, background-color 0.3s"
          _hover={{
            transform: "scale(1.1)",
            bg: "#E6A22F"
          }}
        >
          Ver Más
        </Button>
      </Link>
    </Box>
  );
};

export default PortfolioSection;
