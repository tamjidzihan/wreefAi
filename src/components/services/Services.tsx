import { Box, Grid, Heading, Icon, SimpleGrid } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import ServiceItems from './ServiceItems';
import { FaServicestack } from "react-icons/fa";
import { FaUserFriends, FaMapMarkerAlt, FaSchlix, FaFirstOrderAlt, FaBrain, FaDonate, FaArrowRight } from "react-icons/fa";

const MotionHeading = motion(Heading);


const servicesItems = [
    { id: 1, heading: 'Living room Sofa', text: 'This sofa is perfect for modern tropical spaces, baroque inspired spaces', icon: FaUserFriends },
    { id: 2, heading: 'Living room Sofa', text: 'This sofa is perfect for modern tropical spaces, baroque inspired spaces', icon: FaMapMarkerAlt },
    { id: 3, heading: 'Living room Sofa', text: 'This sofa is perfect for modern tropical spaces, baroque inspired spaces', icon: FaSchlix },
    { id: 4, heading: 'Living room Sofa', text: 'This sofa is perfect for modern tropical spaces, baroque inspired spaces', icon: FaFirstOrderAlt },
    { id: 5, heading: 'Living room Sofa', text: 'This sofa is perfect for modern tropical spaces, baroque inspired spaces', icon: FaBrain },
    { id: 6, heading: 'Living room Sofa', text: 'This sofa is perfect for modern tropical spaces, baroque inspired spaces', icon: FaDonate },
]



const Services = () => {
    return (
        <>
            <MotionHeading
                fontSize={{ base: '5xl', lg: '6xl' }}
                fontWeight="bold"
                textTransform="uppercase"
            >
                Our Services
                <Icon ml={8} as={FaServicestack} />
            </MotionHeading>


            <SimpleGrid
                columns={{ sm: 1, md: 2, lg: 3 }}
                gap={4}
                mt={12}
            >
                {servicesItems.map(item =>
                    <ServiceItems key={item.id} id={item.id} icon={item.icon} heading={item.heading} text={item.text} />
                )}

            </SimpleGrid>
        </>
    );
};

export default Services;
