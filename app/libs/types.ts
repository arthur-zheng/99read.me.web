export interface BookSummary {
  _id: string;
  title: string;
  summary: string;
  tags: string[];
  author: string;
  category: string;
  chapters: {
    title: string;
    chapterTitle: string;
    chapterId: string;
    content: string[];
  }[];
  completed: boolean;
  // rating: string;
}
