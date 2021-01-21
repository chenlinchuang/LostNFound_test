import { gql } from "@apollo/client";

const CREATE_ITEM_MUTATION = gql`
  mutation createItem(
    $data: CreateItemInput!
    $time: String!
    $pic: PictureInput
    $contact: ContactInput
  ) {
    createItem(data: $data, time: $time, pic: $pic, contact: $contact) {
      id
      briefIntro
      location
      description
      contact {
        id
        email
        facebook
        phoneNumber
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

const CREATE_CATEGORY_MUTATION = gql`
  mutation createCategory($name: String!) {
    createCategory(name: $name) {
      id
      name
    }
  }
`;

export { CREATE_ITEM_MUTATION, CREATE_CATEGORY_MUTATION };
