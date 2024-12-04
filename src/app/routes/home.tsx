import styled from 'styled-components';

import Card from '@/components/card';

import useCountries from '@/hooks/use-countries';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
  gap: 5rem;
  margin-block: 3.5rem;
`;

const Home = () => {
  const { data, error, isLoading } = useCountries();

  if (error) {
    return <h1>{error.message}</h1>;
  }

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <Wrapper>
      {data!.map((country) => (
        <Card
          key={country.alpha3Code}
          flag={country.flag}
          name={country.name}
          population={country.population}
          region={country.region}
          capital={country.capital}
        />
      ))}
    </Wrapper>
  );
};

export default Home;
