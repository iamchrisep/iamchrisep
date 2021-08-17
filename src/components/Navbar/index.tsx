import React, { FunctionComponent, useState } from 'react';
import { Squash as Hamburger } from 'hamburger-react';
import { NavHashLink } from 'react-router-hash-link';
import { withNaming } from '@bem-react/classname';
import classNames from 'classnames';
import {
    GoBriefcase,
    GoInfo,
    GoMail,
    GoMortarBoard,
    GoPerson,
    GoProject,
} from 'react-icons/go';
import bemPreset from '../../utils/bemPreset';

const Navbar: FunctionComponent = () => {
    const cn = withNaming(bemPreset)('navbar');
    const [open, setOpen] = useState(false);
    const styleSheet = classNames(
        cn({
            open,
        }),
    );

    return (
        <nav className={styleSheet}>
            <div className={cn('wrapper')}>
                <NavHashLink
                    className={cn('link')}
                    activeClassName={cn('link-active')}
                    scroll={(el) => el.scrollIntoView({ behavior: 'smooth' })}
                    to="/#summary"
                    onClick={() => setOpen(false)}
                >
                    <GoPerson className={cn('icon')} />
                    <span className={cn('text')}>Summary</span>
                </NavHashLink>
                <NavHashLink
                    className={cn('link')}
                    activeClassName={cn('link-active')}
                    scroll={(el) => el.scrollIntoView({ behavior: 'smooth' })}
                    to="/#contact"
                    onClick={() => setOpen(false)}
                >
                    <GoMail className={cn('icon')} />
                    <span className={cn('text')}>Contact</span>
                </NavHashLink>
                <NavHashLink
                    className={cn('link')}
                    activeClassName={cn('link-active')}
                    scroll={(el) => el.scrollIntoView({ behavior: 'smooth' })}
                    to="/#brief"
                    onClick={() => setOpen(false)}
                >
                    <GoInfo className={cn('icon')} />
                    <span className={cn('text')}>Brief</span>
                </NavHashLink>
                <NavHashLink
                    className={cn('link')}
                    activeClassName={cn('link-active')}
                    scroll={(el) => el.scrollIntoView({ behavior: 'smooth' })}
                    to="/#work"
                    onClick={() => setOpen(false)}
                >
                    <GoBriefcase className={cn('icon')} />
                    <span className={cn('text')}>Work</span>
                </NavHashLink>
                <NavHashLink
                    className={cn('link')}
                    activeClassName={cn('link-active')}
                    scroll={(el) => el.scrollIntoView({ behavior: 'smooth' })}
                    to="/#education"
                    onClick={() => setOpen(false)}
                >
                    <GoMortarBoard className={cn('icon')} />
                    <span className={cn('text')}>Education</span>
                </NavHashLink>
                <NavHashLink
                    className={cn('link')}
                    activeClassName={cn('link-active')}
                    scroll={(el) => el.scrollIntoView({ behavior: 'smooth' })}
                    to="/#portfolio"
                    onClick={() => setOpen(false)}
                >
                    <GoProject className={cn('icon')} />
                    <span className={cn('text')}>Portfolio</span>
                </NavHashLink>
            </div>
            <div className={cn('button-wrapper')}>
                <button type="button" className={cn('button button')}>
                    <Hamburger toggled={open} toggle={setOpen} />
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
