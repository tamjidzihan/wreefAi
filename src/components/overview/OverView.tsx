import { Box, Button, Flex, Heading, Text, VStack } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import AiImage from './AiImage';

const MotionBox = motion(Box);
const MotionHeading = motion(Heading);
const MotionText = motion(Text);
const MotionFlex = motion(Flex);
const MotionVStack = motion(VStack);
const MotionButton = motion(Button);

const Overview = () => {
    return (
        <MotionBox
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            my='100px'
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
                <MotionBox>
                    <MotionVStack
                        align="start"
                        spacing={5}
                        maxW={{ base: '100%', lg: '70%' }}
                        initial={{ x: -50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <MotionButton
                            colorScheme='purple'
                            variant='outline'
                            borderRadius='3xl'
                            size="sm"
                            initial={{ scale: 0.8 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.3 }}
                        >
                            Vision & Mission
                        </MotionButton>

                        <MotionHeading
                            fontSize={{ base: '5xl', lg: '6xl' }}
                            fontWeight="bold"
                            textTransform="uppercase"
                        >
                            Our Vision
                        </MotionHeading>
                        <MotionText
                        >
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem nihil praesentium dolorem sed aliquid necessitatibus inventore! Vero eos et voluptas harum. Eligendi labore in inventore hic, beatae culpa! Totam, expedita!
                        </MotionText>
                    </MotionVStack>

                    <MotionVStack
                        align="start"
                        spacing={5}
                        maxW={{ base: '100%', lg: '70%' }}
                        initial={{ x: -50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        mt={12}
                    >
                        <MotionButton
                            colorScheme='purple'
                            variant='outline'
                            borderRadius='3xl'
                            size="sm"
                            initial={{ scale: 0.8 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.3 }}
                        >
                            Vision & Mission
                        </MotionButton>

                        <MotionHeading
                            fontSize={{ base: '5xl', lg: '6xl' }}
                            fontWeight="bold"
                            textTransform="uppercase"
                        >
                            Our Mission
                        </MotionHeading>
                        <MotionText
                        >
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem nihil praesentium dolorem sed aliquid necessitatibus inventore! Vero eos et voluptas harum. Eligendi labore in inventore hic, beatae culpa! Totam, expedita!
                        </MotionText>
                    </MotionVStack>
                </MotionBox>


                {/* ===== Ai Image start ===== */}
                <AiImage />
                {/* ===== Ai Image End ===== */}



            </MotionFlex>
        </MotionBox>
    );
};

export default Overview;
