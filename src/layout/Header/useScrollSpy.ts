import { useEffect, useState } from 'react'

export function useScrollSpy(hrefs: readonly string[]): string {
  const [active, setActive] = useState(hrefs[0])

  useEffect(() => {
    const sections = hrefs
      .map((href) => document.getElementById(href.slice(1)))
      .filter((section): section is HTMLElement => section !== null)

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting)
        if (visible) setActive(`#${visible.target.id}`)
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )
    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [hrefs])

  return active
}
