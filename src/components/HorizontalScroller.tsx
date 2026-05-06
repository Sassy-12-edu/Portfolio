export default function HorizontalScroller() {
  return (
    // Parent Container: Controls the horizontal scrolling behavior
    // h-screen w-full: Full viewport dimensions (100vh x 100vw)
    // flex flex-row: Flexbox container oriented horizontally
    // overflow-x-auto: Enable horizontal scrolling
    // overflow-y-hidden: Prevent vertical scrolling
    // snap-x snap-mandatory: CSS snap-scroll on x-axis with mandatory snapping
    // bg-black: Dark background to show section boundaries clearly
    <div className="h-screen w-full flex flex-row overflow-x-auto overflow-y-hidden snap-x snap-mandatory bg-black scroll-smooth">
      
      {/* SECTION 1: Red Section */}
      {/* Child Section: Each section matches the viewport exactly
          w-screen h-screen: Full viewport dimensions (no fractional sizes)
          flex-none: CRITICAL - prevents flexbox from shrinking child sections
          snap-start: Aligns this section to snap point on scroll
          flex items-center justify-center: Centers all content (horizontally & vertically)
      */}
      <div className="w-screen h-screen flex-none snap-start flex items-center justify-center bg-red-600">
        <div className="text-center px-8">
          <h1 className="text-5xl font-bold text-white mb-6">Section One</h1>
          <p className="text-xl text-white opacity-90">
            This section is perfectly centered using flexbox. Scroll horizontally to see snap behavior.
          </p>
        </div>
      </div>

      {/* SECTION 2: Blue Section */}
      {/* Same structure as Section 1, with different styling */}
      <div className="w-screen h-screen flex-none snap-start flex items-center justify-center bg-blue-600">
        <div className="text-center px-8">
          <h1 className="text-5xl font-bold text-white mb-6">Section Two</h1>
          <p className="text-xl text-white opacity-90">
            Each section snaps into position seamlessly. No JavaScript needed—pure CSS snap-scrolling.
          </p>
        </div>
      </div>

      {/* SECTION 3: Green Section */}
      {/* Same structure, different color */}
      <div className="w-screen h-screen flex-none snap-start flex items-center justify-center bg-green-600">
        <div className="text-center px-8">
          <h1 className="text-5xl font-bold text-white mb-6">Section Three</h1>
          <p className="text-xl text-white opacity-90">
            The layout is fully responsive. Try resizing your window—everything stays centered.
          </p>
        </div>
      </div>

    </div>
  );
}
