// Chakra UI imports
import {
  Box,
  Text,
  Image,
  Stack
} from "@chakra-ui/react";

// Image imports
import customization from "../../../assets/images/customization.png";

const CustomizeShipCard = ({ iconPath = customization, description = "Hundreds of customizations"}) => {
  return (
    <Box>
      <Stack direction={"column"} justifyContent={"center"} alignItems={"center"}>
        <Image src={iconPath} boxSize={"5rem"} bg={"secondary"} borderRadius={"3rem"} padding={"0.5rem"} />
        <Text color={"secondary"}>{description}</Text>
      </Stack>
    </Box>
  );
};

export default CustomizeShipCard;