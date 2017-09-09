import _ from 'lodash'
const electron = window.require('electron')
const storage = electron.remote.require('electron-json-storage')

export default {
  get: (key) => {
    return new Promise((resolve, reject) => {
      storage.get(key, (err, data) => {
        if (err) {
          reject(err)
        }

        resolve(_.isEmpty(data) ? {} : JSON.parse(data))
      })
    })
  },
  set: (key, val) => {
    return new Promise((resolve, reject) => {
      storage.set(key, val, (err) => {
        if (err) {
          reject(err)
        }

        resolve()
      })
    })
  }
}
