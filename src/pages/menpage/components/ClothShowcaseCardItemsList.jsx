// Chakra UI imports
import {
  Box,
  Text,
  UnorderedList,
  ListItem,
  ListIcon
} from "@chakra-ui/react";

const ClothShowcaseCardItemsList = ({ listItems }) => {
  return (
    <Box>
      <UnorderedList listStyleType={"none"} color={"secondary"}>
        {listItems.map((item, index) => (
          <ListItem key={index}>
          <Text>&gt; {item}</Text>
        </ListItem>
        ))}
        <ListItem>
          <Text>&gt; Custom Suits</Text>
        </ListItem>
        <ListItem>&gt; Peaky Blinder Suits</ListItem>
      </UnorderedList>
    </Box>
  );
};

export default ClothShowcaseCardItemsList;