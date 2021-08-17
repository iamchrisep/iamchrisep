import React, { FunctionComponent } from 'react';
import { withNaming } from '@bem-react/classname';
import classNames from 'classnames';
import { useHistory } from 'react-router-dom';
import { InView } from 'react-intersection-observer';
import bemPreset from '../../../utils/bemPreset';
import Heading from '../../Heading';

const Work: FunctionComponent = () => {
    const cn = withNaming(bemPreset)('work');
    const styleSheet = classNames(cn());

    const history = useHistory();

    return (
        <InView
            as="article"
            className={styleSheet}
            id="work"
            threshold={0.25}
            rootMargin="0px"
            onChange={(inView) => {
                if (inView) history.push('/#work');
            }}
        >
            <section className={cn('container container')}>
                <Heading type="h2" text="Work" />
                <ul className={cn('items')}>
                    <li className={cn('item')}>
                        <Heading type="h3" text="Frontend Developer" />
                        <Heading type="h4" text="LoveAMB LTD" />
                        <div className={cn('info')}>
                            <span className={cn('dates')}>
                                Dec 2016 - Aug 2021
                            </span>
                            <span className={cn('duration')}>
                                4 yrs 9 mos, Full-time
                            </span>
                            <span className={cn('location')}>
                                Gdynia, Poland
                            </span>
                            <span className={cn('remark')}>
                                (Remote work, home office)
                            </span>
                        </div>
                        <ul className={cn('list')}>
                            <li className={cn('list-item')}>
                                Development and support of web applications
                                using technologies such as
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
                                ,
                                {' '}
                                <span className="bold-border">Web Sockets</span>
                                {' '}
                                (Socket.io),
                                {' '}
                                <span className="bold-border">Jest</span>
                                ,
                                {' '}
                                <span className="bold-border">Storybook</span>
                                .
                            </li>
                            <li className={cn('list-item')}>
                                Support of applications developed in Symfony
                                using the Twig templating engine.
                            </li>
                            <li className={cn('list-item')}>
                                Participation in all stages of the web
                                application development cycle.
                            </li>
                            <li className={cn('list-item')}>
                                Recruiting and training junior specialists,
                                project management and communication with
                                clients.
                            </li>
                            <li className={cn('list-item')}>
                                Remote work with the team using the
                                {' '}
                                <span className="bold-border">Scrum</span>
                                {' '}
                                methodology.
                            </li>
                        </ul>
                    </li>

                    <li className={cn('item')}>
                        <Heading type="h3" text="Software Engineer" />
                        <Heading
                            type="h4"
                            text="Golden Software of Belarus, Ltd"
                        />
                        <div className={cn('info')}>
                            <span className={cn('dates')}>
                                Sep 2015 - Nov 2016
                            </span>
                            <span className={cn('duration')}>
                                1 yr 3 mos, Full-time
                            </span>
                            <span className={cn('location')}>
                                Minsk, Belarus
                            </span>
                        </div>
                        <ul className={cn('list')}>
                            <li className={cn('list-item')}>
                                Development and support of economics and
                                financial applications (Gedemin Platform) using
                                Delphi and Firebird, united a relational
                                database system, post-relational object-oriented
                                technologies of data processing and the language
                                of logical programming Prolog.
                            </li>
                        </ul>
                    </li>
                </ul>
            </section>
        </InView>
    );
};

export default Work;
