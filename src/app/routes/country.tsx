import { ArrowLeft } from 'lucide-react';
import { Link, useParams } from 'react-router';
import styled from 'styled-components';

import Bold from '@/components/bold';
import Button from '@/components/button';
import ErrorFallback from '@/components/error-fallback';

import {
  applyKebab,
  createFlagImgPath,
  findBorderCountries,
  formatCurrencies,
  formatLanguages,
  formatPopulation,
  removeKebab,
} from '@/helpers/util';

import useCountries from '@/hooks/use-countries';

const ControlWrapper = styled.div`
  margin-block: 3.5rem;
`;

const CountryWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8rem;
  margin-bottom: 12rem;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const Cover = styled.img`
  box-shadow: 0.25rem 0.25rem 1rem 0.25rem ${({ theme }) => theme.color.shadow};
`;

const CountryTitle = styled.h1`
  font-size: 2rem;
  font-weight: 800;
  margin-block: 2rem;
`;

const InformationWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 4rem;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;
    margin-bottom: 2rem;
  }
`;

const InformationItem = styled.p`
  margin-bottom: 0.5rem;
`;

const BordersWrapper = styled.div`
  display: flex;
  gap: 1rem;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const BordersTitle = styled.p`
  flex-shrink: 0;
  margin-block: 0.25rem;
`;

const Borders = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const BorderItem = styled(Button)`
  padding-block: 0.25rem;
`;

const Country = () => {
  const data = useCountries();
  const { name } = useParams();

  if (!name) {
    return <ErrorFallback message="Error 404: Not Found" />;
  }

  const countryName = removeKebab(name);

  const country = data!.find(
    (country) => country.name.toLowerCase() === countryName,
  );

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
                      to={`/country/${applyKebab(country.name)}`}
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
