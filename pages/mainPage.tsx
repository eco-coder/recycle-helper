import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";

import style from "../styles/mainPage.module.sass";
import wheelHandlerF from "../handlers/wheelHander";

// import wheelHandlerF from "../handlers/wheelHander";

const MainPage = () => {
    const scrollRef = useRef<any>(null);
    const imageRef = useRef<any>(null);
    let bodyStyle: HTMLElement;
    const [count, setcount] = useState(0);
    const [sections, setsections] = useState<any>(null)


    useEffect(() => {
        bodyStyle = document.getElementsByTagName('body')[0]
        bodyStyle.style.overflow = 'hidden';
        setsections(scrollRef.current?.getElementsByTagName('section'))

        /* 
        wheelHandler 원페이지 스크롤 핸들러
        sections : section 원페이지 화면 영역 리스트
        setcount : set useState(count)
        사용할때 overflow hidden 후 사용
        */

        let wheelHandler = wheelHandlerF(sections, count, setcount, imageRef);

        if (sections != undefined) {
            if (count > 0) {
                imageRef.current.style.top = "180%"
                imageRef.current.style.opacity = 0
            } else {
                imageRef.current.style.opacity = 1
                imageRef.current.style.top = "78%"

            }
            window.scrollTo({ top: sections[count].offsetTop, behavior: "smooth" })
            window.addEventListener('wheel', wheelHandler);
        }
        return () => {
            window.removeEventListener('wheel', wheelHandler);
            bodyStyle.style.overflow = 'auto';
        }
    }, [sections, count])


    const clickDownEvent = useCallback(
        (e) => {
            console.log(count);
            if (count < sections.length - 1) {
                setcount(count + 1);
            } else {
                setcount(0);
            }
            console.log(count);
            window.scrollTo({ top: sections[count].offsetTop, behavior: "smooth" });
        },
        [count, sections])
    return (
        <div className={style.container} ref={scrollRef}>
            <section>
                <div >
                    <div style={{ position: 'relative', width: '100%', height: '70vh', top: '50%' }}>
                        <img src="https://picsum.photos/500/300" ref={imageRef} style={{
                            position: 'absolute',
                            zIndex: 2000,
                            top: '73%',
                            left: '50%',
                            width: '30%',
                            transform: ' translate(-50%, -50%)',
                            transition: 'all 0.2s linear'
                        }} />
                        <svg style={{
                            position: 'absolute',
                            width: '102vh',
                            top: '51%',
                            left: '50%',
                            transform: ' translate(-50%, -50%)'
                        }} width="802" height="531" viewBox="0 0 802 531" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M200.329 15.5147C96.0448 -50.8089 0 116.976 0 116.976C107.986 244.757 120.631 318.088 44.9268 452.354C131.437 520.452 176.987 534.855 254.462 530.202C370.842 434.529 425.005 411.014 506.715 409.555C650.197 416.347 688.064 441.246 742.397 492.2C799.655 468.065 818.15 449.246 786.956 390.739C753.297 295.462 722.004 252.593 638.55 199.622C625.438 229.849 616.153 242.373 586.626 235.041C522.055 194.555 506.705 172.59 546.855 135.793C446.797 127.93 370.801 101.452 200.329 15.5147Z" fill="#92C835" />
                            <path d="M200.329 15.5147C96.0448 -50.8089 0 116.976 0 116.976C107.986 244.757 120.631 318.088 44.9268 452.354C131.437 520.452 176.987 534.855 254.462 530.202C370.842 434.529 425.005 411.014 506.715 409.555C650.197 416.347 688.064 441.246 742.397 492.2C799.655 468.065 818.15 449.246 786.956 390.739C753.297 295.462 722.004 252.593 638.55 199.622C625.438 229.849 616.153 242.373 586.626 235.041C522.055 194.555 506.705 172.59 546.855 135.793C446.797 127.93 370.801 101.452 200.329 15.5147Z" fill="#92C835" />
                        </svg>
                        <svg style={{
                            position: 'absolute',
                            top: '59%',
                            left: '50%',
                            width: '78vh',
                            transform: ' translate(-50%, -50%)'
                        }} width="666" height="487" viewBox="0 0 666 487" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M166.358 14.2291C79.7579 -46.5987 0 107.283 0 107.283C89.6741 224.476 100.175 291.73 37.3083 414.87C109.148 477.326 146.974 490.536 211.312 486.268C307.956 398.523 352.934 376.957 420.789 375.618C539.939 381.847 571.385 404.684 616.504 451.415C664.053 429.28 679.411 412.02 653.507 358.361C625.556 270.979 599.57 231.663 530.267 183.08C519.379 210.803 511.669 222.289 487.148 215.565C433.527 178.434 420.78 158.289 454.121 124.541C371.031 117.33 307.922 93.0455 166.358 14.2291Z" fill="#AECE77" fillOpacity="0.73" />
                            <path d="M166.358 14.2291C79.7579 -46.5987 0 107.283 0 107.283C89.6741 224.476 100.175 291.73 37.3083 414.87C109.148 477.326 146.974 490.536 211.312 486.268C307.956 398.523 352.934 376.957 420.789 375.618C539.939 381.847 571.385 404.684 616.504 451.415C664.053 429.28 679.411 412.02 653.507 358.361C625.556 270.979 599.57 231.663 530.267 183.08C519.379 210.803 511.669 222.289 487.148 215.565C433.527 178.434 420.78 158.289 454.121 124.541C371.031 117.33 307.922 93.0455 166.358 14.2291Z" fill="#AECE77" fillOpacity="0.73" />
                        </svg>
                    </div>
                    <h1 style={{ textAlign: "center" }}>sefsefsefes</h1>
                    <button onClick={clickDownEvent}>down</button>
                </div>
            </section >
            <section>
                fdsfoisfeoisefoijsefiojseoifjsoiefj
                <button onClick={clickDownEvent}>down</button>
            </section>
            <section>
                fdsfoisfeoisefoijsefiojseoifjsoiefj
                <button onClick={clickDownEvent}>down</button>
            </section>
            <section>
                fdsfoisfeoisefoijsefiojseoifjsoiefj
                <button onClick={clickDownEvent}>down</button>
            </section>
        </div >
    )
}

export default MainPage;