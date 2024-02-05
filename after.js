if (document.location.hostname.indexOf('tiermaker.com') !== -1) {
  const shareContainer = document.getElementById('share-container');
  if (shareContainer) {

    const myButton = document.createElement('button');
    myButton.textContent = 'Randomize Tiers';


    myButton.addEventListener('click', function () {

      const tierRows = document.querySelectorAll('.tier-row');
      const characters = document.querySelectorAll('.character');

      characters.forEach(character => {
        const randomTierRow = tierRows[Math.floor(Math.random() * tierRows.length)];

        const tier = randomTierRow.querySelector('.tier.sort');
        tier.appendChild(character.cloneNode(true));
        character.remove();
      });
    });

    shareContainer.appendChild(myButton);
  }
}
