import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import ButtonContainer from './ButtonContainer';
import Divider from "@material-ui/core/Divider";
import Avatar from "@material-ui/core/Avatar";
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import React, { useEffect } from "react";
import {TimelineMax} from 'gsap';

import useStyles from '../styles/CardStyles';

import dataArray from '../data';


function App1() {  
    const tl = new TimelineMax({paused: true});
    const styles = useStyles();
    let dataNodes = [];

    useEffect(() => {
        tl.staggerFrom(dataNodes, .5, {y: '100px', opacity: 0}, .1).play();
    }, []);  

    return (
        <React.Fragment>          
            <ButtonContainer tl={tl} />
            <Grid container spacing={2}>
                    {
                        dataArray.map((dataItem, idx) => {
                            return (   <Grid item xs={12} sm={6} md={3}
                                             key={dataItem.id}
                                             ref={card => dataNodes[idx] = card}>
                                            <Card className={styles.card} elevation={1}>
                                                    <CardActionArea>
                                                        <div className={styles.mediaWrapper}>
                                                            <CardMedia
                                                                className={styles.media}
                                                                image={dataItem.url}
                                                                title={dataItem.title}
                                                            />
                                                        </div>
                                                        
                                                        <CardContent className={styles.content}>
                                                            <Typography gutterBottom variant="h6" component="h4">
                                                                {dataItem.title}
                                                            </Typography>
                                                            <Typography color="textSecondary" variant={"caption"} component="p">
                                                                {dataItem.desc}
                                                            </Typography>
                                                            <Divider className={styles.divider} light />
                                                            
                                                            <div className={styles.containerAvatar}>
                                                                <i className="fas fa-heart" color="secondary"></i>
                                                                {dataItem.faces.map(face => (
                                                                    <Avatar className={styles.avatar} key={face} src={face} />
                                                                ))}
                                                            </div>
                                                        </CardContent>
                                                    </CardActionArea>  
                                                </Card>
                                        </Grid>
                            );
                        })
                    }
                </Grid>
        </React.Fragment>
    );
  }
  
  export default App1;