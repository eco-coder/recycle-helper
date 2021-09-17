const wheelHandlerF = (sections: any, count: number, setcount: any, moveRef: any) => {
    const wheelHandler = async (e: any) => {


        if (e.wheelDelta < 0 && count < sections.length - 1) {
            let number: number = await new Promise(function (resolve, reject) {
                setTimeout(() => {
                    resolve(count + 1)
                }, 400);
            })
            await setcount(number);
        } else if (e.wheelDelta > 0 && count > 0) {
            let number: number = await new Promise(function (resolve, reject) {
                setTimeout(() => {
                    resolve(count - 1)
                }, 400);
            })
            await setcount(number);
        }
    }
    return wheelHandler
}
export default wheelHandlerF;
