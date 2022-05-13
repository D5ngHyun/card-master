import {
  getAuth,
  GoogleAuthProvider,
  GithubAuthProvider,
  signInWithPopup,
} from "firebase/auth";

class AuthService {
  constructor() {
    this.firebaseAuth = getAuth();
    this.googleProvider = new GoogleAuthProvider();
    this.githubProvider = new GithubAuthProvider();
  }

  login(providerName) {
    // const authProvider = this.providerName;

    return signInWithPopup(this.firebaseAuth, this.googleProvider);
  }
}

export default AuthService;
