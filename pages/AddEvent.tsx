import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import { useState } from "react"
import { useRouter  } from "next/router";
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
import { eventTypes } from "@/types/eventTypes";
import { addDoc, collection, getDoc } from "firebase/firestore";
import { db } from "@/config/firebase";
const inter = Inter({ subsets: ["latin"] });

export default function SignUp() {
    const [event, setEvent] = useState<eventTypes>()
    const [title, setTitle] = useState<string>("")
    const [date, setDate] = useState<string>("")
    const [time, setTime] = useState<string>("")
    const [location, setLocation] = useState<string>("")
    const [description, setDescription] = useState<string>("")
    const [loader, setLoader] = useState(false)

    const onAddEvent = async() =>{
        const newDoc = {
            title,
            date,
            time,
            location,
            description
          };
          try {
            const docRef = await addDoc (collection(db, "addEvent"), newDoc)
            console.log("Document written with ID: ", docRef.id);
            alert("Data Successfully added!")
            setEvent([...event, { ...newDoc, id: docRef.id }]);
          } catch (error) {
            
          }
    }



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
              Add Events
            </Heading>
            <form>
            <FormControl id="title" mb={4}>
                <FormLabel color="white">Title :</FormLabel>
                <Input type="text"  onChange={(e) => setTitle(e.target.value)}/>
              </FormControl>
              <FormControl id="date" mb={4}>
                <FormLabel color="white">Date :</FormLabel>
                <Input type="date"  onChange={(e) => setDate(e.target.value)}/>
              </FormControl>
              <FormControl id="time" mb={4}>
                <FormLabel color="white">Time :</FormLabel>
                <Input type="time"  onChange={(e) => setTime(e.target.value)}/>
              </FormControl>
              <FormControl id="location" mb={4}>
                <FormLabel color="white">Loaction :</FormLabel>
                <Input type="text"  onChange={(e) => setLocation(e.target.value)}/>
              </FormControl>
              <FormControl id="description" mb={4}>
                <FormLabel color="white">Description :</FormLabel>
                <Input type="text"  onChange={(e) => setDescription(e.target.value)}/>
              </FormControl>
              
             {loader ? <Button colorScheme="white" variant={'outline'} ml={0}>
                Loading...
              </Button>:<Button onClick={onAddEvent} colorScheme="white" variant={'outline'} ml={0}>
                Add Event
              </Button>}
            </form>
          </Box>
        </Center>
      </Box>
    </>
  );
}

