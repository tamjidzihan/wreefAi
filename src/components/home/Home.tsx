import { Flex, VStack, Button, HStack, Stat, StatLabel, StatNumber, Text, Box, Image } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import AnimatedNumber from '../animation/number';
import avater1 from '../../assets/avater1.jpg'
import avater2 from '../../assets/avater2.jpg'
import avater3 from '../../assets/avater3.jpg'
import avater4 from '../../assets/avater4.jpg'

const MotionBox = motion(Box);
const MotionText = motion(Text);
const MotionButton = motion(Button);
const MotionImage = motion(Image);
const MotionFlex = motion(Flex);
const MotionVStack = motion(VStack);
const MotionHStack = motion(HStack);
const MotionStat = motion(Stat);

const Home = () => {
    return (
        <MotionBox py={10} px={5} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
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
                    <MotionText fontSize="6xl" fontWeight="bold">
                        Create your own NFT gallery
                    </MotionText>
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

                    <MotionHStack spacing={12} mt={8} >
                        <MotionStat initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.5 }}>
                            <StatNumber>
                                <AnimatedNumber from={0} to={44} />
                                K</StatNumber>

                            <StatLabel>Art Work</StatLabel>
                        </MotionStat>
                        <MotionStat initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6, duration: 0.5 }}>
                            <StatNumber>
                                <AnimatedNumber from={0} to={65} />
                                k</StatNumber>
                            <StatLabel>Artist</StatLabel>
                        </MotionStat>
                        <MotionStat initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9, duration: 0.5 }}>
                            <StatNumber>
                                <AnimatedNumber from={0} to={90} />k+
                            </StatNumber>
                            <StatLabel>Auction</StatLabel>
                        </MotionStat>
                    </MotionHStack>
                </MotionVStack>

                <MotionBox
                    mt={{ base: 10, lg: 0 }}
                    boxShadow="xl"
                    borderRadius="lg"
                    overflow="hidden"
                    initial={{ scale: 0.9 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <MotionImage src="/path/to/image.jpg" alt="NFT Image" />
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
            </MotionFlex>
            <MotionBox
                mt={10}
                py={5}
                borderRadius="lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
            >
                <MotionFlex justify="space-around" align="center" direction={{ base: 'column', md: 'row' }}>
                    <MotionVStack initial={{ scale: 0.9 }} animate={{ scale: 1 }} transition={{ duration: 0.5 }}>
                        <Image borderRadius="full" boxSize="50px" src={avater1} alt="Ingrid" />
                        <Text>Ingrid</Text>
                        <Text>$<AnimatedNumber from={0} to={16890} /></Text>
                    </MotionVStack>
                    <MotionVStack initial={{ scale: 0.9 }} animate={{ scale: 1 }} transition={{ duration: 0.5 }}>
                        <Image borderRadius="full" boxSize="50px" src={avater2} alt="Sash" />
                        <Text>Sash</Text>
                        <Text>$ <AnimatedNumber from={0} to={8876} /></Text>
                    </MotionVStack>
                    <MotionVStack initial={{ scale: 0.9 }} animate={{ scale: 1 }} transition={{ duration: 0.5 }}>
                        <Image borderRadius="full" boxSize="50px" src={avater3} alt="John" />
                        <Text>John</Text>
                        <Text>$<AnimatedNumber from={0} to={7876} /></Text>
                    </MotionVStack>
                    <MotionVStack initial={{ scale: 0.9 }} animate={{ scale: 1 }} transition={{ duration: 0.5 }}>
                        <Image borderRadius="full" boxSize="50px" src={avater4} alt="Karafu" />
                        <Text>Karafu</Text>
                        <Text>$ <AnimatedNumber from={0} to={10876} /></Text>
                    </MotionVStack>
                </MotionFlex>
            </MotionBox>
        </MotionBox>
    );
}

export default Home;
