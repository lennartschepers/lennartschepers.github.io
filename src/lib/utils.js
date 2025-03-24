  import { auth, firestore, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged, doc, onSnapshot, setDoc, arrayUnion, arrayRemove, updateDoc } from '../firebase';
  import { currentPlayers, playersThisRound, currentCategory, currentCategoryPhase, currentQuestion, playersNextRound, questionHistory, isController, isPlayer1sTurn, questionNr369 } from '../store';

  // Sync state with Firestore
  export const syncState = () => {
    const docRef = doc(firestore, 'gameState', 'currentState');

    onSnapshot(docRef, (docSnapshot) => {
      if (docSnapshot.exists()) {
        const data = docSnapshot.data();
        currentPlayers.set(data.currentPlayers);
        playersThisRound.set(data.playersThisRound);
        playersNextRound.set(data.playersNextRound);
        currentCategory.set(data.currentCategory);
        currentCategoryPhase.set(data.currentCategoryPhase);
        currentQuestion.set(data.question);
        questionHistory.set(data.questionHistory);
        questionNr369.set(data.questionNr369);
        isPlayer1sTurn.set(data.isPlayer1sTurn);
      }
    });
  };

  /** Updates store and syncs it to the backend.
    * @param {string} storeName
    * @param {any} state
    */
  export const updateStateAdd = async (storeName, state) => {
    const docRef = doc(firestore, 'gameState', 'currentState');
    await updateDoc(docRef, {
      [storeName]: arrayUnion(state)
    });
  };

  export const updateStateRemove = async (storeName, state) => {
    const docRef = doc(firestore, 'gameState', 'currentState');
    await updateDoc(docRef, {
      [storeName]: arrayRemove(state)
    });
  };

  export const updateStateSet = async (storeName, state) => {
    const docRef = doc(firestore, 'gameState', 'currentState');
    await updateDoc(docRef, {
      [storeName]: state
    });
  };


