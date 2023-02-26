import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import {
  Box,
  Flex,
  Heading,
  Text,
  Button,
  Icon,
  ButtonGroup,
  Divider,
  Stack,
  Grid,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
} from "@chakra-ui/react";
import Link from "next/link";
import { Center } from "@chakra-ui/react";
import { useState } from "react"
import { useRouter  } from "next/router";
import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";
import {auth, signInWithEmailAndPassword } from "config/firebase"
import { async } from "@firebase/util";
import { toast } from "react-toastify";

const inter = Inter({ subsets: ["latin"] });

export default function Login() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [loader, setLoader] = useState(false)
    const router = useRouter();

   const handleLogin =async()=>{
    try {
        setLoader(true);
        await signInWithEmailAndPassword (auth, email, password);
        console.log("User LoggedIn successfully");
        router.push('/')
    } catch (error) {
        console.log(error)
    }
    finally{
        setLoader(false);
    }
   }
  return (
    <>
      <Head>
        <title>Login</title>
      </Head>

      <Box bg="black" height={'100vh'}>
        <Center>
          <Box maxW="600px" p={4} m={6} textAlign="center">
            <Heading
            py={{ base: "10" }}
              as="h1"
              size="3xl"
              fontFamily="heading"
              fontWeight="bold"
              mb={6}
              color="white"
            >
              Login
            </Heading>
            <form>
              <FormControl id="email" mb={4}>
                <FormLabel color="white">Email :</FormLabel>
                <Input type="email" onChange={(e) => setEmail(e.target.value)} />
              </FormControl>
              <FormControl id="password" mb={4}>
                <FormLabel color="white">Password :</FormLabel>
                <Input type="password" onChange={(e) => setPassword(e.target.value)} />
              </FormControl>
              
              {loader ? <Button colorScheme="white" variant={'outline'} ml={0}>
                Loading...
              </Button> :<Button colorScheme="white" variant={'outline'} onClick={handleLogin} ml={0}>
                Login
              </Button>}
            </form>
          </Box>
        </Center>
      </Box>
    </>
  );
}
