import {
  Box,
  Stack,
  Flex,
  Text,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  InputGroup,
  InputLeftAddon,
  Select,
  Textarea,
  Button,
  Center,
} from "@chakra-ui/react";

import { useForm } from "react-hook-form";

const createProduct = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  return (
    <Box width={"100%"} height={"100%"}>
      <Box position={"absolute"} right={0} top={"90vh"}></Box>
      <Box>
        <Stack direction={"column"} spacing={"1.3rem"}>
          <Box>
            <Stack direction={"column"} spacing={"1.5rem"}>
              <Box>
                <Flex direction={"row"} columnGap={"1rem"}>
                  <Box
                    width={"8rem"}
                    height={"8rem"}
                    border={"1px solid black"}
                  ></Box>
                  <Box
                    width={"8rem"}
                    height={"8rem"}
                    border={"1px solid black"}
                  ></Box>
                  <Box
                    width={"8rem"}
                    height={"8rem"}
                    border={"1px solid black"}
                  ></Box>
                  <Box
                    width={"8rem"}
                    height={"8rem"}
                    border={"1px solid black"}
                  ></Box>
                  <Box
                    width={"8rem"}
                    height={"8rem"}
                    border={"1px solid black"}
                  ></Box>
                </Flex>
              </Box>
              <Box>
                <FormControl isInvalid={errors.productImages}>
                  <FormLabel htmlFor="productImages">Garment images</FormLabel>
                  <Input
                    bg={"white"}
                    type="file"
                    id="productImages"
                    name="productImages"
                    {...register("productImages", {
                      required: "This field is required",
                    })}
                  />
                  <Box width={"100%"} height={"1.3rem"}>
                    {errors.productImages ? errors.productImages.message : ""}
                  </Box>
                </FormControl>
              </Box>
            </Stack>
          </Box>
          <Box width={"100%"}>
            <Stack direction={"row"} spacing={"1.2rem"}>
              <Box width={"100%"}>
                <FormControl isInvalid={errors.garmentName}>
                  <FormLabel htmlFor="garmentName">Garment name</FormLabel>
                  <Input
                    bg={"white"}
                    type="text"
                    id="garmentName"
                    name="garmentName"
                    {...register("garmentName", {
                      required: "This field is required",
                    })}
                  />
                  <Box width={"100%"} height={"1.3rem"}>
                    {errors.garmentName ? errors.garmentName.message : ""}
                  </Box>
                </FormControl>
              </Box>
              <Box width={"100%"}>
                <FormControl isInvalid={errors.garmentCode}>
                  <FormLabel htmlFor="garmentCode">Garment code</FormLabel>
                  <Input
                    bg={"white"}
                    type="text"
                    id="garmentCode"
                    name="garmentCode"
                    {...register("garmentCode", {
                      required: "This field is required",
                    })}
                  />
                  <Box width={"100%"} height={"1.3rem"}>
                    {errors.garmentCode ? errors.garmentCode.message : ""}
                  </Box>
                </FormControl>
              </Box>
              <Box width={"100%"}>
                <FormControl isInvalid={errors.garmentType}>
                  <FormLabel htmlFor="garmentType">Garment type</FormLabel>
                  <Input
                    bg={"white"}
                    type="text"
                    id="garmentType"
                    name="garmentType"
                    {...register("garmentType", {
                      required: "This field is required",
                    })}
                  />
                  <Box width={"100%"} height={"1.3rem"}>
                    {errors.garmentName ? errors.garmentType.message : ""}
                  </Box>
                </FormControl>
              </Box>
            </Stack>
          </Box>

          <Box width={"100%"}>
            <Stack direction={"row"} spacing={"1.2rem"}>
              <Box width={"100%"}>
                <FormControl isInvalid={errors.garmentMaterial}>
                  <FormLabel htmlFor="garmentMaterial">Material</FormLabel>
                  <Select
                    width={"100%"}
                    placeholder="Materials"
                    bg={"white"}
                    id="garmentMaterial"
                    name="garmentMaterial"
                  >
                    <option>Cotton poplin champagne</option>
                    <option>Cotton poplin white</option>
                    <option>Cotton poplin lightblue</option>
                    <option>Cotton poplin deepblue</option>
                    <option>Cotton poplin midblue</option>
                    <option>Cotton poplin cobaltblue</option>
                  </Select>
                  <Box width={"100%"} height={"1.3rem"}>
                    {errors.garmentMaterial
                      ? errors.garmentMaterial.message
                      : ""}
                  </Box>
                </FormControl>
              </Box>
              <Box width={"100%"}>
                <FormControl isInvalid={errors.garmentStyle}>
                  <FormLabel htmlFor="garmentStyle">Garment Style</FormLabel>
                  <Input
                    bg={"white"}
                    type="text"
                    id="garmentStyle"
                    name="garmentStyle"
                    {...register("garmentStyle", {
                      required: "This field is required",
                    })}
                  />
                  <Box width={"100%"} height={"1.3rem"}>
                    {errors.garmentStyle ? errors.garmentStyle.message : ""}
                  </Box>
                </FormControl>
              </Box>
              <Box width={"100%"}>
                <FormControl isInvalid={errors.garmentCategory}>
                  <FormLabel htmlFor="garmentCategory">
                    Garment category
                  </FormLabel>
                  <Input
                    bg={"white"}
                    type="text"
                    id="garmentCategory"
                    name="garmentCategory"
                    {...register("garmentCategory", {
                      required: "This field is required",
                    })}
                  />
                  <Box width={"100%"} height={"1.3rem"}>
                    {errors.garmentCategory
                      ? errors.garmentCategory.message
                      : ""}
                  </Box>
                </FormControl>
              </Box>
            </Stack>
          </Box>

          <Box width={"100%"}>
            <Stack direction={"row"} spacing={"1.2rem"}>
              <Box width={"100%"}>
                <FormControl isInvalid={errors.garmentColor}>
                  <FormLabel htmlFor="garmentColor">Garment color</FormLabel>
                  <Input
                    bg={"white"}
                    type="text"
                    id="garmentColor"
                    name="garmentColor"
                    {...register("garmentColor", {
                      required: "This field is required",
                    })}
                  />
                  <Box width={"100%"} height={"1.3rem"}>
                    {errors.garmentColor ? errors.garmentColor.message : ""}
                  </Box>
                </FormControl>
              </Box>
              <Box width={"100%"}>
                <FormControl isInvalid={errors.garmentSize}>
                  <FormLabel htmlFor="garmentSize">Garment size</FormLabel>
                  <Input
                    bg={"white"}
                    type="text"
                    id="garmentSize"
                    name="garmentSize"
                    {...register("garmentSize", {
                      required: "This field is required",
                    })}
                  />
                  <Box width={"100%"} height={"1.3rem"}>
                    {errors.garmentSize ? errors.garmentSize.message : ""}
                  </Box>
                </FormControl>
              </Box>
              <Box width={"100%"}>
                <FormControl isInvalid={errors.garmentPrice}>
                  <FormLabel htmlFor="garmentPrice">Garment price($)</FormLabel>
                  <Input
                    bg={"white"}
                    type="text"
                    id="garmentPrice"
                    name="garmentPrice"
                    {...register("garmentPrice", {
                      required: "This field is required",
                    })}
                  />
                  <Box width={"100%"} height={"1.3rem"}>
                    {errors.garmentPrice ? errors.garmentPrice.message : ""}
                  </Box>
                </FormControl>
              </Box>
            </Stack>
          </Box>

          <Box width={"100%"}>
            <Stack direction={"row"} spacing={"1.2rem"}>
              <Box width={"100%"}>
                <FormControl isInvalid={errors.availability}>
                  <FormLabel htmlFor="availability">Availability</FormLabel>
                  <Input
                    bg={"white"}
                    type="text"
                    id="availability"
                    name="availability"
                    {...register("availability", {
                      required: "This field is required",
                    })}
                  />
                  <Box width={"100%"} height={"1.3rem"}>
                    {errors.availability ? errors.availability.message : ""}
                  </Box>
                </FormControl>
              </Box>
              <Box width={"100%"}>
                <FormControl isInvalid={errors.tags}>
                  <FormLabel htmlFor="garmentSize">Tags</FormLabel>
                  <Input
                    bg={"white"}
                    type="text"
                    id="tags"
                    name="tags"
                    {...register("tags", {
                      required: "This field is required",
                    })}
                  />
                  <Box width={"100%"} height={"1.3rem"}>
                    {errors.tags ? errors.tags.message : ""}
                  </Box>
                </FormControl>
              </Box>
              <Box width={"100%"}>
                <FormControl isInvalid={errors.occassion}>
                  <FormLabel htmlFor="occassion">Occassion</FormLabel>
                  <Input
                    bg={"white"}
                    type="text"
                    id="occassion"
                    name="occassion"
                    {...register("occassion", {
                      required: "This field is required",
                    })}
                  />
                  <Box width={"100%"} height={"1.3rem"}>
                    {errors.occassion ? errors.occassion.message : ""}
                  </Box>
                </FormControl>
              </Box>
            </Stack>
          </Box>

          <Box width={"100%"}>
            <Stack direction={"row"} spacing={"1.2rem"}>
              <Box width={"100%"}>
                <FormControl isInvalid={errors.description}>
                  <FormLabel htmlFor="garmentColor">Description</FormLabel>
                  <Textarea
                    bg={"white"}
                    type="text"
                    id="description"
                    name="description"
                    height={"8.8rem"}
                    {...register("description", {
                      required: "This field is required",
                    })}
                  ></Textarea>
                  <Box width={"100%"} height={"1.3rem"}>
                    {errors.description ? errors.description.message : ""}
                  </Box>
                </FormControl>
              </Box>
              <Box width={"100%"}>
                <Stack direction={"column"}>
                  <Box width={"100%"}>
                    <FormControl isInvalid={errors.discountCode}>
                      <FormLabel htmlFor="discountCode">
                        Discount code
                      </FormLabel>
                      <Input
                        bg={"white"}
                        type="text"
                        id="discountCode"
                        name="discountCode"
                        {...register("discountCode", {
                          required: "This field is required",
                        })}
                      />
                      <Box width={"100%"} height={"1.3rem"}>
                        {errors.discountCode ? errors.discountCode.message : ""}
                      </Box>
                    </FormControl>
                  </Box>
                  <Box width={"100%"}>
                    <FormControl isInvalid={errors.discountPercent}>
                      <FormLabel htmlFor="discountPercent">
                        Discount percent
                      </FormLabel>
                      <Input
                        bg={"white"}
                        type="text"
                        id="discountPercent"
                        name="discountPercent"
                        {...register("discountPercent", {
                          required: "This field is required",
                        })}
                      />
                      <Box width={"100%"} height={"1.3rem"}>
                        {errors.discountPercent
                          ? errors.discountPercent.message
                          : ""}
                      </Box>
                    </FormControl>
                  </Box>
                </Stack>
              </Box>
            </Stack>
          </Box>

          <Box width={"100%"}>
            <Center>
              <Button
                bg={"royalblue"}
                width={"50%"}
                _hover={{
                  backgroundColor: "#7894EA",
                }}
              >
                Create product
              </Button>
            </Center>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
};

export default createProduct;
