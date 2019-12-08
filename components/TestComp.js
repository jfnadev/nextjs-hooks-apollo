import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

const HELLO = gql`
  query hello($name: String!) {
    hello(name: $name)
  }
`;
const TestComp = props => {
  const { loading, error, data } = useQuery(HELLO, {
    variables: { name: 'ayoub' },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return <div>Data from Apollo hook query: {data.hello}</div>;
};

export default TestComp;
