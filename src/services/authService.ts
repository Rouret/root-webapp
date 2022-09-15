import HTTPService from "./HTTPService";

export function login(user: any) {
  return HTTPService.post(
    `${import.meta.env.VITE_API}/auth/login`,
    user,
    false
  );
}

export function register(user: any) {
  return HTTPService.post(
    `${import.meta.env.VITE_API}/auth/register`,
    user,
    false
  );
}

export default {
  login,
  register,
};
