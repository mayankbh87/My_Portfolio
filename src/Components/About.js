import React from 'react'
import { Typography, Grid, makeStyles, Box } from '@material-ui/core'

const styles = makeStyles(theme => ({
    content: {
        color: "#fff",
        fontFamily: "montserrat",
        //   fontSize: "1.3rem"
    },
    detailContainer: {
        position: "absolute",
        // top: "50%",
        // left: "50%",
        // transform: "translate(-50%,-50%)",
        // textAlign: "center",
        // width: "100vw",
        zIndex: 1
    },
}))

const About = () => {
    const classes = styles();
    return (
        <Box style = {{margin : 50}} className = {classes.detailContainer}>
            <Grid item sm = {6}>
                <Typography variant = "h2" className = {classes.content} style = {{marginBottom : 25}}>About me</Typography>
                <Typography  variant = "h4" className = {classes.content} style = {{marginBottom : 15}}>I'm a  front end Developer </Typography>
                <Typography variant = "h6" className = {classes.content} style = {{marginBottom : 10}}>I enjoy taking complex problems and turning them into simple problems. I also love the logic and structure of coding and always strive to write efficient code whether itbe HTML, CSS and Javascript. </Typography>
                <Typography variant = "h6" className = {classes.content}>When i'm not coding , you will find me playing games or listening music.</Typography>
            </Grid>
            
        </Box>
    )
}

export default About;
