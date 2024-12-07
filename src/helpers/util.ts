import useCountries from '@/hooks/use-countries';

import { Currency, Language } from '@/types/api';

/**
 * Replaces all spaces with dashes in the given string and downcase it.
 */
export const applyKebab = (str: string) => str.toLowerCase().replace(' ', '-');

/**
 * Replaces all dashes with spaces in the given string
 */
export const removeKebab = (str: string) => str.replace('-', ' ');

export const formatPopulation = (population: number) => {
  return population.toLocaleString();
};

export const formatLanguages = (languages: Language[]) => {
  return languages.map(({ name }) => name).join(', ');
};

export const formatCurrencies = (currencies: Currency[]) => {
  return currencies.map(({ name }) => name).join(', ');
};

export const findBorderCountries = (
  borders: string[],
  countries: ReturnType<typeof useCountries>,
) => {
  const bordersSet = new Set(borders);
  const borderCountries: typeof countries = [];

  for (const country of countries) {
    if (borderCountries.length === borders.length) return borderCountries;
    if (bordersSet.has(country.alpha3Code)) borderCountries.push(country);
  }

  return borderCountries;
};
