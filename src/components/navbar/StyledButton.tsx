import { Button, Box } from "@chakra-ui/react";
import { motion } from "framer-motion";

const CustomButton = () => {
    return (
        <Box
            className="container"
            sx={{
                position: "relative",
                padding: "2px",
                background: "linear-gradient(90deg, #03a9f4, #f441a5)",
                borderRadius: "30px",
                transition: "all 0.4s ease",
                _before: {
                    content: "''",
                    position: "absolute",
                    inset: 0,
                    margin: "auto",
                    borderRadius: "30px",
                    zIndex: -10,
                    filter: "blur(0)",
                    transition: "filter 0.4s ease",
                },
                _hover: {
                    _before: {
                        background: "linear-gradient(90deg, #03a9f4, #f441a5)",
                        filter: "blur(1.2em)",
                    },
                },
                _active: {
                    _before: {
                        filter: "blur(0.2em)",
                    },
                },
            }}
        >
            <Button
                sx={{
                    fontSize: "1em",
                    padding: "0.6em 0.8em",
                    borderRadius: "30px",
                    border: "none",
                    backgroundColor: "#000", // Fixed background color
                    color: "#fff", // Fixed text color
                    cursor: "pointer",
                    boxShadow: "2px 2px 3px #000000b4",
                    _hover: {
                        backgroundColor: "#333", // Optional hover state for button
                    },
                    _active: {
                        backgroundColor: "#111", // Optional active state for button
                    },
                }}
                as={motion.button}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
            >
                Contact us
            </Button>
        </Box>

    );
};

export default CustomButton;
