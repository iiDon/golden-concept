import { Box, Image, Text, VStack } from "@chakra-ui/react";
import Link from "next/link";

export default function Home() {
  const images = [
    {
      title: "Brand Digital",
      descreiption: "Standing out by simply saying less",
      url: "/Brand.jpg",
      link: "/project/standing-out-by-simply-saying-less",
    },
    {
      title: "Graphic Design",
      descreiption: "Design for one of the major figures of fashion",
      url: "/Graphic.jpg",
      link: "/project/design-for-one-of-the-major-figures-of-fashion",
    },
    {
      title: "Industrial Design",
      descreiption: "Better Outcomes for All",
      url: "/Industrial.jpg",
      link: "/project/better-outcomes-for-all",
    },
  ];

  return (
    <>
      <Box
        maxW={["23rem", "36rem", "70rem"]}
        m="auto"
        textAlign="center"
        zIndex={0}
      >
        <Text as="b" fontSize={["2rem", "3rem", "5rem"]}>
          Creating Action & Admiration Through Brand Design
        </Text>

        <Text
          textColor="#8A8A8A"
          py="54px"
          fontSize={["1.1rem", "1.2rem", "1.5rem"]}
        >
          We’re not just a digital agency. We’re a super-charged jet engine for
          acceleration and business growth.
        </Text>

        <Box>
          {images.map((image) => (
            <Link href={image.link} key={image.link}>
              <VStack
                justifyContent="center"
                alignItems="center"
                cursor="pointer"
              >
                <Text
                  textColor="#8A8A8A"
                  as="b"
                  fontSize={["1rem", "2rem", "3rem"]}
                >
                  {image.title}
                </Text>
                <Text py={5}>{image.descreiption}</Text>
                <Image pb={4} src={image.url} alt={image.title} />
              </VStack>
            </Link>
          ))}
        </Box>
      </Box>
    </>
  );
}
