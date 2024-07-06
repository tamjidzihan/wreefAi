import { Card, CardBody, HStack, Text, Image, Stack, Heading, CardFooter, Divider, Button, ButtonGroup } from "@chakra-ui/react";
import { slidersDataProps } from "./SliderData";



const SliderCard = (
    {
        name,
        title,
        bg,
        src,
        heading,
        text
    }: slidersDataProps) => {
    return (
        <HStack
            w="90%"
            h="200px"
            bg={bg}
            border="cyan.700"
            alignContent="center"
            justifyContent="center"
            mx="4"
        >
            <Card maxW='sm'>
                <CardBody>
                    <Image
                        src={src}
                        alt={name}
                        borderRadius='lg'
                    />
                    <Stack mt='6' spacing='3'>
                        <Heading size='md'>{heading}</Heading>
                        <Text>
                            {text}
                        </Text>
                        <Text color='blue.600' fontSize='2xl'>
                            $450
                        </Text>
                    </Stack>
                </CardBody>
                <Divider />
                <CardFooter>
                    <ButtonGroup spacing='2'>
                        <Button variant='solid' colorScheme='blue'>
                            Buy now
                        </Button>
                        <Button variant='ghost' colorScheme='blue'>
                            Add to cart
                        </Button>
                    </ButtonGroup>
                </CardFooter>
            </Card>



        </HStack>




    );
};

export default SliderCard;
