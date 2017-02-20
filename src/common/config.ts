import { AuthProviders, AuthMethods } from 'angularfire2';

export const config = {
    firebase: {
        apiKey: "AIzaSyBicGdhNExg3Vae_CqJvGKD64NFElEu4nQ",
        authDomain: " angular-warsaw.firebaseapp.com",
        databaseURL: "https://angular-warsaw.firebaseio.com/",
        storageBucket: ""
    },
    firebaseAuth: {
        provider: AuthProviders.Password,
        method: AuthMethods.Password
    }
};