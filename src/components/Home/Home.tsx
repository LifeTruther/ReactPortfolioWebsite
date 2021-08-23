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
        root:{
            flexGrow: 1,
            padding: '0',
            margin: '0',
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.4)), url(${backGround});`,
            width: '100%',
            height: '100%',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            position: 'absolute',
        },
        main: {
            width: '80%',
            maxWidth: '1000px',
            marginLeft: 'auto',
            marginRight: 'auto',
            marginTop: '2rem',
            padding: '0.5rem',
            borderRadius: '4px',
        },
        sideBarPic: {
            width: '100%',
            opacity: '0.7',
            borderRadius: '3px'
        },
        paper: {
            margin: '1rem',
            padding: '1.5rem',
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
        <div className={classes.root}>
            <Grid container spacing={0} className={classes.main} direction="row" justifyContent="flex-start" alignItems="flex-start">
                <Grid container item xs={8} spacing={0}>
                    <Grid item xs={12}>
                        <Paper className={classes.paper}>
                            <Typography variant="h3" style={{marginBottom: '1rem', textAlign: 'center'}}>Hello World, I'm Ian!</Typography>
                            <Typography variant="h5" style={{textAlign: 'justify'}}>I am a brand-new software developer with a flair for the spontaneous, a knack for putting my whole brain into difficult problems, and a love and thirst for the understanding we can gain of this crazy world.</Typography>
                        </Paper>
                    </Grid>
                    <Grid container item xs={12}>
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
                                </CardActionArea>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Daily Weather
                                    </Typography>
                                    
                                </CardContent>

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
                                <IconButton aria-label="Email me" href="mailto:walkerian7@gmail.com">
                                    <EmailIcon fontSize="large" style={{margin:'0.55rem'}}/>
                                </IconButton>
                                <Button variant="contained" size="large" color="primary" href="https://drive.google.com/file/d/1TRHH4g-vMPhz1xoxMfywS02VO4SVX_uI/view?usp=sharing" target="_blank" style={{marginRight:'2rem', marginLeft:'2rem', marginTop:'0.5rem'}}>Grab My Resume</Button>
                                
                        </Paper>
                    </Grid> 
                </Grid>
            </Grid>  
        </div>
    )
}