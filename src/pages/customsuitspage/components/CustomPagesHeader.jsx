// Chakra UI imports
import {
  Container,
  Box,
  Text,
  Button,
  Link as CLink,
  Center
} from "@chakra-ui/react";

// Component imports
import NavBar from "../../homepage/components/NavBar";
import AirMenu from "../../homepage/components/AirMenu";
import SubAirMenu from "../../homepage/components/SubAirMenu";
import SubAirMenuShopByLooks from "../../homepage/components/SubAirMenuShopByLooks";
import SubAirMenuClothingOption from "../../homepage/components/SubAirMenuClothingOption";
import SubAirMenuOccassionOption from "../../homepage/components/SubAirMenuOccassionOption";
import SubAirMenuAccessoriesOption from "../../homepage/components/SubAirMenuAccessoriesOption";
import SubAirMenuProductMenu from "../../homepage/components/SubAirMenuProductMenu";

import { Link as ReactRouterLink } from "react-router-dom";

import NewNavBar from "../../../commoncomponents/NewNavBar";

// Image imports
import customSuitsPageBgBanner2 from "../../../assets/images/customSuitsPageBgBanner2.jpg";

const CustomPagesHeader = ({ isAirMenuOpen, setIsAirMenuOpen, whichSumAirMenuOption, setWhichSumAirMenuOption, isSubAirMenuOpen, setIsSubAirMenuOpen, isSubAirMenuProductMenuOpen, setIsSubAirMenuProductMenuOpen }) => {
  return (
    <div style={{ backgroundImage: `url(${customSuitsPageBgBanner2})`, backgroundSize: "cover", height: "62rem" }}>
      <NewNavBar />
      {/* <NavBar setIsAirMenuOpen={setIsAirMenuOpen} setIsSubAirMenuOpen={setIsSubAirMenuOpen} setWhichSumAirMenuOption={setWhichSumAirMenuOption} /> */}
      {/* {isAirMenuOpen ? <AirMenu setIsAirMenuOpen={setIsAirMenuOpen} whichSumAirMenuOption={whichSumAirMenuOption} setWhichSumAirMenuOption={setWhichSumAirMenuOption} isSubAirMenuOpen={isSubAirMenuOpen} setIsSubAirMenuOpen={setIsSubAirMenuOpen}>
          <SubAirMenu setIsSubAirMenuOpen={setIsSubAirMenuOpen}>
            {whichSumAirMenuOption ==="lookbooks" ? <SubAirMenuShopByLooks /> : ""}
            {whichSumAirMenuOption ==="clothing" ? <SubAirMenuClothingOption setIsSubAirMenuProductMenuOpen={setIsSubAirMenuProductMenuOpen} /> : ""}
            {whichSumAirMenuOption ==="occasion" ? <SubAirMenuOccassionOption setIsSubAirMenuProductMenuOpen={setIsSubAirMenuProductMenuOpen} /> : ""}
            {whichSumAirMenuOption ==="accessories" ? <SubAirMenuAccessoriesOption /> : ""}
            {isSubAirMenuProductMenuOpen ? <SubAirMenuProductMenu setIsSubAirMenuProductMenuOpen={setIsSubAirMenuProductMenuOpen} /> : ""}
          </SubAirMenu>
        </AirMenu> : ""
        } */}
      <Box marginLeft={"9rem"} marginTop={"12rem"} color={"secondary"} width={"30rem"}>
        <Text fontSize={"3rem"} fontWeight={"500"} color={"secondary"}>Custom Suits</Text>
        <Text fontSize={"2rem"}>from $299</Text>
        <Text fontSize={"1.4rem"} fontWeight={"600"}>100% Made to Measure Suits</Text>
        <Text fontSize={"1.1rem"} fontWeight={"400"} color={"#af834e"} marginBottom={"1.2rem"}>
          Are you looking for a custom suit that will enhance your looks and style? Hockerty has the answer! Our suits are not only high-quality but they are also tailored entirely to your measurements. Choose from more than 150 fabrics and various details to design your own look. <span style={{fontWeight : 500}}>We guarantee the perfect fit of your tailored Hockerty suit.</span>
        </Text>
        <CLink>
          <Button as={ReactRouterLink} to={"/custom-clothing"} bg={"secondary"} fontSize={"0.9rem"} padding={"1.5rem"} borderRadius={"2rem"}>Design Your Suit</Button>
        </CLink>
      </Box>
    </div>
  );
};

export default CustomPagesHeader;
