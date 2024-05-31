// Chakra UI imports
import {
  Container,
  Box,
  Text,
  Radio,
  Flex
} from "@chakra-ui/react";

const filterLabelsArr = ["Wedding", "Business", "Party", "Casual", "Dapper", "Prom", "Beach", "Classic", "Business Casual", "Retro"];

const FilterInputComponent = ({ filterTitle = "By Situation", filterLabels = filterLabelsArr, radioGroupName = "situation" }) => {
  return (
    <Box color={"secondary"}>
      <Text fontSize={"1.1rem"} fontWeight={"600"}>{filterTitle}</Text>
      <Box padding={"0.5rem"} width={"16rem"} marginTop={"0.5rem"}>
        <Flex wrap={"wrap"} direction={"row"} justifyContent={"space-between"} columnGap={"1.5rem"} rowGap={"1rem"}>
          {filterLabels.map((ele, index) => {
            return (
              <Box width={"6rem"}>
                <Radio name={radioGroupName} value={ele} key={index}>{ele}</Radio>
              </Box>
            );
          })}
        </Flex>
      </Box>
    </Box>
  );
};

export default FilterInputComponent;