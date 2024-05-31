// Chakra UI imports
import {
  Container,
  Box,
  Text,
  Flex,
  Stack,
  Center,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Textarea,
  Checkbox,
  Button
} from "@chakra-ui/react";

// Component imports
import NavBar from "../homepage/components/NavBar";
import Footer from "../homepage/components/Footer";
import NewNavBar from "../../commoncomponents/NewNavBar";

const ContactUsPage = () => {
  return (
    <div style={{backgroundColor : "#332522"}}>
      <NewNavBar />
      <Container bg={"primaryLight"} maxW={"100%"} width={"100%"} color={"secondary"} padding={"5rem"}>
        <Flex direction={"column"} alignItems={"center"}>
          <Box>
            <Text fontSize={"1.7rem"}>Ask your queries here?</Text>
          </Box>
          <Box marginTop={"3rem"} width={"30%"}>
            <Box border={"1px solid #C88F48"} marginY={"2.5rem"}>
              <FormControl>
                <FormLabel width={"6rem"} bg={"primaryLight"} marginLeft={"2rem"} marginTop={"-13px"}><Text fontSize={"1rem"} outline={"none"} outlineColor={"transparent"} fontWeight={600}>YOUR NAME</Text></FormLabel>
                <Input variant={"unstyled"} padding={"1rem"} placeholder="Enter your name here" type="text" border={"none"} />
              </FormControl>
            </Box>
            <Box border={"1px solid #C88F48"} marginY={"2.5rem"}>
              <FormControl>
                <FormLabel width={"6rem"} bg={"primaryLight"} marginLeft={"2rem"} marginTop={"-13px"}><Text fontSize={"1rem"} outline={"none"} outlineColor={"transparent"} fontWeight={600}>YOUR EMAIL</Text></FormLabel>
                <Input variant={"unstyled"} padding={"1rem"} placeholder="Enter your email here" type="text" border={"none"} />
              </FormControl>
            </Box>
            <Box border={"1px solid #C88F48"} marginY={"2.5rem"}>
              <FormControl>
                <FormLabel width={"14rem"} bg={"primaryLight"} marginLeft={"2rem"} marginTop={"-13px"}><Text fontSize={"1rem"} outline={"none"} outlineColor={"transparent"} fontWeight={600}>WRITE YOUR QUESTION HERE</Text></FormLabel>
                <Textarea variant={"unstyled"} padding={"1rem"} type="text" border={"none"} height={"10rem"} />
              </FormControl>
            </Box>
            <Box marginTop={"2.5rem"}>
              <Checkbox>
                <Text fontSize={"0.9rem"}>I agree to let my email to be processed in accordance with the Privacy Notice</Text>
              </Checkbox>
            </Box>
            <Box marginY={"2.5rem"}>
              <Button bg={"secondary"} width={"14rem"} padding={"2rem"} borderRadius={"2rem"} size={"lg"}>Continue</Button>
            </Box>
          </Box>
        </Flex>
      </Container>
      <Footer />
    </div>
  );
};

export default ContactUsPage;