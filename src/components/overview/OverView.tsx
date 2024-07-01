import { Box, Heading, Text, Image, List, ListItem, ListIcon, Flex, VStack, Button, SimpleGrid } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import image1 from '../../assets/overview_$1.jpeg'
import image2 from '../../assets/overview_$2.jpg'
import image3 from '../../assets/overview_$3.jpg'
import image4 from '../../assets/overview_$4.jpg'
import image5 from '../../assets/overview_$5.jpeg'


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
            mt={20}
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
                        maxW={{ base: '100%', lg: '50%' }}
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
                        maxW={{ base: '100%', lg: '50%' }}
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


                <Box position="relative" width="400px" height="400px" mt={12}>
                    {/* Central Image */}
                    <Image
                        src={image1}
                        alt="Center Image"
                        position="absolute"
                        top="50%"
                        left="50%"
                        transform="translate(-50%, -50%)"
                        zIndex={2}
                        boxSize='lg'
                        borderRadius='40px'
                    />

                    {/* Top Image */}
                    <Image
                        src={image2}
                        alt="Top Image"
                        position="absolute"
                        top="10px"
                        left="50%"
                        transform="translateX(-50%)"
                        zIndex={1}
                    />

                    {/* Bottom Image */}
                    <Image
                        src={image3}
                        alt="Bottom Image"
                        position="absolute"
                        bottom="10px"
                        left="50%"
                        transform="translateX(-50%)"
                        zIndex={1}
                    />

                    {/* Left Image */}
                    <Image
                        src={image4}
                        alt="Left Image"
                        position="absolute"
                        top="50%"
                        left="10px"
                        transform="translateY(-50%)"
                        zIndex={1}
                    />

                    {/* Right Image */}
                    <Image
                        src={image5}
                        alt="Right Image"
                        position="absolute"
                        top="50%"
                        right="10px"
                        transform="translateY(-50%)"
                        zIndex={1}
                    />
                </Box>


            </MotionFlex>




        </MotionBox>
    );
};

export default Overview;
