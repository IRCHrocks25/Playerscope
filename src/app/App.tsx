import { useEffect } from "react";
import "./playerscope.css";

import { Nav } from "./components/ps/Nav";
import { Hero } from "./components/ps/Hero";
import { Statement } from "./components/ps/Statement";
import { Problem } from "./components/ps/Problem";
import { VideoStrip } from "./components/ps/VideoStrip";
import { Unified } from "./components/ps/Unified";
import { ProductSection } from "./components/ps/ProductSection";
import { StorySection } from "./components/ps/StorySection";
import { FoundationSection } from "./components/ps/FoundationSection";
import { ApproachSection } from "./components/ps/ApproachSection";
import { CtaDark } from "./components/ps/CtaDark";
import { Footer } from "./components/ps/Footer";

export default function App() {
  // Reveal on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 },
    );

    const revealEls = document.querySelectorAll(".reveal");
    revealEls.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // Grid stagger for rcard / ahead-card / stat-card
  useEffect(() => {
    const gridObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const children = (
              entry.target as HTMLElement
            ).querySelectorAll(
              ".rcard, .ahead-card, .stat-card",
            );
            children.forEach((child, i) => {
              setTimeout(() => {
                (child as HTMLElement).style.opacity = "1";
                (child as HTMLElement).style.transform =
                  "translateY(0)";
              }, i * 80);
            });
          }
        });
      },
      { threshold: 0.1 },
    );

    const containers = document.querySelectorAll(
      ".relief-items, .ahead-visual, .ahead-stats",
    );
    containers.forEach((el) => {
      const children = el.querySelectorAll(
        ".rcard, .ahead-card, .stat-card",
      );
      children.forEach((child) => {
        (child as HTMLElement).style.opacity = "0";
        (child as HTMLElement).style.transform =
          "translateY(20px)";
        (child as HTMLElement).style.transition =
          "opacity 0.5s ease, transform 0.5s ease";
      });
      gridObserver.observe(el);
    });

    return () => gridObserver.disconnect();
  }, []);

  return (
    <div className="ps-app">
      <Nav />
      <Hero />
      <Statement />
      <Problem />
      <VideoStrip />
      <Unified />
      <ProductSection />
      <VideoStrip />
      <FoundationSection />
      <StorySection />
      <VideoStrip />
      <ApproachSection />
      <CtaDark />
      <Footer />
    </div>
  );
}