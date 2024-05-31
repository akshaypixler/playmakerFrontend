// Chakra Ui imports
import {
  Container,
  Text,
  Box,
  Image,
  Link as CLink
} from "@chakra-ui/react";

// React Rooter imports
import { Link as ReactRouterLink } from "react-router-dom";


const SubAirMenuShopByLooksImageOption = ({ image, text }) => {
  return (
    <Box marginTop={"2rem"} color={"secondary"} fontSize={"1rem"} cursor={"pointer"}>
      <Image src={image} borderRadius={"0.5rem"} />
      <Text marginTop={"0.5rem"}>
        <CLink as={ReactRouterLink} to={"/custom-suits"}>
          {text}
        </CLink>
      </Text>
    </Box>
  );
};

export default SubAirMenuShopByLooksImageOption;