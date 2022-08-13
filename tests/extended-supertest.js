const supertest = require('supertest');

class ExtendedSupertest {
  constructor(app, { template, routeParams, method = 'post' }) {
    this.agent = supertest.agent(app);
    this.template = template;
    this.routeParams = routeParams;
    this.method = method;
  }

  getUrl(customRouteParams) {
    const { routeParams, template } = this;

    const urlRouteParams = { ...routeParams, ...customRouteParams };

    const templateArray = template.split('/');

    for (const param in urlRouteParams) {
      const paramIndex = templateArray.indexOf(`:${param}`);
      if (paramIndex === -1) throw new Error(`:${param} - no route param in template!`);
      templateArray[paramIndex] = urlRouteParams[param];
    }

    return encodeURI(templateArray.join('/'));
  }

  request(customRouteParams = {}) {
    const { agent, method } = this;

    const url = this.getUrl(customRouteParams);

    return agent[method](url);
  }

  testBodyFields(testObjects) {
    describe('Body Fields', () => {
      for (const testObject of testObjects) {
        const { name, tests } = testObject;

        // eslint-disable-next-line jest/valid-title
        describe(name, () => {
          for (const test of tests) {
            const { message: testName, data, error, status } = test;

            // eslint-disable-next-line jest/valid-title
            it(testName, async () => {
              const response = await this.request().send(data);

              const { statusCode, body } = response;

              expect(statusCode).toBe(status || 400);

              const { message } = body;

              expect(message).toBe(error);
            });
          }
        });
      }
    });

    return this;
  }
}

module.exports = ExtendedSupertest;
