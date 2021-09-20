import React, { useCallback } from "react";

import Image from 'next/image'
import sampleImg from '../public/images/man-4603859_1920.png'
import styles from "../styles/mainPage.module.sass";

export interface resultUITypes {
    setCount: Function,
    count: number,
    sections: HTMLSelectElement,
    clickUpEvent: any,
    clickDownEvent: any,
}

const Result = (data: resultUITypes) => {
    const { setCount, count, sections, clickUpEvent, clickDownEvent } = data;
    return (
        <>
            <span className={styles.arrow_button} onClick={clickUpEvent} />
            <div className={styles.container_result}>
                <div className={styles.image_result}>
                    {/* 238px 모바일 부분 */}
                    <Image src={sampleImg} alt="sample" layout="fill" />
                </div>
                <div className={styles.context_result}>
                    <h1>
                        유리 > 음식물 안묻음 > 유리병
                    </h1>
                    <div>
                        라벨이 씌워져 있는 패트병은
                        라벨 껍질을 버낀 후 씻어서 버려주셔야 됩니다!!
                    </div>
                </div>
            </div>
            <span className={styles.arrow_button} onClick={clickDownEvent} />
        </>
    )
}

export default Result;