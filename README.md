# ATTENTION

This is a living, WIP document, which has the ultimate aim to serve as a comprehensive guide for developers, QA engineers and other interested parties
to run, maintain and optimize Cypress E2E tests for the Real World App application.

## Automated tests

The folder contains automated frontend tests which are implemented using the [Cypress] framework.


## Running tests

Important:

If you want to run all test suites continuosly, make a change in a "Registration_user" folder (path: ../../fixtures/data/users/registration_user) by adding one random number or a letter on a "username" object, because of connections between a test suites. There is a first suite with a registration process and that is not possible for multiple time.

In order to run the tests, first install the dependencies: 

```bash
npm install
```

Then, in order to run all tests in console, issue:

```bash
npm run test
```

If you want to run tests on UI, issue:

```bash
npm run cypress:open
```

If you want to run all tests, issue:

```bash
npm test
```

If you want to run tests in headless, issue:

```bash
npm run test:headless
```

If you want to run specific test suite, issue:

```bash
npm run test:specific  (in order to run specific test suite, you can add path to file in a test script in a package.json)
```



[Cypress]:                              https://www.cypress.io/