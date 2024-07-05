import { Grid, GridItem, useColorMode } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/navbar/NavBar';

const Layout = () => {
    const { colorMode } = useColorMode();

    return (
        <>
            {/* ===== Grid Layout start ===== */}
            <Grid templateAreas={
                `"nav nav"
                "main main"`
            }
                bg='black'
            >

                {/* ===== NavBar start ===== */}
                <GridItem
                    area='nav'
                    position='sticky'
                    top='0'
                    zIndex='9999'
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
