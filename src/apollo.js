import AsyncStorage from '@react-native-community/async-storage'
import { ApolloClient, InMemoryCache } from '@apollo/client'
import { createUploadLink } from 'apollo-upload-client'
import { setContext } from '@apollo/client/link/context'

import { APP_TOKEN_KEY, SERVER_ENDPOINT } from '@root/constants'

const httpLink = createUploadLink({ uri: `${SERVER_ENDPOINT}/api` })

const authLink = setContext(async () => {
  // get the authentication token from local storage if it exists
  try {
    const token = await AsyncStorage.getItem(APP_TOKEN_KEY)
    // return the headers to the context so httpLink can read them
    return {
      headers: {
        Authorization: token || '',
      },
    }
  } catch (error) {
    return {
      headers: {
        Authorization: null,
      },
    }
  }
})

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: authLink.concat(httpLink),
})
