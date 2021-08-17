import React, { FunctionComponent } from 'react';
import { withNaming } from '@bem-react/classname';
import classNames from 'classnames';
import { useHistory } from 'react-router-dom';
import { InView } from 'react-intersection-observer';
import { GoLocation, GoMail } from 'react-icons/go';
import {
    SiBehance,
    SiFacebook,
    SiInstagram,
    SiLinkedin,
    SiTwitch,
    SiTwitter,
} from 'react-icons/si';
import bemPreset from '../../../utils/bemPreset';
import Heading from '../../Heading';

const Contact: FunctionComponent = () => {
    const cn = withNaming(bemPreset)('contact');
    const styleSheet = classNames(cn());

    const history = useHistory();

    return (
        <InView
            as="article"
            className={styleSheet}
            id="contact"
            threshold={0.5}
            rootMargin="0px"
            onChange={(inView) => {
                if (inView) history.push('/#contact');
            }}
        >
            <section className={cn('container container')}>
                <div className={cn('wrapper')}>
                    <Heading type="h2" text="Contact" />
                    <div className={cn('items')}>
                        <div className={cn('item')}>
                            <GoLocation className={cn('icon')} />
                            <span>Gdynia, Poland</span>
                        </div>
                        <div className={cn('item')}>
                            <GoMail className={cn('icon')} />
                            <a
                                className={cn('link')}
                                href="mailto:krystsina.bahdanava@gmail.com"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Email
                            </a>
                        </div>
                        <div className={cn('item')}>
                            <SiLinkedin className={cn('icon')} />
                            <a
                                className={cn('link')}
                                href="https://www.linkedin.com/in/krystsina-bahdanava/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                LinkedIn
                            </a>
                        </div>
                    </div>
                </div>
                <div className={cn('wrapper')}>
                    <Heading type="h3" text="Social" />
                    <div className={cn('items')}>
                        <div className={cn('item')}>
                            <SiFacebook className={cn('icon')} />
                            <a
                                className={cn('link')}
                                href="https://www.facebook.com/ada7darska"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Facebook
                            </a>
                        </div>
                        <div className={cn('item')}>
                            <SiInstagram className={cn('icon')} />
                            <a
                                className={cn('link')}
                                href="https://www.instagram.com/adadarska/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Instagram
                            </a>
                        </div>
                        <div className={cn('item')}>
                            <SiTwitter className={cn('icon')} />
                            <a
                                className={cn('link')}
                                href="https://twitter.com/iamchrisep"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Twitter
                            </a>
                        </div>
                    </div>
                    <div className={cn('items')}>
                        <div className={cn('item')}>
                            <SiBehance className={cn('icon')} />
                            <a
                                className={cn('link')}
                                href="https://www.behance.net/iamchrisep"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Behance
                            </a>
                        </div>
                        <div className={cn('item')}>
                            <SiTwitch className={cn('icon')} />
                            <a
                                className={cn('link')}
                                href="https://www.twitch.tv/adadarska"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Twitch
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </InView>
    );
};

export default Contact;
