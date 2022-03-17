/* eslint-disable @next/next/no-img-element */
import { Answer, Result } from "../constants/types";
import React, { useCallback } from "react";

import styles from "../styles/ResultCard.module.sass";

interface ResultCardProps {
    result: Result
    onUp: () => void
    onInit: () => void
}

const ResultCard: React.FC<ResultCardProps> = (props) => {

    const { onUp, onInit, result } = props

    return (
        <>
            <div className={styles.container__result}>
                <span className={styles.arrow_button} onClick={onUp} />
                <div className={styles.container_result}>
                    <div className={styles.image_result}>
                        {/* 238px 모바일 부분 */}
                        <img
                            src={`images/result/${result.image}.png`}
                            alt={result.name}
                            width="100%"
                            height="100%"
                            // objectFit='contain'
                        />
                    </div>
                    <div className={styles.context_result}>
                        <h1>{result.name}</h1>
                        <div>{result.content}</div>
                    </div>
                </div>
                <span className={styles.fonts__button} onClick={onInit} >다시하기</span>
            </div>
        </>
    )
}

export default ResultCard