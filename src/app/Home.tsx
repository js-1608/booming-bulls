import { useState, useEffect } from 'react';

export default function TimelineComponent() {
  const [lineProgress, setLineProgress] = useState(0);
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    { id: 1, title: "Register your account" },
    { id: 2, title: "Deposit your funds" },
    { id: 3, title: "KYC" },
    { id: 4, title: "Start Trading & Earn Profits" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Get the timeline section element
      const timelineSection = document.querySelector('[data-timeline="container"]');
      if (!timelineSection) return;

      const rect = timelineSection.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const sectionHeight = rect.height;
      const sectionTop = rect.top;

      // Calculate when the section enters and exits the viewport
      const enterPoint = windowHeight * 0.8; // Start animation when 80% in view
      const exitPoint = windowHeight * 0.2;  // End animation when 20% in view

      // Calculate progress based on scroll position
      let progress = 0;
      
      if (sectionTop <= enterPoint && sectionTop >= exitPoint - sectionHeight) {
        // Section is in the active scroll range
        const scrollRange = sectionHeight + (enterPoint - exitPoint);
        const scrolled = enterPoint - sectionTop;
        progress = Math.max(0, Math.min(1, scrolled / scrollRange));
      } else if (sectionTop < exitPoint - sectionHeight) {
        // Section has been fully scrolled past
        progress = 1;
      }

      setLineProgress(progress);

      // Calculate active step based on progress
      const stepIndex = Math.floor(progress * steps.length);
      setActiveStep(Math.min(stepIndex, steps.length - 1));
    };

    // Add scroll event listener with throttling for performance
    let ticking = false;
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', throttledScroll, { passive: true });
    handleScroll(); // Initial call

    return () => window.removeEventListener('scroll', throttledScroll);
  }, [steps.length]);

  return (
    <section
      data-timeline="container"
      className="relative bg-contain bg-center bg-no-repeat before:absolute before:inset-0 before:bg-black/80 before:z-0 m-auto"
      style={{ 
        backgroundImage: "url('/herobg.png')",
        minHeight: '160vh' // Ensure enough height for scrolling
      }}
    >
      <div className="max-w-4xl mx-auto relative py-16">
        {/* Central vertical line container */}
        <div className="absolute left-10 md:left-1/2 transform -translate-x-1/2 top-20 bottom-20 w-1">
          {/* Background line */}
          <div className="w-full h-full bg-white/10"></div>

          {/* Animated progress line */}
          <div
            className="absolute top-0 left-0 w-full bg-gradient-to-b from-white to-[#9F8BCF] transition-all duration-300 ease-out"
            style={{
              height: `${lineProgress * 100}%`,
              boxShadow: lineProgress > 0 ? '0 0 20px rgba(147, 51, 234, 0.1)' : 'none'
            }}
          />
        </div>

        {steps.map((step, index) => {
          const isActive = activeStep >= index;
          const isRight = index % 2 === 0;

          return (
            <div
              key={step.id}
              className="relative flex items-center mb-96 last:mb-0"
              data-step={index}
            >
              {/* Step Number Circle */}
              <div className="absolute left-10 md:left-1/2 transform -translate-x-1/2 z-10">
                <div className="relative w-20 h-20 z-10 flex items-center justify-center transition-all duration-500">
                  {/* Black line behind the text */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-[5px] h-24 bg-black z-50"></div>
                  </div>

                  {/* The number */}
                  <span
                    className={`relative z-10 text-[2.6rem] font-bold transition-colors duration-500 ${
                      isActive ? "text-white" : "text-gray-400"
                    }`}
                  >
                    {String(step.id).padStart(2, "0")}
                  </span>
                </div>
              </div>

              {/* Step Content */}
              <div className={`w-full flex items-center ${!isRight ? 'flex-row-reverse md:flex-row' : ''}`}>
                {isRight ? (
                  <>
                    <div className="hidden md:block flex-1" />
                    <div
                      className={`flex-1 pl-24 md:pl-48 text-left transition-all duration-1000 ease-out ${
                        isActive
                          ? 'opacity-100 transform translate-y-0'
                          : 'opacity-50 transform translate-y-10'
                      }`}
                    >
                      <p className="text-md text-gray-500 mb-2 transition-colors duration-500">
                        Step {step.id}
                      </p>
                      <h3
                        className={`text-2xl  transition-colors duration-500 ${
                          isActive ? 'text-white' : 'text-gray-300'
                        }`}
                      >
                        {step.title}
                      </h3>
                    </div>
                  </>
                ) : (
                  <>
                    <div
                      className={`flex-1 pl-24 md:pl-0 md:pr-48 text-left md:text-right transition-all duration-1000 ease-out ${
                        isActive
                          ? 'opacity-100 transform translate-y-0'
                          : 'opacity-50 transform translate-y-10'
                      }`}
                    >
                      <p className="text-md text-gray-500 mb-2 transition-colors duration-500">
                        Step {step.id}
                      </p>
                      <h3
                        className={`text-2xl  transition-colors duration-500 ${
                          isActive ? 'text-white' : 'text-gray-300'
                        }`}
                      >
                        {step.title}
                      </h3>
                    </div>
                    <div className="hidden md:block flex-1" />
                  </>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}