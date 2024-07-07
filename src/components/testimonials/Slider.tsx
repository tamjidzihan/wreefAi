import { Box, Button } from "@chakra-ui/react";
import { Suspense, lazy } from "react";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import SliderCard from "./SliderCard";
import slidersData from "./SliderData";

const Slider = lazy(() => import("react-slick"));

const CustomPrevArrow = ({ onClick }: any) => (
    <Button
        as={FaAngleLeft}
        onClick={onClick}
        position="absolute"
        left="-50px"
        top="50%"
        variant={'outline'}
        transform="translateY(-50%)"
        cursor="pointer"
        color="cyan.500"
        _hover={{ color: "gray.600" }}
        boxSize="50px"
    />
);

const CustomNextArrow = ({ onClick }: any) => (
    <Button
        as={FaAngleRight}
        onClick={onClick}
        position="absolute"
        right="-50px"
        top="50%"
        variant={'outline'}
        transform="translateY(-50%)"
        cursor="pointer"
        color="cyan.500"
        _hover={{ color: "gray.600" }}
        boxSize="50px"
    />
);

const Sliders = () => {
    const slickSettings = {
        dots: true,
        infinite: true,
        speed: 1000,
        autoplay: true,
        slidesToShow: 3,
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
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
    );
};

export default Sliders;
