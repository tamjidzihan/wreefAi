import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Button, Divider, Flex, Heading, IconButton, Input, Text, VStack } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FaPlusCircle, FaMinusCircle } from "react-icons/fa";

const MotionBox = motion(Box);
const MotionHeading = motion(Heading);

const Faqs = () => {
    return (
        <MotionBox
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            mt={{ base: 0, lg: 20 }}
        >
            <MotionHeading as="h2" size="xl" mb={4}>
                FAQ's
            </MotionHeading>
            <Text fontSize="lg">
                Find answers to the most frequently asked questions.
            </Text>

            <Flex
                color="white"
                justify='center'
                mt={'12'}
            >
                <Flex
                    direction={{ base: 'column', md: 'row' }}
                    p={8}
                    borderRadius="lg"
                >
                    <Accordion flex={1} allowToggle>
                        <AccordionItem>
                            {({ isExpanded }) => (
                                <>
                                    <h2>
                                        <AccordionButton>
                                            <Box flex="1" textAlign="left" my='10px'>
                                                How do I sign up for the project?
                                            </Box>
                                            {isExpanded ? (
                                                <FaMinusCircle />
                                            ) : (
                                                <FaPlusCircle />
                                            )}
                                        </AccordionButton>
                                    </h2>
                                    <AccordionPanel pb={4}>
                                        Answer to the question goes here.
                                    </AccordionPanel>
                                </>
                            )}
                        </AccordionItem>

                        <AccordionItem>
                            {({ isExpanded }) => (
                                <>
                                    <h2>
                                        <AccordionButton>
                                            <Box flex="1" textAlign="left" my='10px'>
                                                What thing that I should prepare before starting?
                                            </Box>
                                            {isExpanded ? (
                                                <FaMinusCircle />
                                            ) : (
                                                <FaPlusCircle />
                                            )}
                                        </AccordionButton>
                                    </h2>
                                    <AccordionPanel pb={4}>
                                        Answer to the question goes here.
                                    </AccordionPanel>
                                </>
                            )}
                        </AccordionItem>

                        <AccordionItem>
                            {({ isExpanded }) => (
                                <>
                                    <h2>
                                        <AccordionButton>
                                            <Box flex="1" textAlign="left" my='10px'>
                                                Does my company need help for marketing advices?
                                            </Box>
                                            {isExpanded ? (
                                                <FaMinusCircle />
                                            ) : (
                                                <FaPlusCircle />
                                            )}
                                        </AccordionButton>
                                    </h2>
                                    <AccordionPanel pb={4}>
                                        Answer to the question goes here.
                                    </AccordionPanel>
                                </>
                            )}
                        </AccordionItem>
                    </Accordion>




                    <Flex
                        direction="column"
                        align="center"
                        flex={1}
                        ml={{ md: 8 }}
                        mt={{ base: 8, md: 0 }}
                    >
                        <Text fontSize="2xl" mb={4}>How We Can Help You?</Text>
                        <Text mb={4} textAlign="center">
                            Follow our newsletter. We will regularly update our latest project and availability.
                        </Text>
                        <Flex as="form" w="100%" maxW="400px">
                            <Input placeholder="example@gmail.com" flex={1} />
                            <Button ml={2} colorScheme="green">Signup</Button>
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>
        </MotionBox>



    );
};

export default Faqs;
