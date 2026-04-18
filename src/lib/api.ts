const BASE_URL = '/api';

type ApiResponse<T> = {
  data: T;
  message: string;
  statusCode: number;
  timestamp: string;
}

export async function api<T>(path: string, options?: RequestInit) {
  const accessToken = localStorage.getItem('accessToken');
  const tokenType = localStorage.getItem('tokenType') || 'bearer';

  const res = await fetch(`${BASE_URL}${path}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...(accessToken && { Authorization: `${tokenType} ${accessToken}`}),
      ...options?.headers,
    }
  })

  if (!res.ok) throw new Error(`Api error: ${res.body}`);

  const body: ApiResponse<T> = await res.json();
  return body.data;
}
