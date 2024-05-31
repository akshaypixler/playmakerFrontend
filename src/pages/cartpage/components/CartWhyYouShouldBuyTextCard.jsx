// Chakra UI imports
import {
  Container,
  Box,
  Text
} from "@chakra-ui/react";

const CartWhyYouShouldBuyTextCard = ({ titleText, paraText, boxWidth = "20rem", boxHeight = "20rem" }) => {
  return (
    <Box padding={"1rem"} bg={"primaryLight"} width={boxWidth} height={boxHeight}>
      <Box sx={{border : "1px solid #C88F48"}} padding={"0.8rem"} color={"secondary"}>
        <Text fontSize={"1.5rem"} fontWeight={"600"} lineHeight={"1.7rem"} textAlign={"center"}>{titleText}</Text>
        <Text fontSize={"1.2rem"} textAlign={"center"} marginTop={"1.5rem"}>{paraText}</Text>
      </Box>
    </Box>
  );
};

export default CartWhyYouShouldBuyTextCard;