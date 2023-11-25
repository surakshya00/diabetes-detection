import { extendTheme } from "@chakra-ui/react";
import { Open_Sans, Ubuntu } from "@next/font/google";

const openSans = Open_Sans({ subsets: ["cyrillic"] });
const ubuntu = Ubuntu({ subsets: ["cyrillic"], weight: ["400", "700"] });

export const theme = extendTheme({
  fonts: {
    openSans: openSans.style.fontFamily,
    ubuntu: ubuntu.style.fontFamily,
  },
  styles: {
    global: {
      body: {
        fontFamily: "openSans",
      },
    },
  },
  components: {
    Heading: {
      baseStyle: {
        fontFamily: "ubuntu",
      },
    },
  },
});
