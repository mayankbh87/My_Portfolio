import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import { Home, ContactMail, AssignmentInd} from '@material-ui/icons';
import { AppBar, Box, Toolbar, Typography, IconButton, Grid, Hidden , SwipeableDrawer, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { Link } from "react-router-dom";
// import MyImage from '../Images/MyPic.jpg'
import MenuBookIcon from '@material-ui/icons/MenuBook';
import InfoIcon from '@material-ui/icons/Info';

const useStyles = makeStyles(theme => ({
    pageTitle: {
       color: "#fff",
       textDecoration: "none"
    },
    menuDrawer: {
        // width: "30%",
        background: "linear-gradient(#6692F2,#1F285A)"
    },
    pic: {
        height: theme.spacing(12),
        width: theme.spacing(12),
        margin: theme.spacing(1),
    },
    listItem : {
        color: "#fff"
    }
}))

const Header = () => {
    const classes = useStyles();

    const [openDrawer,setOpenDrawer] = useState(false);

    const pageArray = [
        {
            icon: <Home />,
            title: "Home",
            path: "/My_Portfolio"
        },
        {
            icon: <MenuBookIcon />,
            title: "Journey",
            path: "/My_Portfolio/Journey"
        },
        {
            icon: <AssignmentInd />,
            title: "Resume",
            path: "/My_Portfolio/Resume"
        },
        {
            icon: <InfoIcon />,
            title: "About",
            path: "/My_Portfolio/About"
        },
        {
            icon: <ContactMail />,
            title: "Contact",
            path: "/My_Portfolio/Contact"
        }
    ]

    const pageList = (slider) => (
        <Box>
            {/* <Grid container justify="center">
            <Avatar className={classes.pic} alt="Mayank Bhardwaj" src={MyImage} />
            </Grid> */}
            <List>
                    {pageArray.map((page,key) => (
                        <ListItem button onClick = {() => setOpenDrawer(false)} key = {key} component = {Link} to = {page.path}>
                            <ListItemIcon className = {classes.listItem}>
                                {page.icon}
                            </ListItemIcon>
                            <ListItemText className = {classes.listItem} primary = {page.title} />
                        </ListItem>
                    ))
                }
            </List>
        </Box>
        );

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
                        <Hidden only={["sm","xs"]}>
                        <Grid item sm = {6} xs = {10} alignItems="center" >
                            <Grid container style = {{marginTop: 4}}  justify="flex-end" >
                                {
                                    pageArray.map(page => (
                                        <Grid item sm = {2} xs = {2} >
                                            <Typography component = {Link} to = {page.path} className={classes.pageTitle}>{page.title}</Typography>
                                        </Grid>
                                    ))
                                }
                            </Grid>
                        </Grid>
                        </Hidden> 
                        <Hidden only={["lg","md"]}>
                        <Grid item sm = {6} xs = {10} alignItems="center" >
                            <Grid container justify="flex-end" >
                            <IconButton edge="start" onClick = {() => setOpenDrawer(true)} className={classes.menuButton} color="inherit" aria-label="menu">
                            <MenuIcon />
                            </IconButton>
                            </Grid>
                        </Grid>
                        
                        </Hidden> 
                    </Grid>
                </Toolbar>
            </AppBar>
            <SwipeableDrawer
            classes={{
                paper: classes.menuDrawer, // class name, e.g. `classes-nesting-root-x`
              }}
            anchor= "right"
            open={openDrawer}
            onClose={() => setOpenDrawer(false)}
            onOpen={() => setOpenDrawer(false)}
          >
            {pageList("right")}
          </SwipeableDrawer>
        </Box>
    )
}

export default Header
