import { Avatar, Flex, Stack, Text } from '@chakra-ui/react';

interface TestimonialAvatarProps {
    src: string;
    name: string;
    title: string;
}

const TestimonialAvatar = ({ src, name, title }: TestimonialAvatarProps) => {
    return (
        <Flex align={"center"} mt={8} direction={"column"}>
            <Avatar src={src} mb={2} />
            <Stack spacing={-1} align={"center"}>
                <Text fontWeight={600}>{name}</Text>
                <Text fontSize={"sm"} color="gray.600">
                    {title}
                </Text>
            </Stack>
        </Flex>
    );
};

export default TestimonialAvatar
