import {
  Box,
  Button,
  Flex,
  Heading,
  Icon,
  Separator,
  Text,
} from "@chakra-ui/react";
import "./Job.css";
import { FaTwitter } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { IoLogoLinkedin } from "react-icons/io";
import { useNavigate } from "react-router-dom";

let image = [
  "https://static-assets.clubhouseapi.com/static/img/jobs/img_us_1.0d3a80f0b9e1.jpg",
  "https://static-assets.clubhouseapi.com/static/img/jobs/img_us_3.f15e23bf85df.jpg",
  "https://static-assets.clubhouseapi.com/static/img/jobs/img_us_5.076231a516ec.jpg",
  "https://static-assets.clubhouseapi.com/static/img/jobs/img_us_7.1a79b836ba03.png",
  "https://static-assets.clubhouseapi.com/static/img/jobs/img_us_6.72cfdd426e3d.jpg",
  "https://static-assets.clubhouseapi.com/static/img/jobs/img_us_2.68c564572514.png",
  "https://static-assets.clubhouseapi.com/static/img/jobs/img_us_4.fafd559f6854.png",
];

const clubhouseInfo = [
  {
    section: "mission",
    emoji: "🗣 💛‍ 🌍",
    title: "huge, positive mission",
    description:
      "Our mission is to increase friendship in the world. We believe that good friendships are the foundation of everything, and we built Clubhouse to make it easier to fill your life with them. We believe nothing does more for our happiness than having good friends.",
  },
  {
    section: "people",
    emoji: "👩🏾‍💻 👨🏽‍👩🏻🎨 👨🏿",
    title: "the people",
    description:
      "You’ll be surrounded each day with scrappy, brilliant and ambitious teammates who are excited to roll up their sleeves and learn from each other. Best teammates ever!",
  },
  {
    section: "culture",
    emoji: "🔎 🛠️ 💻",
    title: "the culture",
    description:
      "As a team we move quickly, we ship fast and get a lot done. We do this not by taking on everything, but by hiring an incredible team, focusing on the things that matter, and ignoring things that don’t. We are efficient, meeting-light, and relentlessly focused on building.",
  },
  {
    section: "benefits",
    emoji: "🏖 ⚕️ 👶🏾 🖥",
    title: "benefits and perks",
    description:
      "From flexible vacation, great healthcare and family leave benefits, amazing team events and a generous work from home stipend to help you do your best work.",
  },
  {
    section: "remote",
    emoji: "🌲 🏡 🌴 ✈️",
    title: "work from anywhere",
    description:
      "We work as a distributed team and hire people from all over the U.S. but we value in-person time too! Every quarter, we fly the whole company to our office in San Francisco so we can whiteboard, catch up, meet all the new faces, and enjoy quality time together.",
  },
  {
    section: "vision",
    emoji: "💎 🙌",
    title: "just getting started",
    description:
      "Since launching in 2020 we’ve gone from Seed to Series A, B and C – backed by an amazing and diverse group, including Andreessen Horowitz, Tiger Global, DST Global and many of the top angel investors in the world. We are well resourced and aim to build something that touches the whole world. Big dreams over here!",
  },
];

