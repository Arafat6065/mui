import { Grid } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import Cards from '../Cards/Cards';
import './Player.css'

const Players = () => {
    const [players, setPlayers] = useState([]);
    useEffect(() => {
        fetch(`./fake-2.json`)
            .then(rep => rep.json())
            .then(data => setPlayers(data))
    }, []);
    return (
        <div >
            <div><h1>All Players</h1></div>
            <Grid container spacing={3}>
                <Grid item xs={12} >
                    <Grid container justifyContent="space-between" spacing={2}>
                        {
                            players.map(ply => <Grid item xs={4} >
                                <Cards ply={ply}></Cards>
                            </Grid>)
                        }
                    </Grid>
                </Grid>



            </Grid>
        </div>
    );
};

export default Players;