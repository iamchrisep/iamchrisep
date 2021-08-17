import React, { FunctionComponent } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';

const App: FunctionComponent = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
    return (
        <Switch>
            <Route exact path="/">
                <Header />
                <Main />
                <Footer />
                <Navbar />
                <ScrollToTop />
            </Route>
            <Route render={() => <Redirect to="/" />} />
        </Switch>
    );
};

export default App;
