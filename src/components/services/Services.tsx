import { Box, Heading, SimpleGrid, Text, useColorModeValue } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);
const MotionHeading = motion(Heading);

const Services = () => {
    return (
        <MotionBox
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            mt={{ base: 0, lg: 20 }}
        >
            <MotionHeading as="h2" size="xl" mb={4}>
                Our Services
            </MotionHeading>
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10} mt={10}>
                <Box
                    bg={useColorModeValue('RGBA(0, 0, 0, 0.06)', 'RGBA(0, 0, 0, 0.36)')}
                    p={5}
                    borderRadius='30px'
                    boxShadow="md"
                >
                    <Heading size="md">Service 1</Heading>
                    <Text mt={2}>Description of Service 1.</Text>
                </Box>
                <Box
                    bg={useColorModeValue('RGBA(0, 0, 0, 0.06)', 'RGBA(0, 0, 0, 0.36)')}
                    p={5}
                    borderRadius='30px'
                    boxShadow="md"
                >
                    <Heading size="md">Service 2</Heading>
                    <Text mt={2}>Description of Service 2.</Text>
                </Box>
                <Box
                    bg={useColorModeValue('RGBA(0, 0, 0, 0.06)', 'RGBA(0, 0, 0, 0.36)')}
                    p={5}
                    borderRadius='30px'
                    boxShadow="md">
                    <Heading size="md">Service 3</Heading>
                    <Text mt={2}>Description of Service 3.</Text>
                </Box>
            </SimpleGrid>
        </MotionBox>
    );
};

export default Services;
