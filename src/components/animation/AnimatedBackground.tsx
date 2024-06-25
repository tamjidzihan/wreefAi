import React, { useEffect, useRef } from 'react';
import { Box, BoxProps } from '@chakra-ui/react';
import gsap from 'gsap';

const AnimatedBackground: React.FC<BoxProps> = (props) => {
    const bgRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (bgRef.current) {
            gsap.to(bgRef.current, {
                background: "linear-gradient(45deg, #f3ec78, #af4261)",
                duration: 5,
                repeat: -1,
                yoyo: true,
                ease: "linear",
            });
        }
    }, []);

    return <Box ref={bgRef} {...props} />;
};

export default AnimatedBackground;
