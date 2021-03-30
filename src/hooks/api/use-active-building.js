import { gql } from '@apollo/client';
import { useParams } from 'react-router-dom';
import useSuspendableQuery from 'hooks/use-suspended-query';

const GET_SINGLE_BUILDING = gql`
  query($id: Int!) {
    buildings(id: $id) {
      id
      bounds
      properties {
        results {
          category
          type
          rent_type
          price
          price_per_sqm
          rooms
          area
          floor
          published_at
        }
      }
    }
  }
`;

export default function useActiveBuilding() {
  const { buildingId } = useParams();
  const { data } = useSuspendableQuery(GET_SINGLE_BUILDING, {
    variables: { id: Number(buildingId) },
  });
  return (data?.buildings || [])[0];
}