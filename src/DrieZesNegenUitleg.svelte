<script>
    import { updateStateSet } from "./lib/utils";
    import { isController } from "./store";


const startRound = () => {
  updateStateSet('currentCategoryPhase', "preShow") 
}
</script>

<div>
<h1 class="font-bold">Ronde 3-6-9</h1>
<p>Deze ronde bestaat uit 9 open vragen. Beide tellers starten op 60 seconden. De juiste antwoorden op de vragen 3, 6 en 9 leveren 20 seconden op. Is je antwoord fout of pas je de vraag? Dan gaat de beurt naar de tegenspeler. In het balkje bovenin zie je hoeveel tijd je hebt om de vraag te beantwoorden.

{#if $isController}
<button on:click={startRound}>Begin</button>
{/if}
</div>
