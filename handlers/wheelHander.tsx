const wheelHandlerF = (sections: any) => {
    let count = 0;
    const secLength = sections.length
    const wheelHandler = (e: any) => {
        if (e.wheelDelta < 0 && count < secLength - 1) {
            count++
            window.removeEventListener('wheel', wheelHandler);
            window.scrollTo({ top: sections[count].offsetTop, behavior: "smooth" })
            setTimeout(() => {
                window.addEventListener('wheel', wheelHandler);
            }, 400);
        } else if (e.wheelDelta > 0 && count > 0) {
            count--
            window.removeEventListener('wheel', wheelHandler);
            window.scrollTo({ top: sections[count].offsetTop, behavior: "smooth" })
            setTimeout(() => {
                window.addEventListener('wheel', wheelHandler);
            }, 400);
        }
    }
    return wheelHandler;
}
export default wheelHandlerF;
