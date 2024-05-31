// Chakra UI imports
import { Container, Box, Text, Flex, Spinner } from "@chakra-ui/react";

import MaterialCard from "./MaterialCard";
import { useCallback, useEffect, useState } from "react";

import { axiosInstance } from "../../../config";

const ViewMaterial = ({ fetchedMaterials, setOption, setClickedMaterial }) => {
  return (
    <Container width={"100%"} maxWidth={"100%"}>
      <Box padding={"1rem"}>
        {fetchedMaterials ? (
          <Flex
            direction={"row"}
            columnGap={"1.2rem"}
            rowGap={"1.2rem"}
            flexWrap={"wrap"}
          >
            {fetchedMaterials.map((ele) => {
              console.log(ele);
              return (
                <Box width={"10rem"} key={ele.materialCode}>
                  <MaterialCard matName={ele.materialName} matCode={ele.materialCode} imgPath={ele.materialImageURL} details={ele} setOption={setOption} setClickedMaterial={setClickedMaterial} />
                </Box>
              );
            })}
          </Flex>
        ) : (
          <Box marginX={"auto"} marginTop={"20rem"} width={"20rem"}>
            <Spinner size={"xl"} color="royalblue" />
          </Box>
        )}
      </Box>
    </Container>
  );
};

export default ViewMaterial;
