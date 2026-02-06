"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiPlus, FiMinus } from "react-icons/fi";

interface FAQItem {
  question: string;
  answer: string;
}

interface TabContent {
  [key: string]: FAQItem[];
}

interface TabsFAQProps {
  tabs?: string[];
  content?: TabContent;
  heading?: string;
  subheading?: string;
}

const defaultTabs = ["Services", "Training", "Careers", "General"];

const defaultContent: TabContent = {
  "Services": [
    {
      question: "What security services does KDT offer?",
      answer: "Knight Division Tactical provides comprehensive security solutions including executive protection, event security, risk assessment, and corporate security consulting. Our team of experienced professionals ensures the highest level of protection for our clients."
    },
    {
      question: "Do you operate internationally?",
      answer: "Yes, KDT operates globally with a network of trusted partners and operatives. We have successfully conducted operations across multiple continents, adapting to local requirements while maintaining our high standards."
    },
    {
      question: "How do I request a consultation?",
      answer: "You can request a consultation through our contact form or by emailing us directly. Our team will respond within 24 hours to schedule an initial assessment of your security needs."
    },
    {
      question: "What sets KDT apart from other security firms?",
      answer: "Our veteran-owned company combines military precision with modern security practices. We emphasize professionalism, continuous training, and building genuine relationships with our clients. Our team members are handpicked for both their skills and character."
    }
  ],
  "Training": [
    {
      question: "What training programs do you offer?",
      answer: "We offer a range of tactical training programs including firearms proficiency, close protection techniques, threat assessment, and emergency response. Programs are available for both individuals and corporate teams."
    },
    {
      question: "Do I need prior experience for your courses?",
      answer: "We offer courses for all skill levels, from beginners to advanced operators. Each course clearly indicates prerequisites, and our instructors adapt their approach to meet participants where they are."
    },
    {
      question: "Where are training sessions held?",
      answer: "Training takes place at our primary facility as well as partner locations across the country. For corporate clients, we also offer on-site training options tailored to your specific environment."
    },
    {
      question: "How do I enroll in a course?",
      answer: "Course enrollment is available through our Training page. Select your desired course, choose available dates, and complete the registration process. Early bird discounts are often available for VOC members."
    }
  ],
  "Careers": [
    {
      question: "What positions are available at KDT?",
      answer: "We regularly recruit for security operators, intelligence analysts, training instructors, and administrative roles. Current openings are posted on our Careers page with detailed requirements and application instructions."
    },
    {
      question: "What qualifications do you look for?",
      answer: "While specific requirements vary by position, we value military or law enforcement experience, relevant certifications, and most importantly, strong character and professionalism. We invest heavily in our team's continued development."
    },
    {
      question: "What's the application process like?",
      answer: "Applications are reviewed by our team, followed by initial interviews, skills assessments, and background verification. The entire process typically takes 2-4 weeks. We believe in thorough vetting to maintain our standards."
    },
    {
      question: "Do you offer remote positions?",
      answer: "Some intelligence and administrative roles offer remote flexibility. Operational positions require on-site presence. Each job posting specifies location requirements and any flexibility available."
    }
  ],
  "General": [
    {
      question: "What is the Virtual Operations Command (VOC)?",
      answer: "The VOC is our exclusive membership community providing early access to KDT content, training discounts, direct communication with our team, and exclusive intel reports. It's designed for those who want to stay connected with our mission."
    },
    {
      question: "How can I contact KDT?",
      answer: "You can reach us through the contact form on our website, by email, or through our social media channels. For urgent security matters, we provide priority contact options for existing clients."
    },
    {
      question: "Where is KDT headquartered?",
      answer: "Knight Division Tactical is headquartered in the United States with operational presence in multiple regions. Our distributed model allows us to serve clients wherever they need us."
    },
    {
      question: "Do you work with government agencies?",
      answer: "Yes, we maintain relationships with various government and law enforcement agencies, providing training, consulting, and operational support as contracted. All such work adheres to applicable regulations and security requirements."
    }
  ]
};

export default function TabsFAQ({
  tabs = defaultTabs,
  content = defaultContent,
  heading = "FAQs",
  subheading = "Let's answer some questions"
}: TabsFAQProps) {
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    setOpenIndex(null);
  };

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="px-4 py-12">
      <div className="mx-auto max-w-3xl">
        {/* Header */}
        <div className="mb-8 text-center">
          <p className="text-sm uppercase text-zinc-400 mb-2">{subheading}</p>
          <h2 className="text-4xl font-bold text-white">{heading}</h2>
        </div>

        {/* Tabs */}
        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => handleTabChange(tab)}
              className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                activeTab === tab
                  ? "text-black"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              {activeTab === tab && (
                <motion.span
                  layoutId="tab-indicator"
                  className="absolute inset-0 rounded-full bg-white"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10">{tab}</span>
            </button>
          ))}
        </div>

        {/* FAQ Items */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="space-y-4"
          >
            {content[activeTab]?.map((item, index) => (
              <div
                key={index}
                className="rounded-lg border border-zinc-700 bg-zinc-900/50"
              >
                <button
                  onClick={() => toggleQuestion(index)}
                  className="flex w-full items-center justify-between px-4 py-4 text-left"
                >
                  <span className="text-white font-medium">{item.question}</span>
                  <motion.span
                    animate={{ rotate: openIndex === index ? 45 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="ml-4 flex-shrink-0 text-zinc-400"
                  >
                    <FiPlus className="h-5 w-5" />
                  </motion.span>
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <p className="px-4 pb-4 text-zinc-400">{item.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
