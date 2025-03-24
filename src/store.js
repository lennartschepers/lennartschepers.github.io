import { writable } from 'svelte/store';

export const playersThisRound = writable([]);
export const playersNextRound = writable([]);
export const currentPlayers = writable();
export const isPlayer1sTurn = writable(true);
export const currentCategory = writable(0);
export const currentCategoryPhase = writable("");
export const currentQuestion = writable(0);
export const isController = writable(false);
export const questionHistory = writable([]);
export const questionNr369 = writable(0);
