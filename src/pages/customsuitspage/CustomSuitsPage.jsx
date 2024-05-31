// Chakra UI imports
import {
  Container,
  Box,
  Text,
  Center,
  Stack,
  Flex,
  Link as CLink
} from "@chakra-ui/react";

import { Link as ReactRouterLink } from "react-router-dom";

// Component imports
import CustomPagesHeader from "./components/CustomPagesHeader";
import ImageSlider from "../homepage/components/ImageSlider";
import Footer from "../homepage/components/Footer";
import HowItWorksStepCard from "../menpage/components/HowItWorksStepCard";

const CustomSuitsPage = ({ isAirMenuOpen, setIsAirMenuOpen, whichSumAirMenuOption, setWhichSumAirMenuOption, isSubAirMenuOpen, setIsSubAirMenuOpen, isSubAirMenuProductMenuOpen, setIsSubAirMenuProductMenuOpen }) => {
  return (
    <div>
      <CustomPagesHeader
                  isAirMenuOpen={isAirMenuOpen} 
                  setIsAirMenuOpen={setIsAirMenuOpen} 
                  whichSumAirMenuOption={whichSumAirMenuOption}
                  setWhichSumAirMenuOption={setWhichSumAirMenuOption}
                  isSubAirMenuOpen={isSubAirMenuOpen}
                  setIsSubAirMenuOpen={setIsSubAirMenuOpen}
                  isSubAirMenuProductMenuOpen={isSubAirMenuProductMenuOpen}
                  setIsSubAirMenuProductMenuOpen={setIsSubAirMenuProductMenuOpen} />
      <Container bg={"primaryLight"} color={"secondary"} maxWidth={"100%"} paddingY={"5rem"}>
        <Stack direction={"column"} alignItems={"center"}>
          <Text marginTop={"3rem"} fontSize={"1.8rem"} letterSpacing={"0.2rem"}>Start with a base style</Text>
          <Box width={"100%"} marginTop={"2rem"}>
            <ImageSlider />
          </Box>
          <Box marginTop={"6rem"}>
            <Text textAlign={"center"} fontSize={"1.8rem"}><CLink as={ReactRouterLink} to={"/custom-clothing"}>Design your custom suit</CLink></Text>
            <Flex direction={"row"} columnGap={"18rem"} marginTop={"4rem"}>
              <HowItWorksStepCard />
              <HowItWorksStepCard />
              <HowItWorksStepCard />
            </Flex>
          </Box>
        </Stack>
      </Container>
      <Footer />
    </div>
  );
};

export default CustomSuitsPage;