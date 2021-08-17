import React, { FunctionComponent } from 'react';
import { withNaming } from '@bem-react/classname';
import classNames from 'classnames';
import { useHistory } from 'react-router-dom';
import { InView } from 'react-intersection-observer';
import Typewriter from 'typewriter-effect';
import { createAvatar } from '@dicebear/avatars';
import * as style from '@dicebear/micah';
import bemPreset from '../../utils/bemPreset';
import Heading from '../Heading';

const Header: FunctionComponent = () => {
    const cn = withNaming(bemPreset)('header');
    const styleSheet = classNames(cn());

    const history = useHistory();

    const svg = createAvatar(style, {
        seed: 'seed',
        width: 196,
        height: 196,
        radius: 0,
        earrings: ['stud'],
        earringColor: ['black'],
        earringsProbability: 100,
        eyebrows: ['up'],
        eyebrowColor: ['#504444'],
        eyes: ['smiling'],
        mouth: ['smile'],
        nose: ['curve'],
        shirt: ['open'],
        shirtColor: ['black'],
        hair: ['full'],
        hairColor: ['#504444'],
    });

    return (
        <InView
            as="header"
            className={styleSheet}
            id="summary"
            threshold={0.25}
            rootMargin="0px"
            onChange={(inView) => {
                if (inView) history.push('/#summary');
            }}
        >
            <div className={cn('container container')}>
                <div className={cn('avatar-wrapper')}>
                    <div className="speech-bubble">
                        <Typewriter
                            options={{
                                strings: [
                                    'Hello!',
                                    'My name is Krystsina :)',
                                    'I am a frontend developer ♥',
                                ],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </div>
                    <div
                        className={cn('avatar')}
                        dangerouslySetInnerHTML={{ __html: svg }}
                    />
                    <a
                        className={cn('avatar-button button')}
                        href="/CV.pdf"
                        download="CV_Krystsina_Bahdanava.pdf"
                    >
                        Download CV
                    </a>
                </div>
                <div className={cn('summary-wrapper')}>
                    <Heading type="h2" text="Summary" />
                    <p className={cn('summary-text')}>
                        I am a graduate of the
                        {' '}
                        <span className="medium-border">
                            Belarusian State University of Informatics and
                            Radioelectronics
                        </span>
                        {' '}
                        with a
                        {' '}
                        <span className="medium-border">
                            degree in Information Technology Software
                        </span>
                        . I have
                        {' '}
                        <span className="bold-border">4+ years</span>
                        {' '}
                        of experience in web development, mainly in the
                        {' '}
                        <span className="medium-border">frontend</span>
                        .
                        Participated in all stages of the web application
                        development cycle. I have been involved in
                        {' '}
                        <span className="medium-border">
                            recruiting and training junior specialists
                        </span>
                        ,
                        {' '}
                        <span className="medium-border">
                            project management
                        </span>
                        {' '}
                        and
                        {' '}
                        <span className="medium-border">
                            communication with clients
                        </span>
                        . The main technology stack I use is
                        {' '}
                        <span className="bold-border">React</span>
                        ,
                        {' '}
                        <span className="bold-border">React Redux</span>
                        ,
                        {' '}
                        <span className="bold-border">Redux Saga</span>
                        ,
                        {' '}
                        <span className="bold-border">TypeScript</span>
                        . I am
                        able to make requests to various web APIs like
                        {' '}
                        <span className="medium-border">REST</span>
                        {' '}
                        and
                        {' '}
                        <span className="medium-border">GraphQL</span>
                        . In
                        addition, I have experience with Twig (Symfony). Wrote
                        tests using&nbsp;
                        <span className="medium-border">Jest</span>
                        ,
                        {' '}
                        <span className="medium-border">Storybook</span>
                        {' '}
                        documentation. For work I used Ubuntu,
                        {' '}
                        <span className="medium-border">Git</span>
                        {' '}
                        (GitHub,
                        Bitbucket and GitLab), Jira (and other Atlassian
                        products), WebStorm (and other JetBrains products). In
                        working with the team, we adhered to the
                        {' '}
                        <span className="medium-border">Scrum</span>
                        {' '}
                        methodology. I also have experience not only in web
                        development, so I am familiar with other technologies,
                        for example, I can read and write SQL queries.
                    </p>
                </div>
            </div>
        </InView>
    );
};

export default Header;
