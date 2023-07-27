const Auth = {
  isAuthenticated: false,
  signin(callback) {
    Auth.isAuthenticated = true;
    setTimeout(callback, 500); //fake async.
  },
  signout(callback) {
    Auth.isAuthenticated = false;
    setTimeout(callback, 500);
  }
};

export default Auth;
