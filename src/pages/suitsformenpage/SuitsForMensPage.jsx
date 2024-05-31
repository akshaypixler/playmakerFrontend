// Chakra UI imports
import {
  Container,
  Box,
  Text,
  Image,
  Flex,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel
} from "@chakra-ui/react";

// Component imports
import NavBar from "../homepage/components/NavBar";
import LeftSideBarCollectionsComponent from "./components/LeftSideBarCollectionsComponent";
import LeftSideMenuAccordianComponent from "./components/LeftSideMenuAccordianComponent";
import SubAirMenuShopByLooksImageOption from "../homepage/components/SubAirMenuShopByLooksImageOption";
import Footer from "../homepage/components/Footer";

// Image imports
import mensSuitsPageBanner from "../../assets/images/mensSuitsPageBanner.jpg";
import TitleDescription from "./components/TitleDescription";

// Image imports
import bg1 from "../../assets/images/bg1.png"
import taupeBlazer from "../../assets/images/taupeBlazer.jpg";
import tailoredAzure from "../../assets/images/tailoredAzure.jpg";
import darkNavy from "../../assets/images/darkNavy.jpeg";
import jetBlack from "../../assets/images/jetBlack.png";
import deepBlue from "../../assets/images/deepBlue.jpeg";
import navyOverCoat from "../../assets/images/navyOverCoat.jpg";
import sandSuit from "../../assets/images/sandSuit.jpeg";
import charcoalTwoPiece from "../../assets/images/charcoalTwoPiece.jpeg";
import sharpNavySuit from "../../assets/images/sharpNavySuit.jpeg";
import bordeauxSuit from "../../assets/images/bordeauxSuit.jpg";
import sophisticatedGraphiteSuit from "../../assets/images/sophisticatedGraphiteSuit.jpeg";

import NewNavBar from "../../commoncomponents/NewNavBar";

const SuitsForMensPage = () => {
  return (
    <div style={{ backgroundColor: "#41322f" }}>
      <NewNavBar />
      <Box width={"100%"} height={"20rem"} bgImage={mensSuitsPageBanner} backgroundSize={"cover"}>
      </Box>
      <TitleDescription />
      <Container width={"100%"} maxWidth={"100%"} marginTop={"5rem"}>
        <Flex direction={"row"} columnGap={"5rem"}>
          <Box>
            <LeftSideBarCollectionsComponent />
            <Box marginTop={"3rem"}>
              <LeftSideMenuAccordianComponent />
            </Box>
          </Box>
          <Box width={"80%"} paddingBottom={"5rem"}>
            <Flex wrap={"wrap"} rowGap={"2rem"} columnGap={"2rem"}>
              <Box width={"20rem"}>
                <SubAirMenuShopByLooksImageOption image={sophisticatedGraphiteSuit} text={"Sophisticated Graphite Suit with Black Overcoat"} />
              </Box>
              <Box width={"20rem"}>
                <SubAirMenuShopByLooksImageOption image={sharpNavySuit} text={"Sharp Navy Suit with a Red Tie"} />
              </Box>
              <Box width={"20rem"}>
                <SubAirMenuShopByLooksImageOption image={sandSuit} text={"Sand Suit with White Button-Up"} />
              </Box>
              <Box width={"20rem"}>
                <SubAirMenuShopByLooksImageOption image={deepBlue} text={"Deep Blue Suit with Terracotta Waistcoat"} />
              </Box>
              <Box width={"20rem"}>
                <SubAirMenuShopByLooksImageOption image={tailoredAzure} text={"Tailored Azure Suit with White Shirt"} />
              </Box>
              <Box width={"20rem"}>
                <SubAirMenuShopByLooksImageOption image={darkNavy} text={"Dark Navy Windowpane Suit"} />
              </Box>
              <Box width={"20rem"}>
                <SubAirMenuShopByLooksImageOption image={taupeBlazer} text={"Taupe Blazer with Blue Striped Oxford"} />
              </Box>
              <Box width={"20rem"}>
                <SubAirMenuShopByLooksImageOption image={jetBlack} text={"Jet-Black Double-Breasted Suit"} />
              </Box>
              <Box width={"20rem"}>
                <SubAirMenuShopByLooksImageOption image={navyOverCoat} text={"Navy Overcoat with Navy Suit"} />
              </Box>
              <Box width={"20rem"}>
                <SubAirMenuShopByLooksImageOption image={charcoalTwoPiece} text={"Charcoal Two-Piece Suit with White Shirt"} />
              </Box>
            </Flex>
          </Box>
        </Flex>
      </Container>
      <Footer />
    </div>
  );
};

export default SuitsForMensPage;