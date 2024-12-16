import { useSearchParams } from 'react-router';
import styled from 'styled-components';

import Card from '@/components/card';
import SearchBar from '@/components/search-bar';
import Select from '@/components/select';

import { createFlagImgPath } from '@/helpers/util';

import useCountries from '@/hooks/use-countries';

import { breakpoint, space } from '@/styles/helpers';

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  padding-block: clamp(${space('600')}, 0.8469rem + 3.2653vw, ${space('1400')});
`;

const CardsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
  gap: ${space('2000')};
  padding-block: ${space('1400')};
`;

const FiltersWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: ${breakpoint('md')}) {
    flex-direction: column;
    align-items: flex-start;
    gap: ${space('800')};
  }
`;

const Home = () => {
  const data = useCountries();
  const [searchParams, setSearchParams] = useSearchParams();

  const name = searchParams.get('name');
  const region = searchParams.get('region');
  const countries = data!.filter(
    (country) =>
      (!name || country.name.toLowerCase().startsWith(name.toLowerCase())) &&
      (!region || country.region.toLowerCase() === region.toLowerCase()),
  );

  return (
    <Wrapper>
      <FiltersWrapper>
        <SearchBar
          placeholder="Search for a country..."
          value={name ?? ''}
          onChange={(event) => {
            const nextSearchParams: { name?: string; region?: string } = {};

            if (event.target.value) {
              nextSearchParams.name = event.target.value;
            }

            if (region) {
              nextSearchParams.region = region;
            }

            setSearchParams(nextSearchParams, {
              replace: !(name === null && region === null),
            });
          }}
        />
        <Select
          value={region ?? ''}
          onValueChange={(value) => {
            const nextSearchParams: { name?: string; region?: string } = {};

            if (name) {
              nextSearchParams.name = name;
            }

            if (value) {
              nextSearchParams.region = value;
            }

            setSearchParams(nextSearchParams, {
              replace: !(name === null && region === null),
            });
          }}
        >
          <Select.Trigger placeholder="Filter by Region" />
          <Select.Content>
            <Select.Item value="africa">Africa</Select.Item>
            <Select.Item value="americas">America</Select.Item>
            <Select.Item value="asia">Asia</Select.Item>
            <Select.Item value="europe">Europe</Select.Item>
            <Select.Item value="oceania">Oceania</Select.Item>
          </Select.Content>
        </Select>
      </FiltersWrapper>
      <CardsWrapper>
        {countries.map((country) => (
          <Card
            key={country.alpha3Code}
            code={country.alpha2Code.toLowerCase()}
            flag={createFlagImgPath(country.alpha2Code)}
            name={country.name}
            population={country.population}
            region={country.region}
            capital={country.capital || '**none**'}
          />
        ))}
      </CardsWrapper>
    </Wrapper>
  );
};

export default Home;
