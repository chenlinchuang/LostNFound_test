import { gql } from "@apollo/client";

const CATEGORIES_QUERY = gql`
  query getCategories {
    categories {
      id
      name
    }
  }
`;

const ITEMS_QUERY = gql`
  query getItems($query: String, $id: ID) {
    items(query: $query, id: $id) {
      id
      briefIntro
      location
      description
      isMatch
      contact {
        id
        other
      }
      category {
        id
        name
      }
      pic {
        id
        DataURL
      }
      time {
        year
        month
        day
        hour
        minute
      }
    }
  }
`;

export { CATEGORIES_QUERY, ITEMS_QUERY };
