"use client";

import React, { useState, useEffect, useRef } from "react";
import styles from "./AprilFoolsPrank.module.css";

const AprilFoolsButton = () => {
  const [clickCount, setClickCount] = useState<number>(0);
  const [isExploded, setIsExploded] = useState<boolean>(false);
  const [buttonPosition, setButtonPosition] = useState<{
    x: number;
    y: number;
  }>({ x: 0, y: 0 });
  const [showRickroll, setShowRickroll] = useState<boolean>(false);
  const [showHackedTerminal, setShowHackedTerminal] = useState<boolean>(false);
  const [showFinalMessage, setShowFinalMessage] = useState<boolean>(false);
  const [showSystemError, setShowSystemError] = useState<boolean>(false);
  const [buttonsArray, setButtonsArray] = useState<
    Array<{ id: number; x: number; y: number; isReal: boolean }>
  >([]);
  const [pageRotationValues, setPageRotationValues] = useState<{
    x: number;
    y: number;
    z: number;
  }>({ x: 0, y: 0, z: 0 });
  const [hideMainButton, setHideMainButton] = useState<boolean>(false);
  const [realButtonFound, setRealButtonFound] = useState<boolean>(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);
  const screamAudioRef = useRef<HTMLAudioElement>(null);
  const explosionAudioRef = useRef<HTMLAudioElement>(null);
  console.log(realButtonFound);
  // Event handler for button click
  const handleButtonClick = () => {
    const newClickCount = clickCount + 1;
    setClickCount(newClickCount);

    // Handle cursed effects based on click count
    switch (newClickCount) {
      case 7: // Play fart sound
        if (audioRef.current) {
          audioRef.current.play();
        }
        break;
      case 8:
        setShowSystemError(true);
        setTimeout(() => setShowSystemError(false), 3000);
        break;
      case 9: // Changed to different scare instead of B emoji
        const scareSound = new Audio("/horror-sound.mp3");
        scareSound.play();
        flashScreen();
        break;
      case 11:
        setShowRickroll(true);
        setTimeout(() => setShowRickroll(false), 5000);
        break;
      case 13: // 100 big screaming emojis with scream sound
        if (screamAudioRef.current) {
          screamAudioRef.current.play();
        }
        createScreamingEmojis();
        break;
      case 14: // Hide main button and create 20 buttons with one real one
        setHideMainButton(true);
        createMultipleButtons();
        break;
      case 15:
        setShowHackedTerminal(true);
        setTimeout(() => setShowHackedTerminal(false), 4000);
        break;
      case 19: // Explode button with sound
        setIsExploded(true);
        if (explosionAudioRef.current) {
          explosionAudioRef.current.play();
        }
        // Show final message after delay
        setTimeout(() => {
          setShowFinalMessage(true);
          triggerConfetti();
        }, 7000);
        break;
    }
  };

  // Flash screen for scare effect (level 9)
  const flashScreen = () => {
    const container = containerRef.current;
    if (container) {
      const flashDiv = document.createElement("div");
      flashDiv.className = styles.flashScreen;

      // Add scary face briefly
      const scaryFace = document.createElement("div");
      scaryFace.className = styles.scaryFace;
      scaryFace.innerHTML = "👹";

      container.appendChild(flashDiv);
      container.appendChild(scaryFace);

      setTimeout(() => {
        if (container.contains(flashDiv)) {
          container.removeChild(flashDiv);
        }
        if (container.contains(scaryFace)) {
          container.removeChild(scaryFace);
        }
      }, 300);
    }
  };

  // Button hover effect for level 16 (moved from 6)
  const handleButtonHover = () => {
    if (clickCount >= 16 && !isExploded && buttonRef.current) {
      const containerWidth =
        containerRef.current?.clientWidth || window.innerWidth;
      const containerHeight =
        containerRef.current?.clientHeight || window.innerHeight;
      const buttonWidth = buttonRef.current.offsetWidth;
      const buttonHeight = buttonRef.current.offsetHeight;

      const newX = Math.random() * (containerWidth - buttonWidth);
      const newY = Math.random() * (containerHeight - buttonHeight);

      setButtonPosition({
        x: newX,
        y: newY,
      });
    }
  };

  // Create multiple buttons with one real one (level 14)
  const createMultipleButtons = () => {
    const newButtons = [];
    const realButtonIndex = Math.floor(Math.random() * 20);

    for (let i = 0; i < 20; i++) {
      newButtons.push({
        id: i,
        x: Math.random() * (window.innerWidth - 200),
        y: Math.random() * (window.innerHeight - 100),
        isReal: i === realButtonIndex,
      });
    }

    setButtonsArray(newButtons);
  };

  // Handle click on one of the multiple buttons
  const handleMultipleButtonClick = (isReal: boolean) => {
    if (isReal) {
      setRealButtonFound(true);
      alert("You found the real button! The nightmare continues...");
      setButtonsArray([]);
      setHideMainButton(false);
      handleButtonClick(); // Move to next effect
    } else {
      // Make wrong buttons disappear when clicked
      setButtonsArray((prev) => prev.filter((btn) => btn.isReal));
    }
  };

  // Create screaming emojis (level 13)
  const createScreamingEmojis = () => {
    const container = containerRef.current;
    if (container) {
      for (let i = 0; i < 100; i++) {
        setTimeout(() => {
          const emoji = document.createElement("div");
          emoji.className = styles.screamingEmoji;
          emoji.innerText = "😱";
          emoji.style.left = `${Math.random() * 100}%`;
          emoji.style.top = `${Math.random() * 100}%`;
          emoji.style.animationDelay = `${Math.random() * 0.5}s`;
          container.appendChild(emoji);

          setTimeout(() => {
            if (container.contains(emoji)) {
              container.removeChild(emoji);
            }
          }, 3000);
        }, i * 30); // Stagger the appearance
      }
    }
  };

  // Create confetti effect for final message
  const triggerConfetti = () => {
    const confettiCount = 200;
    const container = containerRef.current;

    if (container) {
      for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement("div");
        confetti.className = styles.confetti;
        confetti.style.left = `${Math.random() * 100}%`;
        confetti.style.animationDelay = `${Math.random() * 5}s`;
        confetti.style.backgroundColor = `hsl(${
          Math.random() * 360
        }, 100%, 50%)`;
        container.appendChild(confetti);

        setTimeout(() => {
          if (container.contains(confetti)) {
            container.removeChild(confetti);
          }
        }, 5000);
      }
    }
  };

  // Fill center with cat and other emojis (level 18)
  useEffect(() => {
    if (clickCount === 18) {
      const container = containerRef.current;
      if (container) {
        const emojiFill = document.createElement("div");
        emojiFill.className = styles.emojiExplosion;

        // Create a grid of random emojis
        const emojis = [
          "🐱",
          "😺",
          "😸",
          "😹",
          "😻",
          "😼",
          "😽",
          "🙀",
          "😿",
          "😾",
          "🐈",
          "👻",
          "🎃",
          "🙈",
          "🙉",
          "🙊",
        ];
        let emojiHtml = "";

        for (let i = 0; i < 100; i++) {
          const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
          emojiHtml += `<span class="${styles.explosionEmoji}">${randomEmoji}</span>`;
        }

        emojiFill.innerHTML = emojiHtml;
        container.appendChild(emojiFill);

        setTimeout(() => {
          if (container.contains(emojiFill)) {
            container.removeChild(emojiFill);
          }
        }, 5000);
      }
    }
  }, [clickCount]);

  // Apply advanced rotation effect for page (level 5)
  useEffect(() => {
    if (clickCount >= 5) {
      const interval = setInterval(() => {
        setPageRotationValues({
          x: Math.random() * 10 - 5, // -5 to 5 degrees on X axis
          y: Math.random() * 10 - 5, // -5 to 5 degrees on Y axis
          z: Math.random() * 10 - 5, // -5 to 5 degrees on Z axis
        });
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [clickCount]);

  // Create CSS classes based on click count
  const getBodyClasses = (): string => {
    const classes = [styles.container];

    if (clickCount >= 1) classes.push(styles.textFlipped);
    if (clickCount >= 2) classes.push(styles.crazyBackground);
    if (clickCount >= 3) classes.push(styles.horrorFont);
    if (clickCount >= 4) classes.push(styles.buttonShake);
    if (clickCount >= 12) classes.push(styles.meltingText);
    if (clickCount >= 6 && clickCount < 16) classes.push(styles.zoomInOut);
    if (clickCount >= 17) classes.push(styles.glitterExplosion);

    return classes.join(" ");
  };

  // Custom cursor styles
  const getCustomCursor = (): React.CSSProperties => {
    if (clickCount >= 10 && clickCount < 20) {
      return {
        cursor:
          'url(data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 100 100"><text y="50%" x="50%" dominant-baseline="middle" text-anchor="middle" font-size="90">🔪</text></svg>), auto',
      };
    }
    return {};
  };

  // Get the 3D transform for the container
  const getPageTransform = (): React.CSSProperties => {
    if (clickCount >= 5) {
      return {
        transform: `rotateX(${pageRotationValues.x}deg) rotateY(${pageRotationValues.y}deg) rotate(${pageRotationValues.z}deg)`,
      };
    }
    return {};
  };

  return (
    <div
      ref={containerRef}
      className={getBodyClasses()}
      style={{
        ...getCustomCursor(),
        ...getPageTransform(),
      }}
    >
      {/* Audio elements */}
      <audio
        ref={audioRef}
        src="https://www.soundjay.com/human/sounds/fart-01.mp3"
        preload="auto"
      ></audio>
      <audio
        ref={screamAudioRef}
        src="https://www.soundjay.com/human/sounds/scream-01.mp3"
        preload="auto"
      ></audio>
      <audio
        ref={explosionAudioRef}
        src="https://www.soundjay.com/mechanical/sounds/explosion-02.mp3"
        preload="auto"
      ></audio>

      {/* Main button */}
      {!isExploded && !showFinalMessage && !hideMainButton && (
        <button
          ref={buttonRef}
          className={styles.foolButton}
          onClick={handleButtonClick}
          onMouseEnter={handleButtonHover}
          style={{
            left: buttonPosition.x,
            top: buttonPosition.y,
            position: clickCount >= 16 ? "absolute" : "relative",
          }}
        >
          DON&apos;T PRESS THIS
        </button>
      )}

      {/* Exploded button effect */}
      {isExploded && !showFinalMessage && (
        <div className={styles.explosion}>💥</div>
      )}

      {/* Multiple buttons for level 14 */}
      {buttonsArray.length > 0 && (
        <div className={styles.buttonField}>
          {buttonsArray.map((btn) => (
            <button
              key={btn.id}
              className={`${styles.foolButton} ${styles.miniButton}`}
              style={{
                position: "absolute",
                left: btn.x,
                top: btn.y,
                transform: `rotate(${Math.random() * 360}deg)`,
              }}
              onClick={() => handleMultipleButtonClick(btn.isReal)}
            >
              DON&apos;T PRESS THIS
            </button>
          ))}
        </div>
      )}

      {/* Final message */}
      {showFinalMessage && (
        <div className={styles.finalMessage}>
          <h1>You did this to yourself. April Fool 😈</h1>
          <div
            className={styles.resetButton}
            onClick={() => {
              setClickCount(0);
              setIsExploded(false);
              setShowFinalMessage(false);
              setButtonPosition({ x: 0, y: 0 });
              setHideMainButton(false);
              setRealButtonFound(false);
            }}
          >
            Reset Prank
          </div>
        </div>
      )}

      {/* Rickroll modal */}
      {showRickroll && (
        <div className={styles.rickrollModal}>
          <div className={styles.modalContent}>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}

      {/* System error popup */}
      {showSystemError && (
        <div className={styles.systemError}>
          <div className={styles.errorContent}>
            <h3>SYSTEM ERROR</h3>
            <p>Fatal exception 0xC000021A occurred at address 0x00000000.</p>
            <p>Your computer will be formatted in 10 seconds.</p>
            <div
              className={styles.errorButton}
              onClick={() => setShowSystemError(false)}
            >
              Cancel (won&apos;t work)
            </div>
          </div>
        </div>
      )}

      {/* Hacked terminal */}
      {showHackedTerminal && (
        <div className={styles.hackedTerminal}>
          <div className={styles.terminalContent}>
            <p className={styles.hackText}>$ initiating_hack.exe</p>
            <p className={styles.hackText}>$ accessing_user_data...</p>
            <p className={styles.hackText}>$ downloading_browser_history...</p>
            <p className={styles.hackText}>$ stealing_passwords...</p>
            <p className={styles.hackText}>
              $ YOU&apos;RE HACKED! APRIL FOOLS!
            </p>
          </div>
        </div>
      )}

      {/* Click counter display */}
      <div className={styles.clickCounter}>
        Effects triggered: {clickCount}/20
      </div>
    </div>
  );
};

export default AprilFoolsButton;
