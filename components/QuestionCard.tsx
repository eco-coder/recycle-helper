import { Answer, Question } from '../constants/types'
import React, { useCallback } from 'react'

import Image from 'next/image'
import styles from '../styles/QuestionCard.module.sass'

interface QuestionCardProps {
    question: Question // 어떤 물체인가요?
    deps: number
    onSelect: (answer: Answer, deps: number) => void // 버튼 눌렀을때
    selectedAnswer: Answer | null // 선택된 답변
    onUp: () => void // 위로가기 버튼 클릭
    onDown: () => void // 아래로가기 버튼 클릭
}

const QuestionCard: React.FC<QuestionCardProps> = (props) => {

    const { onDown, onSelect: _onSelect, onUp, question, selectedAnswer, deps } = props

    const onSelect = useCallback((answer: Answer, deps: number) => {
        _onSelect(answer, deps)
        setTimeout(() => { onDown() }, 200) // UI 렌더링 이후에 down 호출
    }, [_onSelect, onDown])

    return (
        <div className={styles.container}>
            <button onClick={onUp} className={styles.upButton}>
                <Image
                    src="/images/upArrow.png"
                    alt="home"
                    width={51}
                    height={29}
                />
            </button>
            <div className={styles.questionContainer} >
                <div style={{ marginBottom: 60, textAlign: 'center' }} >
                    <div className={styles.question}>{props.question.name}</div>
                    <div className={styles.character}>
                        <Image
                            src="/images/cat.png"
                            alt="cat"
                            width={144}
                            height={144}
                        />
                    </div>
                </div>

                
                
                {/* 답변 개수 : 2, 3, 5, 6개 */}
                <div className={styles.answerContainer}>
                    {question.answers.map((answer, index) =>
                        <button
                            key={index}
                            className={selectedAnswer?.name === answer.name ? styles.answerSelected : styles.answer}
                            onClick={() => onSelect(answer, deps)}
                        >
                            {answer.name}
                        </button>
                    )}
                </div>
            </div>
            {selectedAnswer && <button onClick={onDown} className={styles.downButton}>
                <Image
                    src="/images/downArrow.png"
                    alt="home"
                    width={51}
                    height={29}
                />
            </button>}
            <div className={styles.copyright}>이미지 출처 : pngtree</div>
        </div>
    )
}

export default QuestionCard
