import { Card, Grid } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import './About.css'
import Manegers from '../Manegers/Manegers';

const About = () => {
    const [manegers, setManegers] = useState([]);
    useEffect(() => {
        fetch(`./fake-1.json`)
            .then(rep => rep.json())
            .then(data => setManegers(data))

    }, []);
    return (
        <div>
            <div className='team-title'>
                <h2 >Our Team Maneger</h2>
            </div>
            <div className='maneger-container'>


                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Grid container justifyContent="center" spacing={2}>
                            {
                                manegers.map(mn => <Grid item xs={2} sm={4} md={4}>
                                    <Manegers mn={mn}></Manegers>
                                </Grid>)
                            }
                        </Grid>
                    </Grid>
                </Grid>




            </div>
        </div>

    );
};

export default About;