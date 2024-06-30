import { HStack, Stat, StatLabel, StatNumber } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { GoNorthStar } from "react-icons/go";
import AnimatedNumber from '../animation/AnimatedNumber';


const MotionHStack = motion(HStack);
const MotionStat = motion(Stat);




const HeroCounter = () => {
    return (
        <MotionHStack spacing={{ sm: 5, base: 8, lg: 12 }} mt={8} >

            <MotionStat initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4, duration: 0.5 }}>
                <StatNumber>
                    <AnimatedNumber from={0} to={44} />
                    K
                </StatNumber>
                <StatLabel>ArtWork</StatLabel>
            </MotionStat>

            <GoNorthStar color='gold' fontSize='20px' />

            <MotionStat initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4, duration: 0.5 }}>
                <StatNumber>
                    <AnimatedNumber from={0} to={65} />
                    k
                </StatNumber>
                <StatLabel>Artist</StatLabel>
            </MotionStat>

            <GoNorthStar color='gold' fontSize='20px' />

            <MotionStat initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4, duration: 0.5 }}>
                <StatNumber>
                    <AnimatedNumber from={0} to={90} />
                    k+
                </StatNumber>
                <StatLabel>Auction</StatLabel>
            </MotionStat>
        </MotionHStack>
    )
}

export default HeroCounter
