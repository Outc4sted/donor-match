import { useState, useEffect, useCallback } from 'react'

type ParamValue = string | string[] | null | undefined

export function useQueryParams() {
  const getQueryParams = () => new URLSearchParams(window.location.search)
  const [params, setParams] = useState(getQueryParams())

  const updateQueryParams = useCallback(
    (updates: Record<string, ParamValue>) => {
      const currentParams = new URLSearchParams()

      // Preserve existing keys not being updated
      getQueryParams().forEach((value, key) => {
        if (!(key in updates)) {
          currentParams.append(key, value)
        }
      })

      for (const key in updates) {
        if (Object.hasOwn(updates, key)) {
          const value = updates[key]

          if (value === undefined || value === null) {
            currentParams.delete(key)
          } else if (Array.isArray(value)) {
            currentParams.delete(key)
            value.forEach((v) => currentParams.append(key, v))
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
    const handlePopState = () => setParams(getQueryParams())
    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  return [params, updateQueryParams] as const
}
