import { gql } from '@apollo/client'

export const CORE_FILE_FIELDS = gql`
  fragment CoreFileFields on File {
    id
    filename
    path
  }
`

export const CORE_USER_FIELDS = gql`
  ${CORE_FILE_FIELDS}
  
  fragment CoreUserFields on User {
    id
    firstName
    lastName
    email(hasReturn: true)
    type
    imageUrl
    images {
      ...CoreFileFields
    }
    lastLogin
    createdAt
    updatedAt
  }
`

export const CORE_ACCESS_TOKEN_FIELDS = gql`
  fragment CoreAccessTokenFields on Token {
    id
    creatorId
    type
    expireAt
  }
`
