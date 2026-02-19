"use client";
import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, TrendingUp, Users, Shield, Zap } from 'lucide-react';
import Btn from '@/components/Btn';
import TimelineComponent from './Home';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const TradingPlatformPage: React.FC = () => {
  // const [activeStep, setActiveStep] = useState<number>(0);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [revenue, setRevenue] = useState<number>(111111);
  const [offset, setOffset] = useState(0);
  const [blurAmount, setBlurAmount] = useState(0);

  const [activeStep, setActiveStep] = useState(0);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-100, 100], [-30, 30]);
  const rotateY = useTransform(x, [-100, 100], [30, -30]);

  const rotateXSpring = useSpring(rotateX, { stiffness: 100, damping: 30 });
  const rotateYSpring = useSpring(rotateY, { stiffness: 100, damping: 30 });

  function handleMouse(event: React.MouseEvent<HTMLDivElement>) {
      const rect = event.currentTarget.getBoundingClientRect();
      const xPos = event.clientX - rect.left - rect.width / 2;
      const yPos = event.clientY - rect.top - rect.height / 2;
      x.set(xPos);
      y.set(yPos);
  }

  const containerRef = useRef<HTMLDivElement>(null);
  const payoutSectionRef = useRef<HTMLDivElement>(null);

  const steps = [
    { id: 1, title: "Register your account" },
    { id: 2, title: "Deposit your funds" },
    { id: 3, title: "KYC" },
    { id: 4, title: "Start Trading & Earn Profits" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY * 0.12); // adjust speed here

      // Blur effect for payout section
      if (payoutSectionRef.current) {
        const rect = payoutSectionRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const sectionCenter = rect.top + rect.height / 2;
        const viewportCenter = windowHeight / 4;
        
        // Calculate distance from section center to viewport center
        const distance = Math.abs(sectionCenter - viewportCenter);
        const maxDistance = windowHeight;
        
        // Calculate blur amount (0 when centered, increases as it moves away)
        const blur = Math.min(distance / maxDistance * 8, 8); // Max 8px blur
        setBlurAmount(blur);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const accounts = [
    {
      name: "Abcd Vintage",
      subtitle: "Perfect for balanced, all-level traders looking for consistency and solid growth.",
      initialCapital: "$10k",
      spread: "from 0.2 pips",
      commission: "No Commission",
      leverage: "1:Unlimited",
      lotSize: "0.01",
      tradeLimit: "200 trades during peak hours",
      openPosition: "Unlimited",
      stopOut: "0%",
      marginCall: "30%",
      swapPolicy: "0%",
      riskExposure: "Moderate",
      assets: "Forex, Crypto, Stocks, Commodities, Indices",
      buttonText: "Start Trading",
      cardClass: "bg-gradient-to-br from-purple-900 to-purple-800"
    },
    {
      name: "Abcd Cent",
      subtitle: "Designed for beginners ready to step into the trading world with minimal risk.",
      initialCapital: "$10",
      spread: "from 0.3 pips",
      commission: "Zero Commission",
      leverage: "1:Unlimited",
      lotSize: "Same",
      tradeLimit: "200 trades during peak hours",
      openPosition: "Unlimited",
      stopOut: "0%",
      marginCall: "30%",
      swapPolicy: "0%",
      riskExposure: "Low",
      assets: "Forex, Crypto, Stocks, Commodities, Indices",
      buttonText: "Start Trading",
      cardClass: "bg-gray-800"
    },
    {
      name: "Abcd Pro",
      subtitle: "Ideal for experienced traders seeking precision, speed, and high-stakes performance.",
      initialCapital: "$500",
      spread: "from 0.1 pips",
      commission: "No Commission",
      leverage: "1:Unlimited",
      lotSize: "Same",
      tradeLimit: "200 trades during peak hours",
      openPosition: "Unlimited",
      stopOut: "0%",
      marginCall: "30%",
      swapPolicy: "0%",
      riskExposure: "High",
      assets: "Forex, Crypto, Stocks, Commodities, Indices",
      buttonText: "Start Trading",
      cardClass: "bg-gradient-to-br from-purple-900 to-purple-800"
    }
  ];

  const features = [
    "Who It's For",
    "Initial Capital Requirement",
    "Spread Advantage",
    "Trading Fees",
    "Leverage Capacity",
    "Minimum Lot Size",
    "Trade Execution Limit",
    "Open Position Capacity",
    "Stop Out Threshold",
    "Margin Call Activation",
    "Swap Policy",
    "Risk Exposure",
    "Asset Options"
  ];


  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setActiveStep((prev) => (prev + 1) % steps.length);
  //   }, 3000);
  //   return () => clearInterval(interval);
  // }, [steps.length]);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const containerRect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const containerTop = containerRect.top;
      const containerHeight = containerRect.height;

      // Calculate overall scroll progress through the container
      const scrollStart = windowHeight * 0.3; // Start when container is 30% in view
      const scrollEnd = windowHeight * 0.7; // End when container is 70% through

      const progress = Math.max(0, Math.min(1,
        (scrollStart - containerTop) / (containerHeight - windowHeight + scrollStart)
      ));

        // setLineProgress(progress);

      // Determine active step based on scroll progress
      const stepIndex = Math.floor(progress * steps.length);
      setActiveStep(Math.min(stepIndex, steps.length - 1));
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call

    return () => window.removeEventListener('scroll', handleScroll);
  }, [steps.length]);

  // Revenue counter animation
  useEffect(() => {
    const interval = setInterval(() => {
      setRevenue(prev => prev + 1);
    }, 2000);
    return () => clearInterval(interval);
  }, []);
  const [isTextVisible, setIsTextVisible] = useState(false);
  const textSectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsTextVisible(true);
          observer.disconnect(); // Trigger only once
        }
      },
      { threshold: 0.1 }
    );

    if (textSectionRef.current) {
      observer.observe(textSectionRef.current);
    }

    return () => observer.disconnect();
  }, []);




  return (
    <>
      <div className="relative overflow-hidden ">
        {/* Background Pattern */}

        {/* Hero Title */}
        <div className="text-center mt-24">
          <div className="inline-flex items-center gap-2  backdrop-blur-sm rounded-full px-6 py-2 border border-white/10 mb-2">
            <span className="text-[14px] font-semibold text-[#9F8BCF]">
              Our Process
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-medium text-white mb-1 leading-tight text tracking-tighter">
            Become a{" "}
            <span className=" bg-[#A35CA2] bg-clip-text text-transparent">
              Abcd Pro {" "}
            </span>
             in sec...
          </h1>
          <p className="text-slate-400 text-md">
            🚀 Sign up.
            {/* <span className="mx-2 text-slate-600">|</span> */}
             Fund.
            {/* <span className="mx-2 text-slate-600">|</span> */}
             Trade.
          </p>
        </div>
        <TimelineComponent />

        {/* CTA Button */}

        <div className="text-center mt-6 mb-18">
          <Btn>
            Open FREE Account <ArrowRight className="w-5 h-5" />
          </Btn>
        </div>
      </div>

      {/* Account Comparison Section */}
      <div className="container mx-auto px-6 py-12 bg-[#01050D]">
        <div ref={textSectionRef} className="text-center mb-16">
          <div className="inline-flex items-center gap-2  backdrop-blur-sm rounded-full px-6 py-2 border border-white/20">
            <span className="text-sm font-medium text-[#9F8BCF]">
              Compare Plans
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-medium text-white leading-tight">
            {/* Mobile View */}
            <span className="block md:hidden text-3xl">
              <span className={`inline-block ${isTextVisible ? 'animate-blur-in-up' : 'opacity-0'}`} style={{ animationDelay: '0s' }}>Start&nbsp;</span>
              <span className={`inline-block ${isTextVisible ? 'animate-blur-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.15s' }}>Small,&nbsp;</span>
              <span className={`inline-block ${isTextVisible ? 'animate-blur-in-up' : 'opacity-0'} bg-[#A35CA2] bg-clip-text text-transparent`} style={{ animationDelay: '0.3s' }}>Scale&nbsp;</span>
              <span className={`inline-block ${isTextVisible ? 'animate-blur-in-up' : 'opacity-0'} bg-[#A35CA2] bg-clip-text text-transparent`} style={{ animationDelay: '0.45s' }}>Big</span>
            </span>

            {/* Desktop View */}
            <span className="hidden md:block">
              <span className={`inline-block ${isTextVisible ? 'animate-blur-in-up' : 'opacity-0'}`} style={{ animationDelay: '0s' }}>Compare&nbsp;</span>
              <span className={`inline-block ${isTextVisible ? 'animate-blur-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.15s' }}>your&nbsp;</span>
              <span className={`inline-block ${isTextVisible ? 'animate-blur-in-up' : 'opacity-0'} bg-[#A35CA2] bg-clip-text text-transparent`} style={{ animationDelay: '0.3s' }}>Abcd&nbsp;</span>
              <span className={`inline-block ${isTextVisible ? 'animate-blur-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.45s' }}>Plan</span>
            </span>
          </h1>
          <p className="text-slate-400 text-lg">
            Flexible Deposits for Every Trader

          </p>
        </div>

        <div className="min-h-screen text-white">
          <div className="max-w-7xl mx-auto">
            {/* Desktop Layout */}
            <div className="hidden lg:grid grid-cols-[16fr_28fr_28fr_28fr] gap-6">
              {/* Feature Labels Column */}
              <div className="pt-32 space-y-0">
                 {features.map((feature, index) => (
                  <div key={index} className="h-14 flex items-center text-sm text-gray-400 border-b border-white/5">
                    {feature}
                  </div>
                ))}
              </div>

              {/* Account Cards */}
              {accounts.map((account, index) => (
                <div key={index} className={`relative group ${index === 1 ? 'revolving-border' : ''}`}>
                  {/* Card Container */}
                  <div className={`h-full rounded-2xl overflow-hidden transition-all duration-300 p-5 ${
                    index !== 1 
                      ? 'bg-gradient-to-b from-[#140918] to-[#070108] border border-white/5' 
                      : ''
                  }`}>
                    {/* Header */}
                     <div className="text-center mb-2 z-50 relative mt-8">
                      <h2 className="text-3xl font-normal mb-6">{account.name}</h2>
                      <p className="text-[14px] text-white mt-2">{account.subtitle}</p>
                    </div>

                    {/* Features List */}
                    <div className="px-4">
                      {[
                        account.initialCapital,
                        account.spread,
                        account.commission,
                        account.leverage,
                        account.lotSize,
                        account.tradeLimit,
                        account.openPosition,
                        account.stopOut,
                        account.marginCall,
                        account.swapPolicy,
                        account.riskExposure,
                        account.assets
                      ].map((value, i) => (
                        <div key={i} className="h-14 flex items-center justify-center text-sm relative">
                          {value}
                          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[90%] h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                        </div>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <div className="p-6 text-center">
                        <button className="bg-gradient-to-r from-[#6b4dab] to-[#927cc6]  px-6 py-2.5 rounded-2xl text-sm transition-transform duration-200 transform hover:scale-105">
                        {account.buttonText}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Mobile Layout - Horizontal Scroll */}
            <div className="lg:hidden">
              <div className="overflow-x-auto pb-8 -mx-6 px-6 scrollbar-hide">
                <div className="flex w-max">
                   {/* Features Label Column */}
                   <div className="w-[45vw] flex-shrink-0 pt-32 space-y-0 border-r border-white/5 bg-[#01050D]/50 backdrop-blur-sm z-10">
                     {features.map((feature, index) => (
                       <div key={index} className="h-14 flex items-center text-xs text-gray-500 font-medium px-4 border-b border-white/5">
                         {feature}
                       </div>
                     ))}
                   </div>
                   
                   {/* Accounts Columns */}
                   {accounts.map((account, index) => (
                     <div key={index} className={`w-[45vw] flex-shrink-0 relative group ${index === 1 ? 'revolving-border' : ''}`}>
                        <div className={`h-full border-r border-white/5 transition-all duration-300 ${
                          index !== 1 
                            ? 'bg-gradient-to-b from-[#140918] to-[#070108] border border-white/5' 
                            : ''
                        }`}>
                          {/* Header */}
                           <div className="text-center mb-2 z-50 relative">
                            <h2 className="text-2xl font-normal">{account.name}</h2>
                            <p className="text-xs text-white mt-2">{account.subtitle}</p>
                          </div>
                          
                          {/* Values */}
                          <div className="">
                              {[
                                account.initialCapital,
                                account.spread,
                                account.commission,
                                account.leverage,
                                account.lotSize,
                                account.tradeLimit,
                                account.openPosition,
                                account.stopOut,
                                account.marginCall,
                                account.swapPolicy,
                                account.riskExposure,
                                account.assets
                              ].map((value, i) => (
                                <div key={i} className="h-14 flex items-center justify-center text-xs text-gray-300 relative">
                                  {value}
                                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[90%] h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                                </div>
                              ))}
                          </div>

                          {/* Button */}
                          <div className="p-4 text-center">
                               <button className={`w-full py-2 rounded-lg text-xs font-bold transition-all ${
                                 index !== 1 ? 'bg-purple-600 text-white shadow-[0_0_15px_rgba(147,51,234,0.3)]' : 'bg-white/10 text-white'
                               }`}>
                                 {account.buttonText}
                               </button>
                          </div>
                        </div>
                     </div>
                   ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>




      <section 
        ref={payoutSectionRef}
        className="relative w-full flex items-center justify-center text-center overflow-hidden mt-20"
      >


        {/* Overlay for darkening effect */}
        <div className="absolute inset-0  "></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center">
          <span className="text-sm  tracking-wide text-[#9F8BCF] border border-white/30 px-4 py-1 rounded-full mb-6">
            Payouts
          </span>

          <h2 
            className="text-3xl md:text-6xl font-medium text-white mb-4 transition-all duration-300 ease-out"
            style={{
              filter: `blur(${blurAmount}px)`
            }}
          >
            We&apos;ve Paid Out Over <br />
            <span className="text-white/90">$1M to Traders</span>
          </h2>

          <p className="text-white/70 mb-8">
            Your Trust is Our Fuel—Power Up with Abcd
          </p>
        </div>
      </section>


      <section className="relative w-full flex items-center justify-center text-center overflow-hidden">
        {/* Background video */}
        <video
          className="absolute top-0 left-0 w-full h-min object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="https://framerusercontent.com/assets/xECpz8zWZNwZhoPNVva63Z5xs.mp4" type="video/mp4" />
        </video>

        <div className="relative z-10 flex flex-col items-center">

          {/* Counter */}
          <h1 className="text-[16vw] font-medium bg-gradient-to-t from-purple-400 to-white bg-clip-text text-transparent drop-shadow-lg mb-4">
            ${revenue.toLocaleString()}<span className="from-purple-400 to-white">+</span>
          </h1>

          {/* Button */}
          <a
            href="#"
            className="px-6 py-2 bg-black text-white rounded-xl font-semibold transition mb-6 group"
          >
            Are you Next?{" "}
            {/* <span className="transition group-hover:hidden">→</span> */}
            <span className="text-[12px] font-bold transition group-hover:inline ml-2">↗</span>
          </a>

        </div>
      </section>

      <section className="relative w-full h-screen flex items-center justify-center bg-black text-white overflow-hidden">
        {/* Background Text */}
        <h1
          className="absolute text-[10vw] font-bold whitespace-nowrap text-white transition-transform duration-75"
          style={{
            transform: `translateX(${offset}px)`,
          }}
        >
          Trade <span className='text-[#A25EA1]'> Anytime, Anywhere</span>
        </h1>

        {/* Foreground Content */}
        <div className="relative z-10 flex flex-col items-center" style={{ perspective: 100 }}>
          {/* QR Code */}
          <motion.div
            style={{ 
              rotateX: rotateXSpring, 
              rotateY: rotateYSpring
            }}
            onMouseMove={handleMouse}
            onMouseLeave={() => { x.set(0); y.set(0); }}
            whileHover={{ scale: 1.1 }}
            className="rounded-2xl shadow-xl image_big relative cursor-pointer"
          >
            {/* Glow/Blur background */}
            <div className="absolute inset-3 flex justify-center items-center">
              <div className="w-84 h-64 bg-gradient-to-b from-white/70 to-white/0 blur-3xl rounded-full"></div>
            </div>
            <img
              src="https://framerusercontent.com/images/wPXXd95jZIk3zRQtU2enBhy2g8.png?scale-down-to=512"
              alt="QR Code"
              className="w-56 h-56 object-contain  p-2 bg-white border-[#2C2D2C] border-12 rounded-xl pointer-events-none"
            />
          </motion.div>
        </div>

        <h1
          className="absolute text-[10vw] font-bold whitespace-nowrap text-white transition-transform duration-75 top-[70%]"
        >
          {/* App Store Buttons */}
          <div className="flex gap-4 mt-6 ">
            {/* Foreground image */}
            <a href="#">
              <img
                src="https://framerusercontent.com/images/VK7tmBzTRU7cEgNp1WcXO7kHYuA.png"
                alt="App Store"
                className="h-16 object-contain relative z-10"
              />
            </a>
          </div>
        </h1>
      </section>

    </>
  );
};

export default TradingPlatformPage;