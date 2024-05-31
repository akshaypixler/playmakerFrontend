// Chakra UI imports
import {
  Box,
  Text,
  Stack,
  Image,
  Input,
  FormControl,
  FormLabel,
  FormHelperText,
  FormErrorMessage,
  InputGroup,
  InputLeftAddon,
  Textarea,
  Button,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";

// package imports
import Cookies from "js-cookie";

// Axios imports
import { axiosInstance } from "../../../config";

// React hook form imports
import { useForm } from "react-hook-form";
import { useState } from "react";

const CreateMaterial = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();
  const [imgSrc, setImgSrc] = useState("");
  const [alertStatus, setAlertStatus] = useState("");

  const onSubmit = async (data) => {
    console.log(data);
    try {
      const materialData = {
        materialName: data.materialName,
        materialCode: "MT-" + data.materialCode,
        materialFabric: data.materialFabric,
        materialColor: data.materialColor,
        materialType: data.materialType,
        materialGSM: data.materialGsm,
        materialProperties: data.materialProperties,
        materialSeasonability: data.materialSeasonability,
        materialPrice: data.materialPrice,
        weavePattern: data.materialWeavePattern,
        threadCount: data.materialThreadCount,
        materialDescription: data.materialDescription,
        tags: data.materialTags,
        materialImage : data.materialImg[0]
      };
      console.log("Material data : ", materialData);
      const resp = await axiosInstance.post("/admin/upload-material", materialData, {
        headers : {
          "Content-Type" : "multipart/form-data"
        }
      });
      console.log(resp);
      if(resp.status == 200) {
        setAlertStatus((
          <Alert status="success">
            <AlertIcon />
            <AlertTitle>Success</AlertTitle>
            <AlertDescription>Material uploaded successfully</AlertDescription>
          </Alert>
        ));
      }
      setTimeout(() => {setAlertStatus("")}, 3000);
    } catch (error) {
      console.log(error);
      setAlertStatus((
        <Alert status="error">
          <AlertIcon />
          <AlertTitle>Failed</AlertTitle>
          <AlertDescription>Material upload failed</AlertDescription>
        </Alert>
      ));
      setTimeout(() => {setAlertStatus("")}, 3000);
    }
  };

  const imgUtility = (img) => {
    const url = URL.createObjectURL(img);
    return url;
  };

  return (
    <Box width={"100%"}>
      <Box position={"absolute"} top={"80vh"} right={0} width={"20rem"} zIndex={10}>
        {alertStatus}
      </Box>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack direction={"column"} spacing={"1.5rem"} alignItems={"center"}>
          <Box width={"100%"}>
            <Stack direction={"row"}>
              <Box border={"1px solid black"} boxSize={"15rem"}>
                <Image src={imgSrc} />
              </Box>
              <Box>
                <FormControl isInvalid={errors.materialImg}>
                  <Input
                    type={"file"}
                    border={"none"}
                    name="materialImg"
                    id="materialImg"
                    {...register("materialImg", {
                      required: "Material picture is required",
                      onChange: (e) => {
                        const file = e.target.files[0];
                        console.log(file);
                        const url = imgUtility(file);
                        setImgSrc(url);
                      },
                    })}
                  />
                  <FormErrorMessage>
                    {errors.materialImg ? errors.materialImg.message : ""}
                  </FormErrorMessage>
                </FormControl>
              </Box>
            </Stack>
          </Box>
          <Box width={"100%"}>
            <Stack direction={"row"}>
              <Box width={"100%"}>
                <FormControl isInvalid={errors.materialCode} width={"100%"}>
                  <FormLabel htmlFor="materialCode">Material code</FormLabel>
                  <InputGroup>
                    <InputLeftAddon>MT-</InputLeftAddon>
                    <Input
                      bg={"white"}
                      boxShadow={"sm"}
                      type="text"
                      name="materialCode"
                      id="materialCode"
                      width={"100%"}
                      {...register("materialCode", {
                        required: "Material Code is required field",
                        pattern: {
                          value: /^[A-Z0-9-]+$/,
                          message:
                            "Code should only contain capital alphabets, numbers and hyphen(-)",
                        },
                        validate: async (value) => {
                          try {
                            const headers = {
                              "Content-Type":
                                "application/x-www-form-urlencoded",
                            };
                            const resp = await axiosInstance.post(
                              "/admin/get-material",
                              {
                                materialUid: "MT-" + value,
                              },
                              {
                                headers: headers,
                              }
                            );
                            if (resp.status == 200)
                              return "Material code already exists, please enter different code";
                          } catch (error) {
                            console.log(error);
                            return true;
                          }
                        },
                      })}
                    />
                  </InputGroup>
                  <FormErrorMessage>
                    {errors.materialCode ? errors.materialCode.message : ""}
                  </FormErrorMessage>
                </FormControl>
              </Box>
              <Box width={"100%"}>
                <FormControl isInvalid={errors.materialName} width={"100%"}>
                  <FormLabel htmlFor="materialName">Material Name</FormLabel>
                  <Input
                    type="text"
                    id="materialName"
                    name="materialName"
                    bg={"white"}
                    width={"100%"}
                    {...register("materialName", {
                      required: "Material name is required",
                      validate: async (value) => {
                        try {
                          const headers = {
                            "Content-Type": "application/x-www-form-urlencoded",
                          };
                          const resp = await axiosInstance.post(
                            "/admin/get-material",
                            {
                              materialUid: value,
                            },
                            {
                              headers: headers,
                            }
                          );
                          if (resp.status == 200)
                            return "Material name already exists, please provide different material name";
                        } catch (error) {
                          console.log(error);
                          return true;
                        }
                      },
                    })}
                  />
                  <FormErrorMessage>
                    {errors.materialName ? errors.materialName.message : ""}
                  </FormErrorMessage>
                </FormControl>
              </Box>
            </Stack>
          </Box>
          <Box width={"100%"}>
            <Stack direction={"row"}>
              <Box width={"100%"}>
                <FormControl isInvalid={errors.materialFabric} width={"100%"}>
                  <FormLabel htmlFor="materialFabric">
                    Material Fabric
                  </FormLabel>
                  <Input
                    bg={"white"}
                    boxShadow={"sm"}
                    type="text"
                    name="materialFabric"
                    id="materialFabric"
                    width={"100%"}
                    {...register("materialFabric", {
                      required: "Material Fabric is required field",
                    })}
                  />
                  <FormErrorMessage>
                    {errors.materialFabric ? errors.materialFabric.message : ""}
                  </FormErrorMessage>
                </FormControl>
              </Box>
              <Box width={"100%"}>
                <FormControl isInvalid={errors.materialColor}>
                  <FormLabel htmlFor="materialColor">Material Color</FormLabel>
                  <Input
                    type="text"
                    id="materialColor"
                    name="materialColor"
                    bg={"white"}
                    width={"100%"}
                    {...register("materialColor", {
                      required: "Material color is required",
                    })}
                  />
                  <FormErrorMessage>
                    {errors.materialColor ? errors.materialColor.message : ""}
                  </FormErrorMessage>
                </FormControl>
              </Box>
            </Stack>
          </Box>
          <Box width={"100%"}>
            <Stack direction={"row"}>
              <Box width={"100%"}>
                <FormControl isInvalid={errors.materialType}>
                  <FormLabel htmlFor="materialType">Material Type</FormLabel>
                  <Input
                    bg={"white"}
                    boxShadow={"sm"}
                    type="text"
                    name="materialType"
                    id="materialType"
                    width={"100%"}
                    {...register("materialType", {
                      required: "Material type is required field",
                    })}
                  />
                  <FormErrorMessage>
                    {errors.materialType ? errors.materialType.message : ""}
                  </FormErrorMessage>
                </FormControl>
              </Box>
              <Box width={"100%"}>
                <FormControl isInvalid={errors.materialGsm}>
                  <FormLabel htmlFor="materialColor">Material GSM</FormLabel>
                  <Input
                    type="text"
                    id="materialGsm"
                    name="materialGsm"
                    bg={"white"}
                    width={"100%"}
                    {...register("materialGsm", {
                      required: "Material GSM is required",
                    })}
                  />
                  <FormErrorMessage>
                    {errors.materialGsm ? errors.materialGsm.message : ""}
                  </FormErrorMessage>
                </FormControl>
              </Box>
            </Stack>
          </Box>
          <Box width={"100%"}>
            <Stack direction={"row"}>
              <Box width={"100%"}>
                <FormControl isInvalid={errors.materialProperties}>
                  <FormLabel htmlFor="materialProperties">
                    Material Properties
                  </FormLabel>
                  <Input
                    bg={"white"}
                    boxShadow={"sm"}
                    type="text"
                    name="materialProperties"
                    id="materialProperties"
                    width={"100%"}
                    {...register("materialProperties", {
                      required: "Material properties is required field",
                    })}
                  />
                  <FormErrorMessage>
                    {errors.materialProperties
                      ? errors.materialProperties.message
                      : ""}
                  </FormErrorMessage>
                </FormControl>
              </Box>
              <Box width={"100%"}>
                <FormControl isInvalid={errors.materialSeasonability}>
                  <FormLabel htmlFor="materialSeasonability">
                    Material Seasonability
                  </FormLabel>
                  <Input
                    type="text"
                    id="materialSeasonability"
                    name="materialSeasonability"
                    bg={"white"}
                    width={"100%"}
                    {...register("materialSeasonability", {
                      required: "Material Seasonability is required field",
                    })}
                  />
                  <FormErrorMessage>
                    {errors.materialSeasonability
                      ? errors.materialSeasonability.message
                      : ""}
                  </FormErrorMessage>
                </FormControl>
              </Box>
            </Stack>
          </Box>
          <Box width={"100%"}>
            <Stack direction={"row"}>
              <Box width={"100%"}>
                <FormControl isInvalid={errors.materialPrice}>
                  <FormLabel htmlFor="materialPrice">Material Price</FormLabel>
                  <Input
                    bg={"white"}
                    boxShadow={"sm"}
                    type="text"
                    name="materialPrice"
                    id="materialPrice"
                    width={"100%"}
                    {...register("materialPrice", {
                      required: "Material Price is required field",
                    })}
                  />
                  <FormErrorMessage>
                    {errors.materialPrice ? errors.materialPrice.message : ""}
                  </FormErrorMessage>
                </FormControl>
              </Box>
              <Box width={"100%"}>
                <FormControl isInvalid={errors.materialWeavePattern}>
                  <FormLabel htmlFor="materialWeavePattern">
                    Material Weave Pattern
                  </FormLabel>
                  <Input
                    type="text"
                    id="materialWeavePattern"
                    name="materialWeavePattern"
                    bg={"white"}
                    width={"100%"}
                    {...register("materialWeavePattern", {
                      required: "Material Weave Pattern is required field",
                    })}
                  />
                  <FormErrorMessage>
                    {errors.materialWeavePattern
                      ? errors.materialWeavePattern.message
                      : ""}
                  </FormErrorMessage>
                </FormControl>
              </Box>
            </Stack>
          </Box>
          <Box width={"100%"}>
            <Stack direction={"row"}>
              <Box width={"100%"}>
                <FormControl isInvalid={errors.materialThreadCount}>
                  <FormLabel htmlFor="materialPrice">
                    Material Thread Count
                  </FormLabel>
                  <Input
                    bg={"white"}
                    boxShadow={"sm"}
                    type="text"
                    name="materialThreadCount"
                    id="materialThreadCount"
                    width={"100%"}
                    {...register("materialThreadCount", {
                      required: "Material ThreadCount is required field",
                    })}
                  />
                  <FormErrorMessage>
                    {errors.materialThreadCount
                      ? errors.materialThreadCount.message
                      : ""}
                  </FormErrorMessage>
                </FormControl>
              </Box>
              <Box width={"100%"}>
                <FormControl isInvalid={errors.materialTags}>
                  <FormLabel htmlFor="materialTags">Material Tags</FormLabel>
                  <Input
                    type="text"
                    id="materialTags"
                    name="materialTags"
                    bg={"white"}
                    width={"100%"}
                    {...register("materialTags", {
                      required: "Material Tags is required field",
                    })}
                  />
                  <FormErrorMessage>
                    {errors.materialTags ? errors.materialTags.message : ""}
                  </FormErrorMessage>
                </FormControl>
              </Box>
            </Stack>
          </Box>
          <Box width={"100%"}>
            <Stack direction={"row"}>
              <Box width={"100%"}>
                <FormControl isInvalid={errors.materialDescription}>
                  <FormLabel htmlFor="materialDescription">
                    Material Description
                  </FormLabel>
                  <Textarea
                    bg={"white"}
                    boxShadow={"sm"}
                    type="text"
                    name="materialDescription"
                    id="materialDescription"
                    width={"100%"}
                    {...register("materialDescription", {
                      required: "Material description is required field",
                    })}
                  ></Textarea>
                  <FormErrorMessage>
                    {errors.materialDescription
                      ? errors.materialDescription.message
                      : ""}
                  </FormErrorMessage>
                </FormControl>
              </Box>
            </Stack>
          </Box>
          <Box width={"100%"}>
            <Stack direction={"row"} justifyContent={"center"}>
              <Button
                type="submit"
                bg={"royalblue"}
                width={"40rem"}
                color={"white"}
                _hover={{
                  backgroundColor: "#7894EA",
                }}
              >
                Create Material
              </Button>
            </Stack>
          </Box>
        </Stack>
      </form>
    </Box>
  );
};

export default CreateMaterial;
