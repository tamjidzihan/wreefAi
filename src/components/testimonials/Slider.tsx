import { Box, HStack, Text } from "@chakra-ui/react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Suspense, lazy } from "react";
import SliderCard from "./SliderCard";
import slidersData from "./SliderData";

const Slider = lazy(() => import("react-slick"));

const Sliders = () => {
    const slickSettings = {
        dots: true,
        infinite: true,
        speed: 1000,
        autoplay: true,
        slidesToShow: 3
    };

    return (
        <>
            <Box>
                <Box
                    sx={{
                        ".slick-dots": {
                            transform: "translateY(1em)"
                        },
                        ".slick-dots li button": {
                            _before: {
                                transition: "0.2s",
                                content: "' '",
                                borderRadius: "100%",
                                background: "cyan.500"
                            }
                        },
                        ".slick-arrow": {
                            backgroundColor: "cyan.500",
                            color: "white",
                            w: "30px",
                            h: "50px",
                            transition: "0.2s",
                            borderRadius: '30px',
                            _hover: {
                                backgroundColor: "cyan.500",
                                color: "white"
                            },
                            _focus: {
                                backgroundColor: "cyan.500",
                                color: "white"
                            },
                            _before: {
                                transition: "0.2s"
                            }
                        },
                        ".slick-prev": {
                            left: "-40px",
                            _before: {
                                content: '"◀"'
                            }
                        },
                        ".slick-next": {
                            right: "-40px",
                            _before: {
                                content: '"▶"'
                            }
                        }
                    }}
                >
                    <Suspense fallback={<div>Loading...</div>}>
                        <Slider {...slickSettings}>
                            {slidersData.map(({ name, title, bg, src, heading, text }, index) =>
                                <SliderCard
                                    key={index}
                                    name={name}
                                    title={title}
                                    bg={bg}
                                    src={src}
                                    heading={heading}
                                    text={text}
                                />
                            )}
                        </Slider>
                    </Suspense>
                </Box>
            </Box>
        </>
    );
}


export default Sliders;