import Head from "next/head";
import { Inter } from "next/font/google";
import { useState } from "react"
import { useRouter  } from "next/router";
import { toast } from "react-toastify";
import {
  Box,
  Heading,
  Button,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { Center } from "@chakra-ui/react";
import {auth,createUserWithEmailAndPassword} from "config/firebase"
const inter = Inter({ subsets: ["latin"] });

export default function SignUp() {
    const [UserName, setUserName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [loader, setLoader] = useState(false)
    const router = useRouter();
    

    const handleSubmit = async () => {      
      try {
        setLoader(true);
        if (password.length < 6) {
          // Show a toast message if the password is less than 6 characters
          toast.error('Password should be at least 6 characters long' , {
           position: toast.POSITION.TOP_CENTER
          });
          
          return;
        }
       
        await createUserWithEmailAndPassword(auth, email, password);
        console.log("User created successfully");
        router.push('/Login')
      } catch (e) {
        console.error(e);
      }
      finally{
        setLoader(false)
      }
    };
  return (
    <>
      <Head>
        <title>Sign Up</title>
      </Head>

      <Box bg="black">
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
              Sign Up
            </Heading>
            <form>
            <FormControl id="name" mb={4}>
                <FormLabel color="white">Name :</FormLabel>
                <Input type="text" placeholder="John Doe" onChange={(e) => setUserName(e.target.value)}/>
              </FormControl>
              <FormControl id="email" mb={4}>
                <FormLabel color="white">Email :</FormLabel>
                <Input type="email" placeholder="abc@xyz.com" onChange={(e) => setEmail(e.target.value)} />
              </FormControl>
              <FormControl id="password" mb={4}>
                <FormLabel color="white">Password :</FormLabel>
                <Input type="password" placeholder="**********" onChange={(e) => setPassword(e.target.value)} />
              </FormControl>
              
              {loader ? <Button backgroundColor={'#141414'} color={'white'} className={'btn_header'} ml={0}>Loading...</Button> : <Button onClick={handleSubmit} backgroundColor={'#141414'} color={'white'} className={'btn_header'} ml={0}>
                Sign Up
              </Button>}
            </form>
          </Box>
        </Center>
      </Box>
    </>
  );
}

