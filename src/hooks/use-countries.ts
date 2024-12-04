import { useEffect, useState } from 'react';

import { fetchCountries } from '@/helpers/api';

const useCountries = () => {
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

  return { data, error, isLoading };
};

export default useCountries;
