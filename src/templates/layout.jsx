import Grid from "@mui/material/Unstable_Grid2";
import {Box, CssBaseline} from "@mui/material";

function Layout({children}) {
    const [menuComponent, headerComponent, userInputComponent, threadComponent, searchComponent] = children;

    return (
        <Box style={{display: "flex", height: "100vh", margin: "0 100px"}}>
        <CssBaseline />
        <Grid container sx={{flexGrow: 1}}>
            <Grid item flexBasis={230}>{menuComponent}</Grid>

            <Grid container flex={1}>
                <Grid xs={12}>{headerComponent}</Grid>
                <Grid xs={12}>{userInputComponent}</Grid>
                <Grid xs={12}>{threadComponent}</Grid>
            </Grid>

            <Grid container flex={1}>
                <Grid xs={12}>{searchComponent}</Grid>
                <Grid xs={12}>CONTAINER 1</Grid>
                <Grid xs={12}>CONTAINER 2</Grid>
                <Grid xs={12}>CONTAINER 3</Grid>
            </Grid>
        </Grid>
        </Box>
    );
}

export default Layout;