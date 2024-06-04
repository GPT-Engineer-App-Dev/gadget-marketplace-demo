import { Box, Container, VStack, Text, Image, Grid, GridItem, Heading, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const sampleProducts = [
  {
    id: 1,
    name: "Smartphone",
    description: "Latest model with advanced features",
    price: "$699",
    image: "smartphone.jpg",
  },
  {
    id: 2,
    name: "Laptop",
    description: "High performance laptop for professionals",
    price: "$999",
    image: "laptop.jpg",
  },
  {
    id: 3,
    name: "Smartwatch",
    description: "Stylish smartwatch with health tracking",
    price: "$199",
    image: "smartwatch.jpg",
  },
];

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <VStack spacing={8}>
        <Heading as="h1" size="2xl" textAlign="center" mt={8}>
          Welcome to ElectroShop
        </Heading>
        <Text fontSize="lg" textAlign="center">
          Your one-stop shop for the latest electronics
        </Text>
        <Grid templateColumns="repeat(auto-fit, minmax(250px, 1fr))" gap={6}>
          {sampleProducts.map((product) => (
            <GridItem key={product.id} borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src={product.image} alt={product.name} boxSize="250px" objectFit="cover" />
              <Box p={4}>
                <Heading as="h3" size="md" mb={2}>
                  {product.name}
                </Heading>
                <Text>{product.description}</Text>
                <Text fontWeight="bold" mt={2}>
                  {product.price}
                </Text>
              </Box>
            </GridItem>
          ))}
        </Grid>
      </VStack>
    </Container>
  );
};

export default Index;