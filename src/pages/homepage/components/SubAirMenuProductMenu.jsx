// Chakra UI imports
import {
  Container,
  Box,
  Text,
  IconButton,
  Flex,
  UnorderedList,
  ListItem,
  Link as CLink
} from "@chakra-ui/react";

// Component imports
import SubAirMenuShopByLooksImageOption from "./SubAirMenuShopByLooksImageOption";

// image imports
import bg1 from "../../../assets/images/bg1.png";

// Icon imports
import { CloseIcon } from "@chakra-ui/icons";

// React Router imports
import { Link as ReactRouterLink } from "react-router-dom";


const collections = ["All suits", "Business Suits", "Fall/Winter Suits", "Stylish Suits", "Party Tuxedos", "New Suits Arrivals"];

const SubAirMenuProductMenu = ({ collectionArr = collections, setIsSubAirMenuProductMenuOpen }) => {
  return (
    <Container position={"fixed"} top={"5rem"} left={"46.3rem"} bg={"primaryLight"} padding={"1.5rem"} color={"secondary"} maxW={"70rem"}>
      <IconButton icon={<CloseIcon color={"secondary"} />} bg={"transparent"} marginLeft={"90%"} onClick={e => {
        setIsSubAirMenuProductMenuOpen(false);
      }} />
      <Text fontSize={"1.2rem"}>Design your own</Text>
      <Flex wrap={"wrap"} direction={"row"} columnGap={"1rem"} rowGap={"1rem"}>
        <Box width={"11rem"}>
          <SubAirMenuShopByLooksImageOption image={bg1} text={"Tailored Suits"} />
        </Box>
        <Box width={"11rem"}>
          <SubAirMenuShopByLooksImageOption image={bg1} text={"Tailored Suits"} />
        </Box>
        <Box width={"11rem"}>
          <SubAirMenuShopByLooksImageOption image={bg1} text={"Tailored Suits"} />
        </Box>
        <Box width={"11rem"}>
          <SubAirMenuShopByLooksImageOption image={bg1} text={"Tailored Suits"} />
        </Box>
        <Box width={"11rem"}>
          <SubAirMenuShopByLooksImageOption image={bg1} text={"Tailored Suits"} />
        </Box>
        <Box width={"11rem"}>
          <SubAirMenuShopByLooksImageOption image={bg1} text={"Tailored Suits"} />
        </Box>
        <Box width={"11rem"}>
          <SubAirMenuShopByLooksImageOption image={bg1} text={"Tailored Suits"} />
        </Box>
      </Flex>
      <Box marginTop={"3rem"}>
        <Text fontSize={"1.2rem"}>All Collections</Text>
          {collectionArr.map((ele, index) => {
            return (
              <Text key={index} marginY={"0.8rem"}>
                <CLink as={ReactRouterLink} to={"/suits"}>{ele}</CLink>
              </Text>
            );
          })}
      </Box>
    </Container>
  );
};

export default SubAirMenuProductMenu;