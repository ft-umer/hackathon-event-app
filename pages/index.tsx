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
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Center } from "@chakra-ui/react";
import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>My Event App</title>
      </Head>

      <Box bg="black" py={{ base: "10", md: "20" }}>
        <Center>
          <Box maxW="600px" padding={"4px"} margin={"6px"} textAlign="center">
            <Heading
              as="h1"
              size="3xl"
              fontFamily="heading"
              fontWeight="bold"
              mb="6"
            >
              Syed's Event App
            </Heading>
            <Text fontSize="lg" mb="10">
              The easiest way to create, manage, and track your events.
            </Text> 
            <Link href={'/AddEvent'}>
            <Button colorScheme="white" size="lg" variant="outline">
              Add Events
            </Button>
            </Link>         
          </Box>
        </Center>
      </Box>

      <Box bg={"black"} padding={"4"} marginBottom={"1"} marginTop={"1"}>
        
        <Flex
          justifyContent="center"
          alignItems="center"
          flexDir={{ base: "column", md: "row" }}
        >
          <Grid templateColumns={["repeat(2, 1fr)"]} gap={6}>
            <Card
              className={"card_hover"}
              maxW="xl"
              bg={"black"}
              border={"2px solid var(--chakra-colors-chakra-body-bg);"}
            >
              <CardBody>
                <Stack mt="1" spacing="3">
                  <Heading size="lg">Creating Events</Heading>
                  <Text>
                    This sofa is perfect for modern tropical spaces, baroque
                    inspired spaces, earthy toned spaces and for people who love
                    a chic design with a sprinkle of vintage design.
                  </Text>
                </Stack>
              </CardBody>
            </Card>
            <Card
              className={"card_hover"}
              maxW="xl"
              bg={"black"}
              border={"2px solid var(--chakra-colors-chakra-body-bg);"}
            >
              <CardBody>
                <Stack mt="1" spacing="3">
                  <Heading size="lg">Inviting Attendees</Heading>
                  <Text>
                    This sofa is perfect for modern tropical spaces, baroque
                    inspired spaces, earthy toned spaces and for people who love
                    a chic design with a sprinkle of vintage design.
                  </Text>
                </Stack>
              </CardBody>
            </Card>
            <Card
              className={"card_hover"}
              maxW="xl"
              bg={"black"}
              border={"2px solid var(--chakra-colors-chakra-body-bg);"}
            >
              <CardBody>
                <Stack mt="1" spacing="3">
                  <Heading size="lg">Tracking RSVPs</Heading>
                  <Text>
                    This sofa is perfect for modern tropical spaces, baroque
                    inspired spaces, earthy toned spaces and for people who love
                    a chic design with a sprinkle of vintage design.
                  </Text>
                </Stack>
              </CardBody>
            </Card>
            <Card
              className={"card_hover"}
              maxW="xl"
              bg={"black"}
              border={"2px solid var(--chakra-colors-chakra-body-bg);"}
            >
              <CardBody>
                <Stack mt="1" spacing="3">
                  <Heading size="lg">Manage Events</Heading>
                  <Text>
                    This sofa is perfect for modern tropical spaces, baroque
                    inspired spaces, earthy toned spaces and for people who love
                    a chic design with a sprinkle of vintage design.
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
              size="2xl"
              fontFamily="heading"
              fontWeight="bold"
              mb="6"
            >
              Get started today
            </Heading>
            <Text fontSize="xl" mb="10">
              Sign up now and start creating your first event in minutes.
            </Text>
            <Link href={'/SignUp'}>
            <Button colorScheme="white" size="lg" variant="outline">
              Sign Up
            </Button>
            </Link>
          </Box>
        </Center>
      </Box>
    </>
  );
}
