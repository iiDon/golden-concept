import {
  Flex,
  Image,
  VStack,
  Slide,
  useDisclosure,
  Box,
  Text,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import Link from "next/link";

const Navbar = () => {
  const { isOpen, onToggle } = useDisclosure();

  const menu = [
    {
      name: "Home",
      url: "/",
    },
    {
      name: "About",
      url: "/about",
    },
    {
      name: "Contact",
      url: "/contact",
    },
  ];

  return (
    <Flex
      bgColor="#141414"
      justifyContent="space-between"
      p="2.5rem"
      zIndex={1}
      top={0}
      left={0}
      w="100%"
    >
      <Link href="/">
        <Image h={8} src="/logo.svg" alt="Golden  Concept" cursor="pointer" />
      </Link>
      <HamburgerIcon w={8} h={8} onClick={onToggle} cursor="pointer" />
      <Slide direction="top" in={isOpen} style={{ zIndex: 10 }}>
        <Box bg="rgb(44, 44, 44)" h="100vh">
          <Flex color="white" justifyContent="space-between" p="2.5rem">
            <Link href="/">
              <Image
                onClick={onToggle}
                h={8}
                src="/logo.svg"
                alt="Golden  Concept"
                cursor="pointer"
              />
            </Link>
            <CloseIcon w={6} h={8} onClick={onToggle} cursor="pointer" />
          </Flex>
          <Flex alignItems="center" h="70vh">
            <VStack spacing="2rem" w="100%">
              {menu.map((item) => (
                <Link href={item.url} key={item.name}>
                  <Text
                    onClick={onToggle}
                    as="b"
                    fontSize={["1.5rem", "2rem", "3rem"]}
                    cursor="pointer"
                    _hover={{
                      paddingLeft: "1.5%",
                      color: "rgb(255, 255, 255, 0.5)",
                    }}
                  >
                    {item.name}
                  </Text>
                </Link>
              ))}
            </VStack>
          </Flex>
        </Box>
      </Slide>
    </Flex>
  );
};

export default Navbar;
