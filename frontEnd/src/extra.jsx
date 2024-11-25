<div
  key={index}
  className="page-content bg-[#fff9f0] rounded-lg p-6"
  style={{
    width: "100%",
    height: "100%",
  }}
>
  {/* Header with enhanced design */}

  <div className="header text-center mb-6">
    <div className="absolute inset-4 border-[3px] border-[#d4af37]" />
    <div className="absolute inset-6 border-[1px] border-[#d4af37]" />

    <div className="ornamental-border flex items-center justify-center gap-2 mb-4">
      <img src="/left3.png" className="w-28  h-14 " alt="" />
      <img
        src="om2.png"
        alt="Om"
        className="w-14 h-42 transform hover:rotate-180 transition-transform duration-1000"
      />
      <img src="/left5.png" className="w-28 h-14 rotate-180" alt="" />
    </div>
    <h1 className="text-3xl font-bold text-[#8B4513] mb-2 font-sanskrit drop-shadow-lg">
      {page.chapter}
    </h1>
    <h2 className="text-xl font-medium text-[#8B4513] font-sanskrit">
      {page.verse}
    </h2>
  </div>

  {/* Content with enhanced styling */}
  <div className="content flex flex-1  m-auto w-80 h-80 rounded-lg p-6 ">
    {/* Sholk */}
    {page.sanskrit}
  </div>

  {/* Enhanced Footer with decorative page number */}
  <div className="footer text-center mt-6 relative">
    <div className="absolute left-0 right-0 top-1/2 transform -translate-y-1/2">
      <div className="h-[1px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent"></div>
    </div>
    <div className="relative inline-block">
      <span className="inline-block px-8 py-2 text-lg text-[#8B4513] border-2 border-[#d4af37] rounded-full bg-[#fff9f0] relative z-10">
        पृष्ठ {index + 1} / {pages.length}
      </span>
    </div>
  </div>
</div>;
