export interface Question {
  name: string
  answers: Answer[]
}

export interface Answer {
  name: string
  question?: Question
  result?: Result
}

export interface Result {
  name: string
  content: string
  image: string
}