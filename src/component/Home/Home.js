import { Button } from '@material-ui/core';
import React from 'react';
import About from '../About/About';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Menubar from '../Menubar/Menubar';
import Players from '../Players/Players';

const Home = () => {
    return (
        <div>
            <div>
                <div>

                    <About></About>
                    <Players></Players>
                    <Footer></Footer>


                </div>
            </div>
        </div>
    );
};

export default Home;