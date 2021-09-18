const wheelHandlerF = (sections: any, count: number, setcount: any) => {

    const wheelHandler = async (e: any) => {

        if (e.wheelDelta < 0 && count < sections.length - 1 && e.deltaY > 30) {

            let number: number = await new Promise(function (resolve, reject) {
                setTimeout(() => {
                    resolve(count + 1)
                }, 380);
            })
            await setcount(number);
        } else if (e.wheelDelta > 0 && count > 0 && e.deltaY < -30) {
            let number: number = await new Promise(function (resolve, reject) {
                setTimeout(() => {
                    resolve(count - 1)
                }, 380);
            })
            await setcount(number);
        }
    }
    return wheelHandler
}
export default wheelHandlerF;
