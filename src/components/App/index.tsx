import { useEffect } from 'react';
import { useApiNames } from '../../hooks/useApiNames';
import { apiNames } from '../../types/endpoints';
import { Card } from '../Card';
import { Container } from './styles';

type ObjectKey = keyof typeof apiNames;

export function App() {
  const api = useApiNames();
  useEffect(() => {
    api.callEndPoints();
    setInterval(() => {
      api.callEndPoints();
    }, 15000); // change this to change the request frequency(in milisseconds)
  }, []);

  return (
    <Container>
      {Object.keys(apiNames).map((apiName) => {
        const test = apiName as ObjectKey;
        return <Card key={apiName} dataInfo={api[test]} apiName={apiName} />;
      })}
    </Container>
  );
}
