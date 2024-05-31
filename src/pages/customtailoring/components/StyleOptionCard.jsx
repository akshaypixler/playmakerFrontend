// Chakra UI imports
import {
  Box,
  Text,
  Flex,
  Stack,
  Image
} from "@chakra-ui/react";

// Image imports
import collar from "../../../assets/images/icons/collar.png";

const StyleOptionCard = ({ img = collar, text = "New Kent", imgWidth = "5.5rem", imgPadding = "0.5rem", imgBorderRadius = "2rem" }) => {
  return (
    <Box cursor={"pointer"}>
      <Stack direction={"column"} alignItems={"center"}>
        <Image src={img} width={imgWidth} bg={"secondary"} padding={imgPadding} borderRadius={imgBorderRadius} />
        <Text color={"secondary"} fontSize={"0.8rem"} lineHeight={"15px"} textAlign={"center"}>{text}</Text>
      </Stack>
    </Box>
  );
};

export default StyleOptionCard;