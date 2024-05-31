// Chakra UI imports
import {
  Box,
  Text,
  Stack,
  Flex,
  Image
} from "@chakra-ui/react";

// Image imports
import productCartImage from "../../../assets/images/productCartImage.png";

const productObj = {
  imgPath : productCartImage,
  name : "Checks blue shirt",
  color : "Sky blue",
  price : 40,
  currency : "dollar",
  deliveryStatus : "delivered in 3 weeks",
  quantity : 1
};

const CartProductCard = ({ product = productObj }) => {
  return (
    <Box paddingY={"1.5rem"} paddingX={"4rem"} bg={"primary"} borderRadius={"md"}>
      <Flex direction={"row"} columnGap={"1rem"}>
        <Box>
          <Image src={product.imgPath} width={"15rem"} />
        </Box>
        <Box paddingY={"3rem"} lineHeight={"1rem"}>
          <Stack direction={"column"} color={"secondary"}>
            <Text fontSize={"1.2rem"}>{product.name}</Text>
            <Text fontSize={"1rem"}>Color : {product.color}</Text>
            <Text fontSize={"1rem"}>Price : {product.price}&#x24;</Text>
            <Text fontSize={"1rem"}>Quantity : {product.quantity}</Text>
            <Text fontSize={"1rem"}>{product.deliveryStatus}</Text>
          </Stack>
        </Box>
      </Flex>
    </Box>
  );
};

export default CartProductCard;