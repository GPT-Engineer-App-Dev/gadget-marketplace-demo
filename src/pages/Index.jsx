import { Box, Container, Text, VStack, Image, Grid, GridItem, Heading, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const sampleProducts = [
  {
    id: 1,
    name: "Smartphone",
    description: "Latest model with all the new features.",
    price: "$699",
    image: "path/to/smartphone.jpg",
  },
  {
    id: 2,
    name: "Laptop",
    description: "High performance laptop for all your needs.",
    price: "$999",
    image: "path/to/laptop.jpg",
  },
  {
    id: 3,
    name: "Headphones",
    description: "Noise-cancelling over-ear headphones.",
    price: "$199",
    image: "path/to/headphones.jpg",
  },
];

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <Box as="nav" bg="gray.800" color="white" p={4} mb={8}>
        <VStack spacing={4} align="start">
          <Link as={RouterLink} to="/" fontSize="xl" fontWeight="bold">Home</Link>
          <Link as={RouterLink} to="/products" fontSize="xl" fontWeight="bold">Products</Link>
          <Link as={RouterLink} to="/about" fontSize="xl" fontWeight="bold">About Us</Link>
          <Link as={RouterLink} to="/contact" fontSize="xl" fontWeight="bold">Contact</Link>
        </VStack>
      </Box>
      <VStack spacing={8}>
        <Heading as="h1" size="2xl">Welcome to Our Electronics Store</Heading>
        <Text fontSize="lg">Find the latest and greatest in electronics right here.</Text>
        <Grid templateColumns="repeat(auto-fit, minmax(240px, 1fr))" gap={6}>
          {sampleProducts.map((product) => (
            <GridItem key={product.id} borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src={product.image} alt={product.name} />
              <Box p={4}>
                <Heading as="h3" size="md">{product.name}</Heading>
                <Text mt={2}>{product.description}</Text>
                <Text mt={2} fontWeight="bold">{product.price}</Text>
              </Box>
            </GridItem>
          ))}
        </Grid>
      </VStack>
    </Container>
  );
};

export default Index;