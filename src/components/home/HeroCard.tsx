import { Box, Button, Image, Text, useColorModeValue } from "@chakra-ui/react";
import { motion } from "framer-motion";
import heroCardImage from '../../assets/hero_card.jpg';
import rotatingImage from '../../assets/logo_dev.png';
import RotatingImage from "../animation/RotatingImage";


const MotionBox = motion(Box);
const MotionImage = motion(Image);

const HeroCardTry = () => {
    return (
        <MotionBox
            mt={{ base: 10, lg: 0 }}
            boxShadow="xl"
            borderRadius="30px"
            bg={useColorModeValue('RGBA(0, 0, 0, 0.06)', 'RGBA(0, 0, 0, 0.36)')}
            backdropBlur="10px"
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            position="relative"
        >
            <MotionImage
                src={heroCardImage}
                alt="NFT Image"
                objectFit='cover'
                boxSize='sm'
                borderTopRadius='30px'
            />
            <MotionBox p={5} initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5 }}>
                <Text fontWeight="bold" fontSize="lg">SPACE SONG</Text>
                <Text>Remaining Time: 12h:35m:20s</Text>
                <Text>Highest Bid: 5.25 ETH</Text>
                <Button
                    colorScheme='teal'
                    variant='outline'
                    borderRadius='3xl'
                    mt={3}
                    width="100%"
                    as={motion.button}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                >
                    Place A Bid
                </Button>
            </MotionBox>

            <RotatingImage imagrsrc={rotatingImage} />

        </MotionBox>
    );
};

export default HeroCardTry;
