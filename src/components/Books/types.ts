export interface Book {
  id: number;
  title: string;
  author: string;
  yearPublished: string;
  rating: number;
}

export interface Comment {
  id: number;
  bookId: number;
  author: string;
  text: string;
  createdAt: string;
}
