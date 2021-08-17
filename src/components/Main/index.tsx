import React, { FunctionComponent } from 'react';
import { withNaming } from '@bem-react/classname';
import classNames from 'classnames';
import bemPreset from '../../utils/bemPreset';
import Contact from './Contact';
import Brief from './Brief';
import Work from './Work';
import Education from './Education';
import Portfolio from './Portfolio';

const Main: FunctionComponent = () => {
    const cn = withNaming(bemPreset)('main');
    const styleSheet = classNames(cn());

    return (
        <main className={styleSheet}>
            <Contact />
            <Brief />
            <Work />
            <Education />
            <Portfolio />
        </main>
    );
};

export default Main;
