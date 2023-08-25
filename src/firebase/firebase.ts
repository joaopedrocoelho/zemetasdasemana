// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  User,
  UserCredential,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { doc, getFirestore, updateDoc } from "firebase/firestore";
import { Goal } from "./models";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const login = async (
  email: string,
  password: string
): Promise<UserCredential> => {
  return await signInWithEmailAndPassword(auth, email, password);
};

const logout = async (): Promise<void> => {
  return signOut(auth);
};

const editAward = async (award: string): Promise<void> => {
  const semanalRef = doc(db, "metas", "semanal");
  console.log(semanalRef);
  await updateDoc(semanalRef, { award });
};

const editPoints = async (
  currentPoints: number,
  targetPoints: number
): Promise<void> => {
  const semanalRef = doc(db, "metas", "semanal");
  await updateDoc(semanalRef, { currentPoints, targetPoints });
};

const addGoal = async (goal: Goal): Promise<void> => {};

const markGoalAsDone = async (id: string): Promise<void> => {};

const markGoalAsUnDone = async (id: string): Promise<void> => {};

const editGoal = async (id: string): Promise<void> => {};

const deleteGoal = async (id: string): Promise<void> => {};

export { app, auth, login, logout };
export {
  editAward,
  editPoints,
  addGoal,
  markGoalAsDone,
  markGoalAsUnDone,
  editGoal,
  deleteGoal,
};
