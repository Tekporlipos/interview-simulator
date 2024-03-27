import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDWxv3ZCNsmwN18RH43ru_wRXPC41H_sJY",

  authDomain: "geneieaibuilder.firebaseapp.com",

  projectId: "geneieaibuilder",

  storageBucket: "geneieaibuilder.appspot.com",

  messagingSenderId: "259008153621",

  appId: "1:259008153621:web:9ac86fbbcc52ca801c261c",

  measurementId: "G-D0G1RY9BY8",
};
let app;
// Initialize Firebase
if (typeof window !== "undefined" && !app) {
  app = initializeApp(firebaseConfig);
}

const analytics =
  typeof window !== "undefined" && app ? getAnalytics(app) : null;

export default analytics;
