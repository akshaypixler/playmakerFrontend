import {
  Container,
  Box,
  Text,
  Image,
  Stack,
  Flex,
  Link as CLink,
} from "@chakra-ui/react";

import AccessoriesCard from "../commoncomponents/AccessoriesCard";
import Footer from "./homepage/components/Footer";

import { Link as ReactRouterLink } from "react-router-dom";

import { useParams } from "react-router-dom";

import banner from "../assets/images/banner.jpg";

import _ from "lodash";

import tie1 from "../assets/images/tie1.png";
import tie2 from "../assets/images/tie2.png";
import tie3 from "../assets/images/tie3.png";
import tie4 from "../assets/images/tie4.png";
import tie5 from "../assets/images/tie5.png";
import tie6 from "../assets/images/tie6.png";
import tie7 from "../assets/images/tie7.png";
import bowtie1 from "../assets/images/bowtie1.png";
import bowtie2 from "../assets/images/bowtie2.png";
import bowtie3 from "../assets/images/bowtie3.png";
import bowtie4 from "../assets/images/bowtie4.png";
import bowtie5 from "../assets/images/bowtie5.png";
import bowtie6 from "../assets/images/bowtie6.png";
import bowtie7 from "../assets/images/bowtie7.png";
import cufflink1 from "../assets/images/cufflink1.png";
import cufflink2 from "../assets/images/cufflink2.png";
import cufflink3 from "../assets/images/cufflink3.png";
import cufflink4 from "../assets/images/cufflink4.png";
import cufflink5 from "../assets/images/cufflink5.png";
import belt1 from "../assets/images/belt1.png";
import belt2 from "../assets/images/belt2.png";
import belt3 from "../assets/images/belt3.png";


const tiesArray = [
  {
    img : tie1,
    name : "Lazio Delroy",
    price : 16
  },
  {
    img : tie2,
    name : "lazio-florance",
    price : 16
  },
  {
    img : tie3,
    name : "Lazio Brady",
    price : 16
  },
  {
    img : tie4,
    name : "Lazio Crespo",
    price : 16
  },
  {
    img : tie5,
    name : "Lazio Genova",
    price : 16
  },
  {
    img : tie6,
    name : "Lazio Lioni",
    price : 16
  },
  {
    img : tie7,
    name : "Lazio Lisard",
    price : 16
  },
];

const bowtiesArray = [
  {
    img : bowtie1,
    name : "Gold",
    price : 16
  },
  {
    img : bowtie2,
    name : "Pink",
    price : 16
  },
  {
    img : bowtie3,
    name : "Purple",
    price : 16
  },
  {
    img : bowtie4,
    name : "Rose",
    price : 16
  },
  {
    img : bowtie5,
    name : "Robin hood",
    price : 16
  },
  {
    img : bowtie6,
    name : "Jade",
    price : 16
  },
  {
    img : bowtie7,
    name : "Essential black",
    price : 16
  },
];


const cufflinksArray = [
  {
    img : cufflink1,
    name : "Garen",
    price : 16
  },
  {
    img : cufflink2,
    name : "Graves",
    price : 16
  },
  {
    img : cufflink3,
    name : "Benny",
    price : 16
  },
  {
    img : cufflink4,
    name : "Croise",
    price : 16
  },
  {
    img : cufflink5,
    name : "Hayden",
    price : 16
  },
];


const beltsArray = [
  {
    img : belt1,
    name : "Vecellio",
    price : 16
  },
  {
    img : belt2,
    name : "Angelo",
    price : 16
  },
  {
    img : belt3,
    name : "Sansone",
    price : 16
  },
];

