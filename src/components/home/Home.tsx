import { Box, Button, Flex, Heading, Text, VStack } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import HeroCard from './HeroCard';
import HeroCounter from './HeroCounter';
import TopCreators from './TopCreators';


const MotionBox = motion(Box);
const MotionHeading = motion(Heading);
const MotionText = motion(Text);
const MotionButton = motion(Button);
const MotionFlex = motion(Flex);
const MotionVStack = motion(VStack);

const Home = () => {
    return (
        <MotionBox
            py={10}
            px={5}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >

            <MotionFlex
                direction={{ base: 'column', lg: 'row' }}
                justify="space-between"
                align="center"
                maxW="1200px"
                mx="auto"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <MotionVStack
                    align="start"
                    spacing={5}
                    maxW={{ base: '100%', lg: '50%' }}
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <MotionText color="yellow.400" fontSize="sm">
                        NFT MARKET
                    </MotionText>
                    <MotionHeading
                        fontSize="6xl"
                        fontWeight="bold"
                        textTransform="uppercase">
                        Create your own NFT
                        <Text as='u'>gallery</Text>
                    </MotionHeading>
                    <MotionText fontSize="2xl">
                        NFT Marketplace brings artists and creators together on a single platform.
                    </MotionText>

                    <MotionButton
                        colorScheme='teal'
                        variant='outline'
                        borderRadius='3xl'
                        size="lg"
                        initial={{ scale: 0.9 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.3 }}
                    >
                        Start Collecting
                    </MotionButton>


                    {/* ===== Hero Counter  start ===== */}
                    <HeroCounter />
                    {/* ===== Hero Counter  End ===== */}


                </MotionVStack>


                {/* ===== Hero Card start ===== */}
                <HeroCard />
                {/* ===== Hero Card End ===== */}


            </MotionFlex>


            {/* ===== Top Creators  start ===== */}
            <TopCreators />
            {/* ===== Top Creators End ===== */}


        </MotionBox>
    );
}

export default Home;
