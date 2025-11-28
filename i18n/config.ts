import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from '../locales/en.json';
import ptBR from '../locales/pt-BR.json';
import ru from '../locales/ru.json';

export const SUPPORTED_LOCALES = ['en', 'pt-BR', 'ru'] as const;
export type Locale = (typeof SUPPORTED_LOCALES)[number];

const FALLBACK_LOCALE: Locale = 'en';
const resources = {
  en: { translation: en },
  'pt-BR': { translation: ptBR },
  ru: { translation: ru }
};

const isBrowser = typeof window !== 'undefined' && typeof navigator !== 'undefined';

export const normalizeLocale = (lang?: string | null): Locale | null => {
  if (!lang) return null;
  const lower = lang.toLowerCase();
  if (lower.startsWith('pt')) return 'pt-BR';
  if (lower.startsWith('ru')) return 'ru';
  if (lower.startsWith('en')) return 'en';
  return null;
};

export const getInitialLocale = (): Locale => {
  if (isBrowser) {
    const stored = window.localStorage.getItem('locale');
    const normalizedStored = normalizeLocale(stored);
    if (normalizedStored) return normalizedStored;

    const candidates = navigator.languages && navigator.languages.length
      ? navigator.languages
      : [navigator.language];

    for (const candidate of candidates) {
      const normalized = normalizeLocale(candidate);
      if (normalized) return normalized;
    }
  }

  return FALLBACK_LOCALE;
};

export const persistLocale = (locale: Locale) => {
  if (isBrowser) {
    window.localStorage.setItem('locale', locale);
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: getInitialLocale(),
    fallbackLng: FALLBACK_LOCALE,
    interpolation: { escapeValue: false },
    returnNull: false,
    returnEmptyString: false
  });

export const changeLanguage = (locale: Locale) => {
  const target = normalizeLocale(locale) ?? FALLBACK_LOCALE;
  i18n.changeLanguage(target);
  persistLocale(target);
};

export default i18n;
