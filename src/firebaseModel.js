import { db } from './firebaseConfig.js';
import { collection, addDoc, serverTimestamp, getDocs } from 'firebase/firestore';

export const saveGame = async (username, score, time, gameMode) => {
  await addDoc(collection(db, 'games'), {
    username,
    score,
    time,
    gameMode,
    createdAt: serverTimestamp(),
  });
};

export const getGames = async () => {
  const gamesCollection = collection(db, 'games');
  const snapshot = await getDocs(gamesCollection);

  return snapshot.docs.map(doc => doc.data());
};
