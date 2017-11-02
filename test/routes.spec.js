const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server.js');
const should = chai.should();

const environment = process.env.NODE_ENV || 'test';
const configuration = require('../knexfile')[environment];
const database = require('knex')(configuration);

chai.use(chaiHttp);

describe('Client', () => {
  it('should return a homepage with a title', (done) => {
    chai.request(server)
      .get('/')
      .end((error, response) => {
        response.should.have.status(200);
        response.should.be.html;
        response.res.text.should.include('AmazonBay');
        done();
      });
  });

  it('should return an error if the route does not exist', (done) => {
    chai.request(server)
      .get('/fakenews')
      .end((error, response) => {
        response.should.have.status(404);
        done();
      });
  });
});

describe('API', () => {
  before((done) => {
    database.migrate.latest()
      .then(() => done())
      .catch((error) => console.log(error));
  });

  beforeEach((done) => {
    database.seed.run()
      .then(() => done())
      .catch((error) => console.log(error));
  });

  describe('GET /api/v1/inventory', () => {
    it('should retrieve inventory', (done) => {
      chai.request(server)
        .get('/api/v1/inventory')
        .end( (error, response) => {
          response.should.have.status(200);
          response.should.be.json;
          response.body.length.should.equal(10);
          response.body.forEach(item => {
            item.should.have.property('id');
            item.should.have.property('item_title');
            item.should.have.property('item_description');
            item.should.have.property('item_image');
            item.should.have.property('item_price');
          });
          done();
        });
    });
  });
});
