import React from "react";
import HeroSection from "@/components/HeroSection";
import BookCard from "@/components/BookCard";
import {getAllBooks} from "@/lib/actions/book.actions";

const page = async () => {
    const allBooks = await getAllBooks();
    const books = allBooks.success? allBooks.books ??[] : []

  return <div className="wrapper pt-28 mb-10 md:mb-16">
      <HeroSection />
      <div className="library-books-grid">
          {books.map((book) => (
              <BookCard  key={book._id}
                         title={book.title}
                         author={book.author}
                         coverURL={book.coverURL}
                         slug={book.slug}
              />
          ))}
      </div>
  </div>;
};

export default page;
