interface ApiCall {
  path: string
  token: string | null
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE'
}

export default async ({ path, token, method = 'GET' }: ApiCall) => {
  return fetch(`${import.meta.env.DONOR_MATCH_API}${path}`, {
    method,
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  }).then((response) => response.json())
}
