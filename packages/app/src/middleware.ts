import { clerkMiddleware, createRouteMatcher } from '@clerk/astro/server'

const isProtectedRoute = createRouteMatcher(['/dashboard(.*)', '/api(.*)'])

export const onRequest = clerkMiddleware((auth, { request, cookies }) => {
  const { redirectToSignIn, userId } = auth()
  const requestUrl = new URL(request.url)

  if (!userId && isProtectedRoute(request)) {
    return redirectToSignIn()
  }

  if (requestUrl.pathname.startsWith('/api')) {
    const token = cookies.get('__session')
    request.headers.set('authorization', `Bearer ${token?.value}`)

    return fetch(
      `${import.meta.env.DONOR_MATCH_API}${requestUrl.pathname}`,
      request,
    )
  }
})
