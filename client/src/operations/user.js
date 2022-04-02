import { gql } from '@apollo/client'
import { USER_FIELDS } from './fragments'
import { CORE_USER_FIELDS } from './fragments/core'


export const GET_USER_BY_EMAIL = gql`
  ${CORE_USER_FIELDS}

  query GetUserByEmail ($email: String!) {
    userByEmail (
      email: $email
    ) {
      ...CoreUserFields
    }
  }
`

export const LOGIN = gql`
  ${USER_FIELDS}

  mutation Login($data: LoginUserInput!) {
    login (
      data: $data
    ) {
      token
      user {
        ...UserFields
      }
    }
  }
`

export const ME = gql`
  ${USER_FIELDS}
  
  query ME {
    user {
      ...UserFields
    }
  }
`
