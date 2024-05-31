// Chakra UI imports
import {
  Container,
  Text
} from "@chakra-ui/react";

// Component imports
import SubAirMenuOptionsList from "./SubAirMenuOptionsList";

const options = ["Ties", "Cufflinks", "Belts", "Bow-Ties", "Scarfs", "socks"];

const SubAirMenuAccessoriesOption = () => {
  return (
    <Container fontSize={"1.1rem"}>
      <Text color={"secondary"} marginTop={"4rem"}>Shop Accessories</Text>
      <SubAirMenuOptionsList options={options} />
    </Container>
  );
}

export default SubAirMenuAccessoriesOption;