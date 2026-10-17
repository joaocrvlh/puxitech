export type Theme = 'light' | 'dark'

export const THEME_STORAGE_KEY = 'puxitech-theme'

export function isTheme(value: unknown): value is Theme {
  return value === 'light' || value === 'dark'
}

export function readStoredTheme(): Theme | null {
  try {
    const stored = localStorage.getItem(THEME_STORAGE_KEY)
    return isTheme(stored) ? stored : null
  } catch {
    return null
  }
}

export function storeTheme(theme: Theme): void {
  try {
    localStorage.setItem(THEME_STORAGE_KEY, theme)
  } catch {
  }
}

export function getSystemTheme(): Theme {
  return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'
}

export function getInitialTheme(): Theme {
  const fromDom = document.documentElement.dataset.theme
  return isTheme(fromDom) ? fromDom : readStoredTheme() ?? getSystemTheme()
}
