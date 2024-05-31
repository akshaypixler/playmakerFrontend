// Chakra UI imports
import {
  Container,
  Box,
  Text,
  Stack,
  Flex,
  Image,
  Button,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Input,
  InputGroup,
  InputLeftAddon,
} from "@chakra-ui/react";

// Component imports
import CreateMaterial from "./components/CreateMaterial";

import { useLocation, useNavigate } from "react-router-dom";

import _ from "lodash";

import { SearchIcon } from "@chakra-ui/icons";
import { axiosInstance } from "../../config";
import { useCallback, useState } from "react";
import ViewMaterial from "./components/ViewMaterial";
import MaterialDetails from "./components/MaterialDetails";
import CreateProduct from "./components/CreateProduct";
import ViewProducts from "./components/ViewProducts";

const AdminDashboardPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [option, setOption] = useState("createMaterial");
  const [fetchedMaterials, setFetchedMaterials] = useState("");
  const [clickedMaterial, setClickedMaterial] = useState("");
  console.log(location);

  const userData = location.state;

  const getMaterials = async () => {
    const resp = await axiosInstance.get("/admin/get-materials");
    return resp.data.data;
  };

  return (
    <Container width={"100%"} maxWidth={"100%"} height={"100vh"} padding={0}>
      <Flex direction={"row"} columnGap={"0.5rem"}>
        <Box
          width={"13%"}
          height={"100vh"}
          bg={"#2b2c28"}
          color={"#EEEEEE"}
          borderRadius={"0.5rem"}
          boxShadow={"lg"}
          marginLeft={"0.2rem"}
          marginTop={"0.2rem"}
        >
          <Box>
            <Accordion allowMultiple allowToggle>
              <AccordionItem border={"none"}>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    Materials
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel>
                  <Stack direction={"column"}>
                    <Box
                      paddingLeft={"0.5rem"}
                      _hover={{
                        backgroundColor: "#DDDDDD",
                        color: "black",
                      }}
                      onClick={() => {setOption("createMaterial")}}
                    >
                      <Text>Create material</Text>
                    </Box>
                    <Box 
                      paddingLeft={"0.5rem"}
                      _hover={{
                        backgroundColor: "#DDDDDD",
                        color: "black",
                      }}
                      onClick={async () => {
                        const materialsArr = await getMaterials();
                        setFetchedMaterials(materialsArr);
                        setOption("viewMaterial");
                      }}
                      >
                      <Text>View materials</Text>
                    </Box>
                  </Stack>
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem border={"none"}>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    Products
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel>
                  <Stack direction={"column"}>
                    <Box
                      paddingLeft={"0.5rem"}
                      _hover={{
                        backgroundColor: "#DDDDDD",
                        color: "black",
                      }}
                      onClick={() => {setOption("createProduct")}}
                    >
                      <Text>Create product</Text>
                    </Box>
                    <Box 
                      paddingLeft={"0.5rem"}
                      _hover={{
                        backgroundColor: "#DDDDDD",
                        color: "black",
                      }}
                      onClick={async () => {
                        const materialsArr = await getMaterials();
                        setFetchedMaterials(materialsArr);
                        setOption("viewProducts");
                      }}
                      >
                      <Text>View products</Text>
                    </Box>
                  </Stack>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </Box>
        </Box>
        <Box width={"87%"}>
          <Stack direction={"column"}>
            <Box
              width={"99%"}
              bg={"#DDDDDD"}
              paddingY={"0.5rem"}
              boxShadow={"md"}
              borderRadius={"0.5rem"}
            >
              <Stack direction={"row"} justifyContent={"space-around"}>
                <Box>
                  <InputGroup>
                    <InputLeftAddon>
                      <SearchIcon />
                    </InputLeftAddon>
                    <Input
                      bg={"white"}
                      type="text"
                      width={"35rem"}
                      _focus={{
                        outline: "none",
                        border: "none",
                      }}
                    />
                  </InputGroup>
                </Box>
                <Box>
                  <Stack
                    direction={"row"}
                    spacing={"1.5rem"}
                    justifyContent={"center"}
                  >
                    <Box>
                      <Stack direction={"row"} spacing={"0.5rem"}>
                        <Text paddingTop={"0.2rem"}>
                          {_.capitalize(userData.user.firstName) +
                            " " +
                            _.capitalize(userData.user.lastName)}
                        </Text>
                        <Image
                          src={userData.user.avatarImagePath}
                          boxSize={"2.2rem"}
                          borderRadius={"1rem"}
                        />
                      </Stack>
                    </Box>
                    <Button 
                      size={"sm"}
                      onClick={async () => {
                        const resp = await axiosInstance.get("/admin/logout");
                        console.log(resp);
                        navigate("/admin/login");
                      }} >logout</Button>
                  </Stack>
                </Box>
              </Stack>
            </Box>

            <Box
              width={"99%"}
              borderRadius={"0.5rem"}
              boxShadow={"md"}
              bg={"#EEEEEE"}
              height={"93vh"}
              padding={"1rem"}
              overflowX={"auto"}
            >
              {option === "createMaterial" ? <Box width={"90%"} marginX={"auto"}>
                <CreateMaterial />
              </Box> : ""}
              {option === "viewMaterial" ? <Box width={"100%"} marginX={"auto"}>
                <ViewMaterial fetchedMaterials={fetchedMaterials} setOption={setOption} setClickedMaterial={setClickedMaterial} />
              </Box> : ""}
              {option === "materialDetails" ? <Box width={"100%"} marginX={"auto"}>
                <MaterialDetails clickedMaterial={clickedMaterial} setOption={setOption} />
              </Box> : ""}
              {option === "createProduct" ? <Box width={"100%"} marginX={"auto"}>
                <CreateProduct />
              </Box> : ""}
              {option === "viewProducts" ? <Box width={"100%"} marginX={"auto"}>
                <ViewProducts />
              </Box> : ""}
            </Box>
          </Stack>
        </Box>
      </Flex>
    </Container>
  );
};

export default AdminDashboardPage;
