export async function getVan() {
  const rest = await fetch("api/vans");
  const data = await rest.json();
  return data.vans;
}
