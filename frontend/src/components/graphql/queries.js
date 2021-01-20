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
  query getItems {
    items {
      id
      briefIntro
      location
      description
      category {
        id
        name
      }
      pic {
        id
        DataURL
        item
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
