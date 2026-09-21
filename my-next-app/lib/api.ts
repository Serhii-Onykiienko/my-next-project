// src/lib/api.ts

import axios from 'axios';

export type Note = {
  id: string;
  title: string;
  content: string;
  categoryId: string;
  userId: string;
  createdAt: string;
  updatedAt: string;
};

export type NoteListResponse = {
  notes: Note[];
  total: number;
};

const nextServer = axios.create({
  baseURL: 'https://next-v1-notes-api.goit.study',
  withCredentials: true,
});

export const getNotes = async (categoryId?: string) => {
  const res = await nextServer.get<NoteListResponse>('/notes', {
    params: { categoryId },
  });
  return res.data;
};

export const getSingleNote = async (id: string) => {
  const res = await nextServer.get<Note>(`/notes/${id}`);
  return res.data;
};

export type Category = {
  id: string;
  name: string;
  description: string;
  createdAt: string;
  updatedAt: string;
};

export const getCategories = async () => {
  const res = await nextServer.get<Category[]>('/categories');
  return res.data;
};

export type NewNoteData = {
  title: string;
  content: string;
  categoryId: string;
};

export const createNote = async (data: NewNoteData) => {
  const res = await nextServer.post<Note>('/notes', data);
  return res.data;
};

export type RegisterRequest = {
  email: string;
  password: string;
  userName: string;
};

export type User = {
  id: string;
  email: string;
  userName?: string;
  photoUrl?: string;
  createdAt: Date;
  updatedAt: Date;
};

export async function register(data: RegisterRequest) {
  const res = await nextServer.post<User>('/auth/register', data);

  return res.data;
}

type CheckSessionRequest = {
  success: boolean;
};

export async function checkSession() {
  const res = await nextServer.get<CheckSessionRequest>('/auth/session');

  return res.data.success;
}

export async function getMe() {
  const { data } = await nextServer.get<User>('/auth/me');
  return data;
}
