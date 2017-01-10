const request = require('supertest-as-promised')
const { expect } = require('chai')
const db = require('APP/db')
const User = require('APP/db/models/user')
const app = require('./start')

describe.only('/api/users', () => {
  before('wait for the db', () => db.didSync);

  afterEach(() => {
    return db.sync({force: true});
  })

  describe('when not logged in', () => {
    it('GET /:id fails 401 (Unauthorized)', () =>
      request(app)
      .get(`/api/users/1`)
      .expect(401)
    )

    it('POST creates a user', () =>
      request(app)
      .post('/api/users')
      .send({
        firstName: 'beth',
        lastName: 'wheeler',
        email: 'beth@secrets.org',
        password: '12345'
      })
      .expect(201)
    )

    it('POST redirects to the user it just made', () =>
      request(app)
      .post('/api/users')
      .send({
        firstName: 'eve',
        lastName: 'ye',
        email: 'eve@interloper.com',
        password: '23456',
      })
      .redirects(1)
      .then(res => expect(res.body).to.contain({
        email: 'eve@interloper.com'
      }))
    )


    it('DELETE /:id fails 401 (Unauthorized)', () =>
      request(app)
      .delete('/api/users/1')
      .expect(401)
    )
  })

  describe('testing routes regardless of login', () => {
    //temporary testing of each route when disabling login requirements in user routes

    beforeEach(() => {
      return User.create({
        firstName: 'sam',
        lastName: 'wheeler',
        email: 'samwheeler@gmail.com',
        password: '12345'
      })
    })

    //THIS WILL FAIL UNLESS YOU TAKE OUT FORBIDDEN IN USERS ROUTING GET REQUEST
    it('GET returns a list of all the users', () => {
      return request(app)
      .get('/api/users')
      .expect(200)
      .then(res => {
        expect(res.body.length).to.equal(1)
      })
    })

    //THIS WILL FAIL UNLESS YOU TAKE OUT FORBIDDEN IN USERS ROUTING GET REQUEST
    it('GET /:id returns a specific user', () => {
      return request(app)
      .get('/api/users/1')
      .expect(200)
      .then(res => {
        expect(res.body.firstName).to.equal('sam');
      })
    })

    it('PUT updates a user', () => {
      return request(app)
      .put('/api/users/1')
      .send({
        firstName: 'kitten',
        lastName: 'mcMuffins'
      })
      .expect(200)
      .then(res => {
        expect(res.body.firstName).to.equal('kitten')
        expect(res.body.lastName).to.equal('mcMuffins')
      })
    })

  })
})
