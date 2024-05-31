// Chakra UI imports
import {
  Container,
  Box,
  Text,
  Flex,
  Image,
  Center
} from "@chakra-ui/react";

// Images imports
import hockertyCustomClothesImage from "../../../assets/images/hockertyCustomClothingImage.png";

const TechForFitComponent = () => {
  return (
    <Container w={"100%"} maxW={"100%"} paddingY={"5rem"} paddingX={"8rem"} bg={"primaryLight"} color={"secondary"}>
      <Center>
        <Flex columnGap={"5rem"} maxW={"80%"}>
          <Box maxW={"100%"} marginTop={"7rem"}>
            <Text fontSize={"4rem"} lineHeight={"4.5rem"}>Tech for a perfect fit</Text>
            <Text marginTop={"2rem"} color={"white"}>
              When your clothes are made with care, you can feel it. Before our tailors handcraft your piece, our algorithm uses a decade’s worth of sizing data to make sure it fits you right. Hard to believe, easy to prove.
            </Text>
          </Box>
          <Box>
            <Image width={"110rem"} src={hockertyCustomClothesImage} alt="..." />
          </Box>
        </Flex>
      </Center>
    </Container>
  );
};

export default TechForFitComponent;