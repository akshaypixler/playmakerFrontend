// Hooks
import { useRef, useEffect } from "react";

// Swiper imports
import { register } from "swiper/element/bundle";

// Chakra UI imports
import {
  Container,
  Box,
  Image,
  Center,
  Text,
  Link as CLink
} from "@chakra-ui/react";

// React router imports
import { Link as ReactRouterLink } from "react-router-dom";

// Image imports
import suit from "../../../assets/images/suit.jpg";
import shirt from "../../../assets/images/shirt.jpg";
import weddingSuit from "../../../assets/images/weddingSuit.jpg";
import fieldJacket from "../../../assets/images/fieldJacket.jpg";
import jeans from "../../../assets/images/jeans.jpg";
import tuxedo from "../../../assets/images/tuxedo.jpg";
import vest from "../../../assets/images/vest.jpg";
import poloShirt from "../../../assets/images/poloShirt.jpg";
import trenchCoat from "../../../assets/images/trenchCoat.jpg";
import woolCoat from "../../../assets/images/woolCoat.jpg";

register();

const sliderImgArray = [
  {
    image : suit, 
    title : "Suit"
  },
  {
    image : shirt, 
    title : "Shirt"
  },
  {
    image : weddingSuit, 
    title : "Wedding Suit"
  },
  {
    image : fieldJacket, 
    title : "Field Jacket"
  },
  {
    image : jeans, 
    title : "Jeans"
  },
  {
    image : tuxedo, 
    title : "Tuxedo"
  },
  {
    image : vest, 
    title : "Vest"
  },
  {
    image : poloShirt, 
    title : "Polo Shirt"
  },
  {
    image : trenchCoat, 
    title : "Trench Coat"
  },
  {
    image : woolCoat, 
    title : "Wool Coat"
  },
];

const ImageSlider = ({ imgArray = sliderImgArray }) => {

  const swiperElRef = useRef(null);

  useEffect(() => {
    swiperElRef.current.addEventListener("progress", (e) => {
      const [swiper, progress] = e.detail;
      console.log(progress);
    });

    swiperElRef.current.addEventListener("slidechange", (e) => {
      console.log("slide changed");
    });
  }, []);

  return (
    <Center>
      <Container w={"90%"} maxW={"90%"}>
        <swiper-container ref={swiperElRef} slides-per-view="4" navigation="true" pagination="true">
        {imgArray.map((ele, index) => (
          <swiper-slide key={index}>
          <CLink as={ReactRouterLink} to={"/custom-clothing"}>
          <Box>
            <Image src={ele.image} alt="..." width={"400px"} height={"600px"} cursor={"pointer"} />
            <Text color={"secondary"} marginTop={"0.3rem"}>{ele.title}</Text>
          </Box>
          </CLink>
        </swiper-slide>
        ))}
          <swiper-slide>
            <Box>
              <Image src={suit} alt="..." width={"400px"} height={"600px"} cursor={"pointer"} />
              <Text color={"secondary"} marginTop={"0.3rem"}>Custom Suit</Text>
            </Box>
          </swiper-slide>
          <swiper-slide>
            <Box>
              <Image src={shirt} alt="..." width={"400px"} height={"600px"} />
              <Text color={"secondary"} marginTop={"0.3rem"}>Custom Shirt</Text>
            </Box>
          </swiper-slide>
          <swiper-slide>
            <Box>
              <Image src={weddingSuit} alt="..." width={"400px"} height={"600px"} />
              <Text color={"secondary"} marginTop={"0.3rem"}>Wedding Suit</Text>
            </Box>
          </swiper-slide>
          <swiper-slide>
            <Box>
              <Image src={fieldJacket} alt="..." width={"400px"} height={"600px"} />
              <Text color={"secondary"} marginTop={"0.3rem"}>Field Jackets</Text>
            </Box>
          </swiper-slide>
          <swiper-slide>
            <Box>
              <Image src={jeans} alt="..." width={"400px"} height={"600px"} />
              <Text color={"secondary"} marginTop={"0.3rem"}>Jeans</Text>
            </Box>
          </swiper-slide>
          <swiper-slide>
            <Box>
              <Image src={tuxedo} alt="..." width={"400px"} height={"600px"} />
              <Text color={"secondary"} marginTop={"0.3rem"}>Tuxedo</Text>
            </Box>
          </swiper-slide>
          <swiper-slide>
            <Box>
              <Image src={vest} alt="..." width={"400px"} height={"600px"} />
              <Text color={"secondary"} marginTop={"0.3rem"}>Vest</Text>
            </Box>
          </swiper-slide>
          <swiper-slide>
            <Box>
              <Image src={poloShirt} alt="..." width={"400px"} height={"600px"} />
              <Text color={"secondary"} marginTop={"0.3rem"}>Polo Shirts</Text>
            </Box>
          </swiper-slide>
          <swiper-slide>
            <Box>
              <Image src={trenchCoat} alt="..." width={"400px"} height={"600px"} />
              <Text color={"secondary"} marginTop={"0.3rem"}>Trench Coats</Text>
            </Box>
          </swiper-slide>
          <swiper-slide>
            <Box>
              <Image src={woolCoat} alt="..." width={"400px"} height={"600px"} />
              <Text color={"secondary"} marginTop={"0.3rem"}>Wool Coats</Text>
            </Box>
          </swiper-slide>
        </swiper-container>
      </Container>
    </Center>
  );
};

export default ImageSlider;