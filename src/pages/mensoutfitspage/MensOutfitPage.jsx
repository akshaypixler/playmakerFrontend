// Chakra UI imports
import {
  Container,
  Box,
  Text,
  Flex,
  Stack,
  Link as CLink
} from "@chakra-ui/react";

// React Router imports
import { Link as ReactRouterLink } from "react-router-dom";

// Component imports
import NavBar from "../homepage/components/NavBar";
import FilterInputComponent from "./component/FilterInputComponent";
import SubAirMenuShopByLooksImageOption from "../homepage/components/SubAirMenuShopByLooksImageOption";

// Image imports
import bg1 from "../../assets/images/bg1.png";
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

const desc = `
  Get inspired by other customers, influencers and celebrities wearing Hockerty. You can filter by occasion and product.
`;
const outfitCategories = [
  "Beige Pants Outfits",
  "Bermuda Shorts Outfits",
  "Black Outfits for Men",
  "Blazer with T-Shirt",
  "Blazers with Jeans",
  "Blue Jeans Outfits",
  "Brown and Green Outfits",
  "Brown Boots Outfits for Men",
  "Brown Pants Outfit",
  "Business Casual Jeans Outfits",
  "Checked Shirt Outfits",
  "Chino Pants for Men Outfits",
  "Classic Men's Suit",
  "Cocktail Outfits",
  "Corduroy Jackets Outfits",
  "Cotton Shirt Outfits",
  "Custom Shirts Outfits",
  "Custom Shoes Outfits",
  "Custom Suits Outfits",
  "Date Night Outfits",
  "Elegant Shoes Outfits",
  "Everyday Outfits",
  "Fancy Tuxedos",
  "Father of the Bride Suits",
  "Floral Shirt Outfits",
  "Formal Attire",
  "Green Pants Outfits",
  "Groomsmen Outfits",
  "Hat with Suit",
  "Job Interview Outfits",
  "Long Sleeve Button Up Shirt",
  "Men Beach Outfits",
  "Men Suspenders Outfits",
  "Men's Leather Jacket Outfit",
  "Men's Linen Outfits",
  "Men's Winter Outfits",
  "Office Outfits",
  "Orange Outfits",
  "Pink Outfits for Men",
  "Pitti Uomo",
  "Polo Outfits for Men",
  "Retro Outfits",
  "Short Sleeve Button Up Looks",
  "Short Sleeve Shirts Outfits",
  "Striped Shirt Outfits",
  "Striped Suits",
  "Suit with Sneakers",
  "Suit with T-Shirt",
  "Suits with Turtleneck",
  "Summer Outfits",
  "Sunglasses Outfit",
  "Turtleneck Outfits",
  "Valentines Day Outfits",
  "Vintage Suits",
  "Wedding Guest Outfit",
  "White Pants Outfits for Men"
];

import NewNavBar from "../../commoncomponents/NewNavBar";

const MensOutfitPage = ({ mensOutfitPageTitle = "Outfit ideas", mensOutfitPageDescription = desc, mensOutfitPageOutfitCategories = outfitCategories, collectionTitle = "Outfit collections" }) => {
  return (
    <div>
      <NewNavBar />
      <Container bg={"primaryLight"} color={"secondary"} padding={"3rem"} width={"100%"} maxW={"100%"}>
        <Flex columnGap={"8rem"}>
          <Box>
            <Stack direction={"column"}>
              <Text fontSize={"1rem"}>1139 outfit styles</Text>
              <Text color={"secondary"} fontSize={"1.2rem "} letterSpacing={"0.1rem"}>FILTERS</Text>
              <Box marginTop={"1.2rem"}>
                <FilterInputComponent />
              </Box>
              <Box marginTop={"2rem"}>
                <FilterInputComponent filterTitle="By Product" radioGroupName="product" />
              </Box>
            </Stack>
          </Box>
          <Box>
            <Box>
              <Text fontSize={"2.6rem"} letterSpacing={"0.1rem"} fontWeight={"300"}>{mensOutfitPageTitle}</Text>
              <Text fontWeight={"600"}>{mensOutfitPageDescription}</Text>
            </Box>
            <Flex columnGap={"1.5rem"} rowGap={"1.5rem"} wrap={"wrap"}>
              <Box width={"16rem"}>
                <SubAirMenuShopByLooksImageOption image={darkNavy} text={"Dark Navy Windowpane Suit"} />
              </Box>
              <Box width={"16rem"}>
                <SubAirMenuShopByLooksImageOption image={taupeBlazer} text={"Taupe Blazer with Blue Striped Oxford"} />
              </Box>
              <Box width={"16rem"}>
                <SubAirMenuShopByLooksImageOption image={tailoredAzure} text={"Tailored Azure Suit with White Shirt"} />
              </Box>
              <Box width={"16rem"}>
                <SubAirMenuShopByLooksImageOption image={jetBlack} text={"Jet-Black Double-Breasted Suit"} />
              </Box>
              <Box width={"16rem"}>
                <SubAirMenuShopByLooksImageOption image={deepBlue} text={"Deep Blue Suit with Terracotta Waistcoat"} />
              </Box>
              <Box width={"16rem"}>
                <SubAirMenuShopByLooksImageOption image={navyOverCoat} text={"Navy Overcoat with Navy Suit"} />
              </Box>
              <Box width={"16rem"}>
                <SubAirMenuShopByLooksImageOption image={sandSuit} text={"Sand Suit with White Button-Up"} />
              </Box>
              <Box width={"16rem"}>
                <SubAirMenuShopByLooksImageOption image={charcoalTwoPiece} text={"Charcoal Two-Piece Suit with White Shirt"} />
              </Box>
              <Box width={"16rem"}>
                <SubAirMenuShopByLooksImageOption image={sharpNavySuit} text={"Sharp Navy Suit with a Red Tie"} />
              </Box>
              <Box width={"16rem"}>
                <SubAirMenuShopByLooksImageOption image={bordeauxSuit} text={"Bordeaux Suit for Gala Evenings"} />
              </Box>
              <Box width={"16rem"}>
                <SubAirMenuShopByLooksImageOption image={sophisticatedGraphiteSuit} text={"Sophisticated Graphite Suit with Black Overcoat"} />
              </Box>
            </Flex>
          </Box>
        </Flex>
        <Container maxW={"100%"} width={"100%"} padding={"5rem"}>
          <Text textAlign={"center"} letterSpacing={"0.1rem"} fontWeight={"300"} fontSize={"2.6rem"}>{collectionTitle}</Text>
          <Flex wrap={"wrap"} columnGap={"10rem"} rowGap={"1rem"} justifyContent={"center"} marginTop={"4rem"}>
            {mensOutfitPageOutfitCategories.map((ele, index) => {
              return (
                <Box key={index} width={"15rem"}>
                  <CLink as={ReactRouterLink}>
                    <Text>{ele}</Text>
                  </CLink>
                </Box>
              );
            })}
          </Flex>
        </Container>
      </Container>
    </div>
  );
};

export default MensOutfitPage;