import { Box, Container, Flex, Image, Text, VStack } from "@chakra-ui/react";

const About = () => {
  return (
    <>
      <VStack>
        <Flex
          zIndex={-1}
          top={40}
          position="relative"
          w="100%"
          alignItems="center"
          justifyContent="center"
        >
          <Box>
            <Image
              display="inline-block"
              w="100%"
              maxH="650px"
              objectFit="cover"
              px={5}
              src="/about.jpeg"
              alt="contact"
            />
          </Box>
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
      </VStack>

      <Container maxW="70rem">
        <Text textColor="#8A8A8A" fontSize="20px">
          Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend
          tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac,
          enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.
          Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum.
          Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur
          ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas
          tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit
          amet adipiscing.
        </Text>
        <Text as="b" fontSize="36px">
          Curabitur ullamcorper ultricies nisi.
        </Text>
        <Text textColor="#8A8A8A" fontSize="20px">
          Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend
          tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac,
          enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.
          Phasellus viverra nulla ut metus varius laoreet. Aenean massa. Cum
          sociis natoque penatibus et magnis dis parturient montes, nascetur
          ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu,
          pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo,
          fringilla vel, aliquet nec, vulputate eget, arcu.
        </Text>
      </Container>
    </>
  );
};

export default About;
