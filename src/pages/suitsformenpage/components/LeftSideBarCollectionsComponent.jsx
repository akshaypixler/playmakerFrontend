// Chakra UI imports
import {
  Container, 
  Box,
  Text
} from "@chakra-ui/react";

// Component imports
import OpenCloseViewMoreList from "./OpenCloseViewMoreList";

const LeftSideBarCollectionsComponent = ({ title = "COLLECTIONS" }) => {
  return (
    <Container color={"secondary"}>
      <Text>{title}</Text>
      <Box marginTop={"0.6rem"}>
        <OpenCloseViewMoreList />
      </Box>
    </Container>
  );
};

export default LeftSideBarCollectionsComponent;