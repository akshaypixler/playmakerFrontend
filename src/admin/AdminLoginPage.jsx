// Chakra UI imports
import {
  Container,
  Box,
  Text,
  Stack,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Button
} from "@chakra-ui/react";

// React hooks import
import { useState } from "react";

// React hook form imports
import { useForm } from "react-hook-form";

// Axios instance
import { axiosInstance } from "../../config";

// React router imports
import { useNavigate } from "react-router-dom";

// package imports
import Cookies from "js-cookie";


const AdminLoginPage = () => {

  const {
    register,
    handleSubmit,
    watch,
    formState : { errors, isSubmitting },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    console.log(data);
    const headers = {"Content-Type" : "application/x-www-form-urlencoded"}
    const response = await axiosInstance.post("/admin/login", data, { headers } );
    const fetchedData = response.data.data;
    console.log("Response : ", response.data.data);

    if (response.status === 200) {
      Cookies.set("refreshToken", fetchedData.refreshToken, {expires : 15});
      Cookies.set("accessToken", fetchedData.accessToken, {expires : 1});
      navigate("/admin/dashboard", {state : fetchedData});
    }
  };

  return (
    <Container width={"100%"} maxWidth={"100%"} height={"100vh"} bg={"primaryLight"} paddingY={"5rem"} >
      <Box marginX={"auto"}>
        <Text textAlign={"center"} color={"secondary"} fontSize={"2rem"} marginBottom={"2rem"}>Admin login</Text>
      </Box>
      <Box width={"20%"} marginX={"auto"} bg={"#ede0d4"} padding={"1rem"} borderRadius={"0.5rem"}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack direction={"column"} alignItems={"center"} spacing={"2rem"}>
            <Box width={"100%"}>
              <FormControl isInvalid={errors.uid}>
                <FormLabel htmlFor="uid">
                  <Text color={"secondary"} fontSize={"1.2rem"}>Username or email</Text>
                </FormLabel>
                <Input
                  id="uid"
                  name="uid"
                  type="text"
                  variant={"outlined"}
                  border={"1px solid #C88F48"}
                  bg={"transparent"}
                  {...register("uid", {required : "This field is required"})}
                   />
                {!(errors.uid && errors.uid.message) ?  <FormHelperText>
                  <Text>Enter email or username</Text>
                </FormHelperText> : <FormErrorMessage>{errors.uid && errors.uid.message}</FormErrorMessage>}
              </FormControl>
            </Box>
            <Box width={"100%"}>
              <FormControl isInvalid={errors.password}>
                <FormLabel htmlFor="password">
                  <Text color={"secondary"} fontSize={"1.2rem"}>Password</Text>
                </FormLabel>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  variant={"outlined"}
                  border={"1px solid #C88F48"}
                  bg={"transparent"}
                  {...register("password", {required : "password is required"})}
                   />
                   {errors?.password ? <FormErrorMessage>{ errors.password.message }</FormErrorMessage> : <FormHelperText>Enter your password</FormHelperText>}
              </FormControl>
            </Box>
            <Box width={"100%"}>
              <Button
                isLoading={isSubmitting}
                type="submit"
                variant={"solid"}
                bg={"primaryLight"}
                color={"secondary"}
                width={"100%"}
                _hover={{
                  backgroundColor: "#99582a"
                }} >Login</Button>
            </Box>
          </Stack>
        </form>
      </Box>
    </Container>
  );
};

export default AdminLoginPage;