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
import TextField from '@material-ui/core/TextField'
import './Home.css';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

import bitpic from '../assets/images/hiSmileBit.jpg';
import marvelCard from '../assets/images/marvelCard2.jpg';
import weatherCard from '../assets/images/weatherCard2.jpg';
import capstonepic from '../assets/images/fullpagestretch0.0.7.jpg';

import emailjs, { send } from 'emailjs-com';
import { SERVICE_ID, TEMPLATE_ID, USER_ID } from './IDs.js'

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
            opacity: '0.75'
        },
        cardS: {
            margin: '1rem',
            backgroundColor: 'white',
            opacity: '0.75'
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

    const [expanded3, setExpanded3] = React.useState(false);
    const handleExpandClick3 = () => {
        setExpanded3(!expanded3);
    };

    const [toSend, setToSend] = React.useState({
        from_name: '',
        message: '',
        reply_to: '',
    });
    
    
    const onSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();

        send(SERVICE_ID, TEMPLATE_ID, toSend, USER_ID)
        .then((response) => {
            console.log(response.text);
            document.getElementById('contactform')!.innerHTML = '<h1 style=(textAlign:"center")>Thank You!</h1>';
        }, (error) => {
            console.log(error.text);
        }); 
        
    };
    
    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
        console.log(toSend)
    };

    
    return (
        <div className="root">
                
                <div className = "nav">
                    <Typography variant="button" style={{marginRight: '3rem', marginTop: '1.3rem', fontSize: '1.1rem'}}><a href="#about">About Me</a></Typography>
                    <Typography variant="button" style={{marginRight: '3rem', marginTop: '1.3rem', fontSize: '1.1rem'}}><a href="#projects">Projects</a></Typography>
                    <Typography variant="button" style={{marginRight: '5rem', marginTop: '1.3rem', fontSize: '1.1rem'}}><a href="#contact">Contact</a></Typography>
                </div>

                <div className="main" id="header" style={{height:'85vh'}}>
                    <Typography variant="h1" style={{textAlign: 'center', margin:'auto'}}>Hello World, I'm Ian!</Typography>
                </div>

                <div className="main" id="about">    
                    <Typography variant="h2" style={{marginBottom: '1.0rem'}}>About Me</Typography>
                    <Grid container spacing={0}>
                        <Grid item xs={8}>
                            <Paper className={classes.paper}>
                                <Typography variant="h6" style={{textAlign: 'justify', marginTop: '1rem'}}>I am a full-stack software developer with a flair for the spontaneous, a knack for putting my whole brain into difficult problems, and a love and thirst for the understanding we can gain of this crazy universe.</Typography>
                                <Typography variant="h6" style={{textAlign: 'justify', marginTop: '1rem'}}>My journey started in High School, on an old HP laptop running Slackware, and a friend. My road has gone through research in chemistry, medical school and medical scribing, and contract teaching in Chicago. </Typography>
                            </Paper>
                        </Grid>
                        
                        <Grid item xs={4}>   
                            <Paper className={classes.paper}> 
                                <img src={bitpic} className={classes.sideBarPic}></img>
                                    <div className="icons">
                                        <IconButton aria-label="Go to Github" href="https://github.com/LifeTruther" target="_blank">
                                            <GitHubIcon fontSize="medium" style={{margin:'0.4rem'}}/>
                                        </IconButton>
                                        <IconButton aria-label="Go to LinkedIn" href="https://www.linkedin.com/in/ian-walker-849bb1170/" target="_blank">
                                            <LinkedInIcon fontSize="medium" style={{margin:'0.4rem'}}/>
                                        </IconButton>
                                        <IconButton aria-label="Email me" href="mailto:walkerian7@gmail.com" target="_blank">
                                            <EmailIcon fontSize="medium" style={{margin:'0.4rem'}}/>
                                        </IconButton>
                                    </div>                               
                            </Paper>                   
                        </Grid>
                    </Grid>
                </div>

                <div className="main" id="projects">
                    <Typography variant="h2" style={{marginBottom: '1.0rem'}}>My Projects</Typography>
                    <Grid container spacing={0} direction="row" justifyContent="flex-start" alignItems="flex-start">
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
                        
                        <Grid item xs={12}>
                            <Card className={classes.cardS}>
                                    <CardActionArea
                                        onClick={handleExpandClick3}
                                        aria-expanded={expanded3}
                                        aria-label="show more">
                                        <CardMedia
                                        image={capstonepic}
                                        title="Eat Safe Chicago"
                                        style={{height: 240}}
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="h2">
                                                Eat Safe Chicago
                                            </Typography>
                                            
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions>
                                        <IconButton aria-label="Go to Github" href="https://github.com/LifeTruther/EatSafeChicago" target="_blank">
                                            <GitHubIcon fontSize="large"/>
                                        </IconButton>
                                    
                                        <IconButton
                                            className={clsx(classes.expand, {
                                                [classes.expandOpen]: expanded3,
                                            })}
                                            onClick={handleExpandClick3}
                                            aria-expanded={expanded3}
                                            aria-label="show more"
                                            style={{marginLeft: 'auto'}}
                                            >
                                            <ExpandMoreIcon fontSize="large"/>
                                        </IconButton>
                                    </CardActions>

                                    <Collapse in={expanded3} timeout="auto" unmountOnExit>
                                        <CardContent>
                                        <Typography paragraph>
                                            My code camp capstone project was a Chrome extension. It provides address-specific food safety data to users of Google Maps upon viewing a given restaurant. I have actually been using this app to check restaurants that me and my wife go out to, and I am happy to be able to share this idea with everybody!
                                        </Typography>
                                    </CardContent>
                                </Collapse>
                            </Card>
                        </Grid>
                    </Grid>
                </div>  
                <div style={{scrollSnapAlign:"center", height:'0'}}></div>                    
                <div className="main" id="contact" style={{height:'115vh', scrollSnapAlign: 'end'}}>
                    <Typography variant="h2" style={{marginBottom: '1.0rem'}}>Contact Me</Typography>
                    <Paper className="contactcapsule">
                        <form className="contactform" onSubmit={onSubmit} id="contactform">
                            
                            <TextField label="Full Name" name="from_name" value={toSend.from_name} onChange={handleChange}/>
                            
                            <TextField label="Email" name="reply_to" value={toSend.reply_to} onChange={handleChange}/>
                            
                            <TextField label="Message" multiline rows={4} name="message" value={toSend.message} onChange={handleChange}/>
                            <Button type="submit">Submit</Button>
                        </form>
                    </Paper>
                </div>
        </div>
    )
}