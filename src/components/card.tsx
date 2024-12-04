import styled from 'styled-components';

import Bold from '@/components/bold';

type CardProps = {
  flag: string;
  name: string;
  population: number;
  region: string;
  capital: string;
};

const Wrapper = styled.article`
  color: ${({ theme }) => theme.color.text};
  background-color: ${({ theme }) => theme.color.element};
  border-radius: 0.25rem;
  box-shadow: 0.125rem 0.125rem 0.25rem ${({ theme }) => theme.color.shadow};
`;

const Cover = styled.img`
  aspect-ratio: 1.5;
  object-fit: cover;
  object-position: center;
  border-top-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem;
`;

const Body = styled.div`
  font-size: 0.875rem;
  padding: 1.5rem;
  padding-bottom: 2.5rem;
`;

const Title = styled.h2`
  font-size: 1.25rem;
  font-weight: 800;
  margin-bottom: 0.75em;
`;

const Card = ({ flag, name, population, region, capital }: CardProps) => {
  return (
    <Wrapper>
      <Cover src={flag} alt="" loading="lazy" />
      <Body>
        <Title>{name}</Title>
        <p>
          <Bold>Population:</Bold> {population}
        </p>
        <p>
          <Bold>Region:</Bold> {region}
        </p>
        <p>
          <Bold>Capital:</Bold> {capital}
        </p>
      </Body>
    </Wrapper>
  );
};

export default Card;