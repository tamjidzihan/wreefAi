import { Button, Flex, VStack, HStack, Stat, Text, Box, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";
import heroCardImage from '../../assets/hero_card.jpg'


const MotionBox = motion(Box);
const MotionImage = motion(Image);

const HeroCard = () => {
    return (
        <MotionBox
            mt={{ base: 10, lg: 0 }}
            boxShadow="xl"
            borderRadius="lg"
            overflow="hidden"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
        >
            <MotionImage
                src={heroCardImage}
                alt="NFT Image"
                objectFit='cover'
                boxSize='sm'
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
                // transition={{ delay: 0.5, duration: 0.5 }}
                >
                    Place A Bid
                </Button>
            </MotionBox>
        </MotionBox>
    )
}

export default HeroCard
