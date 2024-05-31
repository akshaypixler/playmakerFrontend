// Components
import Header from "./components/Header";
import AirMenu from "./components/AirMenu";
import ImageSlider from "./components/ImageSlider";
import SubAirMenu from "./components/SubAirMenu";
import SubAirMenuShopByLooks from "./components/SubAirMenuShopByLooks";
import SubAirMenuClothingOption from "./components/SubAirMenuClothingOption";
import SubAirMenuOccassionOption from "./components/SubAirMenuOccassionOption";
import SubAirMenuAccessoriesOption from "./components/SubAirMenuAccessoriesOption";
import TechForFitComponent from "./components/TechForFitComponent";
import Footer from "./components/Footer";
import SubAirMenuProductMenu from "./components/SubAirMenuProductMenu";
import NewNavBar from "../../commoncomponents/NewNavBar";

import bgBanner from "../../assets/images/banner-bg3.jpg";

// Hooks
import { useState } from "react";

// Chakra UI imports
import { Container, Text, Box } from "@chakra-ui/react";

const HomePage = ({
  isAirMenuOpen,
  setIsAirMenuOpen,
  whichSumAirMenuOption,
  setWhichSumAirMenuOption,
  isSubAirMenuOpen,
  setIsSubAirMenuOpen,
  isSubAirMenuProductMenuOpen,
  setIsSubAirMenuProductMenuOpen,
}) => {
  return (
    <div>
      {/* <Header setIsAirMenuOpen={setIsAirMenuOpen} setWhichSumAirMenuOption={setWhichSumAirMenuOption} setIsSubAirMenuOpen={setIsSubAirMenuOpen}>
        {isAirMenuOpen ? <AirMenu setIsAirMenuOpen={setIsAirMenuOpen} whichSumAirMenuOption={whichSumAirMenuOption} setWhichSumAirMenuOption={setWhichSumAirMenuOption} isSubAirMenuOpen={isSubAirMenuOpen} setIsSubAirMenuOpen={setIsSubAirMenuOpen}>
          <SubAirMenu setIsSubAirMenuOpen={setIsSubAirMenuOpen}>
            {whichSumAirMenuOption ==="lookbooks" ? <SubAirMenuShopByLooks /> : ""}
            {whichSumAirMenuOption ==="clothing" ? <SubAirMenuClothingOption setIsSubAirMenuProductMenuOpen={setIsSubAirMenuProductMenuOpen} /> : ""}
            {whichSumAirMenuOption ==="occasion" ? <SubAirMenuOccassionOption setIsSubAirMenuProductMenuOpen={setIsSubAirMenuProductMenuOpen} /> : ""}
            {whichSumAirMenuOption ==="accessories" ? <SubAirMenuAccessoriesOption /> : ""}
            {isSubAirMenuProductMenuOpen ? <SubAirMenuProductMenu setIsSubAirMenuProductMenuOpen={setIsSubAirMenuProductMenuOpen} /> : ""}
          </SubAirMenu>
        </AirMenu> : ""
        }
      </Header> */}
      <Box
        style={{
          backgroundImage: `url(${bgBanner})`,
          backgroundSize: "cover",
          height: "60rem",
        }}
        width={"100%"}
      >
        <NewNavBar />
        <Container marginLeft={"0"} w={"50%"} maxW={"50%"}>
          <Text
            fontSize={"1.5rem"}
            fontFamily={"PT Serif"}
            color={"secondary"}
            marginLeft={"8rem"}
            marginTop={"38rem"}
          >
            WELCOME &nbsp;
            <span
              style={{
                color: "transparent",
                borderTop: "2px solid #C88F48",
                padding: 0,
                fontSize: "0.4rem",
              }}
            >
              ...................................................
            </span>
          </Text>
          <Text
            fontFamily={"PT Serif"}
            fontSize={"4rem"}
            color={"white"}
            marginLeft={"8rem"}
          >
            Playmaker
          </Text>
          <Text
            fontFamily={"Josefin Sans"}
            fontSize={"1.2rem"}
            color={"white"}
            marginLeft={"8rem"}
          >
            crafted with confidence, tailored for success
          </Text>
        </Container>
      </Box>
      <Container maxW={"100%"} bg={"primary"} paddingBottom={"5rem"}>
        <Text
          paddingTop={"5rem"}
          color={"secondary"}
          marginLeft={"6.5rem"}
          marginBottom={"2rem"}
          fontSize={"2rem"}
        >
          Bespoke from head to toe
        </Text>
        <ImageSlider />
      </Container>
      <TechForFitComponent />
      <Footer />
    </div>
  );
};

export default HomePage;
