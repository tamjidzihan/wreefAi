import { Box, Image } from '@chakra-ui/react'
import image1 from '../../assets/overview_$1.jpeg'
import image2 from '../../assets/overview_$2.jpg'
import image3 from '../../assets/overview_$3.jpg'
import image4 from '../../assets/overview_$4.jpg'


const AiImage = () => {
    return (
        <Box
            position="relative"
            width={{ base: "200px", lg: "600px" }}
            height={{ base: "200px", lg: "400px" }}
            mt={{ base: "100px", lg: "50px" }}
        >
            {/* Central Image */}
            <Image
                src={image1}
                alt="Center Image"
                position="absolute"
                top="50%"
                left="50%"
                h={{ base: "200px", lg: "400px" }}
                w={{ base: "200px", lg: "283px" }}
                borderRadius='40px'
                transform="translate(-50%, -50%)"
                zIndex={1}
            />

            {/* Top Image */}
            <Image
                src={image2}
                alt="Top Image"
                position="absolute"
                top="-30px"
                right="-50%"
                h={{ base: "200px", lg: "150px" }}
                w={{ base: "200px", lg: "150px" }}
                borderRadius='40px'
                objectFit='cover'
                transform="translateX(-50%)"
                zIndex={0}
            />

            {/* Bottom Image */}
            <Image
                src={image4}
                alt="Bottom Image"
                position="absolute"
                bottom="-60px"
                left="5%"
                h={{ base: "200px", lg: "200px" }}
                w={{ base: "200px", lg: "200px" }}
                borderRadius='40px'
                objectFit='cover'
                transform="translateX(-50%)"
                zIndex={1}
            />

            {/* Left Image */}
            <Image
                src={image3}
                alt="Left Image"
                position="absolute"
                bottom="-100px"
                right="-20%"
                h={{ base: "200px", lg: "120px" }}
                w={{ base: "200px", lg: "120px" }}
                borderRadius='40px'
                objectFit='cover'
                transform="translateY(-50%)"
                zIndex={0}
            />

            {/* Bottom Right Image */}
            {/* <Image
            src={image5}
            alt="Right Image"
            position="absolute"
            top="50%"
            right="10px"
            transform="translateY(-50%)"
            zIndex={1}
        /> */}
        </Box>
    )
}

export default AiImage
