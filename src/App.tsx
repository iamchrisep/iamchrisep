import './App.css';
import Typewriter from 'typewriter-effect';
import { createAvatar } from '@dicebear/avatars';
import * as style from '@dicebear/micah';

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
        <div className="App">
            <header className="App-header">
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
            </header>
        </div>
    );
}

export default App;
