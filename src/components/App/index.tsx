import { useEffect } from 'react';
import { useApiNames } from '../../hooks/useApiNames';
import { apiNames } from '../../types/endpoints';
import { Card } from '../Card';
import { Container } from './styles';

export function App() {
  const api = useApiNames();
  useEffect(() => {
    api.callEndPoints();
    setInterval(() => api.callEndPoints(), 5000);
  }, []);

  return (
    <Container>
      {Object.keys(apiNames).map((apiName) => (
        <Card key={apiName} dataInfo={api[apiName]} apiName={apiName} />
      ))}
    </Container>
  );
}
