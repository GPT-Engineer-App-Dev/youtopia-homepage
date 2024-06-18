import { Box, Container, Flex, Image, Text, VStack } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <Flex justify="space-between" align="center" mb={4}>
        <Image src="/images/youtube-logo.png" alt="YouTube Logo" boxSize="50px" />
      </Flex>
      <VStack spacing={4}>
        <Text fontSize="2xl">Welcome to YouTube</Text>
        <Text>Explore videos, channels, and more.</Text>
      </VStack>
    </Container>
  );
};

export default Index;