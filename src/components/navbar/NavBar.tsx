import { Box, Container, Flex, HStack, Image, Link, useColorMode, useColorModeValue } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import logo_dark from '../../assets/logoicon_dark@1x.png';
import logo_light from '../../assets/logoicon_light@1x.png';
import ColorModeSwitch from './ColorModeSwitch';
import StyledButton from './StyledButton';

const MotionContainer = motion(Container);
const MotionFlex = motion(Flex);
const MotionHStack = motion(HStack);
const MotionImage = motion(Image);
const MotionBox = motion(Box);

const Navbar = () => {
    const { colorMode } = useColorMode();

    return (
        <MotionContainer
            maxW='container.xl'
            bg={useColorModeValue('RGBA(0, 0, 0, 0.06)', 'RGBA(0, 0, 0, 0.36)')}
            borderRadius="30px"
            px={6}
            my={4}
            backdropFilter="auto"
            backdropBlur="8px"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <MotionFlex
                h={14}
                alignItems={'center'}
                justifyContent={'space-between'}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
            >
                <MotionHStack spacing={8} alignItems={'center'}>
                    <MotionFlex alignItems={'center'} justifyContent={'space-between'}>
                        <MotionImage
                            borderRadius='full'
                            boxSize={10}
                            src={colorMode === 'dark' ? logo_dark : logo_light}
                            alt='Wreef_ai_logo'
                            mr={4}
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.5 }}
                        />
                        <MotionBox
                            fontSize="xl"
                            fontWeight="bold"
                            initial={{ x: -100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.5 }}
                        >

                            Wreef Create
                        </MotionBox>
                    </MotionFlex>
                    <MotionHStack
                        spacing={8}
                        textTransform="uppercase"
                        display={{ base: 'none', md: 'flex' }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                    >
                        <Link href={'#'}>Our Services</Link>
                        <Link href={'#'}>Results</Link>
                        <Link href={'#'}>Procedures</Link>
                        <Link href={'#'}>Faqs</Link>
                    </MotionHStack>
                </MotionHStack>

                <MotionFlex alignItems={'center'}>
                    <MotionBox
                        mr={4}
                        display={{ base: 'none', md: 'flex' }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                    >

                        <ColorModeSwitch />

                    </MotionBox>

                    <StyledButton />

                </MotionFlex>
            </MotionFlex>
        </MotionContainer>
    );
};

export default Navbar;
