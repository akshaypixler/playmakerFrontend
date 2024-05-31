// Chakra UI imports
import {
  Box,
  Image,
  Text,
  Stack
} from "@chakra-ui/react";

// Image imports
import materialPoplinCottonChampagne from "../../../assets/images/material_poplin_cotton_champagne.jpg";
import midblueShirtCollar from "../../../assets/images/midblue-shirt-collar.png";
import midblueShirtBottom from "../../../assets/images/midblue-shirt-bottom.png";
import midblueShirtAstin from "../../../assets/images/midblue-shirt-astin.png";
import cobaltblueShirtAstin from "../../../assets/images/cobaltblue-shirt-astin.png";
import cobaltblueShirtBottom from "../../../assets/images/cobaltblue-shirt-bottom.png";
import cobaltblueShirtCollar from "../../../assets/images/cobaltblue-shirt-collar.png";
import whiteShirtBottom from "../../../assets/images/white_shirt_bottom.png";
import whiteShirtCollar from "../../../assets/images/white_shirt-collar.png";
import whiteShirtAstin from "../../../assets/images/white-shirt-astin.png";
import champagneShirtAstin from "../../../assets/images/champagne-shirt-astin.png";
import champagneShirtBottom from "../../../assets/images/champagne-shirt-bottom.png";
import champagneShirtCollar from "../../../assets/images/champagne-shirt-collar.png";
import deepblueShirtAstin from "../../../assets/images/deepblue-shirt-astin.png";
import deepblueShirtBottom from "../../../assets/images/deepblue-shirt-bottom.png";
import deepblueShirtCollar from "../../../assets/images/deepblue-shirt-collar.png";
import lightblueShirtAstin from "../../../assets/images/lightblue-shirt-astin.png";
import lightblueShirtBottom from "../../../assets/images/lightblue-shirt-bottom.png";
import lightblueShirtCollar from "../../../assets/images/lightblue-shirt-collar.png";

const mat = {
  type : "cotton",
  name : "material_poplin_cotton_champagne",
  img : materialPoplinCottonChampagne,
  materialCode : "MPCCBlazer01",
  materialProperties : "100s",
  materialColor : "Champagne"
};

const shirts = [
  {
    materialCode : "MPCCShirt01",
    collar : champagneShirtCollar,
    bottom : champagneShirtBottom,
    astin : champagneShirtAstin
  },
  {
    materialCode : "MPCCShirt02",
    collar : cobaltblueShirtCollar,
    bottom : cobaltblueShirtBottom,
    astin : cobaltblueShirtAstin
  },
  {
    materialCode : "MPCDShirt03",
    collar : deepblueShirtCollar,
    bottom : deepblueShirtBottom,
    astin : deepblueShirtAstin
  },
  {
    materialCode : "MPCLShirt04",
    collar : lightblueShirtCollar,
    bottom : lightblueShirtBottom,
    astin : lightblueShirtAstin
  },
  {
    materialCode : "MPCMShirt05",
    collar : midblueShirtCollar,
    bottom : midblueShirtBottom,
    astin : midblueShirtAstin
  },
  {
    materialCode : "MPCWShirt06",
    collar : whiteShirtCollar,
    bottom : whiteShirtBottom,
    astin : whiteShirtAstin
  },
];

const MaterialCard = ({ material = mat, setShirtMaterial }) => {
  return (
    <Box 
      bg={"primaryLight"} 
      padding={"1rem"} 
      borderRadius={"0.4rem"} 
      cursor={"pointer"} 
      onClick={e => {
        console.log(material.materialCode);
        const shirt = shirts.find(ele => {
          return ele.materialCode === material.materialCode
        });
        setShirtMaterial(shirt)
      }}>
      <Stack direction={"column"} alignItems={"start"} spacing={"0"}>
        <Image src={material.img} alt="..." borderRadius={"0.3rem"} />
        <Text fontSize={"1.2rem"} fontWeight={"600"} color={"secondary"}>{material.materialColor}</Text>
        <Text color={"secondary"} fontSize={"0.9rem"}>{material.type}.{material.materialProperties}</Text>
      </Stack>
    </Box>
  );
};

export default MaterialCard;