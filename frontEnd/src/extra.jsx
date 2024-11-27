import React, { useState } from "react";
import Page from "./components/page";

const App = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const pages = [
    {
      title: "Chapter 1",
      content: "This is the first page content.",
    },
    {
      title: "Chapter 2",
      content: "This is the second page content.",
    },
    {
      title: "Chapter 3",
      content: "This is the third page content.",
    },
  ];

  const handleNext = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 0) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-yellow-200 flex items-center justify-center">
      <div className="relative w-[500px] h-[600px] perspective">
        {/* Left Page */}
        {currentPage > 0 && (
          <Page
            page={pages[currentPage - 1]}
            position="left"
            flipped
            handleFlip={handlePrev}
          />
        )}

        {/* Current Page */}
        <Page
          page={pages[currentPage]}
          position="current"
          handleFlip={handleNext}
        />

        {/* Right Page */}
        {currentPage < pages.length - 1 && (
          <Page
            page={pages[currentPage + 1]}
            position="right"
            handleFlip={handleNext}
          />
        )}
      </div>
    </div>
  );
};

export default App;
