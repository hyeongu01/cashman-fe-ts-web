import { useCallback } from 'react';
import { useApi } from '../lib/api';

export type User = {
    id: string;
    name: string;
    email: string;
    timezone: string;
    birthDate: string;
}

// export const getMe = (): Promise<User> => api<User>('/users/me');

export function useUserService() {
    const api = useApi();

    const getMe = useCallback(async () => {
        return await api<User>('/users/me');
    }, [api]);

    return { getMe };
}
