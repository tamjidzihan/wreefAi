import { Box, Flex } from '@chakra-ui/react';
import { Carousel, CarouselItem, CarouselItems } from 'chakra-framer-carousel';
import data from './data'
import TestimonialAvatar from './TestimonialAvatar';
import TestimonialCard from './TestimonialCard';
import Arrow from './Arrow';

const TestimonialSliders = () => {
    return (
        <Flex flexDir="column">
            <Carousel>
                <Flex w="fit-content" pos="relative">
                    <CarouselItems mx={2}>
                        {data.map(({ name, title, bg, src, heading, text }, index) => {
                            return (
                                <CarouselItem index={index} key={name}>
                                    <Box p={10}>
                                        <TestimonialCard heading={heading} bg={bg} text={text} />
                                        <TestimonialAvatar src={src} name={name} title={title} />
                                    </Box>
                                </CarouselItem>
                            );
                        })}
                    </CarouselItems>

                    <Arrow isLeft />
                    <Arrow isLeft={false} />
                </Flex>
            </Carousel>
        </Flex>
    )
}

export default TestimonialSliders;
