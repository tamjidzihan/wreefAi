import { Box, Container, Flex, Heading, Link, Stack, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import TestimonialSliders from './TestimonialSliders';


const Testimonials = () => {
    return (
        <Box h="full" w="full" bg="black" mt={20}>
            <Stack spacing={2} align={"center"}>
                <Heading >Our Clients Speak</Heading>
                <Text >
                    We have been working with clients around the world
                </Text>
            </Stack>

            <Container maxW={"7xl"} py={16} as={Stack} spacing={12}>
                <TestimonialSliders />
            </Container>
        </Box>
    );
};

export default Testimonials;
