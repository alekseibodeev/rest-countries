import { Link } from 'react-router';
import styled from 'styled-components';

import Bold from '@/components/bold';

import { formatPopulation } from '@/helpers/util';

import {
  borderRadius,
  color,
  fontSize,
  fontWeight,
  space,
} from '@/styles/helpers';

type CardProps = {
  code: string;
  flag: string;
  name: string;
  population: number;
  region: string;
  capital: string;
};

const Wrapper = styled.article`
  color: ${color('base-content')};
  background-color: ${color('base-background')};
  border-radius: ${borderRadius('100')};
  box-shadow: 0.125rem 0.125rem 0.25rem ${color('shadow-50')};
`;

const Cover = styled.img`
  width: 100%;
  aspect-ratio: 1.5;
  object-fit: cover;
  object-position: center;
  border-top-left-radius: ${borderRadius('100')};
  border-top-right-radius: ${borderRadius('100')};
`;

const Body = styled.div`
  font-size: ${fontSize('350')};
  padding: ${space('600')};
  padding-bottom: ${space('1000')};
`;

const Title = styled.h2`
  font-size: ${fontSize('500')};
  font-weight: ${fontWeight('bold')};
  margin-bottom: 0.75em;
`;

const PlainLink = styled(Link)`
  text-decoration: none;
  color: currentColor;
`;

const Card = ({ code, flag, name, population, region, capital }: CardProps) => {
  return (
    <Wrapper>
      <Cover src={flag} alt="" loading="lazy" />
      <Body>
        <Title>
          <PlainLink to={`/country/${code}`}>{name}</PlainLink>
        </Title>
        <p>
          <Bold>Population:</Bold> {formatPopulation(population)}
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
