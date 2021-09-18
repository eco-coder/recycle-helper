import Image from 'next/image'
import React from 'react'
import styles from '../styles/Question.module.sass'

const onClickButton = (e) => {
    
}

const onClickUpButton = (e) => {
    
}

const Question = ( props ) => {
    return (
        <div className={styles.container}>
            <button className={styles.upButton}>
                <Image 
                    src="/images/upArrow.png"
                    alt="home"
                    width={51}
                    height={29}
                />
            </button>
            <br/>
            <div>
                <span className={styles.question}>{props.question}</span>
                <img
                    className={styles.character}
                    src="/images/cat.png" 
                    alt="cat"
                    width={144}
                    height={144}    
                />
            </div>
            {/* 답변 개수 : 2, 3, 5, 6개 */}
            <div className={styles.answerContainer}>
                {
                    props.answers.map(
                        answer => (<button className={styles.answer} onclick={onClickButton}>{answer}</button>)
                    )
                }
            </div>
            <button className={styles.upButton} onClick={onClickUpButton}>
                <Image 
                    src="/images/downArrow.png"
                    alt="home"
                    width={51}
                    height={29}
                />
            </button>
        </div>
    )
}

export default Question
