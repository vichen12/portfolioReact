import { Box, Heading, Image, Text, SimpleGrid, Flex } from '@chakra-ui/react';
import python from '../../assets/Img/python.svg';
import enterprise from '../../assets/Img/Enterprise-Rent-A-Car-Logo.png';
import kali from '../../assets/Img/Kali.png';
import git from '../../assets/Img/Git_icon.svg.png';
import erpNext from '../../assets/Img/Erpnext_logo.svg.png';
import mongodb from '../../assets/Img/MONGO.svg';
import htmlCSS from '../../assets/Img/CSS3_and_HTML5_logos_and_wordmarks.svg.png';
import javaScript from '../../assets/Img/Unofficial_JavaScript_logo_2.svg.png';
import angular from '../../assets/Img/Angular_full_color_logo.svg.png';
import react from '../../assets/Img/React-icon.svg.png';
import mySql from '../../assets/Img/mysqlworkbench_93532.png';
import postGreeSql from '../../assets/Img/postgresql-icon-256x253-di7llvhy.png';

const skills = [
  { src: python, alt: "Python", label: "Python" },
  { src: enterprise, alt: "Enterprise", label: "Enterprise" },
  { src: kali, alt: "Kali Linux", label: "Kali Linux" },
  { src: git, alt: "Git Source Control", label: "Git Source Control" },
  { src: erpNext, alt: "ERPNext", label: "ERPNext" },
  { src: mongodb, alt: "Mongodb", label: "Mongodb" },
  { src: htmlCSS, alt: "Html & CSS", label: "Html & CSS" },
  { src: javaScript, alt: "JavaScript", label: "JavaScript" },
  { src: angular, alt: "Angular", label: "Angular" },
  { src: react, alt: "React", label: "React" },
  { src: mySql, alt: "MySql", label: "MySql" },
  { src: postGreeSql, alt: "PostGreeSql", label: "PostGreeSql" },
];

const SkillItem = ({ src, alt, label, boxSize }) => (
  <Box 
    textAlign="center" 
    bg="rgba(64,60,68,255)" 
    p={{ base: 6, sm: 8, md: 10, lg: 25 }} 
    m={{ base: 0, sm: 0, md: 0, lg: 0 }} 
    borderRadius="20px" 
    transition="background-color 1.3s"
    height={{ base: "120px", sm: "160px", md: "200px", lg: "300px" }}
    _hover={{ 
      bg: "rgba(240,191,108,255)",
      color:"white" 
    }}
  >
    <Image 
      src={src} 
      alt={alt} 
      boxSize={{ base: "60px", sm: "80px", md: "100px", lg: "150px" }} 
      mx="auto" 
      p={{ base: 2, sm: 4, md: 6, lg: 8 }}
    />
    <Text 
     fontSize={{ base: "10px", sm: "md", md: "lg", lg: "xl" }} 
    color="white" 
    _hover={{ color: "#333" }}>{label}
    </Text>
  </Box>
);

const Dots = () => (
  <Flex 
    justify="flex-end" 
    display={{ base: "none", md: "flex" }} // Mostrar solo en medidas lg y superiores
  >
    <SimpleGrid 
      columns={4} 
      spacing={{ base: 10, sm: 10, md: 8, lg: 12,xl:14}}
      m="100px"
    >
      {Array.from({ length: 16 }).map((_, index) => (
        <Box 
          key={index} 
          width={{ base: "10", sm: "10", md: "10px", lg: "15px",xl:"25px" }}  
          height={{ base: "10", sm: "10", md: "10px", lg: "15px", xl:"25px" }}  
          borderRadius="50%" 
          bg="rgba(106,94,75,255)" // Color de los puntos
        />
      ))}
    </SimpleGrid>
  </Flex>
);

const Skills = () => {
  return (
    <Box as="section" id="skills" p={{ base: 4, sm: 6, md: 8, lg: 10 }} bg="rgba(49,51,59,1)">
      <Heading 
        as="h1" 
        fontSize={{ base: "4xl", sm: "5xl", md: "6xl", lg: "7xl" }} 
        textAlign="center" 
        color="white"  
        mb={{ base: "4%", sm: "5%", md: "6%", lg: "7%" }} 
        mt={{ base: "4%", sm: "5%", md: "6%", lg: "7%" }}
        _hover={{ color: "#f5c31f", cursor: "pointer" }}
        transition="color 0.3s ease" 
      >
        HABILIDADES
      </Heading>
      
      <SimpleGrid 
        borderRadius="100px" 
        mx={{ base: 1, sm: 10, md: 70, lg: 120, xl: 200 }} 
        columns={{ base: 2, sm: 2, md: 3, lg: 4 }} 
        spacing={{ base: 4, sm: 6, md: 4, lg: 4 }} 
        mb={{ base: 4, sm: 6, md: 8, lg: 10 }} 
      >
        {skills.map(skill => (
          <SkillItem key={skill.alt} {...skill} />
        ))}
      </SimpleGrid>

      <Dots />
      
    </Box>
  );
};

export default Skills;
