import React, { FunctionComponent } from 'react';
import { withNaming } from '@bem-react/classname';
import classNames from 'classnames';
import { useHistory } from 'react-router-dom';
import { InView } from 'react-intersection-observer';
import bemPreset from '../../../utils/bemPreset';
import Heading from '../../Heading';

const Education: FunctionComponent = () => {
    const cn = withNaming(bemPreset)('education');
    const styleSheet = classNames(cn());

    const history = useHistory();

    return (
        <InView
            as="article"
            className={styleSheet}
            id="education"
            threshold={0.5}
            rootMargin="0px"
            onChange={(inView) => {
                if (inView) history.push('/#education');
            }}
        >
            <section className={cn('container container')}>
                <Heading type="h2" text="Education" />
                <ul className={cn('items')}>
                    <li className={cn('item')}>
                        <Heading
                            type="h3"
                            text="Belarusian State University of Informatics and Radioelectronics"
                        />
                        <Heading
                            type="h4"
                            text="Institute of Information Technologies"
                        />
                        <div className={cn('info')}>
                            <span className={cn('dates')}>2015 - 2019</span>
                            <span className={cn('location')}>
                                Minsk, Belarus
                            </span>
                        </div>
                        <div className={cn('description')}>
                            <span className={cn('description-item')}>
                                <span className={cn('description-title')}>
                                    Speciality:
                                </span>
                                {' '}
                                Information Technology Software
                            </span>
                            <span className={cn('description-item')}>
                                <span className={cn('description-title')}>
                                    Qualification:
                                </span>
                                {' '}
                                Software Engineer
                            </span>
                        </div>
                    </li>

                    <li className={cn('item')}>
                        <Heading
                            type="h3"
                            text="Minsk State Higher Radiotechnical College"
                        />
                        <div className={cn('info')}>
                            <span className={cn('dates')}>2010 - 2014</span>
                            <span className={cn('location')}>
                                Minsk, Belarus
                            </span>
                        </div>
                        <div className={cn('description')}>
                            <span className={cn('description-item')}>
                                <span className={cn('description-title')}>
                                    Speciality:
                                </span>
                                {' '}
                                Information Technology Software
                            </span>
                            <span className={cn('description-item')}>
                                <span className={cn('description-title')}>
                                    Qualification:
                                </span>
                                {' '}
                                Technician-programmer
                            </span>
                        </div>
                    </li>
                </ul>
            </section>
        </InView>
    );
};

export default Education;
