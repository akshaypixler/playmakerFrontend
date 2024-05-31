// Chakra UI imports
import {
  Container,
  Box,
  Text
} from "@chakra-ui/react";

// Component imports
import SubAirMenuShopByLooksImageOption from "./SubAirMenuShopByLooksImageOption";

// Image imports
import bg1 from "../../../assets/images/bg1.png";
import bg2 from "../../../assets/images/bg2.jpg";
import bg3 from "../../../assets/images/bg3.jpg";
import bg from "../../../assets/images/bg.jpg";

const SubAirMenuShopByLooks = () => {
  return (
    <Container maxW={"100%"} w={"100%"} fontSize={"1.1rem"}>
      <Text color={"secondary"} marginTop={"4rem"}>Shop by looks</Text>
      <SubAirMenuShopByLooksImageOption image={bg1} text={"Spring-Summer"} />
      <SubAirMenuShopByLooksImageOption image={bg2} text={"Outfit ideas"} />
      <SubAirMenuShopByLooksImageOption image={bg3} text={"Collections"} />
      <SubAirMenuShopByLooksImageOption image={bg} text={"Wedding collection"} />
    </Container>
  );
};

export default SubAirMenuShopByLooks;