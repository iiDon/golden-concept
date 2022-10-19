import {
  Box,
  Button,
  Slide,
  useDisclosure,
  Lorem,
  Image,
  Flex,
  Text,
  VStack,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

import { useState } from "react";
import Navbar from "../components/Navbar";
import Link from "next/link";

export default function Home() {
  const { isOpen, onToggle } = useDisclosure();

  const images = [
    {
      title: "Brand Digital",
      descreiption: "Standing out by simply saying less",
      url: "/Brand.jpg",
    },
    {
      title: "Graphic Design",
      descreiption: "Design for one of the major figures of fashion",
      url: "/Graphic.jpg",
    },
    {
      title: "Industrial Design",
      descreiption: "Better Outcomes for All",
      url: "/Industrial.jpg",
    },
  ];

  return (
    <>
      <Navbar />
      <Box maxW={["23rem", "36rem", "70rem"]} m="auto" textAlign="center">
        <Text as="b" fontSize={["2rem", "3rem", "5rem"]} >
          Creating Action & Admiration Through Brand Design
        </Text>

        <Text textColor="#8A8A8A" py='54px' fontSize={["1.1rem", "1.2rem", "1.5rem"]} >
          We’re not just a digital agency. We’re a super-charged jet engine for
          acceleration and business growth.
        </Text>

        <Box>
          {images.map((image) => (
            <>
              <VStack justifyContent='center' alignItems='center'>
                <Text  textColor="#8A8A8A" as="b" fontSize={["1rem", "2rem", "3rem"]}>
                  {image.title}
                </Text>
                <Text py={5}>{image.descreiption}</Text>
                <Image pb={4} src={image.url} alt={image.title} />
              </VStack>
            </>
          ))}
        </Box>
      </Box>

      <Text textAlign="center" py={7}>Powered by Soso</Text>

      <Flex justifyContent="center" alignItems="center">
        <Link href="#">
          <Text px="25">Image Licensing </Text>
        </Link>
        <Link href="#">
          <Text px="25"> Changelog </Text>
        </Link>
        <Link href="#">
          <Text px="25"> Style Guide</Text>                                              
        </Link>
      </Flex>
    </>
  );
}
                      