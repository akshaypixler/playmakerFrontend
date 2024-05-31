// Chakra UI imports
import {
  Container,
  Box,
  Text
} from "@chakra-ui/react";

// Component imports
import SubAirMenuOptionsList from "./SubAirMenuOptionsList";
import SubAirMenuShopByLooksImageOption from "./SubAirMenuShopByLooksImageOption";

// Image imports
import bg1 from "../../../assets/images/bg1.png";

const options = ["Wedding", "business", "party", "casual", "vintage"];

const SubAirMenuOccassionOption = () => {
  return (
    <Container fontSize={"1.1rem"}>
      <Text color={"secondary"} marginTop={"4rem"}>Shop by occassion</Text>
      <SubAirMenuOptionsList options={options} />
      <Box marginTop={"3rem"}>
        <SubAirMenuShopByLooksImageOption image={bg1} text={"Wedding Collection"} />
      </Box>
    </Container>
  );
};

export default SubAirMenuOccassionOption;