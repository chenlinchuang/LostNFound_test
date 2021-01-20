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
  query getItems($query: String) {
    items(query: $query) {
      id
      briefIntro
      location
      description
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
