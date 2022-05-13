import {
  getAuth,
  GoogleAuthProvider,
  GithubAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

class AuthService {
  constructor() {
    this.firebaseAuth = getAuth();
    this.googleProvider = new GoogleAuthProvider();
    this.githubProvider = new GithubAuthProvider();
  }

  login(providerName) {
    return signInWithPopup(this.firebaseAuth, this.googleProvider);
  }

  logout() {
    signOut(this.firebaseAuth)
      .then(() => {
        console.log("logout!");
      })
      .catch((error) => {
        console.log("logout! Error!!!!!");
      });
  }

  onAuthChange(onUserChanged) {
    onAuthStateChanged(this.firebaseAuth, (user) => {
      onUserChanged(user);
    });
  }
}

export default AuthService;
