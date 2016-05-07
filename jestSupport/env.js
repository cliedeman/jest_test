/* global global, jest */

global.__DEV__ = true;
global.__fbBatchedBridgeConfig = {
  remoteModuleConfig: [],
  localModulesConfig: []
}

global.fetch = jest.fn()
global.Promise = require('promise')

// TODO attempt to generate from fbjs
//jest.genMockFromModule('../ErrorUtils')

jest.setMock('ErrorUtils', {
    setGlobalHandler() {
      // TODO
    }
  }
)

import NativeModules from './NativeModules'
import AsyncStorage from './AsyncStorage'
jest.setMock('NativeModules', NativeModules)
jest.setMock('AsyncStorage', AsyncStorage)
