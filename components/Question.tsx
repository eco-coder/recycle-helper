import React, {useCallback} from 'react'

import Image from 'next/image'
import styles from '../styles/Question.module.sass'

interface Props {
    question: string // 어떤 물체인가요?
    answers: string[] // ["패트병", "유리병"]
    onSelect: (question:string) => void // 버튼 눌렀을때
    selectedIndex: number | null // 선택된 답변
    onUp: () => void // 위로가기 버튼 클릭
    onDown: () => void // 아래로가기 버튼 클릭
}

const tempSelect = () => {}

const tempUp = () => {}

const tempDown = () => {}

const onClickButton = useCallback(() => {

}, [])

const onClickUpButton = useCallback(() => {

}, [])

const Question:React.FC = ( props:any ) => {
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
                    props.answers.map((answer: any,index:number) =>
                        <button key={index} className={styles.answer} onClick={onClickButton}>{answer}</button>
                    )
                }
            </div>
            <button className={styles.upButton}>
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
