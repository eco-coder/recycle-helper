import { Answer, resultUITypes } from "../constants/types";
import React, { useCallback } from "react";

import Image from 'next/image'
import sampleImg from '../public/images/man-4603859_1920.png'
import styles from "../styles/mainPage.module.sass";

const Result = (data: resultUITypes) => {
    const { onUp, onDown, result } = data;
    return (
        <>
            <span className={styles.arrow_button} onClick={onUp} />
            <div className={styles.container_result}>
                <div className={styles.image_result}>
                    {/* 238px 모바일 부분 */}
                    <Image src={sampleImg} alt="sample" layout="fill" />
                </div>
                <div className={styles.context_result}>
                    <h1>
                        {result}
                    </h1>
                    <div>
                        라벨이 씌워져 있는 패트병은
                        라벨 껍질을 버낀 후 씻어서 버려주셔야 됩니다!!
                    </div>
                </div>
            </div>
            <span className={styles.arrow_button} onClick={onDown} />
        </>
    )
}

export default Result;