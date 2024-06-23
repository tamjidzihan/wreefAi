
import { Box, Flex, Image, Text, VStack, useColorModeValue } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import avater1 from '../../assets/avater1.jpg'
import avater2 from '../../assets/avater2.jpg'
import avater3 from '../../assets/avater3.jpg'
import avater4 from '../../assets/avater4.jpg'
import AnimatedNumber from '../animation/number'

const MotionBox = motion(Box);
const MotionText = motion(Text);
const MotionFlex = motion(Flex);
const MotionVStack = motion(VStack);

const Creators = [
    { name: 'Ingrid', amount: 16890, pichref: avater1 },
    { name: 'Sash', amount: 8876, pichref: avater2 },
    { name: 'John', amount: 7876, pichref: avater3 },
    { name: 'Karafu', amount: 10876, pichref: avater4 },
]


const TopCreators = () => {
    return (
        <MotionBox
            mt={10}
            mx={20}
            py={5}
            bg={useColorModeValue('RGBA(0, 0, 0, 0.06)', 'RGBA(0, 0, 0, 0.36)')}
            borderRadius='40px'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
        >
            <MotionText mx={12} mb={5}>Top Creator of this week</MotionText>
            <MotionFlex justify='space-around' align="center" direction={{ base: 'column', md: 'row' }}>
                {Creators.map(creator => (
                    <MotionVStack
                        initial={{ scale: 0.9 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.5 }}
                        flexDirection={{ base: 'column', lg: 'row' }}
                        key={creator.amount}
                    >
                        <Image
                            borderRadius="full"
                            boxSize="100px"
                            src={creator.pichref}
                            alt={creator.name}
                            mr={2} />
                        <Box>
                            <Text>{creator.name}</Text>
                            <Text>$<AnimatedNumber from={0} to={creator.amount} /></Text>
                        </Box>
                    </MotionVStack>
                ))}
            </MotionFlex>
        </MotionBox>
    )
}

export default TopCreators
