// Chakra UI imports
import {
  Container,
  Box,
  Text,
  Flex
} from "@chakra-ui/react";

// Component imports
import NavBar from "../homepage/components/NavBar";
import CartProductCard from "./components/CartProductCard";
import CartCheckoutDetails from "./components/CartCheckoutDetails";
import Footer from "../homepage/components/Footer";
import CartWhyYouShouldBuyTextCard from "./components/CartWhyYouShouldBuyTextCard";
import NewNavBar from "../../commoncomponents/NewNavBar";

const CartPage = () => {
  return (
    <div style={{backgroundColor : "#332522"}}>
      <NewNavBar />
      <Container maxWidth={"100%"} width={"100%"} p={"5rem"} bg={"primaryLight"}>
        <Flex direction={"row"} justifyContent={"center"} columnGap={"3rem"}>
          <Box>
            <CartProductCard />
          </Box>
          <Box>
            <CartCheckoutDetails />
          </Box>
        </Flex>
      </Container>
      <Container maxWidth={"100%"} width={"100%"} bg={"#fffff0"} paddingY={"3rem"}>
        <Flex direction={"Column"} alignItems={"center"}>
          <Text fontSize={"1.4rem"}>Why should you place your order today?</Text>
          <Box>
            <Flex direction={"row"} columnGap={"5rem"} marginTop={"2rem"}>
              <Box>
                <CartWhyYouShouldBuyTextCard boxWidth={"20rem"} boxHeight={"12.5rem"} titleText={"Because of our Perfect Fit Guarantee"} paraText={"If it does not fit, we remake it for you."} />
              </Box>
              <Box>
                <CartWhyYouShouldBuyTextCard boxWidth={"20rem"} boxHeight={"12.5rem"} titleText={"Because the wide range of options"} paraText={"You own your style, claim it yours"} />
              </Box>
              <Box>
                <CartWhyYouShouldBuyTextCard boxWidth={"20rem"} boxHeight={"12.5rem"} titleText={"Because everyday we are more"} paraText={"Since 2008, more than 400.000 customers"} />
              </Box>
            </Flex>
          </Box>
        </Flex>
      </Container>
      <Footer />
    </div>
  );
};

export default CartPage;