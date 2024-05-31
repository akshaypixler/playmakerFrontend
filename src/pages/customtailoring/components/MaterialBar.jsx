import {
  Box,
  Text,
  Flex,
  Stack,
  InputGroup,
  InputLeftAddon,
  Input,
  Button
} from "@chakra-ui/react";

// Component imports
import MaterialCard from "./MaterialCard";

// Icon imports
import {
  Search2Icon
} from "@chakra-ui/icons";
import { BiSlider } from "react-icons/bi";

// CSS imports
import "../css/custom-tailoring.css";


const MaterialBar = ({ materials, setShirtMaterial, isFilterMenuOpen, setIsFilterMenuOpen }) => {
  return (
    <Box>
      <Stack direction={"column"}>
        <Box>
          <Stack direction={"row"} alignItems={"center"} spacing={"1rem"}>
            <InputGroup border={"1px solid #C88F48"}>
              <InputLeftAddon bg={"transparent"} border={"none"}>
                <Search2Icon color={"secondary"} />
                <Input type="text" placeholder={"Search material"} width={"80%"} border={"none"} />
              </InputLeftAddon>
            </InputGroup>
            <Button leftIcon={<BiSlider style={{ fontSize: "1.2rem", color: "#C88F48" }} />} color={"#C88F48"} paddingX={"2rem"} size={"md"} bg={"transparent"} border={"1px solid #C88F48"} onClick={e => {setIsFilterMenuOpen(v => !v)}}>{isFilterMenuOpen ? "Hide" : "Filters"}</Button>
            <Text color={"secondary"}>239/239</Text>
          </Stack>
        </Box>
        <Flex direction={"row"} columnGap={"1rem"} rowGap={"1rem"} wrap={"wrap"}>
          {materials.map((ele, index) => {
            return (
              <Box width={"8rem"} key={index}>
                <MaterialCard material={ele} setShirtMaterial={setShirtMaterial} />
              </Box>
            );
          })}
          <Box width={"8rem"}>
            <MaterialCard />
          </Box>
          <Box width={"8rem"}>
            <MaterialCard />
          </Box>
          <Box width={"8rem"}>
            <MaterialCard />
          </Box>
          <Box width={"8rem"}>
            <MaterialCard />
          </Box>
          <Box width={"8rem"}>
            <MaterialCard />
          </Box>
        </Flex>
      </Stack>
    </Box>
  );
};

export default MaterialBar;