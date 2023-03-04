import Head from "next/head";
import { Inter } from "next/font/google";
import {
  Box,
  Heading,
  Button,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import Link from "next/link";
import { Center } from "@chakra-ui/react";
import { useState } from "react";
import { useRouter } from "next/router";
import { auth, signInWithEmailAndPassword } from "config/firebase";
import { toast } from "react-toastify";

const inter = Inter({ subsets: ["latin"] });

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loader, setLoader] = useState(false);
  const router = useRouter();
  

  const handleLogin = async () => {
    try {
      setLoader(true);
      await signInWithEmailAndPassword(auth, email, password);
      console.log("User LoggedIn successfully");
      // setIsLoggedIn(true);
      router.push("/AddEvent");
    } catch (error) {
      console.log(error);
      toast.error("Invalid email or password", {
        position: toast.POSITION.TOP_CENTER,
      });
    } finally {
      setLoader(false);
    }
  };
  return (
    <>
      <Head>
        <title>Login</title>
      </Head>

      <Box bg="black" height={"100vh"}>
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
                <Input
                  type="email"
                  placeholder="abc@xyz.com"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormControl>
              <FormControl id="password" mb={4}>
                <FormLabel color="white">Password :</FormLabel>
                <Input
                  type="password"
                  placeholder="********"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </FormControl>
              <Box marginBottom={"5"} color={"white"}>
                <p>
                Don't having an account?__
                  <Link href="/SignUp">
                    Sign Up
                  </Link>
                </p>
              </Box>
              {loader ? (
                <Button
                  backgroundColor={"#141414"}
                  color={"white"}
                  className={"btn_header"}
                  ml={0}
                >
                  Loading...
                </Button>
              ) : (
                <Button
                  backgroundColor={"#141414"}
                  color={"white"}
                  className={"btn_header"}
                  onClick={handleLogin}
                  ml={0}
                >
                  Login
                </Button>
              )}
            </form>
          </Box>
        </Center>
      </Box>
    </>
  );
}
