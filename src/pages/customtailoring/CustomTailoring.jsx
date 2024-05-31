// Chakra UI imports
import {
  Container,
  Box,
  Text,
  Flex,
  Image,
  Button,
  IconButton,
  Stack
} from "@chakra-ui/react";

// Component imports
import MaterialBar from "./components/MaterialBar";
import FilterBar from "./components/FilterBar";
import StyleBar from "./components/StyleBar";
import AccentBar from "./components/AccentBar";
import SelectedProductDetalsTable from "./components/SelectedProductDetalsTable";

// Hooks import
import { useState } from "react";

// Icon imports
import { PlusSquareIcon, CloseIcon } from "@chakra-ui/icons";
import { ImScissors } from "react-icons/im";
import { IoBrush } from "react-icons/io5";
import { GiRolledCloth } from "react-icons/gi";

// Image imports
import materialPoplinCottonChampagne from "../../assets/images/material_poplin_cotton_champagne.jpg";
import material_poplin_cotton_cobaltblue from "../../assets/images/materials/shirt/material_poplin_cotton_cobaltblue.jpg";
import material_poplin_cotton_deepblue from "../../assets/images/materials/shirt/material_poplin_cotton_deepblue.jpg";
import material_poplin_cotton_lightblue from "../../assets/images/materials/shirt/material_poplin_cotton_lightblue.jpg";
import material_poplin_cotton_midblue from "../../assets/images/materials/shirt/material_poplin_cotton_midblue.jpg";
import material_poplin_cotton_white from "../../assets/images/materials/shirt/material_poplin_cotton_white.jpg";
import shirtBackground from "../../assets/images/shirt-background.png";
import midblueShirtCollar from "../../assets/images/midblue-shirt-collar.png";
import midblueShirtBottom from "../../assets/images/midblue-shirt-bottom.png";
import midblueShirtAstin from "../../assets/images/midblue-shirt-astin.png";
import cobaltblueShirtAstin from "../../assets/images/cobaltblue-shirt-astin.png";
import cobaltblueShirtBottom from "../../assets/images/cobaltblue-shirt-bottom.png";
import cobaltblueShirtCollar from "../../assets/images/cobaltblue-shirt-collar.png";
import whiteShirtBottom from "../../assets/images/white_shirt_bottom.png";
import whiteShirtCollar from "../../assets/images/white_shirt-collar.png";
import whiteShirtAstin from "../../assets/images/white-shirt-astin.png";
import champagneShirtAstin from "../../assets/images/champagne-shirt-astin.png";
import champagneShirtBottom from "../../assets/images/champagne-shirt-bottom.png";
import champagneShirtCollar from "../../assets/images/champagne-shirt-collar.png";
import RightSidePanel from "./components/RightSidePanel";

const materialsArr = [
  {
    type: "cotton",
    name: "material_poplin_cotton_champagne",
    img: materialPoplinCottonChampagne,
    materialCode: "MPCCShirt01",
    materialProperties: "100s",
    materialColor: "Champagne"
  },
  {
    type: "cotton",
    name: "material_poplin_cotton_cobaltblue",
    img: material_poplin_cotton_cobaltblue,
    materialCode: "MPCCShirt02",
    materialProperties: "100s",
    materialColor: "Cobaltblue"
  },
  {
    type: "cotton",
    name: "material_poplin_cotton_deepblue",
    img: material_poplin_cotton_deepblue,
    materialCode: "MPCDShirt03",
    materialProperties: "100s",
    materialColor: "Deepblue"
  },
  {
    type: "cotton",
    name: "material_poplin_cotton_lightblue",
    img: material_poplin_cotton_lightblue,
    materialCode: "MPCLShirt04",
    materialProperties: "100s",
    materialColor: "Lightblue"
  },
  {
    type: "cotton",
    name: "material_poplin_cotton_midblue",
    img: material_poplin_cotton_midblue,
    materialCode: "MPCMShirt05",
    materialProperties: "100s",
    materialColor: "Midblue"
  },
  {
    type: "cotton",
    name: "material_poplin_cotton_white",
    img: material_poplin_cotton_white,
    materialCode: "MPCWShirt06",
    materialProperties: "100s",
    materialColor: "White"
  },
];


