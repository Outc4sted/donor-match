import { clerkMiddleware, createRouteMatcher } from '@clerk/astro/server'
import { contract } from '@donor-match/ts-rest'
import { initClient } from '@ts-rest/core'

const isProtectedRoute = createRouteMatcher(['/dashboard(.*)', '/api(.*)'])

export const onRequest = clerkMiddleware(
  (auth, { request, cookies, locals }) => {
    const { redirectToSignIn, userId } = auth()
    const requestUrl = new URL(request.url)
    const token = cookies.get('__session')
    locals.siteName = 'Donor Match'

    if (!userId && isProtectedRoute(request)) {
      return redirectToSignIn()
    }

    locals.apiClient = initClient(contract, {
      baseUrl: import.meta.env.DONOR_MATCH_API,
      baseHeaders: {
        authorization: `Bearer ${token?.value}`,
      },
    })

    if (requestUrl.pathname.startsWith('/api')) {
      request.headers.set('authorization', `Bearer ${token?.value}`)

      return fetch(
        `${import.meta.env.DONOR_MATCH_API}${requestUrl.pathname}`,
        request,
      )
    }
  },
)
