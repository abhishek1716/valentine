"use client";
import { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "./v1.module.css";

export default function ModelV1Component() {
  // Sample model photos (replace with your actual photos)
  const photos = [
    { id: 1, src: "/model/model1.jpg", alt: "Model photo 1" },
    { id: 2, src: "/model/model2.jpg", alt: "Model photo 2" },
    { id: 3, src: "/model/model3.jpg", alt: "Model photo 3" },
    { id: 4, src: "/model/model4.jpg", alt: "Model photo 4" },
    { id: 5, src: "/model/model5.jpg", alt: "Model photo 5" },
    { id: 6, src: "/model/model6.jpg", alt: "Model photo 6" },
    { id: 7, src: "/model/model7.jpg", alt: "Model photo 7" },
    { id: 8, src: "/model/model8.jpg", alt: "Model photo 8" },
    { id: 9, src: "/model/model9.jpg", alt: "Model photo 9" },
  ];

  // State variables
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slideType, setSlideType] = useState("fullScreen");
  const [isPlaying, setIsPlaying] = useState(true);

  // Auto slide functionality
  useEffect(() => {
    let slideInterval: any;

    if (isPlaying && slideType === "autoplay") {
      slideInterval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % photos.length);
      }, 3000);
    }

    return () => clearInterval(slideInterval);
  }, [isPlaying, photos.length, slideType]);

  // Navigation functions
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % photos.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? photos.length - 1 : prev - 1));
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Model Photo Showcase</title>
        <meta
          name="description"
          content="Model photography portfolio showcase"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Model Photo Showcase</h1>

        <div className={styles.slideshowControls}>
          <select
            value={slideType}
            onChange={(e) => setSlideType(e.target.value)}
            className={styles.select}
          >
            <option value="fullScreen">Full-Screen Slideshow</option>
            <option value="kenBurns">Ken Burns Effect</option>
            <option value="fadeInOut">Fade In/Out</option>
            <option value="carousel">Carousel</option>
            <option value="stacked">Stacked</option>
            <option value="parallax">Parallax</option>
            <option value="thumbnail">Thumbnail Slider</option>
            <option value="splitScreen">Split-Screen</option>
            <option value="autoplay">Autoplay</option>
            <option value="grid">Grid</option>
          </select>

          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className={styles.button}
          >
            {isPlaying ? "Pause" : "Play"}
          </button>
        </div>

        {/* Slideshow container */}
        <div className={`${styles.slideshow} ${styles[slideType]}`}>
          {slideType === "grid" ? (
            <div className={styles.gridContainer}>
              {photos.map((photo) => (
                <div key={photo.id} className={styles.gridItem}>
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    width={300}
                    height={400}
                    objectFit="cover"
                  />
                </div>
              ))}
            </div>
          ) : slideType === "carousel" ? (
            <div className={styles.carouselContainer}>
              {photos.map((photo, index) => (
                <div
                  key={photo.id}
                  className={`${styles.carouselSlide} ${
                    index === currentSlide ? styles.active : ""
                  }`}
                  style={{
                    transform: `translateX(${(index - currentSlide) * 100}%)`,
                  }}
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              ))}
            </div>
          ) : slideType === "thumbnail" ? (
            <div className={styles.thumbnailContainer}>
              <div className={styles.mainImage}>
                <Image
                  src={photos[currentSlide].src}
                  alt={photos[currentSlide].alt}
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              <div className={styles.thumbnails}>
                {photos.map((photo, index) => (
                  <div
                    key={photo.id}
                    className={`${styles.thumbnail} ${
                      index === currentSlide ? styles.active : ""
                    }`}
                    onClick={() => goToSlide(index)}
                  >
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      width={100}
                      height={100}
                      objectFit="cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          ) : slideType === "splitScreen" ? (
            <div className={styles.splitContainer}>
              <div className={styles.splitLeft}>
                <Image
                  src={photos[currentSlide].src}
                  alt={photos[currentSlide].alt}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className={styles.splitRight}>
                <Image
                  src={photos[(currentSlide + 1) % photos.length].src}
                  alt={photos[(currentSlide + 1) % photos.length].alt}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
          ) : (
            <>
              {photos.map((photo, index) => (
                <div
                  key={photo.id}
                  className={`
                    ${styles.slide} 
                    ${slideType === "fadeInOut" ? styles.fade : ""}
                    ${slideType === "kenBurns" ? styles.kenBurns : ""}
                    ${slideType === "stacked" ? styles.stacked : ""}
                    ${slideType === "parallax" ? styles.parallax : ""}
                    ${index === currentSlide ? styles.active : ""}
                  `}
                  style={{
                    zIndex: index === currentSlide ? 1 : 0,
                    opacity: index === currentSlide ? 1 : 0,
                  }}
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    layout="fill"
                    objectFit="cover"
                    priority={index === currentSlide}
                  />
                </div>
              ))}
            </>
          )}

          {/* Navigation arrows (not for grid view) */}
          {slideType !== "grid" && (
            <>
              <button
                onClick={prevSlide}
                className={`${styles.navButton} ${styles.prev}`}
              >
                &#10094;
              </button>
              <button
                onClick={nextSlide}
                className={`${styles.navButton} ${styles.next}`}
              >
                &#10095;
              </button>
            </>
          )}

          {/* Dots indicator (not for grid, carousel, or thumbnail view) */}
          {!["grid", "carousel", "thumbnail"].includes(slideType) && (
            <div className={styles.dots}>
              {photos.map((_, index) => (
                <span
                  key={index}
                  className={`${styles.dot} ${
                    index === currentSlide ? styles.activeDot : ""
                  }`}
                  onClick={() => goToSlide(index)}
                ></span>
              ))}
            </div>
          )}
        </div>
      </main>

      <footer className={styles.footer}>
        <p>Model Photo Showcase &copy; {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
}
