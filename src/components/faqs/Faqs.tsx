import { Box, Heading, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);
const MotionHeading = motion(Heading);

const Faqs = () => {
    return (
        <MotionBox
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            mt={{ base: 0, lg: 20 }}
        >
            <MotionHeading as="h2" size="xl" mb={4}>
                FAQ's
            </MotionHeading>
            <Text fontSize="lg">
                Find answers to the most frequently asked questions.
            </Text>
        </MotionBox>
    );
};

export default Faqs;
