'use client'
import Lottie from 'react-lottie';
import * as animationData from '@/app/lottie/404.json';

export default function Page404() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };
    return (
        <Lottie
            isClickToPauseDisabled={true}
            options={defaultOptions}
            height="auto"
            width="auto"
        />
    );
}
