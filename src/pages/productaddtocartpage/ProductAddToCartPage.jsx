// Hook imports
import { useState } from "react";

// Chakra UI imports
import {
  Container,
  Box,
  Text,
  Flex,
  Icon,
  Stack,
  Image
} from "@chakra-ui/react";

// Component imports
import NavBar from "../homepage/components/NavBar";
import AddToCart from "./components/AddToCart";
import Footer from "../homepage/components/Footer";
import NewNavBar from "../../commoncomponents/NewNavBar";

// Icon imports
import { GrGallery } from "react-icons/gr";

// Image imports
import gal1 from "../../assets/images/gal(1).webp";
import gal2 from "../../assets/images/gal(2).webp";
import gal3 from "../../assets/images/gal(3).webp";
import gal4 from "../../assets/images/gal(4).webp";

const ProductAddToCartPage = () => {

  const [showImage, setShowImage] = useState(gal1);

  return (
    <div style={{backgroundColor : "#332522"}}>
      <NewNavBar />
      <Container width={"100%"} maxWidth={"100%"} bg={"primaryLight"} paddingY={"3rem"} height={"75rem"}>
        <Flex columnGap={"8rem"}>
          <Box>
            <Stack direction={"column"} spacing={"1.5rem"}>
              <Box>
                <Stack direction={"row"} alignItems={"center"}>
                  <Icon as={GrGallery} color={"secondary"} />
                  <Text color={"secondary"}>Images</Text>
                </Stack>
              </Box>
              <Box>
                <Stack direction={"column"} spacing={"1rem"}>
                  <Image 
                    src={gal1} 
                    alt="..." 
                    width={"2.6rem"}
                    onClick={(e) => {
                      setShowImage(gal1)
                    }} />
                  <Image 
                    src={gal2} 
                    alt="..." 
                    width={"2.6rem"}
                    onClick={(e) => {
                      setShowImage(gal2)
                    }} />
                  <Image 
                    src={gal3} 
                    alt="..." 
                    width={"2.6rem"}
                    onClick={(e) => {
                      setShowImage(gal3)
                    }} />
                  <Image 
                    src={gal4} 
                    alt="..." 
                    width={"2.6rem"}
                    onClick={(e) => {
                      setShowImage(gal4)
                    }} />
                </Stack>
              </Box>
            </Stack>
          </Box>
          <Box width={"25rem"} bg={"white"}>
            <Image src={showImage} alt="..." />
          </Box>
          <Box width={"60rem"}>
            <AddToCart />
          </Box>
        </Flex>
      </Container>
      <Footer />
    </div>
  );
};

export default ProductAddToCartPage;