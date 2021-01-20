import { gql } from "@apollo/client";

const CREATE_ITEM_MUTATION = gql`
  mutation createItem(
    $data: CreateItemInput!
    $time: TimeInput!
    $pic: PictureInput
    $lastModified: TimeInput
  ) {
    createItem(data: $data, time: $time, pic: $pic) {
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

const CREATE_CATEGORY_MUTATION = gql`
  mutation createCategory($name: String!) {
    createCategory(name: $name) {
      id
      name
    }
  }
`;

export { CREATE_ITEM_MUTATION, CREATE_CATEGORY_MUTATION };
