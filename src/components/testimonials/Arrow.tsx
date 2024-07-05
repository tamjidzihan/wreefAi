import { Button, Flex } from '@chakra-ui/react';
import { useCarousel } from 'chakra-framer-carousel';
import { ChevronLeft, ChevronRight } from 'react-feather';

function Arrow({ isLeft }: any) {
    const { onNext, onPrevious } = useCarousel();
    const onClickHandler = () => {
        if (isLeft) {
            onPrevious();
        } else {
            onNext();
        }
    };
    const pos = isLeft ? { left: "10px" } : { right: "10px" };
    return (
        <Flex pos="absolute" {...pos} top="35%">
            <Button size="lg" variant="solid" onClick={onClickHandler}>
                {isLeft ? <ChevronLeft /> : <ChevronRight />}
            </Button>
        </Flex>
    );
}

export default Arrow
