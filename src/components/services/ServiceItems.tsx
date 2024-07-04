import { GridItem, Text, Card, CardBody, Stack, Heading, Divider, CardFooter, ButtonGroup, Button, Box, Icon, useColorModeValue } from '@chakra-ui/react'
import { FaArrowRight } from "react-icons/fa";


interface ServiceItemProps {
    id: number
    icon: typeof FaArrowRight;
    heading: string;
    text: string
}


const ServiceItems = ({ id, icon, heading, text }: ServiceItemProps) => {
    return (
        <GridItem>
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
                            as={icon}
                            bgGradient='linear(to-r, #0F2027, #2C5364)'
                        />
                    </Box>
                    <Stack mt='6' spacing='3'>
                        <Text fontSize='3xl'>{heading}</Text>
                        <Text>
                            {text}
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

export default ServiceItems
