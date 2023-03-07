import Head from "next/head";
import { Inter } from "next/font/google";
import {
  Box,
  Flex,
  Heading,
  Text,
  Button,
  Stack,
  Grid,
} from "@chakra-ui/react";
import Link from "next/link";
import { Center } from "@chakra-ui/react";
import { Card, CardBody } from "@chakra-ui/react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>My Event App</title>
      </Head>

      <Box bg="black" color="white" py={{ base: "6", md: "20" }}>
        <Center>
          <Box maxW="600px" padding={"4px"} margin={"6px"} textAlign="center">
            <Heading
              as="h1"
              size={{ base: "xl", md: "3xl" }}
              fontFamily="heading"
              fontWeight="bold"
              mb="4"
            >
              Syed's Event
            </Heading>
            <Text fontSize={{ base: "md", md: "lg" }} mb="6">
              The easiest way to create, manage, and track your events.
            </Text> 
            <Link href={'/AddEvent'}>
              <Button colorScheme="white" size={{ base: "sm", md: "lg" }} variant="outline">
                Add Events
              </Button>
            </Link>         
          </Box>
        </Center>
      </Box>

      <Box bg={"black"} padding={"2"} marginBottom={"1"} marginTop={"1"}>
        
        <Flex
          justifyContent="center"
          alignItems="center"
          flexDir={{ base: "column", md: "row" }}
        >
          <Grid templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }} gap={6}>
            <Card
              className={"card_hover"}
              maxW="xl"
              bg={"black"}
              border={"2px solid #333;"}
              color={'white'}
            >
              <CardBody>
                <Stack mt="1" spacing="3">
                  <Heading size="lg">Creating Events</Heading>
                  <Text>
                  The key to creating a successful event is to think about your audience and what they want to get out of the experience.

With the right team, resources, and vision, you can create an event that inspires, educates, and entertains your guests.
                  </Text>
                </Stack>
              </CardBody>
            </Card>
            <Card
              className={"card_hover"}
              maxW="xl"
              bg={"black"}
              border={"2px solid #333;"}
              color={'white'}
            >
              <CardBody>
                <Stack mt="1" spacing="3">
                  <Heading size="lg">Inviting Attendees</Heading>
                  <Text>
                  Consider using personalized invitations or special incentives to encourage attendance and make attendees feel valued.

Finally, make sure to provide clear instructions on how attendees can RSVP and any additional details they need to know before attending.
                  </Text>
                </Stack>
              </CardBody>
            </Card>
            <Card
              className={"card_hover"}
              maxW="xl"
              bg={"black"}
              border={"2px solid #333;"}
              color={'white'}
            >
              <CardBody>
                <Stack mt="1" spacing="3">
                  <Heading size="lg">Tracking RSVPs</Heading>
                  <Text>
                  Tracking RSVPs is a crucial part of managing an event.

Keeping track of RSVPs helps you plan and prepare for the right number of attendees.

To track RSVPs, you can use different methods such as online registration forms, email responses, or phone calls.
                  </Text>
                </Stack>
              </CardBody>
            </Card>
            <Card
              className={"card_hover"}
              maxW="xl"
              bg={"black"}
              border={"2px solid #333;"}
              color={'white'}
            >
              <CardBody>
                <Stack mt="1" spacing="3">
                  <Heading size="lg">Manage Events</Heading>
                  <Text>
                  Managing an event involves overseeing all the different aspects of the event to ensure that everything runs smoothly.

Some key tasks involved in managing events include setting a budget, securing a venue, arranging for vendors, and coordinating with speakers or performers.
                  </Text>
                </Stack>
              </CardBody>
            </Card>
          </Grid>
        </Flex>
      </Box>
      <Box bg="black" color="white" py={{ base: "10", md: "20" }}>
        <Center>
          <Box maxW="600px" padding={"4px"} margin={"6px"} textAlign="center">
            <Heading
              as="h2"
              size={{ base: "xl", md: "3xl" }}
              fontFamily="heading"
              fontWeight="bold"
              mb="6"
            >
              Get started today
            </Heading>
            <Text fontSize={{ base: "md", md: "lg" }}>
              Sign up now and start creating your first event in minutes.
            </Text>
            <Link href={'/SignUp'}>
            <Button colorScheme="white" size={{ base: "sm", md: "lg" }} marginTop={'5'} variant="outline">
              Sign Up
            </Button>
            </Link>
          </Box>
        </Center>
      </Box>
    </>
  );
}
