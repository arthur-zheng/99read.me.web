import BookSummaryList from "./components/bookSummaryList";
import Filter from "./components/filter";

export default async function Home() {
  return (
    <main>
      <Filter />
      <BookSummaryList />
    </main>
  );
}
