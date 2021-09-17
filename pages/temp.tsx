import Question from '../components/Question'
import React from 'react'
import styles from '../styles/Question.module.sass'

const tempSelect = () => {}

const tempUp = () => {}

const tempDown = () => {}

const temp = () => {
    return (
        <div className={styles.tempContainer}>
            <Question
                question="어떤 물체인가요?"
                answers={["종이", "플라스틱", "유리", "스티로폼"]}
                onSelect={tempSelect}
                selectedIndex
                onUp={tempUp}
                onDown={tempDown}
            />
            <Question
                question="어떤 종이인가요?"
                answers={["신문", "박스", "공책"]}
            />
            <Question
                question="물 외에 다른 것이 묻어있나요?"
                answers={["네", "아니오"]}
            />
        </div>
    )
}

export default temp
