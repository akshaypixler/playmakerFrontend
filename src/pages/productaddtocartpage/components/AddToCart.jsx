// Chakra UI imports
import {
  Container,
  Box,
  Text,
  Stack,
  Button,
  AspectRatio
} from "@chakra-ui/react";

// Component imports
import LeftSideMenuAccordianComponent from "../../suitsformenpage/components/LeftSideMenuAccordianComponent";
import FabricDetailAndCare from "./FabricDetailAndCare";
import CustomizeShipCard from "./CustomizeShipCard";

// Icon imports
import { 
  FaCartPlus,
  FaEdit 
} from "react-icons/fa";

// Image imports
import freeShipping from "../../../assets/images/freeShipping.png";
import perfectFit from "../../../assets/images/perfectFit.png";

const accordionItemsArr = [
  {
    title : (<Text>ALL SIZES - MADE TO MEASURE</Text>),
    description : (<Text color={"secondary"}>
      All our garments are made to your exact measurements. So you don’t need to worry about choosing the right size. After adding a product to your cart, we will ask for your exact measurements. It is a really simple process.
    </Text>)
  },
  {
    title : (<Text>{"About this garment".toUpperCase()}</Text>),
    description : (<Box>
      <Text marginY={"0.6rem"} as={"p"} color={"secondary"}>
      This will be truly unique and a great asset to your wardrobe.
    </Text>
    <Text marginY={"0.6rem"} color={"secondary"}>
    This already looks great like this, but since we believe in custom fashion, we give you the possibility to personalize this shirt to your speicfic preferences. Pockets, Buttons, Collar, Cuffs make it yours in a few clicks. Design from scratch your own here: Bespoke Shirts
    </Text>
    <Text marginY={"0.6rem"} color={"secondary"}>
    This tailored blue Shirt is made of Cotton Blend, a fabric you can wear all year long, but really stands out during the warmer days. It's fresh, durable and perfect for your Shirt Color: blue Fabric: Vance, Cotton Blend Type of Fabric: Premium Season: Year round
    </Text>
    </Box>)
  },
  {
    title : (<Text>{"Fabric detail & care".toUpperCase()}</Text>),
    description : (<Box>
                      <FabricDetailAndCare />
                      <Text color={"secondary"}>
                        Our high quality seersucker fabrics will make you the star of the event. Seersucker is made of cotton and will help your thermal regulation and a bold outfit at the same time. 
                      </Text>
                   </Box>)
  },
  {
    title : (<Text>{"perfect fit, guaranteed ".toUpperCase()}</Text>),
    description : (<Text color={"secondary"}>
      At Playmaker, we know the importance of a perfect fit which is why all our garments are hand-made under strict quality control. Even on rare occasions that your product may not have the right fit, we have created our Perfect Fit Guarantee.
    </Text>)
  },
  {
    title : (<Text>{"how to get measured ".toUpperCase()}</Text>),
    description : (<Box><Text color={"secondary"}>
      Take your measurements wherever you are. You don't need a tailor, you just need a friend. Check out our introductory video. 
    </Text>
    <AspectRatio maxW={"600px"} ratio={21/9} marginTop={"1.5rem"}>
    <iframe src="https://www.youtube.com/embed/NwG8mNX_U3Y?si=xWbT6M2WMTQBRQ6o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </AspectRatio>
    </Box>)
  },
];

const AddToCart = () => {
  return (
    <Box>
      <Stack direction={"column"} alignItems={"center"} spacing={"3rem"}>
        <Box width={"80%"} color={"secondary"}>
          <table width={"100%"}>
            <tr>
              <td align="left">
                <Text fontSize={"1.2rem"}>CUSTOM SUITS</Text>
              </td>
              <td align="right">
                <Text fontSize={"1.2rem"}>FREE SHIPPING!</Text>
              </td>
            </tr>
            <tr>
              <td align="left">
                <Text fontSize={"1.8rem"} fontWeight={600} lineHeight={"2.2rem"}>Navy blue lightweight seersucker<br /> slim fit Suit</Text>
              </td>
              <td align="right">
                <Text fontSize={"1.8rem"}>259€</Text>
                <Text fontSize={"0.8rem"}>VAT incl.</Text>
              </td>
            </tr>
          </table>
        </Box>
        <Box width={"80%"}>
          <Stack direction={"row"} alignItems={"start"}>
            <Button leftIcon={<FaCartPlus />} size={"lg"} bg={"secondary"} width={"16rem"}>ADD TO CART</Button>
            <Button leftIcon={<FaEdit />} size={"lg"} bg={"secondary"} width={"16rem"}>CUSTOMIZE</Button>
          </Stack>
        </Box>
        <Box width={"80%"}>
          <LeftSideMenuAccordianComponent accordianItemsList = {accordionItemsArr} />
        </Box>
        <Box width={"80%"} paddingX={"10rem"}>
          <Stack direction={"row"} spacing={"5rem"}>
            <Box width={"6rem"}>
              <CustomizeShipCard />
            </Box>
            <Box width={"6rem"}>
              <CustomizeShipCard iconPath={freeShipping} description="Free shipping" />
            </Box>
            <Box width={"6rem"}>
              <CustomizeShipCard iconPath={perfectFit} description="Perfect fit, guaranteed" />
            </Box>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
};

export default AddToCart;