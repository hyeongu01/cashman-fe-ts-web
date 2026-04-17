import { api } from '../lib/api';

export type User = {
    id: string;
    email: string;
    name: string;
}

export const getMe = (): Promise<User> => api('/users/me');