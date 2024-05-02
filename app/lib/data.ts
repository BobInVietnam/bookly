import { Book } from "./definitions"

const someBooks = [
  {
    cover_image: "/thumbnails/ignored.jpg",
    title: "string",
    author: "String Builder",
    description: "string and a lot of string",
    last_update: "",
    genres: [1],
    chapters: [1, 2, 3, 4],
    reviews: [1, 2]
  },
  {
    cover_image: "/thumbnails/ignored.jpg",
    title: "string 2: electric stringalo",
    author: "String Builder",
    description: "string 2 has made a comeback",
    last_update: "",
    genres: [1, 2, 3],
    chapters: [1, 2, 3, 4],
    reviews: [1, 2, 3, 4]
  },
  {
    cover_image: "/thumbnails/yeah.jpg",
    title: "Book",
    author: "Author",
    description: "Description",
    last_update: "",
    genres: [2],
    chapters: [1, 2, 3, 4],
    reviews: [2, 3]
  },
  {
    cover_image: "/thumbnails/absolute_kino.jpg",
    title: "Agagagaa áda đá  ádfasdfasf fasdfasfdasfdasdfsadfgadfgsd sddfsasdfafdsasdfa dsfs",
    author: "Uggn ugnn gungunugn gung adsasdsadasdasdasdsad",
    description: "A caveman's instinctive typing, contains a plethora of meaning that archeologists are still researching",
    last_update: "",
    genres: [2, 3, 4],
    chapters: [1, 2, 3, 4],
    reviews: [1, 2, 3]
  },
  {
    cover_image: "/thumbnails/absolute_kino.jpg",
    title: "Computer Science - A Top Down Approach ",
    author: "me",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    last_update: "",
    genres: [1],
    chapters: [1, 2],
    reviews: [1, 2, 3, 4]
  }
]

const someGenres = [
  {
    genre_id: 1,
    name: "ABC"
  },
  {
    genre_id: 2,
    name: "DEF"
  },
  {
    genre_id: 3,
    name: "Kino"
  },
  {
    genre_id: 4,
    name: "Peak"
  }
]

const someChapters = [
  {
    chapter_id: 1,
    title: "A string",
    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
  },
  {
    chapter_id: 2,
    title: "A string two string",
    content: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
  },
  {
    chapter_id: 3,
    title: "The string",
    content: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
  },
  {
    chapter_id: 4,
    title: "Final string",
    content: "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
  }
]

const someReviews = [
  {
    review_id: 1,
    user_id: "admin",
    score: 9,
    content: "A fine book. Would recommend."
  }, 
  {
    review_id: 2,
    user_id: "user",
    score: 7,
    content: "An alright book. Would recommend I guess."
  }, 
  {
    review_id: 3,
    user_id: "admin",
    score: 4,
    content: "Nah, not a fine book."
  }, 
  {
    review_id: 4,
    user_id: "user",
    score: 1,
    content: "No"
  }, 
]

const someUsers = [
  {
    user_id: "admin",
    password: "abc123",
    profile_image: "profiles/p1.png"
  }, 
  {
    user_id: "user",
    password: "abc123",
    profile_image: "profiles/p2.png"
  }, 
]

export function loadBookData() {
  return someBooks;
}

export function loadUserData() {
  return someUsers;
}

export function getGenreFromID(id: number) {
  return someGenres.find(genre => genre.genre_id === id)
}

export function getReviewFromID(id: number) {
  return someReviews.find(review => review.review_id === id)
}

export function getChapterFromID(id: number) {
  return someChapters.find(chapter => chapter.chapter_id === id)
}

export function getScore(book: Book) {
  const bookReviews = someReviews.filter(review => book.reviews.includes(review.review_id));
  var score = 0;
  bookReviews.map(review => {
    score += review.score;
  })
  score /= bookReviews.length;
  score.toFixed(2);
  return score;
}