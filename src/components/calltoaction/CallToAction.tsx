import { Box, Heading, Button } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);
const MotionHeading = motion(Heading);

const CallToAction = () => {
    return (
        <MotionBox
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            textAlign="center"
            mt={{ base: 0, lg: 20 }}
        >
            <MotionHeading as="h2" size="xl" mb={4}>
                Get Started Today!
            </MotionHeading>
            <Button colorScheme="teal" size="lg">
                Contact Us
            </Button>
        </MotionBox>
    );
};

export default CallToAction;
