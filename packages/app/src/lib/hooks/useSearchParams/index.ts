import { useState, useEffect, useCallback } from 'react'

export function useSearchParams() {
  const getSearchParams = () => new URLSearchParams(window.location.search)
  const [params, setParams] = useState(getSearchParams())

  const updateSearchParams = useCallback(
    (updates: Record<string, string | undefined>) => {
      const currentParams = new URLSearchParams(window.location.search)

      for (const key in updates) {
        if (Object.hasOwn(updates, key)) {
          const value = updates[key]
          if (value === undefined) {
            currentParams.delete(key)
          } else {
            currentParams.set(key, value)
          }
        }
      }

      const newUrl = `${window.location.pathname}?${currentParams.toString()}`
      window.history.pushState(null, '', newUrl)

      setParams(new URLSearchParams(currentParams.toString()))
    },
    [],
  )

  useEffect(() => {
    const handlePopState = () => {
      setParams(getSearchParams())
    }

    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  return [params, updateSearchParams] as const
}
