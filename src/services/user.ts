import { api } from '../lib/api';

export type User = {
    id: string;
    name: string;
    email: string;
    timezone: string;
    birthDate: string;
}

export const getMe = (): Promise<User> => api<User>('/users/me');