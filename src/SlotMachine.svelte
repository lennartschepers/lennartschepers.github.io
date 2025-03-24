<script>
    import { onMount } from 'svelte';
import { expoOut } from 'svelte/easing';
    import { currentPlayers, playersThisRound } from './store';

// names is a combination of currentPlayers and playersThisRound
let names = $playersThisRound.map(obj => obj.name).concat($currentPlayers.map(obj => obj.name))
let displayName1 = "";
let displayName2 = "";
let isRunning = false;

let interval;
let totalDuration = 10000; // Total animation duration (ms)

export let targetName1;
export let targetName2;
let startTime;

function startSlotMachine() {
  if (isRunning) return;
  
  isRunning = true;
  startTime = Date.now();
  let elapsed = 0;

  function animate() {
    elapsed = Date.now() - startTime;
    let progress = elapsed / totalDuration; // 0 to 1
    
    if (progress >= 1) {
      clearInterval(interval);
      displayName1 = targetName1;
      displayName2 = targetName2;
      isRunning = false;
      return;
    }

    let easedProgress = expoOut(progress); // Fast start, slow end
    let speed = 50 + (100 * easedProgress * easedProgress); // Starts fast, slows to ~1000ms

    displayName1 = names[Math.floor(Math.random() * names.length)];
    displayName2 = names[Math.floor(Math.random() * names.length)];

    clearInterval(interval);
    interval = setInterval(animate, speed);
  }

  animate(); // Start animation
}

onMount(() => {
  startSlotMachine()
})
</script>

<div class="flex gap-4 mt-3 items-center justify-center space-y-4">
  <div class="text-6xl mb-0 text-black font-bold h-16 flex items-center justify-center w-80 bg-white border-2 border-gray-300 rounded-lg shadow-lg">
    {displayName1}
  </div>
  <span class="font-bold text-xl mb-0 text-white">tegen</span>
  <div class="text-6xl text-black font-bold h-16 flex items-center justify-center w-80 bg-white border-2 border-gray-300 rounded-lg shadow-lg">
    {displayName2}
  </div>
</div>
