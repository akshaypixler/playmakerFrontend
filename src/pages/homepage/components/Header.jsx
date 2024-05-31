import NavBar from "./NavBar";
import "./css/header.css";
import bgBanner from "../../../assets/images/banner-bg3.jpg";
import {
  Container,
  Text
} from "@chakra-ui/react";


const Header = ({ setIsAirMenuOpen, setIsSubAirMenuOpen, setWhichSumAirMenuOption, children }) => {

  return (
    <div style={{backgroundImage : `url(${bgBanner})`, backgroundSize : "cover", height : "60rem"}}>
      <NavBar setIsAirMenuOpen={setIsAirMenuOpen} setIsSubAirMenuOpen={setIsSubAirMenuOpen} setWhichSumAirMenuOption={setWhichSumAirMenuOption} />
      <Container marginLeft={"0"} w={"50%"} maxW={"50%"}>
        <Text fontSize={"1.5rem"} fontFamily={"PT Serif"} color={"secondary"} marginLeft={"8rem"} marginTop={"38rem"}>WELCOME &nbsp;<span style={{color : "transparent", borderTop : "2px solid #C88F48", padding : 0, fontSize : "0.4rem"}}>...................................................</span></Text>
        <Text fontFamily={"PT Serif"} fontSize={"4rem"} color={"white"} marginLeft={"8rem"}>Playmaker</Text>
        <Text fontFamily={"Josefin Sans"} fontSize={"1.2rem"} color={"white"} marginLeft={"8rem"}>crafted with confidence, tailored for success</Text>
      </Container>
      {children}
    </div>
  );
};

export default Header;