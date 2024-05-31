// Chakra UI imports
import {
  Box,
  Text,
  Image,
  Stack,
  Input,
  Flex,
  Checkbox,
  Radio,
  RadioGroup,
  Button,
  IconButton
} from "@chakra-ui/react";

// Hooks imports
import { useState } from "react";

import { PlusSquareIcon } from "@chakra-ui/icons";

import monogramThread001 from "../../../assets/images/icons/monogramThread001.png";

import "../css/custom-tailoring.css";

const AccentBar = ({ monogramText, setMonogramText, monogramThreadColor, setMonogramThreadColor, monogramPosition, setMonogramPosition }) => {


  return (
    <Box>
      <Stack direction={"column"}>
        <Box padding={"1rem"}>
          <Text color={"secondary"} marginBottom={"1rem"}>Add embroidery(+4$)</Text>
          <Input
            type="text"
            value={monogramText}
            placeholder="Enter text"
            width={"10rem"}
            color={"secondary"}
            onChange={e => setMonogramText(e.target.value)} />
        </Box>
        <Box padding={"1rem"}>
          <Text color={"secondary"} marginBottom={"1rem"}>Monogram thread color:</Text>
          <Flex direction={"row"} wrap="wrap" columnGap={"2rem"} rowGap={"2rem"} padding={"2rem"}>
            <Image src={monogramThread001} boxSize={"2.5rem"} bg={"white"} onClick={e => setMonogramThreadColor("White")} />
            <Image src={monogramThread001} boxSize={"2.5rem"} bg={"black"} onClick={e => setMonogramThreadColor("Black")} />
            <Image src={monogramThread001} boxSize={"2.5rem"} bg={"orange"} onClick={e => setMonogramThreadColor("Orange")} />
            <Image src={monogramThread001} boxSize={"2.5rem"} bg={"red"} onClick={e => setMonogramThreadColor("Red")} />
            <Image src={monogramThread001} boxSize={"2.5rem"} bg={"brown"} onClick={e => setMonogramThreadColor("Brown")} />
            <Image src={monogramThread001} boxSize={"2.5rem"} bg={"yellow"} onClick={e => setMonogramThreadColor("Yellow")} />
            <Image src={monogramThread001} boxSize={"2.5rem"} bg={"green"} onClick={e => setMonogramThreadColor("Green")} />
            <Image src={monogramThread001} boxSize={"2.5rem"} bg={"blue"} onClick={e => setMonogramThreadColor("Blue")} />
          </Flex>
        </Box>
        <Box padding={"1rem"}>
          <Text color={"secondary"}>Initials position:</Text>
          <RadioGroup defaultValue={"chest"} value={monogramPosition}>
            <Stack direction={"row"} spacing={"2rem"}>
              <Radio name="chest" value="chest" onChange={e => setMonogramPosition(e.target.value)}><Text color={"secondary"}>CHEST</Text></Radio>
              <Radio name="chest" value="cuff" onChange={e => setMonogramPosition(e.target.value)}><Text color={"secondary"}>CUFF</Text></Radio>
            </Stack>
          </RadioGroup>
        </Box>
      </Stack>
    </Box>
  );
};

export default AccentBar;