import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

const PortfolioIntroduction = () => {
  const textRef = useRef(null);
  const additionalTextRef = useRef(null);
  const boxesRef = useRef(null);
  const contentRef = useRef(null);
  const [showContent, setShowContent] = useState(false);
  const [selectedContent, setSelectedContent] = useState(null);

  const fullText = "Hi there! My name is Farel, and I am a passionate web developer.";
  const additionalText = "I specialize in creating interactive and dynamic user experiences that not only look great but also function seamlessly. My journey in web development has equipped me with a diverse skill set, allowing me to tackle various challenges and deliver high-quality solutions.";

  const content = {
    webdev: {
      title: "Web Development Experience",
      description: "With 5 years of experience in web development, I've worked with various technologies including React, Node.js, and modern CSS frameworks. I specialize in building responsive, accessible, and performant web applications."
    },
    dataAnalyst: {
      title: "Data Analyst Experience",
      description: "I have 3 years of experience in data analysis, working with Python, SQL, and visualization tools like Tableau. My focus is on transforming raw data into meaningful insights that drive business decisions."
    }
  };

  useEffect(() => {
    if (!showContent) {
      animateInitialText();
    }
  }, [showContent]);

  const animateInitialText = () => {
    // Clear existing content
    textRef.current.innerHTML = '';
    additionalTextRef.current.innerHTML = '';

    const splitText = fullText.split('');
    splitText.forEach((char, index) => {
      const span = document.createElement('span');
      span.innerText = char;
      textRef.current.appendChild(span);
      gsap.fromTo(span, { opacity: 0 }, { opacity: 1, duration: 0.1, delay: index * 0.03 });
    });

    const additionalSplitText = additionalText.split('');
    additionalSplitText.forEach((char, index) => {
      const span = document.createElement('span');
      span.innerText = char;
      additionalTextRef.current.appendChild(span);
      gsap.fromTo(span, { opacity: 0 }, { opacity: 1, duration: 0.1, delay: (splitText.length + index) * 0.03 });
    });

    // Show boxes after text animation completes
    const totalAnimationTime = (splitText.length + additionalSplitText.length) * 0.03 + 0.5;
    gsap.to(boxesRef.current, {
      opacity: 1,
      duration: 0.5,
      delay: totalAnimationTime,
      display: 'flex'
    });

    // Background animation
    gsap.to('.background', {
      backgroundColor: '#1a1a1a',
      duration: 2,
      ease: 'power2.inOut',
      repeat: -1,
      yoyo: true
    });
  };

  const handleBoxClick = (contentType) => {
    setSelectedContent(contentType);

    // Animate out the text and boxes
    gsap.to([textRef.current, additionalTextRef.current, boxesRef.current], {
      opacity: 0,
      duration: 0.5,
      onComplete: () => {
        setShowContent(true);
        // Animate in the content
        gsap.fromTo(contentRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.5 }
        );
      }
    });
  };

  const handleBackClick = () => {
    // Animate out the content
    gsap.to(contentRef.current, {
      opacity: 0,
      y: 20,
      duration: 0.5,
      onComplete: () => {
        setShowContent(false);
        setSelectedContent(null);
        // Reset elements for re-animation
        gsap.set([textRef.current, additionalTextRef.current, boxesRef.current], { opacity: 1 });
        gsap.set(boxesRef.current, { display: 'flex' });
        animateInitialText();
      }
    });
  };

  return (
    <section className='lg:py-20 px-20  relative bg-black'>
      <div>
        <h1 className='text-2xl font-semibold text-white/80 uppercase'>Short Introductions</h1>
      </div>
      {!showContent ? (
        <>
          <div className='text-white/70 text-sm flex justify-between z-10 relative w-full mt-8'>
            <div className='max-w-md'>
              <p ref={textRef}></p>
              <p ref={additionalTextRef} className="mt-4"></p>
            </div>


            {/* Two option boxes */}
            <div
              ref={boxesRef}
              className="mt-8 gap-4 hidden opacity-0"
              style={{ display: 'none' }}
            >
              <div
                className=" flex flex-col py-5 justify-center items-center card cursor-pointer hover:bg-[#202020] hover:text-white transition-colors duration-300"
                onClick={() => handleBoxClick('webdev')}
              >
                <h3 className="text-xl font-bold">Web Developer</h3>
                <p className="mt-2 text-xs">Click to see my experience</p>
              </div>

              <div
                className=" flex flex-col py-5 justify-center items-center card cursor-pointer hover:bg-[#202020] hover:text-white transition-colors duration-300"
                onClick={() => handleBoxClick('dataAnalyst')}
              >
                <h3 className="text-xl font-bold">Data Analyst</h3>
                <p className="mt-2 text-xs">Click to see my experience</p>
              </div>
            </div>
          </div>
        </>

      ) : (
        <div ref={contentRef} className=" text-white mt-8">
          <h3 className="text-2xl font-bold mb-4">{content[selectedContent].title}</h3>
          <p className="mb-6">{content[selectedContent].description}</p>
          <button
            className="px-4 py-2 bg-white text-black rounded hover:bg-gray-200 transition-colors"
            onClick={handleBackClick}
          >
            Back to Introduction
          </button>
        </div>
      )}
    </section>
  );
};

export default PortfolioIntroduction;