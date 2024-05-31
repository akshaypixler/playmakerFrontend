// Chakra UI imports
import {
  Container,
  Box,
  Text,
  Input,
  Stack,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Divider,
  Select,
  Image,
  Textarea,
  Button,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";

// axios import
import { axiosInstance } from "../../config";

// Hooks import
import { useState, useCallback, useEffect } from "react";

// CSS imports
import "./css/admin-reg.css";

// Countries array
const countries = [
  { name: 'Afghanistan', code: '+93' },
  { name: 'Albania', code: '+355' },
  { name: 'Algeria', code: '+213' },
  { name: 'Andorra', code: '+376' },
  { name: 'Angola', code: '+244' },
  { name: 'Antigua and Barbuda', code: '+1-268' },
  { name: 'Argentina', code: '+54' },
  { name: 'Armenia', code: '+374' },
  { name: 'Australia', code: '+61' },
  { name: 'Austria', code: '+43' },
  { name: 'Azerbaijan', code: '+994' },
  { name: 'Bahamas', code: '+1-242' },
  { name: 'Bahrain', code: '+973' },
  { name: 'Bangladesh', code: '+880' },
  { name: 'Barbados', code: '+1-246' },
  { name: 'Belarus', code: '+375' },
  { name: 'Belgium', code: '+32' },
  { name: 'Belize', code: '+501' },
  { name: 'Benin', code: '+229' },
  { name: 'Bhutan', code: '+975' },
  { name: 'Bolivia', code: '+591' },
  { name: 'Bosnia and Herzegovina', code: '+387' },
  { name: 'Botswana', code: '+267' },
  { name: 'Brazil', code: '+55' },
  { name: 'Brunei', code: '+673' },
  { name: 'Bulgaria', code: '+359' },
  { name: 'Burkina Faso', code: '+226' },
  { name: 'Burundi', code: '+257' },
  { name: 'India', code: '+91' },
  // Add more countries here...
];



const AdminRegisterPage = () => {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [countryCode, setCountryCode] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [avatar, setAvatar] = useState("");
  const [avatarName, setAvatarName] = useState("");
  const [avatarBlob, setAvatarBlob] = useState("");
  const [response, setResponse] = useState({});
  const [alertUi, setAlertUi] = useState();
  const [firstNameError, setFirstNameError] = useState();
  const [lastNameError, setLastNameError] = useState();
  const [userameError, setUserameError] = useState();
  const [emailError, setEmailError] = useState();
  const [passwordError, setPasswordError] = useState();
  const [countryCodeError, setCountryCodeError] = useState();
  const [addressError, setAddressError] = useState();
  const [phoneError, setPhoneError] = useState();
  const [avatarError, setAvatarError] = useState();

  const registerAdmin = useCallback(async () => {
    const data = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      username: username,
      phone: phone,
      countryCode: countryCode,
      address: address,
      password: password,
      avatarImage : avatar
    };

    const headers = {
      "Content-Type" : "multipart/form-data"
    };
    const response = await axiosInstance.post("/admin/register", data, { headers : headers });
    console.log(response);
    return response;
  });

  useEffect(() => {
    if(response?.status === 200) {
      console.log("condition 1");
      setAlertUi((
        <Alert status="success">
          <AlertIcon />
          <AlertTitle>Success!</AlertTitle>
          <AlertDescription>Admin registered successfully</AlertDescription>
        </Alert>
      ));
      setTimeout(() => {
        window.location.href = "/admin/login";
      }, 3000);
    } else if(response?.status > 200 && response?.status <= 500) {
      console.log("condition 2");
      setAlertUi((
        <Alert status="error">
          <AlertIcon />
          <AlertTitle>Failed!</AlertTitle>
          <AlertDescription>Admin not registered</AlertDescription>
        </Alert>
      ));
    } else if((response === null)) {
      console.log("condition 3");
      setAlertUi((
        <Alert status="error">
          <AlertIcon />
          <AlertTitle>Failed!</AlertTitle>
          <AlertDescription>Something went wrong</AlertDescription>
        </Alert>
      ));
    } else if(response?.code === "ECONNABORTED") {
      console.log("condition 4");
      console.log(response.code);
      setAlertUi((
        <Alert status="error">
          <AlertIcon />
          <AlertTitle>Failed!</AlertTitle>
          <AlertDescription>Something went wrong</AlertDescription>
        </Alert>
      ));
    } else if(response.code === "ERR_BAD_REQUEST") {
      console.log("condition 4");
      console.log(response.code);
      setAlertUi((
        <Alert status="error">
          <AlertIcon />
          <AlertTitle>Failed!</AlertTitle>
          <AlertDescription>Something went wrong</AlertDescription>
        </Alert>
      ));
    }
    scrollTo({
      top : 0,
      behavior : "smooth"
    });

    
  }, [response]);

  return (
    <div style={{ backgroundColor: "#332522" }}>
      <Container width={"100%"} maxW={"100%"} padding={"5rem"}>
        <Box>
          {alertUi ? alertUi : ""}
        </Box>
        <Text fontSize={"2rem"} textAlign={"center"} marginTop={"5rem"} color={"secondary"}>Admin registration</Text>
        <Box width={"45%"} bg={"#ede0d4"} marginX={"auto"} marginTop={"1.5rem"} padding={"2rem"} borderRadius={"0.6rem"} color={"secondary"}>
          <Stack direction={"column"} alignItems={"center"} spacing={"1.5rem"}>

            <Box width={"100%"}>
              <Stack direction={"row"} justifyContent={"center"}>
                <Box width={"100%"}>
                  <FormControl>
                    <FormLabel>
                      <Text fontSize={"1.2rem"}>First Name</Text>
                    </FormLabel>
                    <Input
                      size={"lg"}
                      variant={"outline"}
                      border={"1px solid #C88F48"}
                      type="text"
                      value={firstName}
                      name="firstName"
                      className="form-input-1"
                      onChange={e => {
                        setFirstName(e.target.value);
                      }} />
                    {!firstNameError ? <FormHelperText>
                      <Text>Enter your first name</Text>
                    </FormHelperText> : <FormErrorMessage>First name is required</FormErrorMessage>}
                  </FormControl>
                </Box>

                <Box width={"100%"}>
                  <FormControl>
                    <FormLabel>
                      <Text fontSize={"1.2rem"}>Last Name</Text>
                    </FormLabel>
                    <Input
                      size={"lg"}
                      variant={"outline"}
                      border={"1px solid #C88F48"}
                      type="text"
                      value={lastName}
                      name="lastName"
                      className="form-input-1"
                      onChange={e => {
                        setLastName(e.target.value);
                      }} />
                    <FormHelperText>
                      <Text>Enter your last name</Text>
                    </FormHelperText>
                  </FormControl>
                </Box>
              </Stack>
            </Box>

            <Divider orientation="horizontal" border={"1px solid #C88F48"} />

            <Box width={"100%"}>
              <Stack direction={"row"} justifyContent={"center"}>
                <Box width={"100%"}>
                  <FormControl>
                    <FormLabel>
                      <Text fontSize={"1.2rem"}>Username</Text>
                    </FormLabel>
                    <Input
                      size={"lg"}
                      variant={"outline"}
                      border={"1px solid #C88F48"}
                      type="text"
                      value={username}
                      name="username"
                      className="form-input-1"
                      onChange={e => {
                        setUsername(e.target.value);
                      }} />
                    <FormHelperText>
                      <Text>Enter username</Text>
                    </FormHelperText>
                  </FormControl>
                </Box>

                <Box width={"100%"}>
                  <FormControl>
                    <FormLabel>
                      <Text fontSize={"1.2rem"}>Email</Text>
                    </FormLabel>
                    <Input
                      size={"lg"}
                      variant={"outline"}
                      border={"1px solid #C88F48"}
                      type="text"
                      value={email}
                      name="email"
                      className="form-input-1"
                      onChange={e => {
                        setEmail(e.target.value);
                      }} />
                    <FormHelperText>
                      <Text>Enter your email</Text>
                    </FormHelperText>
                  </FormControl>
                </Box>
              </Stack>
            </Box>

            <Divider orientation="horizontal" border={"1px solid #C88F48"} />

            <Box width={"100%"}>
              <Stack direction={"row"} justifyContent={"center"}>
                <Box width={"30%"}>
                  <FormControl>
                    <FormLabel>
                      <Text fontSize={"1.2rem"}>Country code</Text>
                    </FormLabel>
                    <Select
                      value={countryCode}
                      name={"countryCode"}
                      placeholder="Country code"
                      size={"lg"}
                      className="form-input-1"
                      border={"1px solid #C88F48"}
                      onChange={e => setCountryCode(e.target.value)} >
                      {countries.map((ele) => {
                        return (
                          <option value={ele.code} style={{ width: "100%" }} key={ele.name}>
                            <Stack direction={"row"}>
                              <Text>{ele.code}&nbsp;&nbsp;</Text>
                              <Text>{ele.name}</Text>
                            </Stack>
                          </option>
                        );
                      })}
                      <option value={"+91"} style={{ width: "100%" }}>
                        <Stack direction={"row"}>
                          <Text>+91&nbsp;&nbsp;</Text>
                          <Text>India</Text>
                        </Stack>
                      </option>
                    </Select>
                    <FormHelperText>
                      <Text>Select country code</Text>
                    </FormHelperText>
                  </FormControl>
                </Box>

                <Box width={"100%"}>
                  <FormControl>
                    <FormLabel>
                      <Text fontSize={"1.2rem"}>Phone</Text>
                    </FormLabel>
                    <Input
                      size={"lg"}
                      variant={"outline"}
                      border={"1px solid #C88F48"}
                      type="text"
                      value={phone}
                      name="email"
                      className="form-input-1"
                      onChange={e => {
                        setPhone(e.target.value);
                      }} />
                    <FormHelperText>
                      <Text>Enter your phone number</Text>
                    </FormHelperText>
                  </FormControl>
                </Box>
              </Stack>
            </Box>

            <Divider orientation="horizontal" border={"1px solid #C88F48"} />

            <Box width={"100%"}>
              <Stack direction={"row"} justifyContent={"center"}>
                <Box width={"100%"}>
                  <FormControl>
                    <FormLabel>
                      <Text fontSize={"1.2rem"}>Password</Text>
                    </FormLabel>
                    <Input
                      size={"lg"}
                      variant={"outline"}
                      border={"1px solid #C88F48"}
                      type="text"
                      value={password}
                      name="username"
                      className="form-input-1"
                      onChange={e => {
                        setPassword(e.target.value);
                      }} />
                    <FormHelperText>
                      <Text>Enter password</Text>
                    </FormHelperText>
                  </FormControl>
                </Box>

                <Box width={"100%"} border={"1px solid #C88F48"} padding={"0.5rem"}>
                  <FormControl>
                    <FormLabel>
                      <Text fontSize={"1.2rem"}>Avatar</Text>
                    </FormLabel>
                    <Input
                      marginTop={"1rem"}
                      size={"lg"}
                      variant={"outline"}
                      type="file"
                      name="avatarImage"
                      onChange={e => {
                        const selectedFile = e.target.files[0];
                        console.log(e.target.files);
                        const avatarUrl = URL.createObjectURL(selectedFile);
                        setAvatar(selectedFile);
                        setAvatarName(selectedFile.name);
                        setAvatarBlob(avatarUrl);
                        console.log(avatar);
                      }} />
                    <FormHelperText>
                      {avatarName ? <Text>{avatarName}</Text> : ""}
                      {avatarBlob ? <Image marginTop={"0.5rem"} src={avatarBlob} boxSize={"3rem"} /> : ""}
                    </FormHelperText>
                  </FormControl>
                </Box>
              </Stack>
            </Box>

            <Divider orientation="horizontal" border={"1px solid #C88F48"} />

            <Box width={"100%"}>
              <Stack direction={"row"} justifyContent={"center"}>
                <Box width={"100%"}>
                  <FormControl>
                    <FormLabel>
                      <Text fontSize={"1.2rem"}>Address</Text>
                    </FormLabel>
                    <Textarea
                      size={"lg"}
                      resize={"vertical"}
                      variant={"outline"}
                      border={"1px solid #C88F48"}
                      type="text"
                      value={address}
                      name="username"
                      className="form-input-1"
                      onChange={e => {
                        setAddress(e.target.value);
                      }}></Textarea>
                    <FormHelperText>
                      <Text>Enter your address</Text>
                    </FormHelperText>
                  </FormControl>
                </Box>
              </Stack>
            </Box>

            <Box width={"100%"}>
              <Stack direction={"row"} justifyContent={"center"}>
                <Box width={"100%"}>
                  <Button
                    bg={"primaryLight"}
                    width={"100%"}
                    marginTop={"2.5rem"}
                    size={"lg"}
                    color={"secondary"}
                    colorScheme="primary"
                    className="form-btn-1"
                    onClick={async e => {
                      const resp = await registerAdmin();
                      await setResponse(resp);
                    }}
                  >
                    Register
                  </Button>
                </Box>

                <Box width={"100%"}>
                  <Button
                    bg={"primaryLight"}
                    width={"100%"}
                    marginTop={"2.5rem"}
                    size={"lg"}
                    color={"secondary"}
                    colorScheme="primary"
                    className="form-btn-1"
                    onClick={e => {
                      setFirstName("");
                      setLastName("");
                      setEmail("");
                      setCountryCode("");
                      setPhone("");
                      setUsername("");
                      setPassword("");
                      setAvatar("");
                      setAvatarName("");
                      setAddress("");
                    }}
                  >
                    Clear
                  </Button>
                </Box>
              </Stack>
            </Box>

          </Stack>
        </Box>
      </Container>
    </div >
  );
};

export default AdminRegisterPage;