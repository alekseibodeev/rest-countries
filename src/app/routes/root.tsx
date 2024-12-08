import { useEffect, useState } from 'react';
import { Outlet } from 'react-router';
import styled from 'styled-components';

import BigSpinner from '@/components/big-spinner';
import Container from '@/components/container';
import ErrorFallback from '@/components/error-fallback';
import Header from '@/components/header';

import { fetchCountries } from '@/helpers/api';

const Wrapper = styled.div`
  color: ${({ theme }) => theme.color.text};
  background-color: ${({ theme }) => theme.color.background};
  font-family: 'Nunito Sans', sans-serif;
  font-size: 1rem;
  font-weight: 300;
  display: grid;
  grid-template-rows: auto 1fr;
  min-height: 100vh;
`;

const StretchedContainer = styled(Container)`
  height: 100%;
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
        <StretchedContainer>
          {error ? (
            <ErrorFallback message={error.message} />
          ) : isLoading ? (
            <BigSpinner />
          ) : (
            <Outlet context={data!} />
          )}
        </StretchedContainer>
      </main>
    </Wrapper>
  );
};

export default Root;
