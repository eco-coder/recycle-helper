import smoothscroll from 'smoothscroll-polyfill';
import { useEffect } from "react";
import wheelHandlerF from "../handlers/wheelHander";

/* 
    wheelHandler 원페이지 스크롤 핸들러
    sections : section 원페이지 화면 영역 리스트
    setCount : set useState(count)
    사용할때 overflow hidden 후 사용
*/
export type useWheelTypes = {
    sections: HTMLSelectElement;
    setSections: Function;
    count: number;
    setCount: Function;
};


const useWheel = ({ sections, setSections, count, setCount }: useWheelTypes) => {

    return useEffect(() => {

        // kick off the polyfill!
        smoothscroll.polyfill();
        document.body.style.overflow = 'hidden';

        console.log(`useWheel count: ${count}`)
        let wheelHandler = wheelHandlerF(sections, count, setCount);

        setSections(document.getElementsByTagName('section'));
        if (sections) {
            window.addEventListener('wheel', wheelHandler, { passive: false });
            window.scrollTo({ top: sections[count].offsetTop, behavior: 'smooth' });
        }
        return () => {
            window.removeEventListener('wheel', wheelHandler);
            document.body.style.overflow = 'auto';
        }
    }, [sections, count]);

}
export default useWheel;