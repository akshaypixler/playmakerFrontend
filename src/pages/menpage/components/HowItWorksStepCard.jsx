// Chakra UI imports
import {
  Box,
  Text,
  Image,
  Center,
  Stack
} from "@chakra-ui/react";

// Image imports
import fabric from "../../../assets/images/fabric.png";

const text = `
  Choose from hundreds of fabrics and colors. The decision on which fabric to choose for your next custom-made garment is perhaps the most important one.
`;

const HowItWorksStepCard = ({ howItWorksCardImage = fabric, howItWorksCardText = text, howItWorksTitle = "SELECT YOUR FABRICS" }) => {
  return (
    <Box width={"15rem"}>
      <Center>
        <Stack alignItems={"center"}>
        <Image src={howItWorksCardImage} boxSize={"5.5rem"} />
        <Text marginTop={"1rem"} fontSize={"0.8rem"} fontWeight={"700"}>{howItWorksTitle}</Text>
        <Text fontSize={"1rem"}>{howItWorksCardText}</Text>
        </Stack>
      </Center>
    </Box>
  );
};

export default HowItWorksStepCard;