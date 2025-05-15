"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import "./Solutions.css";
import solutionImg from "../../assets/img01.png";
import solutionImg2 from "../../assets/img02.png";
import solutionImg3 from "../../assets/img03.png";
import solutionImg4 from "../../assets/img04.png";
import solutionShap1 from "../../assets/solution-shap1.svg";
import solutionShap2 from "../../assets/solution-shap2.svg";

const Solutions = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isAutoSwitching, setIsAutoSwitching] = useState(true);

  const tabs = [
    {
      id: "1",
      title: "Test with Precision",
      bgColor: "EDF6FD",
      content: {
        text: {
          title: "Generate & Share Homework or Tests in Seconds",
          points: [
            "Generate Curriculum-Aligned Questions Instantly, Share online or Print",
            "Convert Any PDF into a Custom Computer-Based Test",
            "Personalize by Topic, Difficulty, Pace & Student Needs",
          ],
        },
        image: solutionImg2,
      },
    },
    {
      id: "2",
      title: "Learn by Doing",
      bgColor: "FEF1DA",
      content: {
        text: {
          title: "Understand the Reasoning Behind Every Question Now",
          points: [
            "Try First, Answer Later with Kaabil TA",
            "A Safe Space to Practice and Try each Question",
            "Learn at Your Own Pace, Access progressive hints to guide thinking",
            "Track progress through XP milestones.",
          ],
        },
        image: solutionImg,
      },
    },
    {
      id: "3",
      title: "Practise with Clarity",
      bgColor: "ECF7FF",
      content: {
        text: {
          title: "Never Tackle Tough Questions Alone Now",
          points: [
            "Ask your Kaabil TA any question, anytime, in English or Hindi.",
            "Receive targeted hints and quick revision tips",
            "Develop your critical-thinking skills.",
            "Type, talk, or upload a PDF to get instant feedback and solve through each problem",
          ],
        },
        image: solutionImg3,
      },
    },
    {
      id: "4",
      title: "Revise with Insight",
      bgColor: "B5D5EB",
      content: {
        text: {
          title: "Data Driven Insights and Smart Recommendations",
          points: [
            "See accuracy, time, and attempt analysis for each question.",
            "Personalised tips that guide both practice and instruction",
            "Identify strengths and gaps class and student wise at a glance",
          ],
        },
        image: solutionImg4,
      },
    },
  ];

  // Auto switch tabs every 5 seconds
  useEffect(() => {
    let interval;
    if (isAutoSwitching) {
      interval = setInterval(() => {
        setActiveTab((prevTab) => (prevTab + 1) % tabs.length);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isAutoSwitching, tabs.length]);

  const handleTabClick = (index) => {
    setActiveTab(index);
    // Reset auto-switching timer
    setIsAutoSwitching(false);
    setTimeout(() => setIsAutoSwitching(true), 10000);
  };

  return (
    <section id="solutions" className="Solutions_wrapper">
      <div className="container position-relative">
        <div className="section-title_title">
          <h2>Our Solutions</h2>
        </div>
        <div className="solutions-tabs">
          <div className="nav-pills">
            {tabs.map((tab, index) => (
              <button
                key={tab.id}
                onClick={() => handleTabClick(index)}
                className={activeTab === index ? "active" : ""}
              >
                {tab.title}
              </button>
            ))}
          </div>

          <div className="tab-content">
            {tabs.map((tab, index) => (
              <div
                key={tab.id}
                className={`tab-pane ${activeTab === index ? "active" : ""}`}
              >

                <div className={`content-card bg-${tab.bgColor}`}>
                  <div className="tab-wrapper-section">

                    <div className="text-content">
                      <h3>{tab.content.text.title}</h3>
                      <ul>
                        {tab.content.text.points.map((point, i) => (
                          <li key={i}>{point}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="image-content">
                      <Image
                        src={tab.content.image}
                        alt={tab.title}
                        width={400}
                        height={400}
                        className="solution-image"
                        priority={index === 0}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="vector-img-1">
          <Image
            src={solutionShap1}
            alt="Left decoration"
            width={373}
            height={402}
            className="shape-image"
            priority={false}
          />
        </div>
        <div className="vector-img-2">
          <Image
            src={solutionShap2}
            alt="Right decoration"
            width={135}
            height={190}
            className="shape-image"
            priority={false}
          />
        </div>
      </div>
    </section>
  );
};

export default Solutions;
