import React from 'react';
import Typewriter from 'typewriter-effect';
import { createAvatar } from '@dicebear/avatars';
import * as style from '@dicebear/micah';
import Lottie from 'react-lottie';

// animations
import animationOptions from './utils/animations/animationOptions';
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
            <header className="header">
                <div className="container">
                    <Typewriter
                        options={{
                            strings: ['Hello', 'World'],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                    <div
                        className="avatar"
                        dangerouslySetInnerHTML={{ __html: svg }}
                    />
                    <button type="button">Test</button>
                </div>
            </header>
            <footer className="footer">
                <div>
                    <Lottie
                        options={animationOptions(Background07, true, true)}
                    />
                </div>
            </footer>
        </>
    );
}

export default App;
