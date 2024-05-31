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

const options = ["Suits", "Shirts", "Blazers", "Pants", "Jeans", "Chinos", "Tuxedos"];

const SubAirMenuClothingOption = ({ setIsSubAirMenuProductMenuOpen }) => {
  return (
    <Container fontSize={"1.1rem"}>
      <Text color={"secondary"} marginTop={"4rem"}>Shop by product</Text>
      <SubAirMenuOptionsList setIsSubAirMenuProductMenuOpen={setIsSubAirMenuProductMenuOpen} options={options} />
      <Box marginTop={"3rem"}>
        <SubAirMenuShopByLooksImageOption image={bg1} text={"Spring-Summer"} />
      </Box>
    </Container>
  );
};

export default SubAirMenuClothingOption;