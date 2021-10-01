import * as React from 'react';
import { Container, makeStyles, createStyles, Box, Theme } from '@material-ui/core';
import clsx from 'clsx';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import './Home.css';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';
import LinkedInIcon from '@material-ui/icons/LinkedIn';



import backGround from '../assets/images/chibg.jpg';
import bitpic from '../assets/images/hiSmileBit.jpg';
import marvelCard from '../assets/images/marvelCard2.jpg';
import weatherCard from '../assets/images/weatherCard2.jpg';

const useStyles = makeStyles((theme:Theme) =>
    createStyles({
        
        sideBarPic: {
            width: '100%',
            opacity: '0.7',
            borderRadius: '3px'
        },
        paper: {
            marginRight: '1rem',
            marginBottom: 'auto',
            padding: '1.5rem',
            opacity: '0.8'
        },
        cardS: {
            margin: '1rem',
            backgroundColor: 'white',
        },
        expand: {
            transform: 'rotate(0deg)',
            marginLeft: 'auto',
            transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
            }),
        },
        expandOpen: {
            transform: 'rotate(180deg)',
        },

    }),
);


interface Props{
    title: string;
}

export const Home = ( props:Props) => {
    const classes = useStyles();


    
    const [expanded1, setExpanded1] = React.useState(false);
    const handleExpandClick1 = () => {
        setExpanded1(!expanded1);
    };

    const [expanded2, setExpanded2] = React.useState(false);
    const handleExpandClick2 = () => {
        setExpanded2(!expanded2);
    };
    
    return (
        <div className="root">
                
                <div className="main" id="header">
                    <Typography variant="h1" style={{textAlign: 'center', margin:'auto'}}>Hello World, I'm Ian!</Typography>
                </div>

                <div className="main" id="about">    
                    <Typography variant="h2" style={{marginBottom: '1.0rem'}}>About Me</Typography>
                    <Grid container item xs={12} spacing={0}>
                        <Grid container item xs={8} spacing={0}>
                            <Paper className={classes.paper}>
                                <Typography variant="h6" style={{textAlign: 'justify', marginTop: '1rem'}}>I am a full-stack software developer with a flair for the spontaneous, a knack for putting my whole brain into difficult problems, and a love and thirst for the understanding we can gain of this crazy universe.</Typography>
                                <Typography variant="h6" style={{textAlign: 'justify', marginTop: '1rem'}}>My journey started in High School, on an old HP laptop running Slackware, and a friend. My road has gone through research in chemistry, medical school and medical scribing, and contract teaching in Chicago. </Typography>
                            </Paper>
                        </Grid>
                        
                        <Grid container item xs={4} spacing={0}>   
                            <Grid item xs={12}>
                                <Paper className={classes.paper}> 
                                    <img src={bitpic} className={classes.sideBarPic}></img>
                                        
                                        <IconButton aria-label="Go to Github" href="https://github.com/LifeTruther" target="_blank">
                                            <GitHubIcon fontSize="large" style={{margin:'0.55rem'}}/>
                                        </IconButton>
                                        <IconButton aria-label="Go to LinkedIn" href="https://www.linkedin.com/in/ian-walker-849bb1170/" target="_blank">
                                            <LinkedInIcon fontSize="large" style={{margin:'0.55rem'}}/>
                                        </IconButton>
                                        <IconButton aria-label="Email me" href="mailto:walkerian7@gmail.com" target="_blank">
                                            <EmailIcon fontSize="large" style={{margin:'0.55rem'}}/>
                                        </IconButton>                                
                                </Paper>
                            </Grid> 
                        </Grid>
                    </Grid>
                </div>

                <div className="main" id="projects">
                    <Typography variant="h2" style={{marginBottom: '1.0rem'}}>My Projects</Typography>
                    <Grid container item xs={12} spacing={0} style={{marginBottom: '10rem'}} direction="row" justifyContent="flex-start" alignItems="flex-start">
                        <Grid item xs={6}>
                            <Card className={classes.cardS}>
                                <CardActionArea
                                    onClick={handleExpandClick1}
                                    aria-expanded={expanded1}
                                    aria-label="show more">
                                    <CardMedia
                                    image={marvelCard}
                                    title="Marvel Project"
                                    style={{height: 140}}
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            A Hero Repository
                                        </Typography>
                                        
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <IconButton aria-label="Go to Github" href="https://github.com/LifeTruther/marvelProjectFullStack" target="_blank">
                                        <GitHubIcon fontSize="large"/>
                                    </IconButton>
                                    <Button variant="text" color="primary" href="https://a-hero-repository.web.app/" target="_blank">
                                        See the Site
                                    </Button>
                                    <IconButton
                                        className={clsx(classes.expand, {
                                            [classes.expandOpen]: expanded1,
                                        })}
                                        onClick={handleExpandClick1}
                                        aria-expanded={expanded1}
                                        aria-label="show more"
                                        style={{marginLeft: 'auto'}}
                                        >
                                        <ExpandMoreIcon fontSize="large"/>
                                    </IconButton>
                                </CardActions>

                                <Collapse in={expanded1} timeout="auto" unmountOnExit>
                                    <CardContent>
                                    <Typography paragraph>
                                        I am working on a site that will allow users to create super-heroes 
                                        who will be indexed in a database. This project is here to help me 
                                        understand the CRUD process better.
                                    </Typography>
                                    </CardContent>
                                </Collapse>

                            </Card>
                        </Grid>
                        
                        <Grid item xs={6}>
                            <Card className={classes.cardS}>
                                <CardActionArea
                                onClick={handleExpandClick2}
                                aria-expanded={expanded1}
                                aria-label="show more">
                                    <CardMedia
                                    image={weatherCard}
                                    title="Contemplative Reptile"
                                    style={{height: 140}}
                                    />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Daily Weather
                                    </Typography>
                                    
                                </CardContent>
                                </CardActionArea>
                                    <CardActions>
                                    <IconButton aria-label="Go to Github" href="https://github.com/LifeTruther/CTW6-Weather-Project" target="_blank">
                                        <GitHubIcon fontSize="large" />
                                    </IconButton>
                                    <Button variant="text" color="primary" href="https://lifetruther.github.io/CTW6-Weather-Project/" target="_blank">
                                        See the Site
                                    </Button>
                                    
                                    <IconButton
                                        className={clsx(classes.expand, {
                                            [classes.expandOpen]: expanded2,
                                        })}
                                        onClick={handleExpandClick2}
                                        aria-expanded={expanded2}
                                        aria-label="show more"
                                        style={{marginLeft: 'auto'}}
                                        >
                                        <ExpandMoreIcon fontSize="large"/>
                                    </IconButton>
                                    </CardActions>
                                    <Collapse in={expanded2} timeout="auto" unmountOnExit>
                                        <CardContent>
                                        <Typography paragraph>
                                            This project will have a special place in my heart.
                                            Two API calls, one for geolocation, and one for all
                                            weather data in the next seven days. I assembled a small presentation
                                            from the data, and included an alert popup for severe weather.
                                        </Typography>
                                        </CardContent>
                                    </Collapse>
                            </Card>
                        </Grid>
                    </Grid>
                </div>                      
             
        </div>
    )
}