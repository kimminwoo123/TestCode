const {
    app
} = require('./index')
const request = require('supertest')

describe('GET /users는', () => {
    it('asd', (done) => {
        request(app)
        .get('/users')
        .end((err, res) => {
            console.log(res.body)
            done()
        })
    })
})