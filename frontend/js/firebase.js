import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDROKaIfN8Vsja0kNZLOgXWM3-QqubRdvE",
  authDomain: "food-redistribution-fafd1.firebaseapp.com",
  projectId: "food-redistribution-fafd1",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);