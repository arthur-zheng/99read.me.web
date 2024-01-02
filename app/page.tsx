import BookSummaryList from "./components/bookSummaryList";
import { mockBookSummaryList } from "./mockResponse";
import Filter from "./components/filter";

// fetch based on url
async function getData() {
  const res = await fetch("http://localhost:5001/");
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default async function Home() {
  const bookSummaries = await getData();

  return (
    <main>
      <Filter />
      <BookSummaryList bookSummaries={bookSummaries} />
    </main>
  );
}
