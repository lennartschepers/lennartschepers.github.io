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
        <span>
          <svg width="16" height="16" viewBox="0 0 234 234" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M234 117C234 181.617 181.617 234 117 234C52.3827 234 0 181.617 0 117C0 52.3827 52.3827 0 117 0C181.617 0 234 52.3827 234 117Z" fill="#FFBB00"/>
          <path d="M197 117C197 161.183 161.183 197 117 197C72.8172 197 37 161.183 37 117C37 72.8172 72.8172 37 117 37C161.183 37 197 72.8172 197 117Z" fill="#2B00FF"/>
          <path d="M160 116.5C160 140.524 140.524 160 116.5 160C92.4756 160 73 140.524 73 116.5C73 92.4756 92.4756 73 116.5 73C140.524 73 160 92.4756 160 116.5Z" fill="#FF0000"/>
          </svg>
        </span>
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


