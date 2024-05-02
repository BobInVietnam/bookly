export type Book = {
  cover_image: string
  title: string
  author: string
  description: string
  last_update: string
  genres: Array<number>
  chapters: Array<number>
  reviews: Array<number>
}

export type User = {
  user_id: string,
  password: string,
  profile_image: string,
}

export type Genre = {
  genre_id: number
  name: string
}

export type Chapter = {
  chapter_id: number
  title: string
  content: string
}

export type Review = {
  review_id: number
  score: number
  content: string
}

export function Book() {
  return {
    cover_image: "",
    title: "",
    author: "",
    description: "",
    last_update: "",
    genres: [],
    chapters: [],
    reviews: []
  }
}

export function Chapter() {
  return {
    chapter_id: 0,
    title: "",
    content: ""
  }
}