import { Box, Container, Heading, Stack, Text } from '@chakra-ui/react';
import Sliders from './Slider';


const Testimonials = () => {
    return (
        <Box h="full" w="full" mt={20}>
            <Stack spacing={2} align={"center"}>
                <Heading >Our Clients Speak</Heading>
                <Text >
                    We have been working with clients around the world
                </Text>
            </Stack>

            <Container maxW={{ base: '400px', lg: "100%" }} py={16}>
                <Sliders />
            </Container>
        </Box>
    );
};

export default Testimonials;


