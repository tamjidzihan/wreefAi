import { GridItem, Text, Card, CardBody, Stack, Heading, Divider, CardFooter, ButtonGroup, Button, Box, Icon, useColorModeValue } from '@chakra-ui/react'
import { FaUserFriends, FaMapMarkerAlt, FaSchlix, FaFirstOrderAlt, FaBrain, FaDonate, FaArrowRight } from "react-icons/fa";

const items = [
    { id: 1, heading: 'Living room Sofa', text: 'This sofa is perfect for modern tropical spaces, baroque inspired spaces', icon: FaUserFriends },
    { id: 2, heading: 'Living room Sofa', text: 'This sofa is perfect for modern tropical spaces, baroque inspired spaces', icon: FaMapMarkerAlt },
    { id: 3, heading: 'Living room Sofa', text: 'This sofa is perfect for modern tropical spaces, baroque inspired spaces', icon: FaSchlix },
    { id: 4, heading: 'Living room Sofa', text: 'This sofa is perfect for modern tropical spaces, baroque inspired spaces', icon: FaFirstOrderAlt },
    { id: 5, heading: 'Living room Sofa', text: 'This sofa is perfect for modern tropical spaces, baroque inspired spaces', icon: FaBrain },
    { id: 6, heading: 'Living room Sofa', text: 'This sofa is perfect for modern tropical spaces, baroque inspired spaces', icon: FaDonate },
]


const ServiceItems = () => {
    return (
        <>

            {
                items.map(item =>
                    <GridItem

                    >
                        <Card
                            maxW='sm'
                            borderRadius={'xl'}
                            bg={useColorModeValue('RGBA(0, 0, 0, 0.06)', 'RGBA(0, 0, 0, 0.36)')}
                        >
                            <CardBody>
                                <Box>
                                    <Icon
                                        margin={3}
                                        p={2}
                                        borderRadius={'lg'}
                                        fontSize='6xl'
                                        as={item.icon}
                                        bgGradient='linear(to-r, #0F2027, #2C5364)'
                                    />
                                </Box>
                                <Stack mt='6' spacing='3'>
                                    <Text fontSize='3xl'>{item.heading}</Text>
                                    <Text>
                                        {item.text}
                                    </Text>
                                </Stack>
                            </CardBody>
                            <Divider />
                            <CardFooter>
                                <ButtonGroup spacing='2' >
                                    <Button variant='outline' colorScheme='purple'>
                                        <FaArrowRight fontSize='20px' />
                                    </Button>
                                </ButtonGroup>
                            </CardFooter>
                        </Card>
                    </GridItem>
                )
            }
        </>

    )
}

export default ServiceItems
