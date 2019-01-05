// eslint-disable
// this is an auto generated file. This will be overwritten

export const getGrudge = `query GetGrudge($id: ID!) {
  getGrudge(id: $id) {
    id
    avenged
    person
    deed
  }
}
`;
export const listGrudges = `query ListGrudges(
  $filter: ModelGrudgeFilterInput
  $limit: Int
  $nextToken: String
) {
  listGrudges(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      avenged
      person
      deed
    }
    nextToken
  }
}
`;
