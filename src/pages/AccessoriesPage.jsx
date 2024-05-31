import { Container, Box, Stack, Flex, Text } from "@chakra-ui/react";

import AccessoriesCard from "../commoncomponents/AccessoriesCard";
import Footer from "./homepage/components/Footer";

import corbata from "../assets/images/corbata.jpg";
import tirantes from "../assets/images/tirantes.jpg";
import pajarita from "../assets/images/pajarita.jpg";
import panuelo from "../assets/images/panuelo.jpg";
import gemelos from "../assets/images/gemelos.jpg";
import cinturon from "../assets/images/cinturon.jpg";
import bufandas from "../assets/images/bufandas.jpg";
import fajin from "../assets/images/fajin.jpg";
import calcetines from "../assets/images/calcetines.jpg";

const AccessoriesPage = () => {
  return (
    <Container width={"100%"} maxW={"100%"} padding={0}>
      <Stack direction={"column"}>
        <Box width={"100%"}>
          <Text textAlign={"center"} fontSize={"2rem"}>
            Accessories
          </Text>
        </Box>
        <Box width={"70%"} marginX={"auto"}>
          <Text textAlign={"center"} fontSize={"1rem"}>
            Ties, cufflinks, belts, bowties, cummerbunds, handkerchief,
            suspenders and much more! You can find the best accessories for man
            here. Here you can find the perfect formal accessories for man. For
            you or for making a gift. A selection of accessories for any style.
            Find your style!
          </Text>
        </Box>
        <Box marginTop={"5rem"} padding={"1rem"} width={"60%"} marginX={"auto"}>
          <Flex
            direction={"row"}
            wrap={"wrap"}
            columnGap={"0.8rem"}
            rowGap={"0.8rem"}
          >
            <Box width={"15rem"}>
              <AccessoriesCard
                img={corbata}
                title={"Ties"}
                price={"4"}
                navigateTo={"/accessories/ties"}
              />
            </Box>
            <Box width={"15rem"}>
              <AccessoriesCard
                img={tirantes}
                title={"Suspenders"}
                price={"4"}
                navigateTo={"/accessories/suspenders"}
              />
            </Box>
            <Box width={"15rem"}>
              <AccessoriesCard
                img={pajarita}
                title={"Bowties"}
                price={"4"}
                navigateTo={"/accessories/bowties"}
              />
            </Box>
            <Box width={"15rem"}>
              <AccessoriesCard
                img={panuelo}
                title={"Pocketsquares"}
                price={"4"}
                navigateTo={"/accessories/pocketsquares"}
              />
            </Box>
            <Box width={"15rem"}>
              <AccessoriesCard
                img={gemelos}
                title={"Cufflinks"}
                price={"4"}
                navigateTo={"/accessories/cufflinks"}
              />
            </Box>
            <Box width={"15rem"}>
              <AccessoriesCard
                img={cinturon}
                title={"Belts"}
                price={"4"}
                navigateTo={"/accessories/belts"}
              />
            </Box>
            <Box width={"15rem"}>
              <AccessoriesCard
                img={bufandas}
                title={"Scarves"}
                price={"4"}
                navigateTo={"/accessories/scarves"}
              />
            </Box>
            <Box width={"15rem"}>
              <AccessoriesCard
                img={fajin}
                title={"Cummerbands"}
                price={"4"}
                navigateTo={"/accessories/cummerbands"}
              />
            </Box>
            <Box width={"15rem"}>
              <AccessoriesCard
                img={calcetines}
                title={"Socks"}
                price={"4"}
                navigateTo={"/accessories/socks"}
              />
            </Box>
          </Flex>
        </Box>
        <Box width={"100%"} marginTop={"3rem"}>
          <Footer />
        </Box>
      </Stack>
    </Container>
  );
};

export default AccessoriesPage;
