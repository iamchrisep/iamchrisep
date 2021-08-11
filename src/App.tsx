import React from 'react';
import './App.css';
import Typewriter from 'typewriter-effect';
import { createAvatar } from '@dicebear/avatars';
import * as style from '@dicebear/micah';
import Lottie from 'react-lottie';

// animations
import { animationOptions } from './utils/animations/animationOptions';
import Page404 from './utils/animations/animationJson/404.json';
import Background07 from './utils/animations/animationJson/background-07.json';

function App() {
    const svg = createAvatar(style, {
        seed: 'seed',
        width: 196,
        height: 196,
        radius: 0,
        earrings: ['hoop'],
        earringColor: ['black'],
        earringsProbability: 100,
        eyebrows: ['up'],
        eyebrowColor: ['coast'],
        eyes: ['smiling'],
        mouth: ['smile'],
        nose: ['curve'],
        shirt: ['open'],
        shirtColor: ['black'],
        hair: ['full'],
        hairColor: ['coast'],
    });

    return (
        <>
            <header className="App-header">
                <div className="container">
                    <Typewriter
                        options={{
                            strings: ['Hello', 'World'],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                    <div
                        className="App-avatar"
                        dangerouslySetInnerHTML={{ __html: svg }}
                    />
                    <button type="button">TEST</button>
                </div>
            </header>
            <section className="App-section">
                <div className="container">
                    <Lottie options={animationOptions(Page404, true, true)} />
                </div>
            </section>
            <footer className="App-footer">
                <div className="container">
                    <Lottie
                        options={animationOptions(Background07, true, true)}
                    />
                </div>
            </footer>
        </>
    );
}

export default App;
