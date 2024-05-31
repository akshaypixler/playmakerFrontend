// Chakra UI imports
import { Box, Stack, Image, Text } from "@chakra-ui/react";

import blog3 from "../../assets/images/blog3.jpg";

const MaterialCard = ({
  matName,
  matCode,
  imgPath,
  setOption,
  details,
  setClickedMaterial,
}) => {
  return (
    <Box
      bg={"#AAAAAA"}
      padding={"0.5rem"}
      borderRadius={"md"}
      boxShadow={"lg"}
      cursor={"pointer"}
      onClick={() => {
        setOption("materialDetails");
        setClickedMaterial(details);
      }}
    >
      <Stack direction={"column"} spacing={"0.5rem"}>
        <Box>
          <Image src={imgPath} alt="..." />
        </Box>
        <Text fontSize={"1rem"}>
          {matName} . {matCode}
        </Text>
        <Text fontSize={"0.8rem"}>Quick dry, wrinkle free</Text>
      </Stack>
    </Box>
  );
};

export default MaterialCard;
