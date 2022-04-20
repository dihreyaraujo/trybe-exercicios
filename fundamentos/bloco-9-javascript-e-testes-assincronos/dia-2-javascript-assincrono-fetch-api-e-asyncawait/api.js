// api.js
const fetchCoins = async () => {
  const url = 'https://api.coincap.io/v2/assets';

  const coins = await fetch(url)
    .then((response) => response.json())
    .then((data) => data.data)
    .catch((error) => error.toString());

  return coins;
}

const setCoins = async () => {
  const coins = await fetchCoins();

  const coinsList = document.getElementById('coins-list');
  const name = coins.map((element) => element.name);

  for (let index = 0; index <= 10; index += 1) {
    const newLi = document.createElement('li');
    newLi.innerText = `${coins[index].name} (${coins[index].symbol}): ${parseFloat(coins[index].priceUsd).toFixed(2)}`
    coinsList.appendChild(newLi);
  }
}

window.onload = () => setCoins();