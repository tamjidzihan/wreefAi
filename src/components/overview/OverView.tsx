import { Box, Heading, Text, List, ListItem, ListIcon } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FaCheckCircle } from "react-icons/fa";


const MotionBox = motion(Box);
const MotionHeading = motion(Heading);
const MotionText = motion(Text);

const Overview = () => {
    return (
        <MotionBox
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            mt={20}
        >
            <MotionHeading as="h1" size="2xl" textAlign="center" mb={4}>
                Overview
            </MotionHeading>
            <MotionText fontSize="lg" textAlign="center" mb={4}>
                Welcome to our comprehensive platform. We offer a range of services to cater to your needs.
            </MotionText>
            <MotionText fontSize="lg" mb={4}>
                Our platform is designed to bring together artists and creators from various domains. Whether you're a digital artist, a traditional painter, or a sculptor, you'll find the tools and community you need to succeed.
            </MotionText>
            <MotionText fontSize="lg" mb={4}>
                Here are some of the key features of our platform:
            </MotionText>
            <List spacing={3} mb={4}>
                <ListItem>
                    <ListIcon as={FaCheckCircle} color="green.500" />
                    User-friendly interface designed for ease of use.
                </ListItem>
                <ListItem>
                    <ListIcon as={FaCheckCircle} color="green.500" />
                    Robust tools for creating and managing your digital assets.
                </ListItem>
                <ListItem>
                    <ListIcon as={FaCheckCircle} color="green.500" />
                    A vibrant community of artists and creators.
                </ListItem>
                <ListItem>
                    <ListIcon as={FaCheckCircle} color="green.500" />
                    Secure and reliable transactions for buying and selling art.
                </ListItem>
                <ListItem>
                    <ListIcon as={FaCheckCircle} color="green.500" />
                    Regular events and competitions to showcase your work.
                </ListItem>
            </List>
            <MotionText fontSize="lg" mb={4}>
                Join us today and be a part of an exciting and dynamic community of creators. Whether you're looking to showcase your work, collaborate with other artists, or just explore the world of digital art, our platform has something for everyone.
            </MotionText>
        </MotionBox>
    );
};

export default Overview;
