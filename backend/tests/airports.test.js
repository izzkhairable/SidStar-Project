//user.js
jest.mock('node-fetch');
const fetch= require('node-fetch');
const {Response} = jest.requireActual('node-fetch');
// const {Error} = jest.requireActual('node-fetch');
const server = require('../app');
const supertest = require('supertest');
const requestWithSupertest = supertest(server);


// jest.mock("node-fetch", () => (url, data) => {
//     return {
//         "json": ()=>[{
//             "uid": "WSAP",
//             "name": "WSAP",
//             "icao": "WSAP",
//             "lat": 1.3605555555555555,
//             "lng": 103.90944444444445,
//             "alt": 65,
//             "iata": null
//         }]
//     }
// });

describe('Airport Endpoint Backend', () => {
    it('GET /airports should get all airports', async () => {
        fetch.mockReturnValue(Promise.resolve(new Response( JSON.stringify([{
            "uid": "WSAP",
            "name": "WSAP",
            "icao": "WSAP",
            "lat": 1.3605555555555555,
            "lng": 103.90944444444445,
            "alt": 65,
            "iata": null
        }]))))
        const res = await requestWithSupertest.get('/airports/');
        expect(res.status).toEqual(200);
        expect(res.type).toEqual(expect.stringContaining('json'));
        expect(res.body).toEqual([{
            "uid": "WSAP",
            "name": "WSAP",
            "icao": "WSAP",
            "lat": 1.3605555555555555,
            "lng": 103.90944444444445,
            "alt": 65,
            "iata": null
        }])
    });

});