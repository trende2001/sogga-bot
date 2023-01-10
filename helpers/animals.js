const config = require('../config.json')
const fetch = require('node-fetch')
const querystring = require('querystring')

module.exports = {
  cat: async function (breeds, subId, breed = "nobreed") {
    let response
    let queryParams
    if (breed === "nobreed") {
      queryParams = {
        has_breeds: breeds,
        mime_types: 'jpg,png,jpeg,webp,gif',
        sub_id: subId,
        limit: 1,
      }
    } else {
      queryParams = {
        has_breeds: breeds,
        mime_types: 'jpg,png,jpeg,webp,gif',
        sub_id: subId,
        limit: 1,
        breed_ids: breed,
      }
    }
    const queryString = querystring.encode(queryParams)
    try {
      response = await fetch(`https://api.thecatapi.com/v1/images/search?${queryString}`, {
        headers: {
          'X-API-KEY': config.catApiKey
        }
      })
    } catch (e) {
      throw new Error(e)
    }
    return response.json()
  },
  dog: async function (breeds, subId) {
    let response
    const queryParams = {
      has_breeds: breeds,
      mime_types: 'jpg,png,jpeg,webp,gif',
      size: 'small',
      sub_id: subId,
      limit: 1
    }
    const queryString = querystring.encode(queryParams)
    try {
      response = await fetch(`https://api.thedogapi.com/v1/images/search?${queryString}`, {
        headers: {
          'X-API-KEY': config.dogApiKey
        }
      })
    } catch (e) {
      throw new Error(e)
    }
    return response.json()
  },
  fox: async function () {
    const response = await fetch('https://randomfox.ca/floof/')
    return (await response.json()).image
  },
  bird: async function () {
    const response = await fetch('http://shibe.online/api/birds')
    return (await response.text()).slice(2, -2)
  },
  shibe: async function () {
    const response = await fetch('http://shibe.online/api/shibes')
    return (await response.text()).slice(2, -2)
  },
  cat2: async function () {
    const response = await fetch('https://aws.random.cat/meow')
    return (await response.json()).file
  }
}