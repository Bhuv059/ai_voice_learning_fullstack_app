import React from "react";
import HeroSection from "@/components/HeroSection";
import BookCard from "@/components/BookCard";
import {sampleBooks} from "@/lib/constants";

const page = () => {
  return <div className="wrapper pt-28 mb-10 md:mb-16">
      <HeroSection />
      <div className="library-books-grid">
          {sampleBooks.map((book) => (
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
