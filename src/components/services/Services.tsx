import { Box, Heading, SimpleGrid, Image, Text, Flex, Avatar } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import heroCardImage from '../../assets/hero_card.jpg';

const MotionBox = motion(Box);
const MotionHeading = motion(Heading);

const servicesData = [
    {
        id: 1,
        title: 'Virtual Art',
        image: heroCardImage,  // Update with the correct path
        owner: '@wzard',
        currentBid: '4.89 ETH',
        time: '03:18:24'
    },
    {
        id: 2,
        title: 'Virtual Art',
        image: heroCardImage,  // Update with the correct path
        owner: '@wzard',
        currentBid: '4.89 ETH',
        time: '03:18:24'
    },
    {
        id: 3,
        title: 'Virtual Art',
        image: heroCardImage,  // Update with the correct path
        owner: '@wzard',
        currentBid: '4.89 ETH',
        time: '03:18:24'
    }
];

const Services = () => {
    return (
        <MotionBox initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} py={10}>
            <MotionHeading as="h2" size="xl" mb={6} textAlign="center">
                Our Services
            </MotionHeading>
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
                {servicesData.map(service => (
                    <Box key={service.id} bg="gray.800" borderRadius="md" overflow="hidden" boxShadow="lg">
                        <Image src={service.image} alt={service.title} />
                        <Box p={4}>
                            <Text fontSize="sm" color="gray.400">
                                {service.time}
                            </Text>
                            <Heading size="md" mt={2} mb={4}>
                                {service.title}
                            </Heading>
                            <Flex align="center" mb={4}>
                                <Avatar size="sm" name={service.owner} src="/path-to-owner-avatar.png" />
                                <Text ml={2}>{service.owner}</Text>
                            </Flex>
                            <Text fontSize="lg" fontWeight="bold">
                                {service.currentBid}
                            </Text>
                        </Box>
                    </Box>
                ))}
            </SimpleGrid>
        </MotionBox>
    );
};

export default Services;
