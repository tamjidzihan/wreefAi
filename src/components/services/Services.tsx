import { Box, Grid, Heading, Icon } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import ServiceItems from './ServiceItems';
import { FaServicestack } from "react-icons/fa";

const MotionBox = motion(Box);
const MotionHeading = motion(Heading);



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


            <Grid
                templateColumns='repeat(3,1fr)'
                gap={4}
                mt={12}
            >
                <ServiceItems />
            </Grid>
        </>
    );
};

export default Services;
