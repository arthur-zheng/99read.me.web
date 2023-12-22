import BookSummaryList from "./components/bookSummaryList";
import { mockBookSummaryList } from "./mockResponse";
import Filter from "./components/filter";
import Footer from "./components/footer";

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
      <Footer />
    </main>
  );
}
