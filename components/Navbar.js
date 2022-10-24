import {
  Button,
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
    <>
      <Flex
        bgColor="#141414"
        justifyContent="space-between"
        p="2.5rem"
        position="fixed"
        w="100%"
      >
        <Image h={8} src="/logo.svg" alt="Golden  Concept" />
        <HamburgerIcon w={8} h={8} onClick={onToggle} cursor="pointer" />
        <Slide direction="top" in={isOpen} style={{ zIndex: 10 }}>
          <Box bg="rgb(44, 44, 44)" h="100vh">
            <Flex color="white" justifyContent="space-between" p="2.5rem">
              <Image h={8} src="/logo.svg" alt="Golden  Concept" />
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
                      _hover={{ paddingLeft: '1.5%', color: "rgb(255, 255, 255, 0.5)" }}
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
    </>
  );
};

export default Navbar;

{
  /* <VStack spacing="2rem" align="flex-start">
                {menu.map((item) => (
                    <Button
                        key={item.name}
                        variant="ghost"
                        color="white"
                        _hover={{ bg: "transparent" }}
                        _active={{ bg: "transparent" }}
                        _focus={{ bg: "transparent" }}
                    >
                        {item.name}
                    </Button>
                ))}
            </VStack> */
}
