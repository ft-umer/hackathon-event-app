import { getAuth, onAuthStateChanged, signOut } from "@/config/firebase";
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
import { useEffect, useState } from "react";

export default function AppHeader() {
  const { isOpen, onToggle } = useDisclosure();
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  
  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      try
      {
        if (user) {
          setIsAuthenticated(true);
          setIsLoggedIn(true)
        } else {
          setIsLoggedIn(false)
        }
      }catch(error){
        console.log("error", error)
      }
      
  });
  }, [setIsAuthenticated, getAuth()]);
  
    const handleLogout = async () => {
     
      const auth = getAuth();
      try {
        await signOut(auth);
        router.push('/Login'); // redirect to login page after logout
      } catch (error) {
        console.log(error);
      }
      
    };

    if (!isAuthenticated) {
      return null; // return null to avoid showing the page for a moment
    }

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
           ( <Button onClick={handleLogout} backgroundColor={'#141414'} color={'white'} className={'btn_header'} fontSize={"sm"} fontWeight={400}>
           Logout
         </Button>)
          
            
            :

          
(<Link href={"/Login"}>
<Button backgroundColor={'#141414'} color={'white'} className={'btn_header'}  fontSize={"sm"} fontWeight={400}>
  Login
</Button>
</Link>)
 }       
        </Stack>
      </Flex>
      
    </Box>
  );
}

