import { Flex, Image, Text } from "@chakra-ui/react";
const Header = () => {
  return (
    <Flex
      zIndex={0}
      position="relative"
      w="100%"
      alignItems="center"
      justifyContent="center"
    >
      <Image
        display="block"
        w="100%"
        maxH="650px"
        objectFit="cover"
        px={5}
        src="/about.jpeg"
        alt="contact"
      />
      <Text
        fontSize={["2rem", "3rem", "6rem"]}
        color="white"
        p="30px"
        position="absolute"
        display="block"
        // top={["50%", "50%", "45%"]}
      >
        About
      </Text>
    </Flex>
  );
};

export default Header;
