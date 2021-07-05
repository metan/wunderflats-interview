export async function getSearchResults() {
  const res = await fetch('https://wunderflats-api.glitch.me/listings');
  const data = await res.json();
  return data
}
