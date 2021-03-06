const pool = require('../lib/utils/pool.js');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

// jest.mock('twilio', () => () => ({
//   messages: {
//     create: jest.fn(),
//   },
// }));

describe('03_separation-of-concerns-demo routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('creates a new order in our database and sends a text message', async () => {
    const expectation = {
      id: '1',
      quantityOfItems: 10,
    };

    const res = await request(app)
      .post('/api/v1/orders')
      .send({ quantityOfItems: 10 });

    expect(res.body).toEqual(expectation);
  });
});