function Job() {
  const nav=useNavigate();
  return (
    <Box>
      <Box
        style={{
          height: "100vh",
          backgroundColor: "#222014",
          paddingLeft: "250px",
          paddingRight: "250px",
        }}
      >
        <Flex
          justifyContent={"space-between"}
          align="center"
          style={{ paddingTop: "30px", paddingBottom: "30px" }}
        >
          <Flex gap={"80px"} align="center">
            <img
              onClick={()=>nav("/")}
              width={"200px"}
              src="https://static-assets.clubhouseapi.com/static/img/logo.2af78f862152.png"
            />
            <Text className="link" onClick={()=>nav("/blog")}>Blog</Text>
            <Text className="link">Jobs</Text>
          </Flex>
          <Flex>
            <Text className="link">Get Clubhouse</Text>
          </Flex>
        </Flex>
        <img
          style={{ marginTop: "40px" }}
          src="https://static-assets.clubhouseapi.com/static/img/jobs/img_jobs_splash.4ee6a9a1c8c7.png"
        />
        <Text
          textStyle="xl"
          width={"90%"}
          color={"#b39774"}
          fontWeight={"semibold"}
          marginTop={"60px"}
        >
          Clubhouse is a place where you can hang out with friends, meet new
          ones, and talk about anything. It's like an always-on dinner party.
        </Text>
        <Text
          textStyle="xl"
          width={"90%"}
          color={"#b39774"}
          fontWeight={"500"}
          marginTop={"30px"}
        >
          Built by a small, scrappy team of experienced builders with a strong
          background in consumer products with a relentless focus on our product
          and the community.
        </Text>
        <Flex justifyContent={"center"}>
          <Button
            variant="plain"
            transition="0.5s ease-in-out"
            _hover={{ transform: "scale(1.05)" }}
            style={{
              border: "2px solid black",
              color: "black",
              backgroundColor: "#fee25d",
              borderRadius: "40px",
              fontSize: "15px",
              fontWeight: "bold",
              padding: "30px",
              marginTop: "45px",
            }}
          >
            browse open roles
          </Button>
        </Flex>
      </Box>
      <Box
        style={{
          backgroundColor: "#fee25d",
          paddingLeft: "250px",
          paddingRight: "250px",
          paddingTop: "80px",
          paddingBottom:"100px"
        }}
      >
        <Text
          textStyle="5xl"
          width={"90%"}
          color={"black"}
          fontWeight={"semibold"}
        >
          why we love working here
        </Text>
        <Box className="clubhouseinfo">
          {clubhouseInfo.map((item) => (
            <Box>
              <Box>{item.emoji}</Box>
              <Heading>{item.title}</Heading>
              <Text>{item.description}</Text>
            </Box>
          ))}
        </Box>
      </Box>
      <Box
        style={{
          fontFamily: "Nunito, sans-serif",
          backgroundColor: "#ab9e8e",
          paddingLeft: "250px",
          paddingRight: "250px",
          paddingTop: "100px",
          paddingBottom: "100px",
          color: "white",
        }}
      >
        <Text textStyle="5xl" width={"90%"} fontWeight={"semibold"}>
          here you are.
        </Text>
        <Box className="img">
          {image.map((item) => (
            <img src={item} />
          ))}
        </Box>
      </Box>
      {/* <Box style={{ height: "100vh", backgroundColor: "white" }}>
        <Box className="joinclub">
          <Heading>join the club</Heading>
          <Text>
            We love what we do and have a lot of work ahead of us. So if you're
            a talented builder excited about increasing friendship in the world,
            we’d love to hear from you.
          </Text>
        </Box>
      </Box> */}

      <Box style={{ height: "70vh", backgroundColor: "#ab9e8e" }}>
        <Flex className="moreinfo">
          <Box >
            <Box color={"white"}>MEET US ON CLUBHOUSE</Box>
            <br />
            <Heading size={"2xl"}>Clubhouse Townhall 📣</Heading>
            <br />
            <Text textStyle={"xl"}>
              Hear from our founders every Tuesday at 5 PM PT
            </Text>
            <Button
              variant="plain"
              style={{
                border: "2px solid black",
                color: "black",
                backgroundColor: "white",
                borderRadius: "40px",
                fontSize: "15px",
                fontWeight: "bold",
                padding: "30px",
                marginTop: "25px",
              }}
            >
              Follow Clubhouse HQ →
            </Button>
          </Box>
          <Box >
            <Box color={"white"}>Read behind-the-scenes</Box>
            <br />
            <Heading size={"2xl"}>Technically Speaking 🖥️ 📣</Heading>
            <br />
            <Text textStyle={"xl"}>
              Learn about building Clubhouse on our engineering blog
            </Text>

            <Button
              variant="plain"
              style={{
                border: "2px solid black",
                color: "black",
                backgroundColor: "white",
                borderRadius: "40px",
                fontSize: "15px",
                fontWeight: "bold",
                padding: "30px",
                marginTop: "25px",
              }}
            >
              Technically Speaking →
            </Button>
          </Box>
        </Flex>
      </Box>

      <Box style={{ height: "80vh" }} className="footer">
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

export default Job;
