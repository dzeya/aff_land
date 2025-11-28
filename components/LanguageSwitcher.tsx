import React from 'react';
import { useTranslation } from 'react-i18next';
import { Locale, SUPPORTED_LOCALES, changeLanguage, normalizeLocale } from '../i18n/config';

const LABELS: Record<Locale, string> = {
  en: 'EN',
  'pt-BR': 'PT-BR',
  ru: 'RU'
};

interface Props {
  className?: string;
}

const LanguageSwitcher: React.FC<Props> = ({ className }) => {
  const { i18n } = useTranslation();
  const current = normalizeLocale(i18n.language) ?? 'en';

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const next = event.target.value as Locale;
    changeLanguage(next);
  };

  return (
    <select
      aria-label="Select language"
      value={current}
      onChange={handleChange}
      className={`text-sm border border-stone-200 rounded-full px-3 py-2 bg-white text-stone-700 hover:border-stone-300 focus:outline-none focus:ring-2 focus:ring-terracotta-400 ${className ?? ''}`}
    >
      {SUPPORTED_LOCALES.map((locale) => (
        <option key={locale} value={locale}>
          {LABELS[locale]}
        </option>
      ))}
    </select>
  );
};

export default LanguageSwitcher;
