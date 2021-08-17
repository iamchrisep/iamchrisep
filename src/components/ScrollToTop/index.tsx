import React, { FunctionComponent } from 'react';
import { useHistory } from 'react-router-dom';
import Lottie from 'react-lottie';
import animationOptions from '../../utils/animations/animationOptions';
import ScrollTop from '../../utils/animations/animationJson/scroll-top.json';

const ScrollToTop: FunctionComponent = () => {
    const [showScroll, setShowScroll] = React.useState(false);
    const checkScrollTop = () => {
        if (!showScroll && window.pageYOffset > 500) {
            setShowScroll(true);
        } else if (showScroll && window.pageYOffset <= 500) {
            setShowScroll(false);
        }
    };

    const history = useHistory();
    const scrollToTop = () => {
        history.push('/');
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    window.addEventListener('scroll', checkScrollTop);

    return (
        <button
            type="button"
            onClick={scrollToTop}
            className="scrollToTop"
            style={{ display: showScroll ? 'flex' : 'none' }}
        >
            <Lottie
                isClickToPauseDisabled
                options={animationOptions(ScrollTop, true, true)}
            />
        </button>
    );
};

export default ScrollToTop;
