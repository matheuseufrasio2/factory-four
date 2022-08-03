import { formatDate } from '../../utils/formatDate';
import {
  Container,
} from './styles';

export type ResponseProps = {
  success: boolean;
  message: string;
  hostname: string;
  time: number;
}

type Props = {
  dataInfo: ResponseProps;
  apiName: string;
}

export function Card({ dataInfo, apiName }: Props) {
  return (
    <Container isSuccess={dataInfo.success}>
      <h1>{apiName}</h1>
      {dataInfo.success ? (
        <div className="information">
          <p>
            Hostname:
            {' '}
            {dataInfo.hostname}
          </p>
          <p>
            Message:
            {' '}
            {dataInfo.message}
          </p>
          <p>
            Time:
            {' '}
            {formatDate(dataInfo.time)}
          </p>
        </div>

      ) : (
        <p>There is an error in this request</p>
      )}
    </Container>
  );
}
