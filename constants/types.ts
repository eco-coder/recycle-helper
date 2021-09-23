export interface Question {
  name: string
  answers: Answer[]
}

export interface Answer {
  name: string
  question?: Question
  result?: string
}

export interface resultUITypes {
  selectedAnswers: Answer[],
  result: string, // 라벨이 씌어져 있는 페트병은 ....
  onUp: (e: any) => void,
  onDown: (e: any) => void,
  setCount?: Function, //수정중
  count?: number, //수정중
  sections?: HTMLSelectElement, //수정중
}