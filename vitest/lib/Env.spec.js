import { expect, test } from 'vitest'
import { GRAPHQL_API_URL } from '/src/lib/Env.js'

test("Expect to be GRAPHQL_API_URL be http://localhost:8080/graphql", () => {
    expect(GRAPHQL_API_URL).toBe("http://localhost:8080/graphql")
  })