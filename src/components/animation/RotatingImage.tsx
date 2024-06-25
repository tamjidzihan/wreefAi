import { Box, Image } from '@chakra-ui/react';
import { useEffect, useRef } from 'react'
import gsap from 'gsap';


interface RotatingImageProps {
    imagrsrc: string
}

const RotatingImage = ({ imagrsrc }: RotatingImageProps) => {
    const rotatingImageRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (rotatingImageRef.current) {
            gsap.fromTo(rotatingImageRef.current,
                { x: 200, opacity: 0 },  // Start position (off-screen to the right)
                {
                    x: 0,
                    opacity: 0.5, // Set to the desired opacity
                    duration: 1,
                    ease: "power3.in",
                    onComplete: () => {
                        gsap.to(rotatingImageRef.current, {
                            rotation: 360,
                            duration: 10,
                            repeat: -1,
                            ease: "linear",
                        });
                    }
                }
            );
        }
    }, []);


    return (
        <>
            <Box
                ref={rotatingImageRef}
                position="absolute"
                top="65%"
                left="-75px" // Adjust the position as needed
                transform="translateY(-50%)"
                width="150px"
                height="150px"
                overflow="hidden"
            >
                <Image
                    src={imagrsrc}
                    alt="Rotating Image"
                    objectFit="cover"
                    width="100%"
                    height="100%"
                    borderRadius="50%"
                />
            </Box>
        </>
    )
}

export default RotatingImage
