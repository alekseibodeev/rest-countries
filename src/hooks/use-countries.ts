import { useOutletContext } from 'react-router';

import { fetchCountries } from '@/helpers/api';

const useCountries = () => {
  return useOutletContext<Awaited<ReturnType<typeof fetchCountries>>>();
};

export default useCountries;
