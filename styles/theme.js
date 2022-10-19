import { extendTheme } from "@chakra-ui/react";
import "@fontsource/red-hat-display"
export const theme = extendTheme({
  fonts: {
    heading: "Red Hat Display",
    body: "Red Hat Display",
  },
  colors: {
    bg: "#141414",
  },

  styles: {
    global: {
      body: {
        bg: "bg",
        color: "white",
      },
    },
  },
});
