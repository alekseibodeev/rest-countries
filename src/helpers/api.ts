import { CountryData } from '@/types/api';

type QueryParams =
  | 'alpha2Code'
  | 'alpha3Code'
  | 'borders'
  | 'capital'
  | 'currencies'
  | 'languages'
  | 'name'
  | 'nativeName'
  | 'population'
  | 'region'
  | 'subregion'
  | 'topLevelDomain';

const API_BASE_URL = 'https://restcountries.com/v2/all';

const QUERY_PARAMS: Array<QueryParams> = [
  'alpha2Code',
  'alpha3Code',
  'borders',
  'capital',
  'currencies',
  'languages',
  'name',
  'nativeName',
  'population',
  'region',
  'subregion',
  'topLevelDomain',
];

const QUERY = `${API_BASE_URL}?fields=${QUERY_PARAMS.join()}`;

let cache: Array<Pick<CountryData, QueryParams>> | undefined;

export const fetchCountries = async () => {
  if (cache) return cache;

  const res = await fetch(QUERY);

  if (res.status >= 400) {
    throw new Error(`Error ${res.status}: ${res.statusText}`);
  }

  const data = (await res.json()) as Array<Pick<CountryData, QueryParams>>;

  cache = data;

  return cache;
};
