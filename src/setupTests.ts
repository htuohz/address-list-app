// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import { rest } from 'msw';
import { setupServer } from 'msw/lib/node';

export const handlers = [
    rest.get("http://localhost:8000/addresses", (req, res, ctx) => {
        return res(
            ctx.json([
                {
                    city: "Sydney",
                    country_code: "AU",
                    created_at: null,
                    id: 8,
                    line1: "12",
                    line2: "King",
                    line3: "Street",
                    line4: "n",
                    postal_code: "1001",
                    state_code: "NSW",
                    state_name: "New South Wales",
                    updated_at: null,
                    user_id: 2,
                },
            ]),
            ctx.delay(150)
        );
    }),
    rest.post("http://localhost:8000/logout", (req, res, ctx) => {
        return res(ctx.status(204))
    })
];

const server = setupServer(...handlers);

// Enable API mocking before tests.
beforeAll(() => server.listen());

// Reset any runtime request handlers we may add during the tests.
afterEach(() => server.resetHandlers());

// Disable API mocking after the tests are done.
afterAll(() => server.close());
