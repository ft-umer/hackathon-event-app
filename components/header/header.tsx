import {
  Box,
  Flex,
  Button,
  Stack,
  useDisclosure,
  Heading,
} from "@chakra-ui/react";
import Link from "next/link";

export default function AppHeader() {
  const { isOpen, onToggle } = useDisclosure();

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

          <Link href={"/Login"}>
            <Button backgroundColor={'#141414'} color={'white'} className={'btn_header'}  fontSize={"sm"} fontWeight={400}>
              Sign In
            </Button>
          </Link>
          <Link href={"/SignUp"}>
            <Button backgroundColor={'#141414'} color={'white'} className={'btn_header'} fontSize={"sm"} fontWeight={400}>
              Sign Up
            </Button>
          </Link>
        </Stack>
      </Flex>

    </Box>
  );
}

