import { Box, Flex, Stack, Text, Image } from "@chakra-ui/react";

import bg1 from "../../assets/images/bg1.png";
import bg2 from "../../assets/images/bg2.jpg";
import bg3 from "../../assets/images/bg3.jpg";
import blog1 from "../../assets/images/blog1.jpg";
import blog2 from "../../assets/images/blog2.jpg";
import blog3 from "../../assets/images/blog3.jpg";

const ViewProducts = () => {
  return (
    <Box width={"100%"}>
      <Flex direction={"row"} rowGap={"1rem"} columnGap={"1rem"}>

        <Box width={"12rem"}>
          <Box
            bg={"#AAAAAA"}
            padding={"0.5rem"}
            borderRadius={"md"}
            boxShadow={"lg"}
            cursor={"pointer"}
          >
            <Stack direction={"column"} spacing={"0.5rem"}>
              <Box>
                <Image src={bg1} alt="..." />
              </Box>
              <Text fontSize={"1rem"}>
                Poplin shirt champagne
              </Text>
              <Text fontSize={"0.8rem"}>Casual wear, office wear</Text>
            </Stack>
          </Box>
        </Box>

        <Box width={"12rem"}>
          <Box
            bg={"#AAAAAA"}
            padding={"0.5rem"}
            borderRadius={"md"}
            boxShadow={"lg"}
            cursor={"pointer"}
          >
            <Stack direction={"column"} spacing={"0.5rem"}>
              <Box>
                <Image src={bg2} alt="..." />
              </Box>
              <Text fontSize={"1rem"}>
                Poplin shirt lightblue
              </Text>
              <Text fontSize={"0.8rem"}>Casual wear, office wear</Text>
            </Stack>
          </Box>
        </Box>

        <Box width={"12rem"}>
          <Box
            bg={"#AAAAAA"}
            padding={"0.5rem"}
            borderRadius={"md"}
            boxShadow={"lg"}
            cursor={"pointer"}
          >
            <Stack direction={"column"} spacing={"0.5rem"}>
              <Box>
                <Image src={bg3} alt="..." />
              </Box>
              <Text fontSize={"1rem"}>
                Poplin shirt cobaltblue
              </Text>
              <Text fontSize={"0.8rem"}>Casual wear, office wear</Text>
            </Stack>
          </Box>
        </Box>

        <Box width={"12rem"}>
          <Box
            bg={"#AAAAAA"}
            padding={"0.5rem"}
            borderRadius={"md"}
            boxShadow={"lg"}
            cursor={"pointer"}
          >
            <Stack direction={"column"} spacing={"0.5rem"}>
              <Box>
                <Image src={blog1} alt="..." />
              </Box>
              <Text fontSize={"1rem"}>
                Poplin shirt deepblue
              </Text>
              <Text fontSize={"0.8rem"}>Casual wear, office wear</Text>
            </Stack>
          </Box>
        </Box>

        <Box width={"12rem"}>
          <Box
            bg={"#AAAAAA"}
            padding={"0.5rem"}
            borderRadius={"md"}
            boxShadow={"lg"}
            cursor={"pointer"}
          >
            <Stack direction={"column"} spacing={"0.5rem"}>
              <Box>
                <Image src={blog2} alt="..." />
              </Box>
              <Text fontSize={"1rem"}>
                Poplin shirt white
              </Text>
              <Text fontSize={"0.8rem"}>Casual wear, office wear</Text>
            </Stack>
          </Box>
        </Box>

      </Flex>
    </Box>
  );
};

export default ViewProducts;
