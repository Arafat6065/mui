import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@material-ui/core';
import React from 'react';
import './Cards.css'

const Cards = (props) => {
    const { name, image } = props.ply;
    return (
        <div>

            <Card className="cardIteam">
                <CardActionArea>
                    <CardMedia
                        component="img"
                        alt="Contemplative Reptile"
                        height="440"

                        image={image}
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {name}
                        </Typography>

                    </CardContent>
                </CardActionArea>

            </Card>

        </div>
    );
};

export default Cards;