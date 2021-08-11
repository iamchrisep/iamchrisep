export const animationOptions = (animationData: object, autoplay: boolean, loop: boolean) => {
    return {
        loop: loop,
        autoplay: autoplay,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
            progressiveLoad: true,
            clearCanvas: false
        }
    }
};