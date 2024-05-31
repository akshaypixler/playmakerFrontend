// Chakra UI imports
import {
  Container,
  Box,
  Text,
  Button,
  Stack,
  Image
} from "@chakra-ui/react";

import { Link as ReactRouterLink } from "react-router-dom";

// Image imports
import menPageImage1 from "../../../assets/images/menPageImage1.png";

// Component imports
import ClothShowcaseCardItemsList from "./ClothShowcaseCardItemsList";

const ClothShowcaseCard = ({ cardImage = menPageImage1, cardTitle = "Custom Suits", price = 299, cardListItems = ["Custom Suits", "Peaky Blinder Suits", "Marriage Suits"] }) => {
  return (
    <Container>
      <Stack direction={"row"}>
        <Box>
          <Image src={cardImage} alt="..." height={"30rem"}  />
        </Box>
        <Box padding={"1rem"}>
          <Text fontSize={"1.8rem"} color={"secondary"}>{cardTitle}</Text>
          <Text fontSize={"1rem"} marginTop={"1rem"} color={"secondary"}>from ${price}</Text>
          <Button as={ReactRouterLink} to={"/custom-clothing"} bg={"secondary"} marginTop={"1.5rem"} color={"primary"} paddingY={"1.5rem"} paddingX={"0.8rem"} size={"lg"} borderRadius={"1.8rem"}>Start Designing</Button>
          <Box marginTop={"1.1rem"}>
            <ClothShowcaseCardItemsList listItems={cardListItems} />
          </Box>
        </Box>
      </Stack>
    </Container>
  );
};

export default ClothShowcaseCard;