// Chakra UI imports
import {
  Container,
  Text,
  Box
} from "@chakra-ui/react";

const lTitle = "Suits for Men";
const lDescription = `
  Your new suit for men is made to measure. Choose the style and the fabric perfect for your suit jacket and pants. Customize your own tailored suit for men: unique and perfect for you. A made to measure suit for men with the style and fabric that you choose: wool, cotton or linen. Single- or double-breasted. Get free shipping on all Hockerty men suits. Design your suit for men
`;

const TitleDescription = ({ title = lTitle, description = lDescription }) => {
  return (
    <Container width={"100%"} maxW={"100%"} padding={"2rem"} color={"secondary"}>
      <Box w={"60rem"}>
        <Text fontSize={"2rem"}>{title}</Text>
        <Text fontSize={"1rem"}>{description}</Text>
      </Box>
    </Container>
  );
};

export default TitleDescription;