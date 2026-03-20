import type { Comment } from './types'

const BASE = import.meta.env.VITE_BOOKS_API_URL?.replace(/\/books$/, '') || 'http://localhost:5118/api'

export const commentsApi = {
  getByBookId: (bookId: number): Promise<Comment[]> => fetch(`${BASE}/books/${bookId}/comments`).then(r => r.json()),
  getCounts: (): Promise<Record<number, number>> => fetch(`${BASE}/comments/counts`).then(r => r.json()),
  add: (comment: Omit<Comment, 'id' | 'createdAt'>): Promise<Comment> =>
    fetch(`${BASE}/comments`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(comment) }).then(r => r.json()),
  delete: (id: number): Promise<Response> => fetch(`${BASE}/comments/${id}`, { method: 'DELETE' }),
}
