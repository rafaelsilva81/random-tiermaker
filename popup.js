document.getElementById('btn-randomize').addEventListener('click', () => {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.scripting.executeScript({
      target: { tabId: tabs[0].id },
      function: moveCharactersToRandomTierRow,
    });
  });
});

function moveCharactersToRandomTierRow() {
  // This function will be injected and executed in the context of the current page
  const tierRows = document.querySelectorAll('.tier-row');
  const characters = document.querySelectorAll('.character');

  characters.forEach(character => {
    const randomTierRow = tierRows[Math.floor(Math.random() * tierRows.length)];
    // get the child that has the classes "tier" and "sort" inside of the random tier row
    const tier = randomTierRow.querySelector('.tier.sort');
    tier.appendChild(character.cloneNode(true)); // Clone and append to random tier row
    character.remove(); // Remove original character element
  });
}
