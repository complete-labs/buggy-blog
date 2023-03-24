import useSWR from 'swr';

export const fetcher = (...args: any[]) => fetch([...args] as any).then((res) => res.json());

export default function useUser() {
  debugger;
  const { data, error, isLoading } = useSWR(`/api/user/`, fetcher);

  return {
    user: 'eric kao',
    isLoading,
    isError: error,
  };
}
