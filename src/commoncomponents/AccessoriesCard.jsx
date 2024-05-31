import { Box, Text, Image, Link as CLink } from "@chakra-ui/react";

import { Link as ReactRouterLink } from "react-router-dom";

const AccessoriesCard = ({ img, title, price, navigateTo }) => {
  
  return (
    <Box>
      <CLink as={ReactRouterLink} to={navigateTo}>
        <Box
          bg={"#f8f9fa"}
          boxShadow={"md"}
          padding={"0.6rem"}
          _hover={{
            boxShadow: "dark-lg",
            borderTop: "5px solid #583101",
          }}
        >
          <Image src={img} width={"15rem"} />
          <Text
            textAlign={"center"}
            fontSize={"1.2rem"}
            fontWeight={600}
            marginTop={"0.5rem"}
          >
            {title}
          </Text>
          <Text textAlign={"center"}>from {price}$</Text>
        </Box>
      </CLink>
    </Box>
  );
};

export default AccessoriesCard;
