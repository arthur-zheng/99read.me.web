export type BookSummaryType = {
  _id: string;
  title: string;
  summary: string;
  tags: string[];
  author: string;
  category: string;
  chapters: BookSummaryChapterType[];
  completed: boolean;
  // rating: string;
};

export type BookSummaryChapterType = {
  _id: string;
  chapterTitle: string;
  chapterId: string;
};

export type ChapterType = {
  bookId: string;
  _id: string;
  content: [string];
  chapterTitle: string;
  chapterNumber: number;
  isLast?: boolean;
};

export type GenerateMetadataPropType = {
  params: { id: string; chapterId: string };
  searchParams: { [key: string]: string | string[] | undefined };
};
