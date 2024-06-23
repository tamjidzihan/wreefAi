import { extendTheme, ThemeConfig } from "@chakra-ui/react";
import '@fontsource/space-mono/400.css';
import '@fontsource/space-mono/700.css';


const config: ThemeConfig = {
    initialColorMode: 'dark'
}

const theme = extendTheme({
    config,
    fonts: {
        heading: `'Space Mono', sans-serif`,
        body: `'Space Mono', sans-serif`,
      },
})
export default theme
