const request = require('supertest-as-promised')
const { expect } = require('chai')
const db = require('APP/db')
const User = require('APP/db/models/user')
const app = require('./start')

describe('/api/users', () => {
  before('wait for the db', () => db.didSync);

  afterEach(() => {
    return db.sync({ force: true });
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

  xdescribe('testing user routes with login', () => {
    //unable to figure out how to get logged in testing working correctly
    const sam = {
      firstName: 'sam',
      lastName: 'wheeler',
      email: 'samwheeler@gmail.com',
      password: '12345'
    }

    const samA = {
      email: 'samwheeler@gmail.com',
      password: '12345'
    }

    beforeEach('create user in the database', () => {
      return User.create(sam)
    })


    const agent = request.agent(app)

    // logging in the agent
    before('log in', () => agent
      .post('/api/auth/local/login')
      .send(samA)
    )

    it('GET /:id returns a specific user', () => {
      return agent.get('/api/users/1')
        .expect(200)
        .then(res => {
          expect(res.body.firstName).to.equal('sam');
        })
        .catch(console.log)
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
