import {
  Box,
  Center,
  Image,
  Spacer,
  Stack,
  Flex,
  Link as CLink,
  Text,
  Container,
  IconButton,
  Select,
  Icon,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
} from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";

import { EmailIcon, HamburgerIcon } from "@chakra-ui/icons";
import { PiShoppingBagOpenFill } from "react-icons/pi";

import facebookLogo from "../assets/images/facebook.svg";
import instagramLogo from "../assets/images/instagram.svg";
import twitterLogo from "../assets/images/twitter.svg";
import linkedinLogo from "../assets/images/linkedin.svg";
import playmakerLogo from "../assets/images/playmakerlogo.png";

const NewNavBar = () => {
  return (
    <div>
      <Container
        w={"100%"}
        maxW={"100%"}
        bg={"primary"}
        paddingY={"0.8rem"}
        paddingX={"3rem"}
      >
        <Center>
          <Flex w={"70%"}>
            <Box>
              <Stack direction={"row"} spacing={"1rem"}>
                <CLink
                  href="https://instagram.com/playmaker_bespoke?igshid=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr"
                  target="_blank"
                >
                  <Image
                    boxSize={"1rem"}
                    src={facebookLogo}
                    alt="..."
                    className="logoLink"
                  />
                </CLink>
                <Image boxSize={"1rem"} src={instagramLogo} alt="..." />
                <Image boxSize={"1rem"} src={twitterLogo} alt="..." />
                <Image boxSize={"1rem"} src={linkedinLogo} alt="..." />
              </Stack>
            </Box>
            <Spacer />
            <Box>
              <Stack
                direction={"row"}
                spacing={"0.5rem"}
                justifyContent={"baseline"}
              >
                <EmailIcon boxSize={"1.3rem"} color={"whitesmoke"} />
                <CLink href="mailto:info@playmakerbespoke.com">
                  <Text
                    fontFamily={"PT Serif"}
                    color={"textColor"}
                    fontSize={"0.8rem"}
                  >
                    info@playmakerbespoke.com
                  </Text>
                </CLink>
              </Stack>
            </Box>
          </Flex>
        </Center>
      </Container>
      <Container
        w={"100%"}
        maxW={"100%"}
        className="navBarContainer"
        padding={"1.2rem"}
      >
        <Center>
          <Flex w={"100%"}>
            <Box>
              <Stack direction={"row"} padding={"1rem"} spacing={"2rem"}>
                {/* <IconButton bg={"transparent"} size={"1.5rem"} fontSize={"1.5rem"} aria-label="clothingMenu" icon={<HamburgerIcon color={"secondary"} bg={"transparent"} />} onClick={e => setIsAirMenuOpen(true)} /> */}
                {/* <IconButton bg={"transparent"} size={"1.5rem"} fontSize={"1.5rem"} aria-label="clothingMenu" icon={<HamburgerIcon color={"secondary"} bg={"transparent"} />} /> */}
                <Menu>
                  <MenuButton
                    as={IconButton}
                    aria-label="Options"
                    icon={<HamburgerIcon />}
                    variant="outline"
                    bg={"transparent"}
                    color={"secondary"}
                  />
                  <MenuList bg={"primaryLight"} padding={"1rem"}>
                    <MenuItem bg={"primaryLight"} color={"secondary"}>
                      <CLink as={ReactRouterLink} to={"/suits"}>Lookbooks</CLink>
                    </MenuItem>
                    <MenuItem bg={"primaryLight"} color={"secondary"}>
                      <CLink as={ReactRouterLink} to={"/men"}>Clothing</CLink>
                    </MenuItem>
                    <MenuItem bg={"primaryLight"} color={"secondary"}>
                    <CLink as={ReactRouterLink} to={"/mens-outfits"}>Occassion</CLink>
                    </MenuItem>
                    <MenuItem bg={"primaryLight"} color={"secondary"}>
                    <CLink as={ReactRouterLink} to={"/custom-suits"}>Custom clothing</CLink>
                    </MenuItem>
                    <MenuItem bg={"primaryLight"} color={"secondary"}>
                    <CLink as={ReactRouterLink} to={"/accessories"}>Accessories</CLink>
                    </MenuItem>
                  </MenuList>
                </Menu>
                <Text
                  fontFamily={"Josefin Sans"}
                  fontSize={"1.3rem"}
                  color={"white"}
                  cursor={"pointer"}
                >
                  <CLink as={ReactRouterLink} to={"/suits"}>Lookbooks</CLink>
                </Text>
                <Text
                  fontFamily={"Josefin Sans"}
                  fontSize={"1.3rem"}
                  color={"white"}
                  cursor={"pointer"}
                >
                  <CLink as={ReactRouterLink} to={"/custom-suits"}>Custom clothing</CLink>
                </Text>
              </Stack>
            </Box>
            <Spacer />
            <Box>
              <Image width={"150px"} src={playmakerLogo} />
            </Box>
            <Spacer />
            <Box padding={"1rem"}>
              <Flex direction={"row"} columnGap={"1rem"}>
                <Select
                  placeholder="Select language"
                  size={"xs"}
                  color={"secondary"}
                >
                  <option>English</option>
                  <option>German</option>
                </Select>
                <CLink as={ReactRouterLink} to={"/cart"}>
                  <Icon
                    fontSize={"1.8rem"}
                    as={PiShoppingBagOpenFill}
                    color={"secondary"}
                  />
                </CLink>
              </Flex>
            </Box>
          </Flex>
        </Center>
      </Container>
    </div>
  );
};

export default NewNavBar;
