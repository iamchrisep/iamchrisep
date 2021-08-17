import React, { FunctionComponent } from 'react';
import { withNaming } from '@bem-react/classname';
import classNames from 'classnames';
import { useHistory } from 'react-router-dom';
import { InView } from 'react-intersection-observer';
import bemPreset from '../../../utils/bemPreset';
import Heading from '../../Heading';

const Portfolio: FunctionComponent = () => {
    const cn = withNaming(bemPreset)('portfolio');
    const styleSheet = classNames(cn());

    const history = useHistory();

    return (
        <InView
            as="article"
            className={styleSheet}
            id="portfolio"
            threshold={0.5}
            rootMargin="0px"
            onChange={(inView) => {
                if (inView) history.push('/#portfolio');
            }}
        >
            <section className={cn('container container')}>
                <Heading type="h2" text="Portfolio" />
                <p>Coming soon...</p>
            </section>
        </InView>
    );
};

export default Portfolio;
