// fetch based on url
export async function fetchJson<T>(url: string): Promise<T> {
  // export async function fetch(url: string, env = "prod"): any {
  url = process.env.ENDPOINT + url;
  const res = await fetch(url);
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  return res.json() as Promise<T>;
}
