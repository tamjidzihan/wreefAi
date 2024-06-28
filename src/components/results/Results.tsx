import { Box, Heading, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);
const MotionHeading = motion(Heading);

const Results = () => {
    return (
        <MotionBox
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            mt={20}
        >
            <MotionHeading as="h2" size="xl" mb={4}>
                Results
            </MotionHeading>
            <Text fontSize="lg">
                See the amazing results we've achieved for our clients.
            </Text>
        </MotionBox>
    );
};

export default Results;
