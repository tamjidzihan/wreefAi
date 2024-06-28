import { Box, Heading, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);
const MotionHeading = motion(Heading);

const Procedures = () => {
    return (
        <MotionBox
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            mt={{ base: 0, lg: 20 }}
        >
            <MotionHeading as="h2" size="xl" mb={4}>
                Procedures
            </MotionHeading>
            <Text fontSize="lg">
                Learn more about our procedures and how we work.
            </Text>
        </MotionBox>
    );
};

export default Procedures;
