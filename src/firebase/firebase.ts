// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  User,
  UserCredential,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import {
  addDoc,
  arrayUnion,
  collection,
  deleteDoc,
  doc,
  getFirestore,
  increment,
  setDoc,
  updateDoc,
  writeBatch,
} from "firebase/firestore";
import { Goal } from "./models";
import { write } from "fs";
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
  const semanalRef = doc(db, "activeWeek", "semanal");
  console.log(semanalRef);
  await updateDoc(semanalRef, { award });
};

const editPoints = async (
  currentPoints: number,
  targetPoints: number
): Promise<void> => {
  const semanalRef = doc(db, "activeWeek", "semanal");
  await updateDoc(semanalRef, { currentPoints, targetPoints });
};

const addGoal = async (goal: Goal): Promise<void> => {
  const activeGoalsREf = collection(db, "activeGoals");
  await addDoc(activeGoalsREf, goal);
};

const markGoalAsDone = async (id: string, worth: number): Promise<void> => {
  const goalRef = doc(db, "activeGoals", id);
  const semanalRef = doc(db, "activeWeek", "semanal");

  const batch = writeBatch(db);
  console.log(goalRef);
  batch.update(goalRef, { points: increment(worth) });
  batch.update(semanalRef, { currentPoints: increment(worth) });

  await batch.commit();
};

const markGoalAsUnDone = async (id: string, worth: number): Promise<void> => {
  const goalRef = doc(db, "activeGoals", id);
  const semanalRef = doc(db, "activeWeek", "semanal");

  const batch = writeBatch(db);
  console.log(goalRef);
  batch.update(goalRef, { points: increment(-worth) });
  batch.update(semanalRef, { currentPoints: increment(-worth) });

  await batch.commit();
};

const editGoal = async (id: string, goal: Goal): Promise<void> => {
  const goalRef = doc(db, "activeGoals", id);
  console.log(goalRef);
  await updateDoc(goalRef, { ...goal });
};

const deleteGoal = async (id: string): Promise<void> => {
  const goalRef = doc(db, "activeGoals", id);
  console.log(goalRef);
  await deleteDoc(goalRef);
};

export { app, db, auth, login, logout };
export {
  editAward,
  editPoints,
  addGoal,
  markGoalAsDone,
  markGoalAsUnDone,
  editGoal,
  deleteGoal,
};
