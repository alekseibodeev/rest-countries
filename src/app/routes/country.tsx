import { ArrowLeft } from 'lucide-react';
import { Link, useParams } from 'react-router';
import styled from 'styled-components';

import Bold from '@/components/bold';
import Button from '@/components/button';
import ErrorFallback from '@/components/error-fallback';

import {
  createFlagImgPath,
  findBorderCountries,
  findCountryByCode,
  formatCurrencies,
  formatLanguages,
  formatPopulation,
} from '@/helpers/util';

import useCountries from '@/hooks/use-countries';

import {
  breakpoint,
  color,
  fontSize,
  fontWeight,
  space,
} from '@/styles/helpers';

const ControlWrapper = styled.div`
  padding-block: ${space('1400')};
`;

const CountryWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${space('3200')};
  padding-bottom: ${space('3200')};

  @media screen and (max-width: ${breakpoint('md')}) {
    grid-template-columns: 1fr;
    gap: ${space('800')};
  }
`;

const Cover = styled.img`
  box-shadow: 0.25rem 0.25rem 1rem 0.25rem ${color('shadow-50')};
`;

const CountryTitle = styled.h1`
  font-size: ${fontSize('800')};
  font-weight: ${fontWeight('bold')};
  margin-block: ${space('800')};
`;

const InformationWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: ${space('1600')};

  @media screen and (max-width: ${breakpoint('md')}) {
    flex-direction: column;
    gap: ${space('800')};
    margin-bottom: ${space('800')};
  }
`;

const InformationItem = styled.p`
  margin-bottom: ${space('200')};
`;

const BordersWrapper = styled.div`
  display: flex;
  gap: ${space('400')};

  @media screen and (max-width: ${breakpoint('md')}) {
    flex-direction: column;
  }
`;

const BordersTitle = styled.p`
  flex-shrink: 0;
  margin-block: ${space('100')};
`;

const Borders = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: ${space('200')};
`;

const BorderItem = styled(Button)`
  padding-block: ${space('200')};
`;

const Country = () => {
  const data = useCountries();
  const { code } = useParams();

  if (!code) {
    return <ErrorFallback message="Error 404: Not Found" />;
  }

  const country = findCountryByCode(data, code);

  if (!country) {
    return <ErrorFallback message="Error 404: Not Found" />;
  }

  const borderCountries = findBorderCountries(country.borders, data);

  return (
    <>
      <ControlWrapper>
        <Button to="/" as={Link}>
          <ArrowLeft /> <Bold>Back</Bold>
        </Button>
      </ControlWrapper>
      <CountryWrapper>
        <Cover src={createFlagImgPath(country.alpha2Code)} alt="" />
        <div>
          <CountryTitle>{country.name}</CountryTitle>
          <InformationWrapper>
            <div>
              <InformationItem>
                <Bold>Native Name:</Bold> {country.nativeName}
              </InformationItem>
              <InformationItem>
                <Bold>Population:</Bold> {formatPopulation(country.population)}
              </InformationItem>
              <InformationItem>
                <Bold>Region:</Bold> {country.region}
              </InformationItem>
              <InformationItem>
                <Bold>Sub Region:</Bold> {country.subregion}
              </InformationItem>
              <InformationItem>
                <Bold>Capital:</Bold> {country.capital || '**none**'}
              </InformationItem>
            </div>
            <div>
              <InformationItem>
                <Bold>Top Level Domain:</Bold>{' '}
                {country.topLevelDomain.join(', ')}
              </InformationItem>
              <InformationItem>
                <Bold>Currencies:</Bold> {formatCurrencies(country.currencies)}
              </InformationItem>
              <InformationItem>
                <Bold>Languages:</Bold> {formatLanguages(country.languages)}
              </InformationItem>
            </div>
          </InformationWrapper>
          <BordersWrapper>
            <BordersTitle>
              <Bold>Border Countries:</Bold>{' '}
              {!borderCountries.length && '**none**'}
            </BordersTitle>
            {!!borderCountries.length && (
              <Borders role="list">
                {borderCountries.map((country) => (
                  <li key={country.alpha3Code}>
                    <BorderItem
                      to={`/country/${country.alpha2Code.toLowerCase()}`}
                      as={Link}
                    >
                      {country.name}
                    </BorderItem>
                  </li>
                ))}
              </Borders>
            )}
          </BordersWrapper>
        </div>
      </CountryWrapper>
    </>
  );
};

export default Country;
