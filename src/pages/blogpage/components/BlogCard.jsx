// Chakra UI imports
import {
  Box,
  Flex,
  Text,
  Link as CLink,
  Image
} from "@chakra-ui/react";

// React router imports
import { Link as ReactRouterLink } from "react-router-dom";

// Image imports
import bg2 from "../../../assets/images/bg2.jpg";

const blogAuth = "John Wick";
const publishDate = "26 Apr 2024";
const title = "What To Wear To Royal Ascot 2024: A Guide For Men";

const BlogCard = ({ blogImage = bg2, blogTitle = title, blogAuthor = blogAuth, blogPublishDate = publishDate, navLink }) => {
  return (
    <CLink as={ReactRouterLink} cursor={"pointer"}>
    <Box color={"secondary"}>
      <Image src={blogImage} />
      <Text fontSize={"1.2rem"} fontWeight={"600"} lineHeight={"1.4rem"} marginY={"1.2rem"}>{blogTitle}</Text>
      <Text>Written by {blogAuthor}</Text>
      <Text>{blogPublishDate}</Text>
    </Box>
    </CLink>
  );
};

export default BlogCard;