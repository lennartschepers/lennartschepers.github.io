<!--this component is also used to control the start of a new round.-->
<script>
    import { onMount } from "svelte";
    import DrieZesNegenUitleg from "./DrieZesNegenUitleg.svelte";
    import { updateStateAdd, updateStateSet, updateStateRemove } from "./lib/utils";
    import SlotMachine from "./SlotMachine.svelte";
    import { isController, currentCategoryPhase, isPlayer1sTurn, questionNr369, currentPlayers, playersThisRound } from "./store";

$: console.log('phase', $currentCategoryPhase)

// only supporting 2 player modes for now
const selectNewCurrentPlayers = () => {
  if ($playersThisRound.length == 2) {
    updateStateSet("currentPlayers", $playersThisRound)
    updateStateSet("playersThisRound", [])
  } else if ($playersThisRound.length == 1) {
    console.error('Only one player left, this is not supposed to happen!!')
  } else {
    let shuffled = $playersThisRound.sort(() => 0.5 - Math.random())
    updateStateSet("currentPlayers", shuffled.slice(0,2))
    updateStateRemove("playersThisRound", shuffled[0])
    updateStateRemove("playersThisRound", shuffled[1])
  }
}

const handleCorrect = () => {
    updateStateSet('questionNr369', $questionNr369 + 1)
    updateStateSet('currentCategoryPhase', "preShow")
  
}

onMount(() => {
    selectNewCurrentPlayers()
    updateStateSet('questionNr369', 1)
    console.log('onmount called')
})


</script>


<div>
  <button class="text-white" on:click={selectNewCurrentPlayers}>Nieuwe current</button>
  <button class="text-white" on:click={ () => updateStateSet('currentCategory', 0)}>Reset categorie</button>
</div>

{#if $isController}
  <button class="text-white" on:click={ () => updateStateSet('currentCategoryPhase', 'uitleg')}>Naar uitleg</button>
{/if}

{#if $currentCategoryPhase === "uitleg"}
<DrieZesNegenUitleg />
{:else if $currentCategoryPhase === "preShow"}
<p>{$questionNr369}</p>
{#if $isController}
<h1>Voorbeeld vraag?</h1>
<p class="text-3xl">Voorbeeld antwoord</p>
<button class="text-white" on:click={ () => updateStateSet('currentCategoryPhase', 'show')}>Toon de vraag</button>
{/if}
{:else if $currentCategoryPhase === "show"}
<p>{$questionNr369}</p>
<h1>Voorbeeld vraag</h1>
<p class="text-3xl">Voorbeeld antwoord</p>
{#if $isController}
  <button on:click={handleCorrect}>Goed</button>
  <button>Fout/Pas</button>
{/if}

{:else}
<SlotMachine targetName1={$currentPlayers[0]?.name} targetName2={$currentPlayers[1]?.name}/>
{/if}
