"use client";
import React, { useState } from "react";
import { Heart } from "lucide-react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const ValentineProposal = () => {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const [isMoving, setIsMoving] = useState(false);

  const messages = {
    initial: "You make my heart smile... Be mine? 🥰",
    accepted: "Forever starts today! 💖✨",
  };

  const noMessages = [
    "No",
    "Are you sure?",
    "Really sure?",
    "Think again!",
    "Last chance!",
    "Surely not?",
    "You might regret this!",
    "Give it another thought!",
    "Are you absolutely sure?",
    "This could be a mistake!",
    "Have a heart!",
    "Don't be so cold!",
    "Change of heart?",
    "Wouldn't you reconsider?",
    "Is that your final answer?",
    "You're breaking my heart ;(",
    "Pretty please?",
    "I'll be very sad...",
    "Don't do this to me!",
    "My heart can't take it!",
    "Give love a chance!",
    "But we're perfect together!",
    "Not even maybe?",
    "I'll learn to cook!",
    "I'll do the dishes!",
    "I'll give you chocolate!",
    "What about a puppy?",
    "I'm your best option!",
    "You know you want to!",
    "Just say yes already!",
    "I'm running out of messages...",
    "But I got you flowers!",
    "I'll write you poetry!",
    "I'll sing for you!",
    "Consider it carefully!",
    "Take your time...",
    "I'm still waiting!",
    "Getting tired yet?",
    "You're very persistent!",
    "I admire your dedication!",
    "Still a no?",
    "I'm not giving up!",
    "Let's be valentines!",
    "Roses are red...",
    "One more chance?",
    "Getting desperate here!",
    "Please reconsider!",
    "I'll be the best valentine!",
  ];

  const getNoButtonText = () => {
    return noMessages[Math.min(noCount, noMessages.length - 1)];
  };

  const handleInteraction = () => {
    setIsMoving(true);
    setNoCount((prev) => prev + 1);

    // Get viewport dimensions
    const viewportWidth = Math.max(
      document.documentElement.clientWidth || 0,
      window.innerWidth || 0
    );
    const viewportHeight = Math.max(
      document.documentElement.clientHeight || 0,
      window.innerHeight || 0
    );

    // Calculate new random position with padding from edges
    const padding = 60; // Pixels from the edge
    const newX = Math.random() * (viewportWidth - 2 * padding) + padding;
    const newY = Math.random() * (viewportHeight - 2 * padding) + padding;

    // Update button position
    const button = document.querySelector(".no-button");
    if (button) {
      button.style.left = `${newX}px`;
      button.style.top = `${newY}px`;
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-pink-50">
      {/* Main content container */}
      <div className="relative w-full flex flex-col items-center p-8">
        {/* Image */}
        <div className="mb-8">
          {yesPressed ? (
            <DotLottieReact src="animations/valentine.lottie" loop autoplay />
          ) : (
            <DotLottieReact
              src="animations/will-you-be-my-valentine.lottie"
              loop
              autoplay
            />
          )}
        </div>

        {/* Message */}
        <h1 className="text-2xl font-bold text-center text-pink-600 mb-8">
          {yesPressed ? messages.accepted : messages.initial}
        </h1>

        {/* Buttons */}
        {!yesPressed && (
          <div className="flex justify-center items-center gap-4">
            {/* Yes button */}
            <button
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg transition-all duration-200 flex items-center gap-2"
              style={{ fontSize: `${24 + noCount * 7}px` }}
              onClick={() => setYesPressed(true)}
            >
              Yes <Heart className="inline" size={16} />
            </button>

            {/* No button */}
            <button
              className={`no-button ${
                isMoving ? "fixed" : ""
              } bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-lg transition-all duration-200 gap-2 text-2xl touch-none`}
              style={
                isMoving
                  ? {
                      transform: "translate(-50%, -50%)",
                      zIndex: 50,
                    }
                  : {}
              }
              onMouseEnter={handleInteraction}
              onTouchStart={(e) => {
                e.preventDefault();
                handleInteraction();
              }}
            >
              {getNoButtonText()}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ValentineProposal;
