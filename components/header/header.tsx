// import { Box, Flex, Heading,Button, IconButton, Image, Spacer } from "@chakra-ui/react";
// import Link from 'next/link';

// const AppHeader=()=> {
//   return (
//     <Box bg={"Black"} p={"5"} color={"white"}>
//       <Flex justifyContent="space-between">
//       <Box>
//         <Heading size={"lg"}>
//           <Link rel="stylesheet" href={"/"}>
//           <Heading className="logo">Syed's Events</Heading>
//           </Link>
//         </Heading>
//       </Box>
//       <Box>
//         <ul className="header_list" style={{ display: "flex", listStyleType: "none", justifyContent: "flex-end", gap: "20px" }}>
//           <li><Link rel="stylesheet" href="/Events"><Button colorScheme={"green"}>Events</Button></Link></li>
//           <li><Link rel="stylesheet" href="#"><Button colorScheme={"blue"}>Login</Button></Link></li>
//           <li><Link rel="stylesheet" href="#"><Button colorScheme={"orange"}>SignUp</Button></Link></li>
//         </ul>
//       </Box>
//     </Flex>
//     </Box>
//   );
// }

// export default AppHeader;

import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  Heading,
} from "@chakra-ui/react";
import Link from "next/link";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";

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

