
"use client";
import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, TrendingUp, Users, Shield, Zap } from 'lucide-react';
import Btn from '@/components/Btn';
import TimelineComponent from './Home';

const TradingPlatformPage: React.FC = () => {
  // const [activeStep, setActiveStep] = useState<number>(0);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [revenue, setRevenue] = useState<number>(111111);
  const [offset, setOffset] = useState(0);


  const [activeStep, setActiveStep] = useState(0);

  const containerRef = useRef<HTMLDivElement>(null);

  const steps = [
    { id: 1, title: "Register your account" },
    { id: 2, title: "Deposit your funds" },
    { id: 3, title: "KYC" },
    { id: 4, title: "Start Trading & Earn Profits" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY * 0.12); // adjust speed here
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

      setLineProgress(progress);

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



  const fullText = "Become a Abcd Pro in sec...";
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayText(fullText.slice(0, i + 1));
      i++;
      if (i === fullText.length) clearInterval(interval);
    }, 200); // typing speed
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="relative overflow-hidden ">
        {/* Background Pattern */}

        {/* Hero Title */}
        <div className="text-center mt-28">
          <div className="inline-flex items-center gap-2  backdrop-blur-sm rounded-full px-6 py-2 border border-white/20">
            <span className="text-sm font-medium text-[#9F8BCF]">
              Our Process
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-medium text-white mb-6 leading-tight">
            Become a{" "}
            <span className=" bg-[#A35CA2] bg-clip-text text-transparent">
              Abcd Pro
            </span>
            in sec...
          </h1>
          <p className="text-slate-400 text-lg">
            🚀 Sign up. Fund. Trade.
          </p>
        </div>
        <TimelineComponent />

        {/* CTA Button */}

        <div className="text-center mt-6 mb-36">
          <Btn>
            Open FREE Account <ArrowRight className="w-5 h-5" />
          </Btn>
        </div>
      </div>

      {/* Account Comparison Section */}
      <div className="container mx-auto px-6 py-20 bg-[#01050D]">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2  backdrop-blur-sm rounded-full px-6 py-2 border border-white/20">
            <span className="text-sm font-medium text-[#9F8BCF]">
              Compare Plans
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-medium text-white  leading-tight">
            {displayText.split("Abcd Pro").length > 1 ? (
              <>
                Become a{" "}
                <span className="bg-[#A35CA2] bg-clip-text text-transparent">
                  Abcd Pro
                </span>
                {displayText.split("Abcd Pro")[1]}
              </>
            ) : (
              displayText
            )}
          </h1>
          <p className="text-slate-400 text-lg">
            Flexible Deposits for Every Trader

          </p>
        </div>

        <div className="min-h-screen  text-white p-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-1 animation_third">
              {/* Feature Labels Column */}
              <div className="col-span-2 lg:col-span-1">
                <div className="space-y-4 pt-20 text-center lg:text-left">
                  {features.map((feature, index) => (
                    <p className="text-base font-medium gradient-underline2" key={index}>
                      {feature}
                    </p>
                  ))}
                </div>
              </div>

              {/* Account Cards */}
              {accounts.map((account, accountIndex) => (
                <div key={accountIndex} className="col-span-1">
                  <div
                    className={`${accountIndex === 1
                      ? "text-white rounded-2xl p-6 h-full shadow-lg flex flex-col " // 2nd card (no bg)
                      : "bg-gradient-to-b from-[#140918]  to-[#070108] text-white rounded-2xl p-6 h-full shadow-lg flex flex-col bg-bg" // 1st & 3rd card
                      } ${accountIndex === 1 ? "revolving-border text-white  z-20" : ""}`}
                  >
                    {/* Header */}
                    <div className="text-center mb-6 z-50 relative">
                      <h2 className="text-lg font-semibold">{account.name}</h2>
                      <p className="text-xs text-gray-400 mt-2">{account.subtitle}</p>
                    </div>

                    {/* Features List */}
                    <div className="flex-1 space-y-4 text-center z-50 relative">
                      <p className="text-sm text-gray-300 gradient-underline">{account.spread}</p>
                      <p className="text-sm text-gray-300 gradient-underline">{account.commission}</p>
                      <p className="text-sm text-gray-300 gradient-underline">{account.leverage}</p>
                      <p className="text-sm text-gray-300 gradient-underline">{account.lotSize}</p>
                      <p className="text-sm text-gray-300 gradient-underline">{account.tradeLimit}</p>
                      <p className="text-sm text-gray-300 gradient-underline">{account.openPosition}</p>
                      <p className="text-sm text-gray-300 gradient-underline">{account.stopOut}</p>
                      <p className="text-sm text-gray-300 gradient-underline">{account.marginCall}</p>
                      <p className="text-sm text-gray-300 gradient-underline">{account.swapPolicy}</p>
                      <p className="text-sm text-gray-300 gradient-underline">{account.riskExposure}</p>
                      <p className="text-sm text-gray-300 gradient-underline">{account.assets}</p>
                    </div>

                    {/* CTA Button */}
                    <div className="mt-6 text-center">
                      <button className="bg-gradient-to-r from-purple-500 to-purple-200  px-6 py-2.5 rounded-2xl text-sm font-semibold transition-transform duration-200 transform hover:scale-105">
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




      <section className="relative w-full flex items-center justify-center text-center overflow-hidden">


        {/* Overlay for darkening effect */}
        <div className="absolute inset-0  "></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center">
          <span className="text-sm  tracking-wide text-[#9F8BCF] border border-white/30 px-4 py-1 rounded-full mb-6">
            Payouts
          </span>

          <h2 className="text-3xl md:text-6xl font-medium text-white mb-4">
            We’ve Paid Out Over <br />
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
          <h1 className="text-[15vw] font-medium bg-gradient-to-t from-purple-400 to-white bg-clip-text text-transparent drop-shadow-lg mb-4">
            ${revenue.toLocaleString()}<span className="from-purple-400 to-white">+</span>
          </h1>

          {/* Button */}
          <a
            href="#"
            className="px-6 py-2 bg-black text-white rounded-xl font-semibold transition mb-6 group"
          >
            Are you Next?{" "}
            <span className="transition group-hover:hidden">→</span>
            <span className="hidden transition group-hover:inline">↗</span>
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
        <div className="relative z-10 flex flex-col items-center">
          {/* QR Code */}
          <div className=" rounded-2xl shadow-xl image_big relative">
            {/* Glow/Blur background */}
            <div className="absolute inset-3 flex justify-center items-center">
              <div className="w-84 h-64 bg-gradient-to-b from-white/70 to-white/0 blur-3xl rounded-full"></div>
            </div>
            <img
              src="https://framerusercontent.com/images/wPXXd95jZIk3zRQtU2enBhy2g8.png?scale-down-to=512"
              alt="QR Code"
              className="w-56 h-56 object-contain  p-2 bg-white border-[#2C2D2C] border-12 rounded-xl"
            />
          </div>
        </div>

        <h1
          className="absolute text-[10vw] font-bold whitespace-nowrap text-white transition-transform duration-75 top-112"
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