import { Box, Button, Container, useColorMode, Flex, Text, useColorModeValue } from "@chakra-ui/react";
import { IoMoon } from "react-icons/io5";
import { LuSun } from "react-icons/lu";
import CreateUserModel from "./CreateUserModel";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Container maxW={"900px"}>
      <Box px={4} my={4} borderRadius={5} bg={useColorModeValue("gray.200", "gray.700")}>
        <Flex h="16" alignItems={"center"} justifyContent={"space-between"}>
          {/* Left Side */}
          <Flex alignItems={"center"} justifyContent={"center"} gap={3} display={{ base: "none", sm: "flex" }}>
            <img src="/react.png" alt="react logo" width={50} height={50} />
            <Text fontSize={"40px"}>+</Text>
            <img src="/python.png" alt="Python logo" width={50} height={40} />
            <Text fontSize={"40px"}>=</Text>
            <img src="/explode.png" alt="Explode Head" width={45} height={45} />
          </Flex>

          {/* Right Side */}
          <Flex alignItems={"center"} gap={3}>
            <Text fontSize={"lg"} fontWeight={500} display={{ base: "none", md: "block" }}>
              Jason ✈️
            </Text>

            <Button onClick={toggleColorMode}>{colorMode === "light" ? <IoMoon /> : <LuSun size={20} />}</Button>
            <CreateUserModel />
          </Flex>
        </Flex>
      </Box>
    </Container>
  );
};

export default Navbar;
