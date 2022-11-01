import { browser } from '$app/environment';
import { derived, readable } from 'svelte/store';
import { storable } from './storable';

const THEMES = ['system', 'light', 'dark'] as const;
type ThemesTuple = typeof THEMES;
type Themes = ThemesTuple[number];

const theme = storable<Themes>('theme', 'system');

const prefersColorScheme = '(prefers-color-scheme: dark)';

const getInitialScheme = () => {
  if (browser) return window.matchMedia(prefersColorScheme).matches;
  else return false;
};

const prefersDark = readable(getInitialScheme(), (set) => {
  if (!browser) {
    return;
  }
  const updateColorScheme = (event: MediaQueryListEvent) => {
    set(event.matches);
  };

  const prefered = window.matchMedia(prefersColorScheme);
  try {
    // Chrome & Firefox
    prefered.addEventListener('change', updateColorScheme);
  } catch (e1) {
    try {
      // Safari
      prefered.addListener(updateColorScheme);
    } catch (e2) {
      console.error(e2);
    }
  }

  return () => {
    try {
      // Chrome & Firefox
      prefered.removeEventListener('change', updateColorScheme);
    } catch (e1) {
      try {
        // Safari
        prefered.removeListener(updateColorScheme);
      } catch (e2) {
        console.error(e2);
      }
    }
  };
});

const dark = derived([theme, prefersDark], ([$theme, $prefersDark]) => {
  return $theme === 'dark' || ($theme === 'system' && $prefersDark);
});

export { theme, dark, THEMES };
