import { Flex, VStack, Text } from '@chakra-ui/react';
import TestimonialHeading from './TestimonialHeading';
import { useCarouselItem } from "chakra-framer-carousel";


interface TestimonialCardProps {
    bg: string;
    heading: string;
    text: string
}

function TestimonialCard({ bg, heading, text }: TestimonialCardProps) {
    const { onClickHandler, position } = useCarouselItem();
    const isCenter = position === "center";
    return (
        <Flex
            w={isCenter ? "375px" : "325px"}
            h={isCenter ? "250px" : "200px"}
            pos="relative"
            boxShadow="lg"
            align="center"
            as="button"
            onClick={onClickHandler}
            bg={bg}
            rounded="xl"
            justify="center"
            _after={{
                content: `""`,
                w: 0,
                h: 0,
                borderLeft: "solid transparent",
                borderLeftWidth: 16,
                borderRight: "solid transparent",
                borderRightWidth: 16,
                borderTop: "solid",
                borderTopWidth: 16,
                borderTopColor: bg,
                pos: "absolute",
                bottom: "-16px",
                left: "50%",
                transform: "translateX(-50%)"
            }}
        >
            <VStack p={10}>
                <TestimonialHeading>{heading}</TestimonialHeading>
                <Text
                    fontSize="sm"
                    textAlign="center"
                >{text}</Text>
            </VStack>
        </Flex>
    );
}

export default TestimonialCard
