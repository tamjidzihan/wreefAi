import { Heading } from '@chakra-ui/react';

const TestimonialHeading = ({ children }: any) => {
    return (
        <Heading as={"h3"} fontSize={"xl"}>
            {children}
        </Heading>
    );
};

export default TestimonialHeading
