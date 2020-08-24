import React from 'react'
import { Box, Avatar, makeStyles, Typography, Grid } from '@material-ui/core';
import MyImage from '../Images/MyPic.jpg'
import Typed from 'react-typed';

const useStyles = makeStyles(theme => ({
  pic: {
    height: theme.spacing(30),
    width: theme.spacing(30),
    margin: theme.spacing(1),
  },
  typed: {
    margin: theme.spacing(2),
    color: "#fff"
  },
  detailContainer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    textAlign: "center",
    width: "100vw",
    zIndex: 1
  },
  particlesCanva: {
    position: "absolute"
  }
}))

const Home = () => {
  const classes = useStyles();
  return (
    <Box className={classes.detailContainer}>
      
      <Grid container justify="center">
        <Avatar className={classes.pic} alt="Mayank Bhardwaj" src={MyImage} />
      </Grid>

      <Typography className={classes.typed} variant="h4">
        <Typed
          strings={['Mayank Bhardwaj']}
          typeSpeed={40}
        // loop
        />
      </Typography>
      <Typography className={classes.typed} variant="h5">
        <Typed
          strings={[
            'React Developer',
            'Web Developer',
            'MERN Developer']}
          typeSpeed={40}
          backSpeed={50}
          loop >
        </Typed>
      </Typography>
     

    </Box>
  )
}

export default Home
