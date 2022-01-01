import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@material-ui/core';
import { Title } from '@material-ui/icons';
import React from 'react';

const Manegers = (props) => {
    const { image, name, title
    } = props.mn;
    console.log(props)
    return (
        <Card >
            <CardActionArea>
                <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="340"
                    image={image}
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {title}
                    </Typography>
                </CardContent>
            </CardActionArea>

        </Card>
    );
};

export default Manegers;