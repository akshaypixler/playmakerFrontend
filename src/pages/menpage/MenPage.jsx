// Chakra UI imports
import {
  Container,
  Box,
  Text,
  Button,
  Center,
  Link as CLink,
  Flex,
  Stack
} from "@chakra-ui/react";

// Component imports
import NavBar from "../homepage/components/NavBar";
import ClothShowcaseCard from "./components/ClothShowcaseCard";
import HowItWorksStepCard from "./components/HowItWorksStepCard";
import Footer from "../homepage/components/Footer";

// Image imports
import suit from "../../assets/images/suit.png";
import tape from "../../assets/images/tape.png";

import NewNavBar from "../../commoncomponents/NewNavBar";

const MenPage = () => {
  return (
    <div>
      <NewNavBar />
      <Center>
        <Container bg={"primary"} width={"100%"} maxWidth={"100%"} paddingTop={"5rem"}>
          <Box>
            <Text textAlign={"center"} fontSize={"2rem"} color={"secondary"} fontWeight={"600"}>
              Custom tailor-made men garments
            </Text>
            <Text color={"secondary"} marginTop={"0.3rem"} textAlign={"center"}>
              At Playmaker you will find the tailor made garments you are looking for. Any kind of accessory and a great variety of product for men.
            </Text>
            <CLink>
              <Text textAlign={"center"} marginTop={"0.3rem"} color={"secondary"} fontWeight={"600"} fontSize={"1.6rem"} textDecor={"underline"}>Know More</Text>
            </CLink>
          </Box>
          <Container maxWidth={"100%"} marginTop={"8rem"} paddingX={"8.5rem"}>
            <Flex wrap={"wrap"} rowGap={"3rem"}>
              <ClothShowcaseCard />
              <ClothShowcaseCard />
              <ClothShowcaseCard />
              <ClothShowcaseCard />
              <ClothShowcaseCard />
              <ClothShowcaseCard />
            </Flex>
          </Container>
          <Container bg={"primaryLight"} width={"100%"} maxW={"100%"} marginTop={"4rem"} padding={"3rem"} color={"secondary"}>
            <Center>
              <Stack direction={"column"} alignItems={"center"} spacing={"4rem"}>
                <Box width={"70%"}>
                  <Text textAlign={"center"}>How it works</Text>
                  <Text textAlign={"center"} fontSize={"1.3rem"}>
                    Playmaker believes a unique wardrobe should be accessible to everyone. Our mission is simple: to give people the freedom to choose their own style and reveal their personality through their outfit. Every day. At an affordable price.
                  </Text>
                </Box>
                <Box>
                  <Stack direction={"row"} spacing={"14rem"}>
                    <HowItWorksStepCard />
                    <HowItWorksStepCard howItWorksCardImage={suit} howItWorksTitle={"DESIGN YOUR STYLE"} howItWorksCardText = "Personalize details such as the collar, button, threads color, cuffs. Explore more options!" />
                    <HowItWorksStepCard howItWorksCardImage={tape} howItWorksTitle="MEASURE YOURSELF" howItWorksCardText="Take your measurements wherever you are. You don't need a tailor, you just need a friend." />
                  </Stack>
                </Box>
              </Stack>
            </Center>
          </Container>
        </Container>
      </Center>
      <Footer />
    </div>
  );
};

export default MenPage;