import { InMemoryCache } from '@apollo/client'
import { searchQueryVar } from '.'
import { cursorTakePaginatedFieldPolicy } from './utilities'

export const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        _searchQuery: {
          read() { return searchQueryVar() }
        }
      }
    },

    User: {
      fields: {
        lastLogin(lastLogin) { return parseInt(lastLogin, 10) }
      }
    },
    
  }
})