const IndividualAccessoryPage = () => {

  const { accessory } = useParams();

  return (
    <Container width={"100%"} maxW={"100%"} padding={0}>
      <Box width={"100%"}>
        <Image src={banner} />
      </Box>
      <Box width={"100%"} marginTop={"2rem"}>
        <Stack direction={"row"} justifyContent={"center"} spacing={"0.8rem"}>
          <Box width={"8rem"} bg={"#DDDDDD"} padding={"0.5rem"}>
            <CLink as={ReactRouterLink} to="/accessories/ties">
              <Text textAlign={"center"} fontSize={"0.8rem"}>
                TIES
              </Text>
            </CLink>
          </Box>
          <Box width={"8rem"} bg={"#DDDDDD"} padding={"0.5rem"}>
            <CLink as={ReactRouterLink} to="/accessories/bowties">
              <Text textAlign={"center"} fontSize={"0.8rem"}>
                BOW-TIES
              </Text>
            </CLink>
          </Box>
          <Box width={"8rem"} bg={"#DDDDDD"} padding={"0.5rem"}>
            <CLink as={ReactRouterLink} to="/accessories/cufflinks">
              <Text textAlign={"center"} fontSize={"0.8rem"}>
                CUFFLINKS
              </Text>
            </CLink>
          </Box>
          <Box width={"8rem"} bg={"#DDDDDD"} padding={"0.5rem"}>
            <CLink as={ReactRouterLink} to="/accessories/belts">
              <Text textAlign={"center"} fontSize={"0.8rem"}>
                BELTS
              </Text>
            </CLink>
          </Box>
          <Box width={"8rem"} bg={"#DDDDDD"} padding={"0.5rem"}>
            <CLink as={ReactRouterLink} to="/accessories/cummerbands">
              <Text textAlign={"center"} fontSize={"0.8rem"}>
                CUMMERBANDS
              </Text>
            </CLink>
          </Box>
          <Box width={"8rem"} bg={"#DDDDDD"} padding={"0.5rem"}>
            <CLink as={ReactRouterLink} to="/accessories/socks">
              <Text textAlign={"center"} fontSize={"0.8rem"}>
                SOCKS
              </Text>
            </CLink>
          </Box>
          <Box width={"8rem"} bg={"#DDDDDD"} padding={"0.5rem"}>
            <CLink as={ReactRouterLink} to="/accessories/scarves">
              <Text textAlign={"center"} fontSize={"0.8rem"}>
                SCARVES
              </Text>
            </CLink>
          </Box>
          <Box width={"8rem"} bg={"#DDDDDD"} padding={"0.5rem"}>
            <CLink as={ReactRouterLink} to="/accessories/suspenders">
              <Text textAlign={"center"} fontSize={"0.8rem"}>
                SUSPENDERS
              </Text>
            </CLink>
          </Box>
          <Box width={"8rem"} bg={"#DDDDDD"} padding={"0.5rem"}>
            <CLink as={ReactRouterLink} to="/accessories/pocketsquares">
              <Text textAlign={"center"} fontSize={"0.8rem"}>
                POCKETSQUARES
              </Text>
            </CLink>
          </Box>
        </Stack>
      </Box>
      <Box width={"100%"} marginTop={"2rem"}>
        <Text fontSize={"2rem"} textAlign={"center"}>
          {_.capitalize(accessory)}
        </Text>
      </Box>
      <Box width={"70%"} marginTop={"2rem"} marginX={"auto"}>
        <Text fontSize={"1rem"} textAlign={"center"}>
          Plain or patterned ties. Wide or narrow ties. Knit ties. A collection
          of ties where you will find what you are looking for. The tie is the
          quintessential man accessory. It gives a colorful touch to the suit
          and the shirt. Find the best ties for this season in this collection.
        </Text>
      </Box>
      <Box width={"70%"} marginX={"auto"} marginTop={"2rem"} padding={"1rem"}>
        <Flex direction={"row"} wrap={"wrap"} rowGap={"1.5rem"} columnGap={"1.5rem"}>
          {accessory === "ties" ? 
          tiesArray.map(ele => {
            return (
              <Box width={"15rem"} key={ele.name}>
                <AccessoriesCard img={ele.img} title={ele.name} price={ele.price} navigateTo={""} />
              </Box>
            );
          })
          : ""}
          {accessory === "bowties" ? 
          bowtiesArray.map(ele => {
            return (
              <Box width={"15rem"} key={ele.name}>
                <AccessoriesCard img={ele.img} title={ele.name} price={ele.price} navigateTo={""} />
              </Box>
            );
          })
          : ""}
          {accessory === "cufflinks" ? 
          cufflinksArray.map(ele => {
            return (
              <Box width={"15rem"} key={ele.name}>
                <AccessoriesCard img={ele.img} title={ele.name} price={ele.price} navigateTo={""} />
              </Box>
            );
          })
          : ""}
          {accessory === "belts" ? 
          beltsArray.map(ele => {
            return (
              <Box width={"15rem"} key={ele.name}>
                <AccessoriesCard img={ele.img} title={ele.name} price={ele.price} navigateTo={""} />
              </Box>
            );
          })
          : ""}
        </Flex>
      </Box>
      <Box marginTop={"3rem"} width={"100%"}>
        <Footer />
      </Box>
    </Container>
  );
};

export default IndividualAccessoryPage;
