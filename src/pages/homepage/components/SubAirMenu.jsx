import {
  Container,
  Box,
  Text,
  IconButton
} from "@chakra-ui/react";

// Icon Imports
import { 
  CloseIcon
 } from "@chakra-ui/icons";

const SubAirMenu = ({ setIsSubAirMenuOpen, children }) => {
  return (
    <Container w={"22rem"} padding={"1rem"} bg={"primaryLight"}>
      <IconButton icon={<CloseIcon color={"secondary"} />} marginLeft={"90%"} marginTop={"1.5rem"} bg={"transparent"} onClick={e => setIsSubAirMenuOpen(false)} />
      {children}
    </Container>
  );
};

export default SubAirMenu;