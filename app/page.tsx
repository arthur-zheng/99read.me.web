import BookSummaryList from "./components/bookSummaryList";
import { mockBookSummaryList } from "./mockResponse";
import Filter from "./components/filter";

export default async function Home() {
  return (
    <main>
      <Filter />
      <BookSummaryList
        bookSummaries={[
          ...mockBookSummaryList,
          ...mockBookSummaryList,
          ...mockBookSummaryList,
          ...mockBookSummaryList,
        ].sort(() => 0.5 - Math.random())}
      />
    </main>
  );
}
