
import { extendTheme, ThemeConfig } from "@chakra-ui/react"

const config: ThemeConfig = {
    initialColorMode: 'dark',
    useSystemColorMode: false
}

export const theme = extendTheme({config}, {
  colors: {
    brand: {
      100: "#25D366",
    },
  },
  styles: {global: ()=> ({body: {bg: 'whiteAlpha.200'}})}
})