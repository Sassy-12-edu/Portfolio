import MagicBento from './MagicBento';

export default function PortfolioHorizontalScroller() {
  return (
    // ============================================================
    // LAYER 1: MACRO ARCHITECTURE (Parent Container)
    // ============================================================
    // Full-screen horizontal scroller with CSS snap-scrolling
    // h-screen w-full: Full viewport dimensions
    // flex flex-row: Horizontal flexbox layout
    // overflow-x-auto overflow-y-hidden: Horizontal scroll only
    // snap-x snap-mandatory: CSS snap-scrolling on x-axis (mandatory)
    // bg-neutral-950: Dark mode background
    // scroll-smooth: Smooth scrolling behavior
    <div className="h-screen w-full flex flex-row overflow-x-auto overflow-y-hidden snap-x snap-mandatory bg-neutral-950 scroll-smooth">

      {/* ============================================================
          SECTION 1: Hero/Title Section
          ============================================================ */}
      <section className="w-screen h-screen flex-none snap-start grid place-items-center bg-neutral-950 border-l border-neutral-800">
        
        {/* The Wrapper: Constraints width and centers itself */}
        <div className="w-11/12 max-w-5xl flex flex-col items-center text-center">
          
          <h1 className="text-7xl md:text-8xl font-bold text-white mb-6 leading-tight">
            Portfolio
          </h1>
          
          <p className="text-xl md:text-2xl text-neutral-300">
            Explore my recent projects and creative work
          </p>
        </div>
      </section>

      {/* ============================================================
          SECTION 2: Magic Bento Portfolio Grid
          ============================================================ */}
      <section className="w-screen h-screen flex-none snap-start flex items-center justify-center bg-neutral-950 border-l border-neutral-800 overflow-hidden">
        <div className="w-full h-full flex items-center justify-center">
          <MagicBento 
            textAutoHide={true}
            enableStars={true}
            enableSpotlight={true}
            enableBorderGlow={true}
            enableTilt={false}
            enableMagnetism={false}
            clickEffect={true}
            spotlightRadius={400}
            particleCount={12}
            glowColor="132, 0, 255"
            disableAnimations={false}
          />
        </div>
      </section>
      {/* ============================================================
          SECTION 3: Contact Section
          ============================================================ */}
      <section className="w-screen h-screen flex-none snap-start grid place-items-center bg-neutral-950 border-l border-neutral-800">
        
        {/* The Wrapper: Constraints width and centers itself */}
        <div className="w-11/12 max-w-5xl flex flex-col items-center text-center">
          
          <h2 className="text-6xl md:text-8xl font-bold text-white mb-6">
            Get in Touch
          </h2>
          
          <p className="text-lg md:text-xl text-neutral-300">
            Let's collaborate on your next project. Feel free to reach out with any inquiries.
          </p>
        </div>
      </section>

    </div>
  );
}
