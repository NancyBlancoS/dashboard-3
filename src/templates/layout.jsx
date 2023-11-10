import Grid from "@mui/material/Unstable_Grid2";
import {Box, CssBaseline} from "@mui/material";

function Layout() {
    return (
        <Box style={{display: "flex", height: "100vh", margin: "0 100px"}}>
        <CssBaseline />
        <Grid container sx={{flexGrow: 1}}>
            <Grid item flex={1}>Navegator</Grid>

            <Grid container>
                <Grid xs={12}>HEADER</Grid>
                <Grid xs={12}>USER INPUT</Grid>
                <Grid xs={12}>THREAD</Grid>
            </Grid>

            <Grid container>
                <Grid xs={12}>SEARCH</Grid>
                <Grid xs={12}>CONTAINER 1</Grid>
                <Grid xs={12}>CONTAINER 2</Grid>
                <Grid xs={12}>CONTAINER 3</Grid>
            </Grid>
        </Grid>
        </Box>
    );
}

export default Layout;