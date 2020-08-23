import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import { AppBar, Box, Toolbar, Typography, IconButton, Grid } from '@material-ui/core';
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
    pageTitle: {
       color: "#fff",
       textDecoration: "none"
    }
}))

const Header = () => {
    const classes = useStyles();

    const pageArray = [
        {
            title: "Home",
            path: "/My_PortFolio"
        },
        {
            title: "Education",
            path: "/My_PortFolio/Education"
        },
        {
            title: "Resume",
            path: "/My_PortFolio/Resume"
        },
        {
            title: "About",
            path: "/My_PortFolio/About"
        },
        {
            title: "Contact",
            path: "/My_PortFolio/Contact"
        }
    ]

    return (
        <Box>
            <AppBar  position="static">
                <Toolbar variant="dense">
                    {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton> */}
                    <Grid container>
                        <Grid item sm={6} xs = {2}>
                            <Typography variant="h6" className={classes.title}>
                                Portfolio
                            </Typography>
                        </Grid>
                        <Grid item sm = {6} xs = {10} alignItems="center" >
                            <Grid container justify="flex-end" >
                                {
                                    pageArray.map(page => (
                                        <Grid item sm = {2} xs = {2} >
                                            <Typography component = {Link} to = {page.path} className={classes.pageTitle}>{page.title}</Typography>
                                        </Grid>
                                    ))
                                }
                            </Grid>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Header
