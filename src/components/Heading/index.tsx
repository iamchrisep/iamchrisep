import React, { FunctionComponent } from 'react';
import { withNaming } from '@bem-react/classname';
import classNames from 'classnames';
import bemPreset from '../../utils/bemPreset';

interface IHeadingProps {
    type: 'h2' | 'h3' | 'h4'
    text: string
}

const Heading: FunctionComponent<IHeadingProps> = ({ type, text }) => {
    const cn = withNaming(bemPreset)('heading');
    const styleSheet = classNames(
        cn({
            type,
        }),
    );
    return (
        <>
            {type === 'h2' && (
                <h2 className={styleSheet}>
                    <span className={cn('first')}>
                        {text.charAt(0).toUpperCase()}
                    </span>
                    <span className={cn('last')}>
                        {text.slice(1).toLowerCase()}
                    </span>
                </h2>
            )}
            {type === 'h3' && <h3 className={styleSheet}>{text}</h3>}
            {type === 'h4' && <h4 className={styleSheet}>{text}</h4>}
        </>
    );
};

export default Heading;
