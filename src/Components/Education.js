import React from 'react'
import { Box, Paper, Typography, makeStyles, Slide } from '@material-ui/core'
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
// import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import EditIcon from '@material-ui/icons/Edit';

const useStyles = makeStyles(theme => ({
    // paper: {
    //     // padding: theme.spacing(8,0,0,10),
    //     margin: theme.spacing(8,0,0,10),
    //     // height: "16rem",
    //     // backgroundImage: `url(${journeyBg})`
    //     // borderRadius: 10
    // },
    paper: {
        padding: theme.spacing(3),
        background: "transparent",
        border: "2px solid #fff",
        borderRadius: 6
    },
    secondaryTail: {
        backgroundColor: theme.palette.secondary.main,
    },
    detailContainer: {
        position: "absolute",
        zIndex: 1
    },
    content: {
        color: "#fff",
        fontFamily: "montserrat",
        //   fontSize: "1.3rem"
    },
    oppositeContent: {
        "&::before": {
            flex: 0
        }
    },
    dot: {
        // background: "#30A499",
        border: "3px solid #fff",
        margin: 0
    }

}))

const Education = () => {
    const classes = useStyles();
    const [checked, setChecked] = React.useState(true);
    return (
        <Slide
            direction="up"
            in={checked}
            mountOnEnter
            unmountOnExit
            timeout={{ enter: 3000, exit: 3000 }}>
            <Box className={classes.detailContainer}>
                {/* <Paper className = {classes.paper}> */}
                {/* <Box className = {classes.paper}>
                        <Typography style = {{color: "#fff"}} variant = "h3">My Journey</Typography>
                        <Typography style = {{color: "#fff"}} variant = "h6">Let's explore how I became a Web developer</Typography>
                    </Box> */}
                <Timeline align="left">
                    <TimelineItem classes={{
                        missingOppositeContent: classes.oppositeContent
                    }}>
                        <TimelineSeparator >
                            <TimelineDot style={{ background: "#F9BF40" }} className={classes.dot}>
                                <EditIcon />
                            </TimelineDot>
                            <TimelineConnector style={{ width: 3 }} />
                        </TimelineSeparator>
                        <TimelineContent>
                            <Paper elevation={3} className={classes.paper}>
                                <Typography className={classes.content} variant="h4" component="h1">
                                    Software Developer in Tata Consultancy Services
                    </Typography>
                                <Typography className={classes.content} variant="h6">I am working as a React developer creating front-end responsive designs and reusable code files for the company's future products using different technologies like Material UI,Redux & Routing. Integrating designs and wireframes with the application code. Monitoring user interactions and translating them into clear insights. Optimizing app components and improving the product's performance</Typography>
                            </Paper>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem classes={{
                        missingOppositeContent: classes.oppositeContent
                    }}>
                        <TimelineSeparator>
                            <TimelineDot style={{ background: "#A84DB8" }} className={classes.dot}>
                                <EditIcon />
                            </TimelineDot>
                            <TimelineConnector style={{ width: 3 }} />
                        </TimelineSeparator>
                        <TimelineContent>
                            <Paper elevation={3} className={classes.paper}>
                                <Typography className={classes.content} variant="h4" component="h1">
                                    Internship in Reliance industries
                    </Typography>
                                <Typography className={classes.content} variant="h6">Work in the guidance of experienced developers and Performing a Database management in retail setup with reference to Reliance Retail Limited</Typography>
                            </Paper>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem
                        classes={{
                            missingOppositeContent: classes.oppositeContent
                        }}>
                        <TimelineSeparator >
                            <TimelineDot style={{ background: "#30A499" }} className={classes.dot}>
                                <EditIcon />
                            </TimelineDot>
                            <TimelineConnector style={{ width: 3 }} />
                        </TimelineSeparator>
                        <TimelineContent>
                            <Paper elevation={3} className={classes.paper}>
                                <Typography className={classes.content} variant="h4" component="h1">
                                    Bachelor of Education
                    </Typography>
                                <Typography className={classes.content} variant="h6">I have Completed my B.Tech in Computer science & Technology with 78%.I have taken courses like DSA, OOPs, DBMS, Computer Networks over the years and have better understanding of these subjects</Typography>
                            </Paper>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem
                        classes={{
                            missingOppositeContent: classes.oppositeContent
                        }}>
                        <TimelineSeparator >
                            <TimelineDot className={classes.dot} style={{ background: "#34888c" }}>
                                <EditIcon />
                            </TimelineDot>
                            <TimelineConnector style={{ width: 3 }} />
                        </TimelineSeparator>
                        <TimelineContent>
                            <Paper elevation={3} className={classes.paper}>
                                <Typography className={classes.content} variant="h4" component="h1">
                                    Secondary School Education
                    </Typography>
                                <Typography className={classes.content} variant="h6">I have Completed my Secondary School education from Divine Educational Institute with 90.2% </Typography>
                            </Paper>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem
                        classes={{
                            missingOppositeContent: classes.oppositeContent
                        }}>
                        <TimelineSeparator >
                            <TimelineDot style={{ background: "#434343" }} className={classes.dot}>
                                <EditIcon />
                            </TimelineDot>
                            {/* <TimelineConnector style = {{width: 3}} /> */}
                        </TimelineSeparator>
                        <TimelineContent>
                            <Paper elevation={3} className={classes.paper}>
                                <Typography className={classes.content} variant="h4" component="h1">
                                    High School Education
                    </Typography>
                                <Typography className={classes.content} variant="h6">I have Completed my High School education from Divine Educational Institute with 9.8 CGPA</Typography>
                            </Paper>
                        </TimelineContent>
                    </TimelineItem>
                </Timeline>

                {/* </Paper> */}
            </Box>
        </Slide>

    )
}

export default Education
