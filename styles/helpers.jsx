export const getAdaptiveSize = (smallSize, bigSize, vieport) => {
    const defaultVie = 1920;
    return `calc( ${ smallSize }px + (${ bigSize } - ${ smallSize }) * ((100vw - ${ vieport ? `${vieport}px` : "320px"}) / (${ vieport ? vieport : defaultVie } - 320)))`
}