import authService from "@/services/authService";

export default {
  async register({ commit }, userToRegister: any): Promise<any> {
    const user = await authService.register(userToRegister);

    const token: any = await authService.login(userToRegister);

    commit("setAuthenticated", true);
    commit("setAuthToken", token.access_token);
    commit("setUser", user);

    return user;
  },
};
