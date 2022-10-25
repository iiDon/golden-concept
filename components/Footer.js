import { Text, Flex, VStack } from "@chakra-ui/react";
import Link from "next/link";

const Footer = () => {
  return (
    <Flex
      w="100%"
      alignItems="center"
      justifyContent="space-around"
      display={["inline-block", "inline-block", "flex"]}
      py={6}
    >
      <Text
        pl={6}
        textAlign={["center", "center", "left"]}
        w="100%"
        textColor="#fff"
      >
        Powered by Soso
      </Text>

      <Flex
        justifyContent="center"
        alignItems="center"
        w={[null, null, "60%"]}
        textColor="#fff"
      >
        <Link href="#">
          <Text cursor="pointer" px="25">
            Image Licensing{" "}
          </Text>
        </Link>
        <Link href="#">
          <Text cursor="pointer" px="25">
            Changelog
          </Text>
        </Link>
        <Link href="#">
          <Text cursor="pointer" px="25">
            Style Guide
          </Text>
        </Link>
      </Flex>
    </Flex>
  );
};

export default Footer;
