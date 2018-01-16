import gql from 'graphql-tag';

export default gql`
  mutation SignUp($email: String, $password: String) {
    singUp(email: $email, password: $password) {
      id
      email
    }
  }
`;
