import {
  Container,
  Stack,
  Box,
  Text,
  IconButton
} from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";

// Hooks imports
import { useState } from "react";

const AirMenu = ({ setIsAirMenuOpen, children, whichSumAirMenuOption, setWhichSumAirMenuOption, isSubAirMenuOpen, setIsSubAirMenuOpen }) => {

  return (
    <>
    <Container position={"fixed"} top={"5rem"} padding={"2rem"} bg={"primary"} color={"secondary"} borderRadius={"0.2rem"} w={"22rem"} zIndex={"1"} height={"42rem"}>
      <IconButton icon={<CloseIcon color={"secondary"} />} bg={"transparent"} marginLeft={"90%"} cursor={"pointer"} onClick={e => setIsAirMenuOpen(false)} />
      <Stack direction={"column"} spacing={"1rem"} fontSize={"1.2rem"}>
        <Box cursor={"pointer"}>
          <Text 
            onClick={e => {
              setWhichSumAirMenuOption("lookbooks");
              setIsSubAirMenuOpen(true);
            }}>
              Lookbooks
          </Text>
        </Box>
        <Box cursor={"pointer"}>
          <Text onClick={e => {
            setWhichSumAirMenuOption("clothing");
            setIsSubAirMenuOpen(true);
            }}>Clothing</Text>
        </Box>
        <Box cursor={"pointer"}>
          <Text 
            onClick={e => {
              setWhichSumAirMenuOption("occasion");
              setIsSubAirMenuOpen(true);
              }}>Occasion</Text>
        </Box>
        <Box cursor={"pointer"}>
          <Text 
            onClick={e => {
              setWhichSumAirMenuOption("accessories");
              setIsSubAirMenuOpen(true);
              }}>Accessories</Text>
        </Box>
        <Box cursor={"pointer"}>
          <Text>About</Text>
        </Box>
      </Stack>
    </Container>
    {isSubAirMenuOpen ? <Container position={"fixed"} top={"5rem"} left={"18rem"} zIndex={"0"} height={"42rem"} overflowY={"auto"} bg={"primaryLight"} w={"28rem"}>
      {children}
    </Container> : ""}
    </>
  );
};

export default AirMenu;