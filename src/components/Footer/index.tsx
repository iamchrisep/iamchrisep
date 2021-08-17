import React, { FunctionComponent } from 'react';
import { withNaming } from '@bem-react/classname';
import classNames from 'classnames';
import bemPreset from '../../utils/bemPreset';
import DevelopInfo from './DevelopInfo';

const Footer: FunctionComponent = () => {
    const cn = withNaming(bemPreset)('footer');
    const styleSheet = classNames(cn());

    return (
        <footer className={styleSheet}>
            <div className={cn('container container')}>
                <div className={cn('info-wrapper')}>
                    <span>Designed and developed by me</span>
                    {' '}
                    <button type="button" className={cn('info-button button')}>
                        info
                    </button>
                    <DevelopInfo />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
