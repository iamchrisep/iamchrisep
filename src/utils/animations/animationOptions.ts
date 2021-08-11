const animationOptions = (
    animationData: object,
    autoplay: boolean,
    loop: boolean,
) => ({
    loop,
    autoplay,
    animationData,
    rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice',
        progressiveLoad: true,
        clearCanvas: false,
    },
});

export default animationOptions;
