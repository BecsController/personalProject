import request from 'superagent'

const rootUrl = '/api'

export function getPages () {
  return request.get(rootUrl + '/pages')
    .then(res => {
      console.log(res.body)
      return res.body.pages
    })
}
