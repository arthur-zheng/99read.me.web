import BookSummaryList from "./components/bookSummaryList";
import { ServerFilters } from "./components/serverFilters";
import { BookListPagination } from "./components/bookListPagination";
import { BookSummaryType } from "./libs/types";
import { fetchJson } from "./libs/fetchJson";

export default async function Home({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) {
  const limit = parseInt(searchParams.limit || "", 10) || 20;
  const skip = parseInt(searchParams.skip || "", 10) || 0;
  const category = searchParams.category || "quanbu";

  const bookSummaries: BookSummaryType[] = await fetchJson(
    `/?limit=${limit}&skip=${skip}&category=${category}`
  );

  return (
    <main>
      <ServerFilters category={category} />
      <BookSummaryList bookSummaries={bookSummaries} />
      <BookListPagination
        limit={limit}
        skip={skip}
        category={category}
        isEnd={bookSummaries.length === 0 || bookSummaries.length < limit}
      />
    </main>
  );
}
