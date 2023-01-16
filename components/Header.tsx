import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  Navbar,
  Header,
  Box,
  Flex,
  Center,
  Text,
  MediaQuery,
  Burger,
  useMantineTheme,
} from "@mantine/core";

const HeaderComponent = () => {
  const router = useRouter();

  const handleClickProfile = () => {
    router.push("/profile");
  };

  const handleClickHome = () => {
    console.log("redirected");
    router.push("/");
  };

  const [opened, setOpened] = useState(false);
  return (
    <Header height={{ base: "100%" }} bg="#5F9EA0" p="xs">
      <MediaQuery largerThan="sm" styles={{ display: "none" }}>
        <Center>
          <Image
            style={{ borderRadius: "50%", maxWidth: "600px" }}
            src="/images/flower_logo.png"
            height={45}
            width={45}
            alt="logo"
          />
        </Center>
      </MediaQuery>

      <MediaQuery smallerThan="sm" styles={{ display: "none" }}>
        <Flex justify="space-between" align="center">
          <Flex>
            {" "}
            <Link href="/">
              <Image
                style={{
                  borderRadius: "50%",
                  maxWidth: "600px",
                  margin: "0 20px",
                }}
                src="/images/flower_logo.png"
                height={45}
                width={45}
                alt="logo"
              />
            </Link>
          </Flex>
          <Flex justify="flex-end" align="center">
            <Box> 
                <Text onClick={handleClickHome}>Home</Text>
            </Box>
            <Box>
              <Link href="https://www.linkedin.com/feed/">
                <h3>Linkedin </h3>
              </Link>
            </Box>
            <Text onClick={handleClickProfile}>Profile</Text>
          </Flex>
        </Flex>
      </MediaQuery>
    </Header>
  );
};

export default HeaderComponent;
