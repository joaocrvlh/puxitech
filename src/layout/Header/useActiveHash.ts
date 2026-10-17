import { useEffect, useState } from 'react'

export function useActiveHash(fallback: string): string {
  const [hash, setHash] = useState(() => window.location.hash || fallback)

  useEffect(() => {
    const onChange = () => setHash(window.location.hash || fallback)
    window.addEventListener('hashchange', onChange)
    return () => window.removeEventListener('hashchange', onChange)
  }, [fallback])

  return hash
}
