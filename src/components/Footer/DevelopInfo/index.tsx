import React, { FunctionComponent } from 'react';
import {
    SiAdobeaftereffects,
    SiGithub,
    SiReact,
    SiSass,
    SiTypescript,
} from 'react-icons/si';
import { withNaming } from '@bem-react/classname';
import classNames from 'classnames';
import bemPreset from '../../../utils/bemPreset';

const DevelopInfo: FunctionComponent = () => {
    const cn = withNaming(bemPreset)('develop-info');
    const styleSheet = classNames(cn());

    return (
        <div className={styleSheet}>
            <div className={cn('title')}>
                <span>Built with</span>
                <div className={cn('heart-wrapper')}>
                    <svg className={cn('heart')} viewBox="0 0 32 29.6">
                        <path d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z" />
                    </svg>
                </div>
                <span>using</span>
            </div>
            <div className={cn('items')}>
                <div className={cn('item')}>
                    <SiReact className={cn('icon')} />
                    <div className={cn('text')}>
                        <span className={cn('text-title')}>React</span>
                        <span>Frontend</span>
                    </div>
                </div>
                <div className={cn('item')}>
                    <SiTypescript className={cn('icon')} />
                    <div className={cn('text')}>
                        <span className={cn('text-title')}>Typescript</span>
                        <span>Frontend</span>
                    </div>
                </div>
                <div className={cn('item')}>
                    <SiSass className={cn('icon')} />
                    <div className={cn('text')}>
                        <span className={cn('text-title')}>Sass (Scss)</span>
                        <span>Styles</span>
                    </div>
                </div>
                <div className={cn('item')}>
                    <SiAdobeaftereffects className={cn('icon')} />
                    <div className={cn('text')}>
                        <span className={cn('text-title')}>Lottie</span>
                        <span>Animations</span>
                    </div>
                </div>
                <div className={cn('item')}>
                    <SiGithub className={cn('icon')} />
                    <div className={cn('text')}>
                        <span className={cn('text-title')}>Github Pages</span>
                        <span>Hosting</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DevelopInfo;
