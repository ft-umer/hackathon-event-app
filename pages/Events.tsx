import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react"
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
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  useDisclosure,
} from "@chakra-ui/react";
import Link from "next/link";
import { Center } from "@chakra-ui/react";
import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";
import { db } from "@/config/firebase";
import { eventTypes } from "@/types/eventTypes";
import { getDoc, collection, getDocs, deleteDoc, doc } from "firebase/firestore";
const inter = Inter({ subsets: ["latin"] });

export default function Events() {
  const [event, setEvent] = useState<eventTypes[]>([]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedEvent, setSelectedEvent] = useState<eventTypes | null>(null);

  useEffect(() => {
    getEvents();
  }, []);

  const eventDeleteHandler = async (item: eventTypes) => {
    try {
        // console.log(item.attachmentURL, item.attachmentURL.split('/'));
        
        // const desertRef = ref(storage, `todosImages/${item.description}.png`);
        // await deleteObject(desertRef)
        await deleteDoc(doc(db, "addEvent", item.id));
        let filteredEvent = event.filter((event: eventTypes) => item.id !== event.id)
        setEvent(filteredEvent)
    } catch (error) {
        alert(error)
    }
}

  const getEvents = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "addEvent"));
      let eventList: eventTypes[] = [];
      querySnapshot.forEach((doc) => {
        eventList.push({
          id: doc.id,
          title: doc.data().title,
          date: doc.data().date,
          time: doc.data().time,
          location: doc.data().location,
          description: doc.data().description,
        });
      });
      setEvent(eventList);
    } catch (error) {
      console.log(error);
    }
  };

  const handleEventClick = (event: eventTypes) => {
    setSelectedEvent(event);
    onOpen();
  }

  return (
    <>
      <Head>
        <title>Events</title>
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
              Events
            </Heading>
            <table style={{ padding: '10px'}}>
  <thead>
    <tr>
      <th style={{  padding:'15px'}}><Heading>Title Events</Heading></th>
      <th style={{  padding:'15px'}} colSpan={2}><Heading>Action</Heading></th>
    </tr>  
  </thead>
  <tbody>
    {event.map((event: eventTypes) => {
      return (
        <tr key={event.id}>
          <td style={{  padding:'15px'}}>
            <Button variant="link" onClick={() => handleEventClick(event)}><Heading size={'md'} fontSize={'17'} fontWeight={400}>{event.title}</Heading></Button>
          </td>
          <td style={{  padding:'15px'}}>
            <Button onClick={() => eventDeleteHandler(event)}>Delete</Button>
          </td>
          <td style={{  padding:'15px'}}>
          <Button onClick={() => eventDeleteHandler(event)}>Update</Button>
          </td>
        </tr>
      )
    })}
  </tbody>
</table>

          </Box>

        </Center>
      </Box>

      {selectedEvent && (
        <Modal isOpen={isOpen} onClose={onClose} styles={{ overlay: { backgroundColor: 'rgba(255, 0, 0, 0.75)' }, content: { backgroundColor: 'red' } }}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>{selectedEvent.title}</ModalHeader>
            <ModalBody>
              <Text>
                <b>Date:</b> {selectedEvent.date}
                </Text>
              <Text>
                <b>Time:</b> {selectedEvent.time}
              </Text>
              <Text>
                <b>Location:</b> {selectedEvent.location}
              </Text>
              <Text>
                <b>Description:</b> {selectedEvent.description}
              </Text>
            </ModalBody>
            <ModalFooter>
              <Button onClick={onClose} mr={3}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      )}
    </>
  );
}

