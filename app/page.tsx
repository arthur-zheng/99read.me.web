import BookSummaryList from "./components/bookSummaryList";
import { mockBookSummaryList } from "./mockResponse";
import Filter from "./components/filter";
import Footer from "./components/footer";

export default async function Home() {
  return (
    <main>
      <Filter />
      <BookSummaryList bookSummaries={mockBookSummaryList} />
      <Footer />
    </main>
  );
}
