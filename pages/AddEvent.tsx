import Head from "next/head";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react"
import {
  Box,
  Heading,
  Button,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { Center } from "@chakra-ui/react";
import { eventTypes } from "@/types/eventTypes";
import { addDoc, collection } from "firebase/firestore";
import { db, getAuth, onAuthStateChanged } from "@/config/firebase";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
const inter = Inter({ subsets: ["latin"] });

export default function AddEvent() {
    const [event, setEvent] = useState<eventTypes[]>([])
    const [title, setTitle] = useState<string>("")
    const [date, setDate] = useState<string>("")
    const [time, setTime] = useState<string>("")
    const [location, setLocation] = useState<string>("")
    const [description, setDescription] = useState<string>("")
    const [loader, setLoader] = useState(false)
    const router = useRouter();
    const [isAuthenticated, setIsAuthenticated] = useState(false)
   
    useEffect(() => {
      const auth = getAuth();
      onAuthStateChanged(auth, (user) => {
        try{
          if (user) {
            setIsAuthenticated(true);
            setLoader(true)
          } else {
            router.push('/Login'); // redirect to login page if user is not logged in
          }
        }
        finally{
          setLoader(false)
        }
      });
    }, [router]);

    const onAddEvent = async() =>{

      if (!title || !date || !time || !location || !description) {
        toast.error('Please fill in all fields!' , {
          position: toast.POSITION.TOP_CENTER
         });
        return;
      }

        const newDoc = {
            title,
            date,
            time,
            location,
            description
          };
          try {
            setLoader(true)
            const docRef = await addDoc (collection(db, "addEvent"), newDoc)
            console.log("Document written with ID: ", docRef.id);
            alert("Data Successfully added!")
            setEvent([...event, { ...newDoc, id: docRef.id }]);
          } catch (error) {
            
          }
          finally{
            setLoader(false);
          }
    }

 if (!isAuthenticated) {
      return null; // return null to avoid showing the page for a moment
    }

  return (
    <>  
      <Head>
        <title>Add Events</title>
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
                <Input type="text" placeholder={"Write a title"} onChange={(e) => setTitle(e.target.value)}/>
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
                <Input type="text" placeholder={"Location"} onChange={(e) => setLocation(e.target.value)}/>
              </FormControl>
              <FormControl id="description" mb={4}>
  <FormLabel color="white">Description :</FormLabel>
  <Input type="text" height={'100px'} onChange={(e) => setDescription(e.target.value)}
    _placeholder={{ position: 'absolute', top: '2', left: '4' }}
    placeholder="Description"
  />
</FormControl>

              
{loader ? (
  <Button colorScheme="white" variant="outline" ml={0}>
    Loading...
  </Button>
) : (
  <Button
    fontWeight="400"
    backgroundColor="#141414"
    color="white"
    className="btn_header"
    onClick={onAddEvent}
    ml={0}
  >
    Add Event
  </Button>
)}
            </form>
          </Box>
        </Center>
      </Box>
    </>
  );
}

