import { Box, Grid, GridItem } from '@chakra-ui/react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/navbar/NavBar'

const Layout = () => {
    return (
        <>
            {/* ===== Grid Layout start ===== */}
            <Grid templateAreas={
                `"nav nav"
                "main main"`
            }
                bgGradient='linear-gradient(26deg, rgba(42, 26, 160, 1) 0%, rgba(99, 0, 212, 1) 48%, rgba(238, 130, 220, 1) 100%);'
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
