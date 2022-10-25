import {
  Button,
  Flex,
  FormControl,
  Input,
  Textarea,
  VStack,
  Text,
  Box,
} from "@chakra-ui/react";

const Contact = () => {
  return (
    <VStack position="block" px={["2rem", "4rem", "10rem"]}>
      <Text fontSize="55px" as="b">
        Contact
      </Text>
      <Text textColor="#8A8A8A">
        Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend
        tellus. Aenean leo ligula, porttitor eu, consequat vitae.
      </Text>
      <Flex display={["block", "block", "flex"]} p={4} w="100%">
        <FormControl pr={["0", "0", 2]}>
          <Input placeholder="Name..." />
        </FormControl>
        <FormControl pl={["0", "0", 2]} pt={[4, 4, 0]}>
          <Input placeholder="Email..." />
        </FormControl>
      </Flex>
      <FormControl p={4}>
        <Textarea placeholder="Your Message..." />
        <Box w="full" m="auto" textAlign="center" pt={4}>
          <Button>Submit</Button>
        </Box>
      </FormControl>
    </VStack>
  );
};

export default Contact;
