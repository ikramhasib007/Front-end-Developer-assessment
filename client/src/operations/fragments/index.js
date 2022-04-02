import { gql } from '@apollo/client'
import {
  CORE_FILE_FIELDS,
  CORE_USER_FIELDS
} from './core'


export const IMAGE_FIELDS = gql`
  ${CORE_FILE_FIELDS}

  fragment ImageFields on File {
    ...CoreFileFields
  }
`

export const USER_FIELDS = gql`
  ${CORE_USER_FIELDS}

  fragment UserFields on User {
    ...CoreUserFields
  }
`
