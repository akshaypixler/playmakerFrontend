// Chakra UI imports
import {
  Box,
  Text,
  Stack,
  Button
} from "@chakra-ui/react";

// Icon imports
import { LockIcon } from "@chakra-ui/icons";
import { FaCcVisa, FaCcMastercard, FaCcApplePay } from "react-icons/fa";
import { SiAmericanexpress } from "react-icons/si";

const CartCheckoutDetails = ({ productDetails }) => {
  return (
    <Box>
      <Stack direction={"column"} alignItems={"center"} color={"secondary"}>
        <Text textAlign={"center"}>You are eligible for free shipping</Text>
        <Text textAlign={"center"}>Order today, receive it in 3 weeks. (tracked)</Text>
        <table width={"100%"}>
          <tr>
            <td align="left"><Text fontSize={"1.2rem"}>Shopping bag total:</Text></td>
            <td align="right"><Text fontSize={"1.2rem"}>40&#x24;</Text></td>
          </tr>
          <tr>
            <td align="left"><Text fontSize={"1.2rem"}>Shipping:</Text></td>
            <td align="right"><Text fontSize={"1.2rem"}>Free!</Text></td>
          </tr>
          <tr>
            <td align="left"><Text fontSize={"2rem"}>Total:</Text></td>
            <td align="right"><Text fontSize={"2rem"}>42&#x24;</Text></td>
          </tr>
        </table>
        <Button leftIcon={<LockIcon color={"primary"} />} color={"primary"} bg={"secondary"} width={"100%"} borderRadius={"2rem"}>Secure checkout</Button>
        <Box marginTop={"3rem"}>
          <Text>Our payment methods:</Text>
          <Stack direction={"row"} marginTop={"0.6rem"}>
            <FaCcVisa style={{fontSize : "1.8rem"}} />
            <FaCcMastercard style={{fontSize : "1.8rem"}} />
            <SiAmericanexpress style={{fontSize : "1.8rem"}} />
            <FaCcApplePay style={{fontSize : "1.8rem"}} />
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
};

export default CartCheckoutDetails;