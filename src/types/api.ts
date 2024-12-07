export type CountryData = {
  alpha2Code: string;
  alpha3Code: string;
  altSpellings: string[];
  area: number;
  borders?: string[];
  callingCodes: string[];
  capital?: string;
  cioc: string[];
  currencies?: Currency[];
  demonym: string;
  independent: string;
  flag: string;
  flags: {
    svg: string;
    png: string;
  };
  gini?: string;
  languages: Language[];
  latlng: [number, number];
  name: string;
  nativeName: string;
  numericCode: string;
  population: number;
  region: string;
  regionalBlocs: {
    acronym: string;
    name: string;
  }[];
  subregion: string;
  timezones: string[];
  topLevelDomain: string[];
  translations: { [key: string]: string };
};

export type Currency = {
  code: string;
  name: string;
  symbol: string;
};

export type Language = {
  iso639_1: string;
  iso639_2: string;
  name: string;
  nativeName: string;
};
