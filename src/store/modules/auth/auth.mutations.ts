export default {
  setAuthToken(state: any, token: string) {
    state.token = token;
  },
  setAuthenticated(state: any, authenticated: boolean) {
    state.authenticated = authenticated;
  },
  setUser(state: any, user: any) {
    state.user = user;
  },
};
