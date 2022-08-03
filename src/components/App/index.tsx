import { useEffect } from 'react';
import { useApiNames } from '../../hooks/useApiNames';
import { apiNames } from '../../types/endpoints';
import { Card } from '../Card';
import { Container } from './styles';

export function App() {
  const api = useApiNames();
  useEffect(() => {
    api.callEndPoints();
    try {
      setInterval(async () => {
        api.callEndPoints();
      }, 15000); // You can change this value in MILISSECONDS to change the request interval.
    } catch (e) {
      console.log(e);
    }
  }, []);

  return (
    <Container>
      {Object.keys(apiNames).map((apiName) => (
        <Card key={apiName} dataInfo={api[apiName]} apiName={apiName} />
      ))}
    </Container>
  );
}
