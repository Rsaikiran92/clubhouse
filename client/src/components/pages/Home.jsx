import { Box, Button, Flex } from "@chakra-ui/react";
import { IoLogoTwitter } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { IoLogoInstagram } from "react-icons/io5";
import "./Home.css"

function Home() {
  const nav=useNavigate();
  return (
    <Box style={{ minHeight: "200vh" }}>
      <Box
        className="box1"
        style={{
          backgroundColor: "transparent", // Semi-transparent background
          position: "sticky", // Sticky position to allow box2 to scroll under
          top: 0,
          width: "100%",
          zIndex: 10, // Ensure it stays above box2
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", // Optional shadow for better visibility
        }}
      >
        <Flex
          style={{
            padding: "60px",
            paddingBottom: "10px",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <img
            src="https://static-assets.clubhouseapi.com/static/img/img_hand_wave.3454a59f2b06.svg"
            width={"80px"}
          />
          <Flex gap={"50px"} align={"center"}>
            <Button variant="plain" onClick={()=>nav("/blog")} className="btn">blog</Button>
            <Button variant="plain" onClick={()=>nav("/job")} className="btn">jobs</Button>
            <Button variant="plain"  className="btn2">
              get clubhouse
            </Button>
          </Flex>
        </Flex>
        <Flex
          style={{
            height: "60vh",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src="https://static-assets.clubhouseapi.com/static/img/clubhouse_logo_dark.2677abb66623.svg"
            width={"500px"}
          />
        </Flex>
        <Flex
          style={{
            padding: "50px",
            justifyContent: "space-between",
          }}
        >
          <Flex>
            <Button variant="plain" className="btn">Privacy</Button>
            <Button variant="plain" className="btn">Terms</Button>
            <Button variant="plain" className="btn">FAQs</Button>
            <Button variant="plain" className="btn"><IoLogoTwitter/></Button>
            <Button variant="plain" className="btn"><IoLogoInstagram/></Button>
          </Flex>
          <Box>© 2023 Alpha Exploration Co.</Box>
        </Flex>
      </Box>
      <Box
        className="box2"
        style={{ height: "100vh", background: "yellow" }}
      ></Box>
    </Box>
  );
}

export default Home;
