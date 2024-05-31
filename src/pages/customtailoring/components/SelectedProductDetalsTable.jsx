// Chakra UI imports
import {
  Container,
  Box,
  Text,
  Image,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import { color } from "framer-motion";

const details = {
  color : "Deepblue",
  collarType : "New kent",
  cuffType : "Single cuff 1 button",
  sleeveType : "Long",
  chestPocketType : "No pocket",
  monogramText : "Abc",
  monogramThreadColor : "Black",
  monogramPosition : "Chest",
  price : 349
}

const SelectedProductDetalsTable = ({ productDetails = details }) => {
  return (
    <Box>
      <TableContainer>
        <Table variant={"simple"}>
          <Thead>
            <Tr>
              <Th>
                <Text color={"secondary"}>Item</Text>
              </Th>
              <Th>
                <Text color={"secondary"}>Value</Text>
              </Th>
              <Th>
                <Text color={"secondary"}>Price</Text>
              </Th>
            </Tr>
          </Thead>
          <Tbody color={"secondary"}>
            {/* <Tr>
              <Td>
                <Text>Color</Text>
              </Td>
              <Td>
                <Text>{productDetails.color}</Text>
              </Td>
              <Td>
                <Text>{"4$"}</Text>
              </Td>
            </Tr> */}
            <Tr>
              <Td>
                <Text>Collar type</Text>
              </Td>
              <Td>
                <Text>{productDetails.collarDetails.collarName}</Text>
              </Td>
              <Td>
                <Text>{productDetails.collarDetails.price + "$"}</Text>
              </Td>
            </Tr>
            <Tr>
              <Td>
                <Text>Cuff type</Text>
              </Td>
              <Td>
                <Text>{productDetails.cuffDetails.id === "cuff002" ? "No cuff" : productDetails.cuffDetails.cuffName}</Text>
              </Td>
              <Td>
                <Text>{productDetails.cuffDetails.price + "$"}</Text>
              </Td>
            </Tr>
            <Tr>
              <Td>
                <Text>Sleeve type</Text>
              </Td>
              <Td>
                <Text>{productDetails.sleeveDetails.sleeveName}</Text>
              </Td>
              <Td>
                <Text>{productDetails.sleeveDetails.price + "$"}</Text>
              </Td>
            </Tr>
            <Tr>
              <Td>
                <Text>Chestpocket</Text>
              </Td>
              <Td>
                <Text>{productDetails.chestPocketDetails.chestPocketName}</Text>
              </Td>
              <Td>
                <Text>{productDetails.chestPocketDetails.price + "$"}</Text>
              </Td>
            </Tr>
            <Tr>
              <Td>
                <Text>Monogram text</Text>
              </Td>
              <Td>
                <Text>{productDetails.monogramName}</Text>
              </Td>
              <Td>
                <Text>{"4$"}</Text>
              </Td>
            </Tr>
            <Tr>
              <Td>
                <Text>Monogram thread color</Text>
              </Td>
              <Td>
                <Text>{productDetails.monogramThreadColorName}</Text>
              </Td>
              <Td>
                <Text>{"4$"}</Text>
              </Td>
            </Tr>
            <Tr>
              <Td>
                <Text>Monogram position</Text>
              </Td>
              <Td>
                <Text>{productDetails.monogramInitialPosition}</Text>
              </Td>
              <Td>
                <Text>{"0$"}</Text>
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default SelectedProductDetalsTable;