// Chakra UI imports
import {
  Container,
  Box,
  Text,
  Button,
  IconButton,
  Stack
} from "@chakra-ui/react";

import { PlusSquareIcon } from "@chakra-ui/icons";

// Component imports
import SelectedProductDetalsTable from "./SelectedProductDetalsTable";

const RightSidePanel = ({ productDetails }) => {
  return (
    <Box>
      <Text fontSize={"2rem"} textAlign={"center"} color={"secondary"}>Your Custom Suit</Text>
      <Text marginTop={"2rem"} color={"secondary"}>Item details:</Text>
      <Box overflow={"auto"} marginTop={"2rem"}>
        <SelectedProductDetalsTable productDetails={productDetails} />
      </Box>
      <Stack direction={"row"} marginTop={"2rem"} justifyContent={"center"} spacing={"2rem"}>
        <Text fontSize={"2rem"} color={"secondary"}>340$</Text>
      <Button size={"lg"} width={"12rem"} fontSize={"1.5rem"} borderRadius={"2rem"} bg={"secondary"}>next</Button>
      </Stack>
      <Text color={"secondary"} marginTop={"2rem"} marginLeft={"2rem"} fontSize={"1.2rem"}>order today, and receive in 2 weeks</Text>
      <Text color={"secondary"} marginTop={"0.3rem"} marginLeft={"2rem"} fontSize={"1.2rem"} fontWeight={"600"}>Free shipping</Text>
      <IconButton marginTop={"8rem"} marginLeft={"15rem"} bg={"secondary"} icon={<PlusSquareIcon color={"primary"} fontSize={"2rem"} width={"2.3rem"} height={"2.3rem"} />} onClick={e => setIsZoomOpen(true)} />
      <Text color={"secondary"} marginLeft={"15rem"}>zoom</Text>
    </Box>
  );
};

export default RightSidePanel;