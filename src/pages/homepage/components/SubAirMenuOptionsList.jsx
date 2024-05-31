// Chakra UI imports
import {
  Text,
  Box,
  Link as CLink,
} from "@chakra-ui/react";

import {Link as ReactRouterLink} from "react-router-dom";

const SubAirMenuOptionsList = ({ options, setIsSubAirMenuProductMenuOpen }) => {
  return (
    <Box fontSize={"1rem"} color={"secondary"} marginTop={"2rem"}>
      {options.map(option => <Text 
          marginY={"0.5rem"} 
          cursor={"pointer"}
          onClick={e => setIsSubAirMenuProductMenuOpen(true)}>
        {/* <CLink as={ReactRouterLink} to={"/accessories"}>{option}</CLink> */}
        <CLink as={ReactRouterLink}>{option}</CLink>
      </Text>)}
    </Box>
  );
};

export default SubAirMenuOptionsList;