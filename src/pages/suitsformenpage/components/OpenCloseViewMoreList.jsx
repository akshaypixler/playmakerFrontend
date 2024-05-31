// Chakra UI imports
import {
  Container,
  Box,
  Text
} from "@chakra-ui/react";

const optionsArr = ["Business Suits", "Wedding Suits 2024", "Fall/Winter Suits", "Stylish Suits", "New Suits Arrivals", "Party Suits"];

const OpenCloseViewMoreList = ({ length = 6, options = optionsArr }) => {
  return (
    <Box>
      {options.map((ele, index) => {
        return (
          <Text color={"secondary"} fontSize={"0.8rem"} marginY={"0.3rem"} key={index}>{ele}</Text>
        );
      })}
    </Box>
  );
};

export default OpenCloseViewMoreList;