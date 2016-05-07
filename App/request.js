import {AsyncStorage} from 'react-native'

class Request {
  static async fetchCurrentUser () {
    const server = await AsyncStorage.getItem('server')
    const response = await fetch(server + '/user/current')
    return response.json()
  }
}

module.exports = { Request }