// client/hooks/useMockAuth.ts
export const useMockAuth = () => {
  return {
    isAuthenticated: true, // always logged in
    user: {
      sub: 'dev-user',
      nickname: 'DevUser',
      email: 'dev@example.com',
    },
    loginWithPopup: async () => {}, // no-op
    logout: () => {}, // no-op
  }
}
