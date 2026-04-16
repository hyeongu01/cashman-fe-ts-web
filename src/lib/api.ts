const BASE_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

export async function api(path: string, options?: RequestInit) {
  console.log(`${BASE_URL}${path}`)
  const res = await fetch(`${BASE_URL}${path}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options?.headers,
    }
  })

  if (!res.ok) throw new Error(`Api error: ${res.body}`);

  return res.json();
}
