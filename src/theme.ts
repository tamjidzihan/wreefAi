import { extendTheme, ThemeConfig } from "@chakra-ui/react";
import '@fontsource/paytone-one';
import '@fontsource-variable/readex-pro/hexp.css';

const config: ThemeConfig = {
  initialColorMode: 'dark'
}

const theme = extendTheme({
  config,
  fonts: {
    heading: `'Paytone One', sans-serif`,
    body: `'Readex Pro Variable', sans-serif`,
  },
})
export default theme


