import { Box, Heading, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);
const MotionHeading = motion(Heading);

const Testimonials = () => {
    return (
        <MotionBox
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            mt={20}
        >
            <MotionHeading as="h2" size="xl" mb={4}>
                Testimonials
            </MotionHeading>
            <Text fontSize="lg">
                Hear what our clients have to say about us.
            </Text>
        </MotionBox>
    );
};

export default Testimonials;
