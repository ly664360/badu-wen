export type QuestionStatus = 'familiar' | 'unfamiliar' | 'unknown'

export type KnowledgeCategory = {
  id: string
  name: string
  order: number
  createdAt: number
}

export type Question = {
  id: string
  categoryId: string
  title: string
  answer: string
  status: QuestionStatus
  order: number
  createdAt: number
  updatedAt: number
}

export type LibraryState = {
  version: 1
  categories: KnowledgeCategory[]
  questions: Question[]
}
