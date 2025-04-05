import { Box, Heading, Text, Image, Flex } from "@chakra-ui/react";
import { Separator, Icon } from "@chakra-ui/react";
import { FaTwitter } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { IoLogoLinkedin } from "react-icons/io";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { blogData } from "./Blog.js";
import "./Blogdetail.css"

function BlogDetail() {
  const nav = useNavigate();
  const { id } = useParams();
  const blog = blogData.find((item) => item.id === parseInt(id));

  return (
    <Box backgroundColor="#f1efe3">
      <Flex
        align={"center"}
        style={{ padding: "20px", paddingLeft: "220px", paddingRight: "220px" }}
      >
        <Icon onClick={() => nav("/blog")} size={"xl"}> 
          <MdKeyboardArrowLeft />
        </Icon>
        <Flex style={{ width: "100%" }} justifyContent={"center"}>
          <img
            width={"300px"}
            src="https://blog.clubhouse.com/content/images/2021/07/Clubhouse-Lockup-3.png"
          />
        </Flex>
      </Flex>
      <Flex paddingLeft={"90px"} paddingRight={"90px"} gap={"50px"} align={"center"}>
        <Image src={blog.image} width={"700px"} borderRadius="50px" />
        <Box>
        <Heading marginTop="20px" >{blog.title}</Heading>
        <br/>
        <br/>
        <Heading as={"h6"}>{blog.description}</Heading>
        </Box>
        
      </Flex>

      <Box paddingLeft={"400px"} paddingRight={"400px"} className="blogtext">
        <Text marginTop="10px">{blog.text1}</Text>
        <br/>
        <Text marginTop="10px">{blog.text2}</Text>
      </Box>

      <Box style={{ height: "80vh" }}  className="footer">
        <Box className="footer1">
          <Box>
            <img
              width={"80px"}
              style={{ borderRadius: "20px" }}
              src="https://static-assets.clubhouseapi.com/static/img/img_app_icon_wave.a25dc28af44f.png"
            />
            <br />
            <img
              width={"180px"}
              src="https://static-assets.clubhouseapi.com/static/img/logo.2af78f862152.png"
            />
            <br />
            <Flex gap={"20px"}>
              <img
                width={"150px"}
                src="https://static-assets.clubhouseapi.com/static/img/appstore.6f955d329ad7.svg"
              />
              <img
                width={"150px"}
                src="https://static-assets.clubhouseapi.com/static/img/googleplay.a1b4ed6211c9.svg"
              />
            </Flex>
          </Box>
          <Box>
            <Heading>More Clubhouse</Heading>
            <br />
            <Flex direction={"column"} justifyContent={"space-evenly"}>
              <Text className="text">Blog</Text>
              <Text className="text">Knowledge Center</Text>
              <Text className="text">New User Guide</Text>
              <Text className="text">Guidelines</Text>
            </Flex>
          </Box>
          <Box>
            <Heading>Get in touch</Heading>
            <br />
            <Text className="text">Contact</Text>
            <Text className="text">Jobs</Text>
            <Text className="text">Press</Text>
            <Text className="text">Ask a town hall question</Text>
          </Box>
          <Separator marginTop={"10px"} />
        </Box>
        <Box
          style={{
            paddingLeft: "250px",
            paddingRight: "250px",
            marginTop: "40px",
          }}
        >
          <Separator />
        </Box>
        <Flex className="footer2">
          <Flex gap={"30px"}>
            <Icon size={"xl"}>
              <FaTwitter color="white" />
            </Icon>
            <Icon size={"xl"}>
              <IoLogoInstagram size={"md"} color="white" />
            </Icon>
            <Icon size={"xl"}>
              <IoLogoLinkedin color="white" />
            </Icon>
          </Flex>
          <Flex gap={"20px"}>
            <Text className="text">Privacy</Text>
            <Text className="text">Terms</Text>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
}

export default BlogDetail;