const CustomTailoring = () => {

  const [shirtMaterial, setShirtMaterial] = useState({
    materialCode: "MPCCShirt01",
    collar: champagneShirtCollar,
    bottom: champagneShirtBottom,
    astin: champagneShirtAstin,
    color : "Champagne"
  });
  const [sleevesType, setSleevesType] = useState({
    id : "sleeve001",
    sleeveName : "Long",
    isSelected : true,
    price : 0
  });
  const [collarType, setCollarType] = useState({
    id: "collar001",
    collarName: "New kent",
    isSelected: true,
    price : 0
  });
  const [cuffType, setCuffType] = useState({
    id: "cuff001",
    cuffName: "Single cuff 1 button",
    isSelected: true,
    price : 0
  });
  const [chestPocketType, setChestPocketType] = useState({
    id : "chestpocket001",
    chestPocketName : "No pocket",
    isSelected : true,
    price : 0
  });
  const [monogramText, setMonogramText] = useState("");
  const [monogramThreadColor, setMonogramThreadColor] = useState("");
  const [monogramPosition, setMonogramPosition] = useState("");
  const [isFilterMenuOpen, setIsFilterMenuOpen] = useState(false);
  const [isZoomOpen, setIsZoomOpen] = useState(false);
  const [leftMenu, setLeftMenu] = useState("fabric");
  const productDetails = {
    materialDetails : shirtMaterial,
    sleeveDetails : sleevesType,
    collarDetails : collarType,
    cuffDetails : cuffType,
    chestPocketDetails : chestPocketType,
    monogramName : monogramText,
    monogramThreadColorName : monogramThreadColor,
    monogramInitialPosition : monogramPosition  
  };

  return (<div style={{ backgroundColor: "#332522", height: "100vh" }}>
    <Container width={"100%"} maxW={"100%"} padding={"3rem"}>
      <Flex direction={"row"} columnGap={"2rem"}>
        {leftMenu === "fabric" ? <Box>
          {isFilterMenuOpen ? <Box bg={"primaryLight"} width={"20rem"} padding={"1rem"} height={"90vh"} overflowY={"auto"}>
            <FilterBar isFilterMenuOpen={isFilterMenuOpen} setIsFilterMenuOpen={setIsFilterMenuOpen} />
          </Box> : ""}
          <Box bg={"primaryLight"} width={"30rem"} height={"90vh"} padding={"1.5rem"} overflowY={"auto"}>
            {<MaterialBar materials={materialsArr} setShirtMaterial={setShirtMaterial} isFilterMenuOpen={isFilterMenuOpen} setIsFilterMenuOpen={setIsFilterMenuOpen} />}
          </Box>
        </Box> : ""}

        {leftMenu === "style" ? <Box width={"28rem"} padding={"1rem"} height={"90vh"} overflowX={"auto"} bg={"primaryLight"}>
          <StyleBar sleevesType={sleevesType} setSleevesType={setSleevesType} collarType={collarType} setCollarType={setCollarType} cuffType={cuffType} setCuffType={setCuffType} chestPocketType={chestPocketType} setChestPocketType={setChestPocketType} />
        </Box> : ""}

        {leftMenu === "accent" ? <Box width={"28rem"} padding={"1rem"} height={"90vh"} overflowX={"auto"} bg={"primaryLight"}>
          <AccentBar monogramText={monogramText} setMonogramText={setMonogramText} monogramThreadColor={monogramThreadColor} setMonogramThreadColor={setMonogramThreadColor} monogramPosition={monogramPosition} setMonogramPosition={setMonogramPosition} />
        </Box> : ""}

        <Box>
          <Stack direction={"column"} marginTop={"16rem"}>
            <Box padding={"1rem"}>
              <Flex direction={"column"}>
                <IconButton bg={"transparent"} icon={<GiRolledCloth style={{ color: "#C88F48", fontSize: "1.6rem" }} />} onClick={e => setLeftMenu("fabric")} />
                <Text color={"secondary"} textAlign={"center"} fontSize={"1rem"}>Fabric</Text>
              </Flex>
            </Box>
            <Box padding={"1rem"}>
              <Flex direction={"column"}>
                <IconButton bg={"transparent"} icon={<ImScissors style={{ color: "#C88F48", fontSize: "1.6rem" }} />} onClick={e => setLeftMenu("style")} />
                <Text color={"secondary"} textAlign={"center"} fontSize={"1rem"}>Style</Text>
              </Flex>
            </Box>
            <Box padding={"1rem"}>
              <Flex direction={"column"}>
                <IconButton bg={"transparent"} icon={<IoBrush style={{ color: "#C88F48", fontSize: "1.6rem" }} />} onClick={e => setLeftMenu("accent")} />
                <Text color={"secondary"} textAlign={"center"} fontSize={"1rem"}>Accent</Text>
              </Flex>
            </Box>
          </Stack>
        </Box>
        <Box bg={"whitesmoke"} >
          {/* <Image position={"absolute"} width={"35rem"} src={shirtBackground} top={"1rem"} left={"60rem"} /> */}
          <Image position={"absolute"} width={"35rem"} src={shirtMaterial.collar} top={"1rem"} left={"45rem"} />
          <Image position={"absolute"} width={"35rem"} src={shirtMaterial.bottom} top={"1rem"} left={"45rem"} />
          <Image position={"absolute"} width={"35rem"} src={shirtMaterial.astin} top={"1rem"} left={"45rem"} />
        </Box>

        <Box height={"90vh"}>
          <Box position={"absolute"} left={"90rem"} bg={"primaryLight"} padding={"1.5rem"} width={"26rem"} height={"90vh"} overflowX={"auto"}>
            {/* <Text color={"secondary"} fontSize={"3rem"} textAlign={"right"}>Your<br /> Custom suit</Text>
            <Text color={"secondary"} fontSize={"3rem"} fontWeight={"100"} textAlign={"right"} marginTop={"2rem"}>$349</Text>
            <Box>
              <SelectedProductDetalsTable />
            </Box>
            <Button size={"lg"} width={"12rem"} fontSize={"1.5rem"} borderRadius={"2rem"} marginLeft={"9rem"} marginTop={"2rem"} bg={"secondary"}>next</Button>
            <Text color={"secondary"} marginTop={"2rem"} marginLeft={"2rem"} fontSize={"1.2rem"}>order today, and receive in 2 weeks</Text>
            <Text color={"secondary"} marginTop={"0.3rem"} marginLeft={"2rem"} fontSize={"1.2rem"} fontWeight={"600"}>Free shipping</Text>
            <IconButton marginTop={"8rem"} marginLeft={"15rem"} bg={"secondary"} icon={<PlusSquareIcon color={"primary"} fontSize={"2rem"} width={"2.3rem"} height={"2.3rem"} />} onClick={e => setIsZoomOpen(true)} />
            <Text color={"secondary"} marginLeft={"15rem"}>zoom</Text> */}
            <RightSidePanel productDetails={productDetails} />
          </Box>
        </Box>

      </Flex>
    </Container>
    {isZoomOpen ? <Container maxWidth={"100%"} height={"120vh"} position={"absolute"} bg={"primary"} top={"0"} padding={"3rem"}>
      <IconButton bg={"transparent"} icon={<CloseIcon color={"secondary"} fontSize={"2rem"} />} onClick={e => setIsZoomOpen(false)} />
      <Image position={"absolute"} width={"40rem"} src={shirtMaterial.collar} top={"10rem"} left={"40%"} />
      <Image position={"absolute"} width={"40rem"} src={shirtMaterial.bottom} top={"10rem"} left={"40%"} />
      <Image position={"absolute"} width={"40rem"} src={shirtMaterial.astin} top={"10rem"} left={"40%"} />
    </Container> : ""}
  </div>);
};

export default CustomTailoring;