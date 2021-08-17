import React, { FunctionComponent } from 'react';
import { withNaming } from '@bem-react/classname';
import classNames from 'classnames';
import { useHistory } from 'react-router-dom';
import { InView } from 'react-intersection-observer';
import bemPreset from '../../../utils/bemPreset';
import Heading from '../../Heading';

const Brief: FunctionComponent = () => {
    const cn = withNaming(bemPreset)('brief');
    const styleSheet = classNames(cn());

    const history = useHistory();

    return (
        <InView
            as="article"
            className={styleSheet}
            id="brief"
            threshold={0.5}
            rootMargin="0px"
            onChange={(inView) => {
                if (inView) history.push('/#brief');
            }}
        >
            <section className={cn('container container')}>
                <Heading type="h2" text="Brief" />
                <div className={cn('items')}>
                    <div className={cn('item')}>
                        <Heading type="h3" text="Languages" />
                        <span>Polish - B1</span>
                        <span>English - A2</span>
                        <span>Russian - C2 (native)</span>
                    </div>
                    <div className={cn('item')}>
                        <Heading type="h3" text="Skills" />
                        <span>React</span>
                        <span>React Redux</span>
                        <span>Redux Saga</span>
                        <span>JavaScript</span>
                        <span>TypeScript</span>
                        <span>HTML5</span>
                        <span>CSS3</span>
                        <span>SASS (SCSS)</span>
                        <span>Git</span>
                    </div>
                    <div className={cn('item')}>
                        <Heading type="h3" text="Hobbies & Interests" />
                        <span>
                            I like computer games. I also enjoy reading fiction,
                            especially fantasy. Listen to music a lot.
                            Occasionally I draw. I interested in Web (UI/UX)
                            design. Beginner Twitch streamer (gaming, of
                            course).
                        </span>
                    </div>
                </div>
            </section>
        </InView>
    );
};

export default Brief;
