// components/layout.js

import Navbar from "./Navbar";
import { Grid, GridItem } from "@chakra-ui/react";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <>
      <Grid
        templateAreas={`"header header"
                  "main main"
                  "footer footer"`}
        h="200px"
        fontWeight="bold"
      >
        <GridItem area={"header"}>
          <Navbar />
        </GridItem>
        <GridItem area={"main"}>{children}</GridItem>
        <GridItem area={"footer"}>
          <Footer />
        </GridItem>
      </Grid>
    </>
  );
}
