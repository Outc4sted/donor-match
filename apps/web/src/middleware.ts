import { clerkMiddleware, createRouteMatcher } from '@clerk/astro/server'
import { contract } from '@repo/ts-rest'
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
      baseUrl: DMNO_PUBLIC_CONFIG.DONOR_MATCH_API,
      baseHeaders: {
        authorization: `Bearer ${token?.value}`,
      },
    })

    if (requestUrl.pathname.startsWith('/api')) {
      request.headers.set('authorization', `Bearer ${token?.value}`)

      return fetch(
        `${DMNO_PUBLIC_CONFIG.DONOR_MATCH_API}${requestUrl.pathname}${requestUrl.search}`,
        request,
      ).catch(
        () =>
          new Response(undefined, {
            status: 500,
            statusText: 'API is unreachable',
          }),
      )
    }
  },
)
