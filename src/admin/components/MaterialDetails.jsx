// Chakra UI imports
import {
  Box,
  Text,
  Stack,
  Flex,
  Image,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Textarea,
  Button,
} from "@chakra-ui/react";
import { useState } from "react";

import { axiosInstance } from "../../../config";

// React hook forms
import { useForm } from "react-hook-form";

const MaterialDetails = ({ clickedMaterial, setOption }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();
  const [updateImageUrl, setUpadteImageUrl] = useState({ url: "", file: "" });

  const submitUpdateForm = (data) => {
    console.log(data);
  } 

  return (
    <Box>
      <form onSubmit={handleSubmit(submitUpdateForm)}>
        <Flex direction={"row"}>
          <Box width={"40%"}>
            <Image
              src={clickedMaterial.materialImageURL}
              boxSize={"36rem"}
              borderRadius={"2rem"}
              boxShadow={"2xl"}
            />
            <Box marginTop={"2rem"}>
              <Stack direction={"row"}>
                <Text width={"30%"}>Update image</Text>
                <FormControl isInvalid={errors.updateImage}>
                  <Input
                    type="file"
                    border={"none"}
                    name="updateImage"
                    id="updateImage"
                    _hover={{
                      border: "none",
                      outline: "none",
                    }}
                    {...register("updateImage", {
                      required: "Field is required",
                      onChange: (e) => {
                        const file = e.target.files[0];
                        const url = URL.createObjectURL(file);
                        setUpadteImageUrl({ url: url, file: file });
                        console.log(url);
                        console.log(file);
                      },
                      validate: (value) => {
                        const file = value[0];
                        console.log(file);
                        if (file.size > 512000)
                          return "File size should not be more than 512kb";
                        return true;
                      },
                    })}
                  />
                  <FormErrorMessage>{errors.updateImage ? errors.updateImage.message : ''}</FormErrorMessage>
                </FormControl>
              </Stack>
              <Box
                border={"1px solid black"}
                boxSize={"15rem"}
                marginTop={"1.2rem"}
              >
                <Image boxSize={"15rem"} src={updateImageUrl.url} />
              </Box>
            </Box>
          </Box>
          <Box width={"60%"} paddingTop={"3rem"}>
            <Stack direction={"column"} spacing={"2rem"}>
              <Box width={"100%"}>
                <FormControl isInvalid={errors.materialCode}>
                  <Stack direction={"row"} justifyContent={"center"}>
                    <FormLabel htmlFor="materialCode" width={"20%"} fontSize={"1.3rem"}>
                      Material code
                    </FormLabel>
                    <Input
                      width={"80%"}
                      size={"md"}
                      name="materialCode"
                      id="materialCode"
                      bg={"#CCCCCC"}
                      type="text"
                      { ...register("materialCode", {
                        value : clickedMaterial.materialCode,
                        required : "This field is required",
                        validate : async (value) => {
                          try {
                            const headers = {
                              headers : {
                                "Content-Type" : "application/x-www-form-urlencoded"
                              }
                            };
                            const data = {
                              materialUid: value
                            };
                            const resp = await axiosInstance.post("/admin/get-material", data, headers);
                            console.log(resp);
                            if (resp.status == 200)
                              return "Material name already exists, please provide different material name";
                          } catch (error) {
                            console.log(error);
                            return true;
                          }
                        }
                      }) }
                    />
                  </Stack>
                  <Box width={"30%"} height={"1.2rem"}>
                    <FormErrorMessage height={"1rem"}>{errors.materialCode ? errors.materialCode.message : '' }</FormErrorMessage>
                  </Box>
                </FormControl>
              </Box>
              <Box width={"100%"}>
                <FormControl isInvalid={errors.materialName}>
                  <Stack direction={"row"} justifyContent={"center"}>
                    <FormLabel htmlFor="materialName" width={"20%"} fontSize={"1.3rem"}>
                      Material name
                    </FormLabel>
                    <Input
                      width={"80%"}
                      size={"md"}
                      bg={"#CCCCCC"}
                      name="materialName"
                      id="materialName"
                      type="text"
                      { ...register("materialName", {
                        value : clickedMaterial.materialName,
                        required : "This field is required",
                        validate : async (value) => {
                          try {
                            const headers = {
                              headers : {
                                "Content-Type" : "application/x-www-form-urlencoded"
                              }
                            };
                            const data = {
                              materialUid: value
                            };
                            const resp = await axiosInstance.post("/admin/get-material", data, headers);
                            console.log(resp);
                            if (resp.status == 200)
                              return "Material name already exists, please provide different material name";
                          } catch (error) {
                            console.log(error);
                            return true;
                          }
                        }
                      }) }
                    />
                  </Stack>
                  <Box width={"30%"} height={"1.2rem"}>
                    <FormErrorMessage height={"1rem"}>{errors.materialName ? errors.materialName.message : ""}</FormErrorMessage>
                  </Box>
                </FormControl>
              </Box>
              <Box width={"100%"}>
                <FormControl>
                  <Stack direction={"row"} justifyContent={"center"}>
                    <FormLabel width={"20%"} fontSize={"1.3rem"}>
                      Material fabric
                    </FormLabel>
                    <Input
                      width={"80%"}
                      size={"md"}
                      bg={"#CCCCCC"}
                      readOnly
                      type="text"
                      value={clickedMaterial.materialFabric}
                    />
                  </Stack>
                  <Box width={"30%"} height={"1.2rem"}>
                    <FormErrorMessage height={"1rem"}></FormErrorMessage>
                  </Box>
                </FormControl>
              </Box>
              <Box width={"100%"}>
                <FormControl isInvalid={errors.materialColor}>
                  <Stack direction={"row"} justifyContent={"center"}>
                    <FormLabel htmlFor="materialColor" width={"20%"} fontSize={"1.3rem"}>
                      Material color
                    </FormLabel>
                    <Input
                      width={"80%"}
                      size={"md"}
                      bg={"#CCCCCC"}
                      name="materialColor"
                      id="materialColor"
                      type="text"
                      { ...register("materialColor", {
                        value : clickedMaterial.materialColor,
                        required : "This field is required"
                      }) }
                    />
                  </Stack>
                  <Box width={"30%"} height={"1.2rem"}>
                    <FormErrorMessage height={"1rem"}>{errors.materialColor ? errors.materialColor.message : ""}</FormErrorMessage>
                  </Box>
                </FormControl>
              </Box>
              <Box width={"100%"}>
                <FormControl>
                  <Stack direction={"row"} justifyContent={"center"}>
                    <FormLabel width={"20%"} fontSize={"1.3rem"}>
                      Material type
                    </FormLabel>
                    <Input
                      width={"80%"}
                      size={"md"}
                      bg={"#CCCCCC"}
                      readOnly
                      type="text"
                      value={clickedMaterial.materialType}
                    />
                  </Stack>
                  <Box width={"30%"} height={"1.2rem"}>
                    <FormErrorMessage height={"1rem"}></FormErrorMessage>
                  </Box>
                </FormControl>
              </Box>
              <Box width={"100%"}>
                <FormControl>
                  <Stack direction={"row"} justifyContent={"center"}>
                    <FormLabel width={"20%"} fontSize={"1.3rem"}>
                      Material GSM
                    </FormLabel>
                    <Input
                      width={"80%"}
                      size={"md"}
                      bg={"#CCCCCC"}
                      readOnly
                      type="text"
                      value={clickedMaterial.materialGSM}
                    />
                  </Stack>
                  <Box width={"30%"} height={"1.2rem"}>
                    <FormErrorMessage height={"1rem"}></FormErrorMessage>
                  </Box>
                </FormControl>
              </Box>
              <Box width={"100%"}>
                <FormControl>
                  <Stack direction={"row"} justifyContent={"center"}>
                    <FormLabel width={"20%"} fontSize={"1.3rem"}>
                      Material properties
                    </FormLabel>
                    <Input
                      width={"80%"}
                      size={"md"}
                      bg={"#CCCCCC"}
                      readOnly
                      type="text"
                      value={clickedMaterial.materialProperties}
                    />
                  </Stack>
                  <Box width={"30%"} height={"1.2rem"}>
                    <FormErrorMessage height={"1rem"}></FormErrorMessage>
                  </Box>
                </FormControl>
              </Box>
              <Box width={"100%"}>
                <FormControl>
                  <Stack direction={"row"} justifyContent={"center"}>
                    <FormLabel width={"20%"} fontSize={"1.3rem"}>
                      Material seasonability
                    </FormLabel>
                    <Input
                      width={"80%"}
                      size={"md"}
                      bg={"#CCCCCC"}
                      readOnly
                      type="text"
                      value={clickedMaterial.materialSeasonability}
                    />
                  </Stack>
                  <Box width={"30%"} height={"1.2rem"}>
                    <FormErrorMessage height={"1rem"}></FormErrorMessage>
                  </Box>
                </FormControl>
              </Box>
              <Box width={"100%"}>
                <FormControl>
                  <Stack direction={"row"} justifyContent={"center"}>
                    <FormLabel width={"20%"} fontSize={"1.3rem"}>
                      Material price($)
                    </FormLabel>
                    <Input
                      width={"80%"}
                      size={"md"}
                      bg={"#CCCCCC"}
                      readOnly
                      type="text"
                      value={clickedMaterial.materialPrice}
                    />
                  </Stack>
                  <Box width={"30%"} height={"1.2rem"}>
                    <FormErrorMessage height={"1rem"}></FormErrorMessage>
                  </Box>
                </FormControl>
              </Box>
              <Box width={"100%"}>
                <FormControl>
                  <Stack direction={"row"} justifyContent={"center"}>
                    <FormLabel width={"20%"} fontSize={"1.3rem"}>
                      Material weave pattern
                    </FormLabel>
                    <Input
                      width={"80%"}
                      size={"md"}
                      bg={"#CCCCCC"}
                      readOnly
                      type="text"
                      value={clickedMaterial.weavePattern}
                    />
                  </Stack>
                  <Box width={"30%"} height={"1.2rem"}>
                    <FormErrorMessage height={"1rem"}></FormErrorMessage>
                  </Box>
                </FormControl>
              </Box>
              <Box width={"100%"}>
                <FormControl>
                  <Stack direction={"row"} justifyContent={"center"}>
                    <FormLabel width={"20%"} fontSize={"1.3rem"}>
                      Material thread count
                    </FormLabel>
                    <Input
                      width={"80%"}
                      size={"md"}
                      bg={"#CCCCCC"}
                      readOnly
                      type="text"
                      value={clickedMaterial.threadCount}
                    />
                  </Stack>
                  <Box width={"30%"} height={"1.2rem"}>
                    <FormErrorMessage height={"1rem"}></FormErrorMessage>
                  </Box>
                </FormControl>
              </Box>
              <Box width={"100%"}>
                <FormControl>
                  <Stack direction={"row"} justifyContent={"center"}>
                    <FormLabel width={"20%"} fontSize={"1.3rem"}>
                      Tags
                    </FormLabel>
                    <Input
                      width={"80%"}
                      size={"md"}
                      bg={"#CCCCCC"}
                      readOnly
                      type="text"
                      value={clickedMaterial.tags}
                    />
                  </Stack>
                  <Box width={"30%"} height={"1.2rem"}>
                    <FormErrorMessage height={"1rem"}></FormErrorMessage>
                  </Box>
                </FormControl>
              </Box>
              <Box width={"100%"}>
                <FormControl>
                  <Stack direction={"row"} justifyContent={"center"}>
                    <FormLabel width={"20%"} fontSize={"1.3rem"}>
                      Material description
                    </FormLabel>
                    <Textarea
                      width={"80%"}
                      size={"md"}
                      bg={"#CCCCCC"}
                      readOnly
                      type="text"
                      value={clickedMaterial.materialDescription}
                    ></Textarea>
                  </Stack>
                  <Box width={"30%"} height={"1.2rem"}>
                    <FormErrorMessage height={"1rem"}></FormErrorMessage>
                  </Box>
                </FormControl>
              </Box>
              <Box width={"100%"}>
                <Stack direction={"row"} spacing={"0.5rem"}>
                  <Button
                    width={"100%"}
                    size="md"
                    type="submit"
                    isLoading={isSubmitting}
                    bg={"royalblue"}
                    _hover={{
                      backgroundColor: "#7894EA",
                    }}
                  >
                    Update
                  </Button>
                  <Button
                    width={"100%"}
                    size="md"
                    bg={"royalblue"}
                    _hover={{
                      backgroundColor: "#7894EA",
                    }}
                    onClick={async () => {
                      try {
                        const data = {
                          materialId: clickedMaterial.materialCode,
                        };
                        const headers = {
                          "Content-Type": "application/x-www-form-urlencoded",
                        };

                        const resp = await axiosInstance.post(
                          "/admin/delete-material",
                          data,
                          { headers: headers }
                        );
                        console.log(resp);
                        setTimeout(() => {
                          setOption("viewMaterial");
                          window.location.reload();
                        }, 3000);
                      } catch (error) {
                        console.log(error);
                      }
                    }}
                  >
                    Delete
                  </Button>
                </Stack>
              </Box>
            </Stack>
          </Box>
        </Flex>
      </form>
    </Box>
  );
};

export default MaterialDetails;
