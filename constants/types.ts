export interface Question {
  name: string
  answers: Answer[]
}

export interface Answer {
  name: string
  question?: Question
  result?: string
}