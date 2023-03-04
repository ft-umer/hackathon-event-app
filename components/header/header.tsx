import { getAuth, signOut } from "@/config/firebase";
import {
  Box,
  Flex,
  Button,
  Stack,
  useDisclosure,
  Heading,
} from "@chakra-ui/react";
import Link from "next/link";
import router, { useRouter } from "next/router";
import { useState } from "react";

export default function AppHeader() {
  const { isOpen, onToggle } = useDisclosure();
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  
    const handleLogout = async () => {
      try{
        setIsLoggedIn(true)
      const auth = getAuth();
      try {
        await signOut(auth);
        router.push('/Login'); // redirect to login page after logout
      } catch (error) {
        console.log(error);
      }
      }finally{
        setIsLoggedIn(false)
      }
    };


  return (
    <Box bg={"black"} p={"2"} marginBottom={"1"}>
      <Flex py={{ base: 2 }} px={{ base: 4 }} align={"center"}>
        <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
          <Heading color={'white'}>
            <Link href="/">Syed's Event</Link>
          </Heading>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          direction={"row"}
          spacing={6}
        >
          <Link href="/Events">
            <Button backgroundColor={'#141414'} color={'white'} className={'btn_header'} fontSize={"sm"} fontWeight={400}>
              Events
            </Button>
          </Link>

          <Link href={"/SignUp"}>
            <Button backgroundColor={'#141414'} color={'white'} className={'btn_header'} fontSize={"sm"} fontWeight={400}>
              Sign Up
            </Button>
          </Link>
{ isLoggedIn ?
          
          <Link href={"/Login"}>
            <Button backgroundColor={'#141414'} color={'white'} className={'btn_header'}  fontSize={"sm"} fontWeight={400}>
              Login
            </Button>
          </Link>
            
            :

            <Button onClick={handleLogout} backgroundColor={'#141414'} color={'white'} className={'btn_header'} fontSize={"sm"} fontWeight={400}>
              Logout
            </Button>

 }       
        </Stack>
      </Flex>
      
    </Box>
  );
}

