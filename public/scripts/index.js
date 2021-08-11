const animation = bodymovin.loadAnimation({
    container: document.getElementById('bm'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'scripts/404.json',
});

const animationBack = bodymovin.loadAnimation({
    container: document.getElementById('back'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'scripts/back.json',
});
