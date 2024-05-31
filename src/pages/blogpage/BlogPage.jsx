// Chakra UI imports
import {
  Container,
  Box,
  Text,
  Flex,
  Center
} from "@chakra-ui/react";

// Component imports
import NavBar from "../homepage/components/NavBar";
import BlogCard from "./components/BlogCard";
import Footer from "../homepage/components/Footer";

// Image imports
import blogbg from "../../assets/images/blogbg.jpg";
import blog1 from "../../assets/images/blog1.jpg";
import blog2 from "../../assets/images/blog2.jpg";
import blog3 from "../../assets/images/blog3.jpg";
import blog4 from "../../assets/images/blog4.jpg";
import blog5 from "../../assets/images/blog5.jpg";
import blog6 from "../../assets/images/blog6.jpg";
import blog7 from "../../assets/images/blog7.jpg";
import blog8 from "../../assets/images/blog8.jpg";
import blog9 from "../../assets/images/blog9.jpg";
import blog10 from "../../assets/images/blog10.jpg";
import bg from "../../assets/images/bg.jpg";
import bg3 from "../../assets/images/bg3.jpg";

import NewNavBar from "../../commoncomponents/NewNavBar";

const BlogPage = () => {
  return (
    <div style={{ position: "relative", backgroundColor : "#332522" }}>
      <NewNavBar />
      <Container maxW={"100%"} width={"100%"} height={"30rem"} backgroundImage={blogbg} position={"relative"} >
        <Box width={"40%"} marginX={"auto"} paddingY={"8rem"} sx={{ position: "relative", zIndex: 9 }}>
          <Text textAlign={"center"} fontSize={"3rem"} fontWeight={600} color={"white"}>Playmaker Blog</Text>
          <Text textAlign={"center"} fontSize={"1.4rem"} lineHeight={"1.5rem"} marginTop={"1.6rem"} color={"white"}>Find all the latest trends in tailor made fashion, reviews and tips to design the style that fits you best at the best price.</Text>
        </Box>
        <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", filter: "blur(5px)", backgroundColor: "rgba(00,00,00,0.09)", backdropFilter: "blur(10px)", zIndex: "1" }}></div>
      </Container>
      <Container paddingY={"8rem"} paddingX={"15rem"} bg={"primaryLight"} maxWidth={"100%"} width={"100%"}>
        <Text fontSize={"1.8rem"} fontWeight={600} color={"secondary"} marginBottom={"1.5rem"}>All posts sorted by date</Text>
        <Box width={"100%"}>
        <Flex direction={"row"} columnGap={"2rem"} rowGap={"2rem"} wrap={"wrap"}>
          <Box width={"20rem"} bg={"primary"} padding={"1rem"} borderRadius={"md"}>
            <BlogCard blogTitle={"What To Wear To office/workin environment: A Guide For Men"} />
          </Box>
          <Box width={"20rem"} bg={"primary"} padding={"1rem"} borderRadius={"md"}>
            <BlogCard blogImage={blog1} blogTitle={"Select your suits wisely"} />
          </Box>
          <Box width={"20rem"} bg={"primary"} padding={"1rem"} borderRadius={"md"}>
            <BlogCard blogImage={blog2} blogTitle={"Wear suits like a pro"} />
          </Box>
          <Box width={"20rem"} bg={"primary"} padding={"1rem"} borderRadius={"md"}>
            <BlogCard blogImage={blog3} blogTitle={"Everything you need to know about tie"} />
          </Box>
          <Box width={"20rem"} bg={"primary"} padding={"1rem"} borderRadius={"md"}>
            <BlogCard blogImage={blog4} blogTitle={"Must have guide for office styling"} />
          </Box>
          <Box width={"20rem"} bg={"primary"} padding={"1rem"} borderRadius={"md"}>
            <BlogCard blogImage={blog5} blogTitle={"Get ready for prom: A Guide For Men"} />
          </Box>
          <Box width={"20rem"} bg={"primary"} padding={"1rem"} borderRadius={"md"}>
            <BlogCard blogImage={blog6} blogTitle={"Black suits: The style guide for men"} />
          </Box>
          <Box width={"20rem"} bg={"primary"} padding={"1rem"} borderRadius={"md"}>
            <BlogCard blogImage={blog7} blogTitle={"Select your shoes: A Guide For Men"} />
          </Box>
          <Box width={"20rem"} bg={"primary"} padding={"1rem"} borderRadius={"md"}>
            <BlogCard blogImage={blog8} blogTitle={"What To Wear To Royal Ascot 2024: A Guide For Men"} />
          </Box>
          <Box width={"20rem"} bg={"primary"} padding={"1rem"} borderRadius={"md"}>
            <BlogCard blogImage={blog9} blogTitle={"Style guide for summer: A Guide For Men"} />
          </Box>
          <Box width={"20rem"} bg={"primary"} padding={"1rem"} borderRadius={"md"}>
            <BlogCard blogImage={blog10} blogTitle={"Acheive sporty look: A Guide For Men"} />
          </Box>
          <Box width={"20rem"} bg={"primary"} padding={"1rem"} borderRadius={"md"}>
            <BlogCard blogImage={blog1} blogTitle={"What To Wear To Royal Ascot 2024: A Guide For Men"} />
          </Box>
        </Flex>
        </Box>
      </Container>
      <Footer />
    </div>
  );
};

export default BlogPage;