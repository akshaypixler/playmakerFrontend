// Chakra UI imports
import {
  Container,
  Box,
  Text,
  Flex,
  Image,
  Stack,
  Button,
  Link as CLink
} from "@chakra-ui/react";

// React router imports
import { Link as ReactRouterLink } from "react-router-dom";

// Component imports
import NavBar from "../homepage/components/NavBar";

// Image imports
import productImage from "../../assets/images/productImage.png";

import NewNavBar from "../../commoncomponents/NewNavBar";

const productDescription = `
  You want clearly to stand out with your new burgundy tuxedo. And guess what, you will, because a perfectly fitted and personalized maroon tuxedo will make you become the king of the event. Design your own burgundy tuxedo online.
`;

const ProductPage = ({ productImg = productImage, productTitle = "Burgundy tuxedo", productDescTitle = "The perfect Maroon Tuxedo", productDesc = productDescription }) => {
  return (
    <div>
      <NewNavBar />
      <Container width={"100%"} maxW={"100%"} bg={"primary"} height={"100rem"} padding={"10rem"}>
        <Flex direction={"row"} justify={"center"} columnGap={"10rem"}>
          <Box height={"50rem"}>
            <Image src={productImage} height={"60rem"} />
          </Box>
          <Box color={"secondary"} width={"40rem"}>
            <Stack direction={"column"} alignItems={"center"}>
              <Text fontSize={"3.5rem"} fontWeight={"500"} letterSpacing={"0.1rem"}>{productTitle}</Text>
              <Stack direction={"row"} marginTop={"1.5rem"} alignItems={"center"} spacing={"3rem"}>
                <Box>
                  <Text as={"sup"} fontSize={"1rem"}>from&nbsp;</Text>
                  <Text as={"span"} fontSize={"2.8rem"} fontWeight={"300"}>259&#8364;</Text>
                </Box>
                <Box>
                  <CLink as={ReactRouterLink}>
                    <Button size={"lg"} bg={"secondary"} borderRadius={"2rem"}>Design yours</Button>
                  </CLink>
                </Box>
              </Stack>
              <Box>
                <Text textAlign={"center"} marginTop={"3rem"} fontSize={"1.1rem"} fontWeight={"600"}>{productDescTitle}</Text>
                <Text textAlign={"center"} fontSize={"1.1rem"} fontWeight={"300"}>{productDesc}</Text>
              </Box>
            </Stack>
          </Box>
        </Flex>
      </Container>
    </div>
  );
};

export default ProductPage;