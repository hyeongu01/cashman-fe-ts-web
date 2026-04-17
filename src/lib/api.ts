const BASE_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

export async function api(path: string, options?: RequestInit) {
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

  return res.json();
}
