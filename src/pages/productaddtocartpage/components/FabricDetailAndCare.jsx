// Chakra UI imports
import {
  Box,
  Text,
  Flex,
  Image,
  Link as CLink
} from "@chakra-ui/react";

// React Router imports
import { Link as ReactRouterLink } from "react-router-dom";

// Image imports
import fab1 from "../../../assets/images/fab1.jpg";

const fabDetailsObj = {
  img : fab1,
  origin : "Hirst",
  rawFabricMaterial : "Cotton",
  fabricComposition : "100% cotton",
  fabricColor : "Navy blue",
  weight : 110,
  excellence : 3,
  warmth : 1,
  yarn : 2,
  tags : ["Essential", "110gsm", "Summer", "Navy blue"]
};

const FabricDetailAndCare = ({ fabricDetails = fabDetailsObj }) => {
  return (
    <Box>
      <Flex direction={"row"} columnGap={"2rem"}>
        <Box>
          <Image src={fabDetailsObj.img} boxSize={"9rem"} />
        </Box>
        <Box color={"secondary"} marginTop={"1.4rem"} lineHeight={"2rem"}>
          <Text as={"span"} fontSize={"1.1rem"} fontWeight={"600"}>{fabricDetails.origin},&nbsp;</Text><Text as={"span"} fontSize={"1.1rem"}>{fabricDetails.rawFabricMaterial}</Text>
          <Text>{fabricDetails.fabricComposition}</Text>
          <Text>{fabricDetails.tags?.join(", ")}</Text>
          <CLink as={ReactRouterLink}><Text>MORE INFO</Text></CLink>
        </Box>
      </Flex>
    </Box>
  );
};

export default FabricDetailAndCare;