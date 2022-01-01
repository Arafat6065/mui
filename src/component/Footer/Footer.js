import { Button, Grid, TextField } from '@material-ui/core';
import React from 'react';
import './Footer.css'
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';

const Footer = () => {
    return (
        <div className='footer'>
            <Grid container spacing={3}>
                <Grid item xs={4} lg={4} sm={4} md={4}>
                    <h2>Contact-Us</h2>
                    <h5>programinghero@gmail.com</h5>
                    <FacebookIcon className='facebook' />
                    <TwitterIcon className='facebook' />
                    <LinkedInIcon className='facebook' />
                    <InstagramIcon className='facebook' />
                </Grid>
                <Grid iteam xm={4} lg={4} sm={4} md={4}>
                    <h2>QUICK LINKS</h2>
                    <p className='footer-link'>Our Story</p>
                    <p className='footer-link'>FAQs</p>
                    <p className='footer-link'>Location</p>
                    <p className='footer-link'>Terms and Services</p>
                </Grid>
                <Grid iteam xm={4} lg={4} sm={4} md={4}>
                    <h2>STAY IN TOUCH</h2>
                    <p>Subscribe to receive updates, access to exclusive deals, and more.</p>
                    <form>

                        <TextField id="outlined-basic" label="Enter your Email" variant="outlined" />
                    </form> <br />
                    <Button className='btn' variant="outlined" color="secondary">Subscribe</Button>
                </Grid>
            </Grid>
        </div>
    );
};

export default Footer;