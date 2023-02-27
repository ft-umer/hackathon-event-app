import AppFooter from '@/components/footer/appFooter'
import AppHeader from '@/components/header/header'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react' 
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";


export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <ChakraProvider>
      <ToastContainer />
      <AppHeader/>
      <Component {...pageProps} />
      <AppFooter/>
      </ChakraProvider>
    </div>
  )
}
