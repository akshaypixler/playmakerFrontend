// Chakra UI imports
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Text,
  Container
} from "@chakra-ui/react";

const accordianItemsListArr = [
  {
    title : "CATEGORY",
    description : (
      <Box>
      <Text fontSize={"0.6rem"} color={"secondary"} marginY={"0.5rem"}>Mandarin(430)</Text>
      <Text fontSize={"0.6rem"} color={"secondary"} marginY={"0.5rem"}>Mandarin(430)</Text>
      <Text fontSize={"0.6rem"} color={"secondary"} marginY={"0.5rem"}>Mandarin(430)</Text>
      <Text fontSize={"0.6rem"} color={"secondary"} marginY={"0.5rem"}>Mandarin(430)</Text>
      </Box>
    )
  },
  {
    title : "STYLE",
    description : (
      <Box>
      <Text fontSize={"0.6rem"} color={"secondary"} marginY={"0.5rem"}>Mandarin(430)</Text>
      <Text fontSize={"0.6rem"} color={"secondary"} marginY={"0.5rem"}>Mandarin(430)</Text>
      <Text fontSize={"0.6rem"} color={"secondary"} marginY={"0.5rem"}>Mandarin(430)</Text>
      <Text fontSize={"0.6rem"} color={"secondary"} marginY={"0.5rem"}>Mandarin(430)</Text>
      </Box>
    )
  },
  {
    title : "MATERIAL",
    description : (
      <Box>
      <Text fontSize={"0.6rem"} color={"secondary"} marginY={"0.5rem"}>Mandarin(430)</Text>
      <Text fontSize={"0.6rem"} color={"secondary"} marginY={"0.5rem"}>Mandarin(430)</Text>
      <Text fontSize={"0.6rem"} color={"secondary"} marginY={"0.5rem"}>Mandarin(430)</Text>
      <Text fontSize={"0.6rem"} color={"secondary"} marginY={"0.5rem"}>Mandarin(430)</Text>
      </Box>
    )
  },
];

const LeftSideMenuAccordianComponent = ({ accordianItemsList = accordianItemsListArr }) => {
  return (
    <Container width={"100%"} maxW={"100%"}>
      <Accordion defaultIndex={[0]} allowMultiple>
        {accordianItemsList.map((ele, index) => {
          return (
            <AccordionItem key={index}>
              <h2>
                <AccordionButton>
                  <Box as='span' flex='1' textAlign='left' color={"secondary"}>
                    {ele.title}
                  </Box>
                  <AccordionIcon color={"secondary"} />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                {ele.description}
              </AccordionPanel>
            </AccordionItem>
          );
        })}
      </Accordion>
    </Container>
  );
};

export default LeftSideMenuAccordianComponent;