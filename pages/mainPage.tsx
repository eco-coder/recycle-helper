import React, { useEffect, useRef, useState } from "react";

import style from "../styles/mainPage.module.sass";
import wheelHandlerF from "../handlers/wheelHander";

const MainPage = () => {
    const scrollRef = useRef<any>(null);
    let bodyStyle: HTMLElement;



    useEffect(() => {
        bodyStyle = document.getElementsByTagName('body')[0]
        bodyStyle.style.overflow = 'hidden';
        const sections = scrollRef.current.getElementsByTagName('section');

        /* 
            wheelHandler 원페이지 스크롤 핸들러
            sections : section 원페이지 화면 영역 리스트
            사용할때 overflow hidden 후 사용
        */
        const wheelHandler = wheelHandlerF(sections);

        window.addEventListener('wheel', wheelHandler);
        return () => {
            window.removeEventListener('wheel', wheelHandler);
            bodyStyle.style.overflow = 'auto';
        }
    }, [scrollRef])

    return (
        <div className={style.container} ref={scrollRef}>
            <section>
                fdsfoisfeoisefoijsefiojseoifjsoiefj
            </section>
            <section>
                fdsfoisfeoisefoijsefiojseoifjsoiefj
            </section>
            <section>
                fdsfoisfeoisefoijsefiojseoifjsoiefj
            </section>
            <section>
                fdsfoisfeoisefoijsefiojseoifjsoiefj
            </section>
        </div>
    )
}

export default MainPage;