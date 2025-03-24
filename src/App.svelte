<script>
  import svelteLogo from './assets/svelte.svg'
  import Counter from './lib/Counter.svelte'
  import DrieZesNegen from './DrieZesNegen.svelte';

  import { onMount } from 'svelte';
  import { auth, firestore, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged, doc, onSnapshot, setDoc, arrayUnion, arrayRemove, updateDoc } from './firebase';
  import { currentPlayers, playersThisRound, currentCategory, currentQuestion, playersNextRound, questionHistory, isController } from './store';
  import { updateStateSet, updateStateAdd, updateStateRemove, syncState } from './lib/utils.js';

  let user = null;
  let loading = true;
  let newPlayer = '';


  // Google login
  const loginWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      user = result.user;
      console.log('Logged in as:', user.displayName);
    } catch (error) {
      console.error(error);
    }
  };

  // Sign out
  const signOutHandler = async () => {
    try {
      await signOut(auth);
      user = null;
    } catch (error) {
      console.error(error);
    }
  };


  const startQuiz = () => {
    updateStateSet("currentCategory", 1)
  }

  // Check if a user is signed in
  onAuthStateChanged(auth, (userState) => {
    if (userState) {
      user = userState;
      syncState();
    } else {
      user = null;
    }
    loading = false;
  });

  const addPlayer = async () => {
    const newPlayerObj = {'name': newPlayer, 'score': 0}
    if (!newPlayer) return;
    updateStateAdd("playersThisRound", newPlayerObj)
    newPlayer = ""
  }

  // Remove player from Firestore and local store
  const removePlayer = async (playerName) => {
    updateStateRemove("playersThisRound", playerName)
  };

  onMount(() => {
    // Optionally, call Firestore update function
    updateStateSet('currentCategoryPhase', "")
  });

</script>


<main>
  {#if loading}
    <p>Loading...</p>
  {:else}
    {#if user}
      
      {#if $currentCategory == 0}
        <p class="font-bold flex text-2xl sm:text-5xl justify-center items-center">de
        <span><img class="w-12 h-12 sm:w-24 sm:h-24" src="/src/assets/logo.svg" alt="logo" /></span>
        domste mens</p>
        <div class="mb-4">
          <p class="text-xl mt-12 ">Voor wie is dit scherm?</p>
          <select bind:value={$isController}>
            <option value={false}>Scherm voor de spelers</option>
            <option value={true}>Scherm voor de quizmaster</option>
          </select>

        </div>
        {#if $isController}

        <div class="p-10">
          <div>
            <p class="font-bold">Spelers:</p>
            <ul>
              {#each $playersThisRound as player}
                <div class="flex gap-4 justify-center mb-1">
                  <li>{player?.name}</li><span class="font-bold  px-1 bg-black text-white cursor-pointer" on:click={removePlayer(player)}>X</span>
                </div>
              {/each}
            </ul>
          </div>

          <input class="bg-white p-2 rounded text-black my-2" bind:value={newPlayer}>
          <button class="text-white" on:click={addPlayer}>Speler toevoegen</button>
        </div>
          <button class="text-white" on:click={startQuiz}>Start de quiz</button>
        {:else}
          <h1 class="mt-30 font-bold">wachten op de quizmaster...</h1>
        {/if}

      <p class="mt-30">Ingelogd als: {user.displayName}</p>
      <button on:click={signOutHandler}>uitloggen</button>
      {:else if $currentCategory ==1 }
      <DrieZesNegen />
      {:else}
        <button class="text-white" on:click={ () => updateStateSet('currentCategory', 0)}>Reset categorie</button>
      {/if}

    {:else}
      <button on:click={loginWithGoogle}>Login with Google</button>
    {/if}
  {/if}
</main>


