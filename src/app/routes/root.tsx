import { useEffect, useState } from 'react';
import { Outlet } from 'react-router';
import styled from 'styled-components';

import BigSpinner from '@/components/big-spinner';
import Container from '@/components/container';
import ErrorFallback from '@/components/error-fallback';
import Header from '@/components/header';

import { fetchCountries } from '@/helpers/api';

import { color, font, fontSize, fontWeight } from '@/styles/helpers';

const Wrapper = styled.div`
  color: ${color('body-content')};
  background-color: ${color('body-background')};
  font-family: ${font('body')};
  font-size: ${fontSize('400')};
  font-weight: ${fontWeight('regular')};
  display: grid;
  grid-template-rows: auto 1fr;
  min-height: 100vh;
`;

const Root = () => {
  const [data, setData] = useState<Awaited<
    ReturnType<typeof fetchCountries>
  > | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchCountries()
      .then(setData)
      .catch(setError)
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <Wrapper>
      <Header />
      <main>
        <Container $fullHeight>
          {error ? (
            <ErrorFallback message={error.message} />
          ) : isLoading ? (
            <BigSpinner />
          ) : (
            <Outlet context={data!} />
          )}
        </Container>
      </main>
    </Wrapper>
  );
};

export default Root;
