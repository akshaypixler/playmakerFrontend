import {
  Container,
  Box,
  Text,
  Flex,
  Center,
  Input,
  Stack,
  IconButton
} from "@chakra-ui/react";

// Icon imports
import {
  ArrowForwardIcon
} from "@chakra-ui/icons";
import { BsFacebook, BsPinterest } from "react-icons/bs";
import { PiInstagramLogoFill, PiTiktokLogoFill } from "react-icons/pi";
import { FaSquareXTwitter } from "react-icons/fa6";

// Component imports
import SubAirMenuOptionsList from "./SubAirMenuOptionsList";

const mensStoreList = ["Custom Suits", "Wedding Suits", "3 Piece Suits", "Double Breasted Suits", "Big and Tall Suits", "Custom Tuxedos", "Tweed Suits", "Linen Suits", "Custom Blazers", "Custom Dress Shirts", "Custom Pants", "Custom Jeans", "Chinos", "Men's Vests", "Overcoats", "Pea Coats", "Men's Trench Coats", "Polo Shirts", "Custom Dress Shoes", "Custom Sneakers", "Custom Loafers", "Custom Boots", "Gift Card"];

const womensAttire = [
  "Women's Suits",
  "Women's Wedding Suits",
  "Women's Tuxedo",
  "Pantsuits",
  "Skirt Suits",
  "Women's Blazers",
  "Women's Dress Shirt",
  "Custom Blouses",
  "Women's Dress Pants",
  "Women's Jeans",
  "Custom Skirts",
  "Plus Size Suits",
  "Petite Suits",
  "Custom Dresses",
  "Bridesmaid Dresses",
  "Sheath Dresses",
  "Women's Wool Coats",
  "Women's Trench Coats",
  "Women's Dress Shoes",
  "Women's Loafers",
  "Women's Boots",
  "Women's Chelsea Boots"
];

const websiteNavigation = [
  "About us",
  "How it works",
  "Perfect Fit Guarantee",
  "Playmaker Blog"
];

const additionalNavigation = [
  "Contact us",
  "Order fabric samples",
  "Track order",
  "FAQs"
];


const Footer = () => {
  return (
    <Container width={"100%"} maxW={"100%"} padding={"8rem"} bg={"primary"}>
      <Center>
        <Flex width={"90%"} columnGap={"30rem"}>
          <Box>
            <Text color={"secondary"} fontSize={"1rem"} fontWeight={"600"}>Subscribe to our newsletter to get updates</Text>
            <Box marginTop={"1rem"} padding={"1rem"} borderBottom={"2px solid #C88F48"}>
              <Stack direction={"row"} spacing={"2rem"}>
                <Input placeholder="Enter Email" size={"lg"} borderColor={"transparent"} outline={"secondary"} />
                <IconButton icon={<ArrowForwardIcon color={"secondary"} boxSize={"1.8rem"} />} bg={"transparent"} />
              </Stack>
            </Box>
            <Box marginTop={"30rem"}>
              <Stack direction={"row"} spacing={"1.3rem"}>
                <BsFacebook style={{color : "#C88F48", fontSize : "1.5rem"}} />
                <PiInstagramLogoFill style={{color : "#C88F48", fontSize : "1.5rem"}} />
                <FaSquareXTwitter style={{color : "#C88F48", fontSize : "1.5rem"}} />
                <BsPinterest style={{color : "#C88F48", fontSize : "1.5rem"}} />
                <PiTiktokLogoFill style={{color : "#C88F48", fontSize : "1.5rem"}} />
              </Stack>
            </Box>
          </Box>
          <Box>
            <Flex columnGap={"5rem"}>
              <Box color={"secondary"}>
                <Text fontSize={"1.3rem"} fontWeight={"600"} borderBottom={"1px solid #C88F48"} padding={"0.2rem"}>Mens Store</Text>
                <SubAirMenuOptionsList options={mensStoreList} />
              </Box>
              <Box color={"secondary"}>
              <Text fontSize={"1.3rem"} fontWeight={"600"} borderBottom={"1px solid #C88F48"} padding={"0.2rem"}>Women</Text>
                <SubAirMenuOptionsList options={womensAttire} />
              </Box>
              <Box color={"secondary"}>
              <Text fontSize={"1.3rem"} fontWeight={"600"} borderBottom={"1px solid #C88F48"} padding={"0.2rem"}>Company</Text>
                <SubAirMenuOptionsList options={websiteNavigation} />
              </Box>
              <Box color={"secondary"}>
              <Text fontSize={"1.3rem"} fontWeight={"600"} borderBottom={"1px solid #C88F48"} padding={"0.2rem"}>Support</Text>
                <SubAirMenuOptionsList options={additionalNavigation} />
              </Box>
            </Flex>
          </Box>
        </Flex>
      </Center>
    </Container>
  );
};

export default Footer;