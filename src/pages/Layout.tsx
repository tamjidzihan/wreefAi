import { Grid, GridItem, useColorMode } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/navbar/NavBar';

const Layout = () => {
    const { colorMode } = useColorMode();
    const gradient = colorMode === 'light'
        ? ['linear(to-tr, teal.300, yellow.400)',
            'linear(to-t, blue.200, teal.500)',
            'linear(to-b, orange.100, purple.300)',]
        : 'linear-gradient(26deg, rgba(18, 10, 78, 1) 0%, rgba(99, 0, 212, 1) 48%, rgba(138, 74, 128, 1) 100%);';

    return (
        <>
            {/* ===== Grid Layout start ===== */}
            <Grid templateAreas={
                `"nav nav"
                "main main"`
            }
                bgGradient={gradient}
            >

                {/* ===== NavBar start ===== */}
                <GridItem
                    area='nav'
                    position='sticky'
                    top='0'
                >
                    <Navbar />
                </GridItem>
                {/* ===== NavBar End ===== */}




                {/* ===== Homapage start ===== */}
                <GridItem area='main'>
                    <Outlet />
                </GridItem>
                {/* ===== Homapage End ===== */}



            </Grid>

            {/* ===== Grid Layout End ===== */}

        </>
    )
}

export default Layout
