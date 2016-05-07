/* global jest, describe, pit, expect */

jest.unmock('../request');

import {Request} from '../request'

describe('request', () => {
  pit('Test fetch current user', async () => {
    const result = jest.fn()
    result.json = jest.fn().mockImplementation(() => {
      return { user: "User1" }
    })

    fetch.mockImplementation((url) => {
      return new Promise((resolve, reject) => {
        resolve(result)
      })
    })

    const user = await Request.fetchCurrentUser()
    expect(user).toEqual({ user: "User1" })
  })
})