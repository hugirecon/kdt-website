'use client';

import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  avatar?: string;
}

interface QuoteTestimonialProps {
  testimonials?: Testimonial[];
  quoteFont?: {
    fontSize?: string;
    fontWeight?: number;
    fontFamily?: string;
    fontStyle?: string;
    letterSpacing?: string;
    lineHeight?: number;
  };
  quoteColor?: string;
  backgroundColor?: string;
  activeColor?: string;
  hoverColor?: string;
  roleColor?: string;
  showQuotationMarks?: boolean;
  quoteMarkColor?: string;
  quoteMarkSize?: number;
  quotationMarkOpacity?: number;
  animationDuration?: number;
  gap?: number;
  avatarSize?: number;
}

export default function QuoteTestimonial(props: QuoteTestimonialProps) {
  const {
    testimonials = [
      {
        quote: "This changed everything for me.",
        author: "Sarah Chen",
        role: "Designer at Figma",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop"
      },
      {
        quote: "Simply brilliant. Nothing else compares.",
        author: "Marcus Johnson",
        role: "Engineer at Vercel",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
      },
      {
        quote: "The attention to detail is unmatched.",
        author: "Elena Rodriguez",
        role: "Founder at Craft",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop"
      }
    ],
    quoteFont = {
      fontSize: "28px",
      fontWeight: 300,
      lineHeight: 1.4
    },
    quoteColor = "#ffffff",
    backgroundColor = "transparent",
    activeColor = "#00ff41",
    hoverColor = "rgba(0, 255, 65, 0.1)",
    roleColor = "#6b7280",
    showQuotationMarks = true,
    quoteMarkColor = "#00ff41",
    quoteMarkSize = 72,
    quotationMarkOpacity = 0.06,
    animationDuration = 0.4,
    gap = 40,
    avatarSize = 32
  } = props;

  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const handleSelect = (index: number) => {
    if (index !== activeIndex) {
      setActiveIndex(index);
    }
  };

  const activeTestimonial = testimonials[activeIndex];

  return _jsx("div", {
    style: {
      width: "100%",
      height: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: backgroundColor,
      padding: "32px"
    },
    children: _jsxs("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: `${gap}px`,
        paddingTop: "64px",
        paddingBottom: "64px"
      },
      children: [
        _jsxs("div", {
          style: {
            position: "relative",
            paddingLeft: "32px",
            paddingRight: "32px"
          },
          children: [
            showQuotationMarks && _jsx("span", {
              style: {
                position: "absolute",
                left: `-${quoteMarkSize * 0.15}px`,
                top: `-${quoteMarkSize * 0.35}px`,
                fontSize: `${quoteMarkSize}px`,
                fontFamily: "Georgia, serif",
                color: quoteMarkColor,
                opacity: quotationMarkOpacity,
                userSelect: "none",
                pointerEvents: "none",
                lineHeight: 1
              },
              children: '"'
            }),
            _jsx(AnimatePresence, {
              mode: "wait",
              children: _jsx(motion.p, {
                initial: { opacity: 0, filter: "blur(4px)", scale: 0.98 },
                animate: { opacity: 1, filter: "blur(0px)", scale: 1 },
                exit: { opacity: 0, filter: "blur(4px)", scale: 0.98 },
                transition: { duration: animationDuration, ease: "easeOut" },
                style: {
                  fontSize: quoteFont.fontSize,
                  fontWeight: quoteFont.fontWeight,
                  fontFamily: quoteFont.fontFamily,
                  fontStyle: quoteFont.fontStyle,
                  letterSpacing: quoteFont.letterSpacing,
                  lineHeight: quoteFont.lineHeight || 1.6,
                  color: quoteColor,
                  textAlign: "center",
                  maxWidth: "512px",
                  margin: 0
                },
                children: activeTestimonial.quote
              }, activeIndex)
            }),
            showQuotationMarks && _jsx("span", {
              style: {
                position: "absolute",
                right: `-${quoteMarkSize * 0.15}px`,
                bottom: `-${quoteMarkSize * 0.5}px`,
                fontSize: `${quoteMarkSize}px`,
                fontFamily: "Georgia, serif",
                color: quoteMarkColor,
                opacity: quotationMarkOpacity,
                userSelect: "none",
                pointerEvents: "none",
                lineHeight: 1
              },
              children: '"'
            })
          ]
        }),
        _jsxs("div", {
          style: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "24px",
            marginTop: "8px"
          },
          children: [
            _jsx(AnimatePresence, {
              mode: "wait",
              children: _jsx(motion.p, {
                initial: { opacity: 0, y: 8 },
                animate: { opacity: 1, y: 0 },
                exit: { opacity: 0, y: 8 },
                transition: { duration: animationDuration * 1.25, ease: "easeOut" },
                style: {
                  fontSize: "11px",
                  color: roleColor,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  margin: 0
                },
                children: activeTestimonial.role
              }, activeIndex)
            }),
            _jsx("div", {
              style: {
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px"
              },
              children: testimonials.map((testimonial, index) => {
                const isActive = activeIndex === index;
                const isHovered = hoveredIndex === index && !isActive;
                const showName = isActive || isHovered;
                return _jsxs(motion.button, {
                  onClick: () => handleSelect(index),
                  onMouseEnter: () => setHoveredIndex(index),
                  onMouseLeave: () => setHoveredIndex(null),
                  style: {
                    position: "relative",
                    display: "flex",
                    alignItems: "center",
                    gap: 0,
                    borderRadius: "9999px",
                    cursor: "pointer",
                    border: "none",
                    overflow: "hidden"
                  },
                  animate: {
                    backgroundColor: isActive ? activeColor : isHovered ? hoverColor : "transparent",
                    paddingRight: showName ? 16 : 2,
                    paddingLeft: showName ? 8 : 2,
                    paddingTop: showName ? 8 : 2,
                    paddingBottom: showName ? 8 : 2,
                    boxShadow: isActive ? "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" : "0 0 0 0 rgba(0, 0, 0, 0)"
                  },
                  transition: {
                    duration: animationDuration * 1.25,
                    ease: [0.4, 0, 0.2, 1]
                  },
                  whileTap: { scale: 0.98 },
                  children: [
                    _jsx("div", {
                      style: {
                        position: "relative",
                        flexShrink: 0
                      },
                      children: testimonial.avatar 
                        ? _jsx(motion.img, {
                            src: testimonial.avatar,
                            alt: testimonial.author,
                            style: {
                              width: `${avatarSize}px`,
                              height: `${avatarSize}px`,
                              borderRadius: "9999px",
                              objectFit: "cover"
                            },
                            animate: {
                              boxShadow: isActive ? "0 0 0 2px rgba(0, 255, 65, 0.3)" : "0 0 0 0px rgba(255, 255, 255, 0)"
                            },
                            transition: {
                              duration: animationDuration * 1.25,
                              ease: [0.4, 0, 0.2, 1]
                            },
                            whileHover: !isActive ? { scale: 1.05 } : {}
                          })
                        : _jsx(motion.div, {
                            style: {
                              width: `${avatarSize}px`,
                              height: `${avatarSize}px`,
                              borderRadius: "9999px",
                              backgroundColor: isActive ? "rgba(0, 0, 0, 0.3)" : "rgba(255, 255, 255, 0.1)",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              fontSize: `${avatarSize * 0.4}px`,
                              fontWeight: 600,
                              color: isActive ? "#000000" : quoteColor
                            },
                            animate: {
                              boxShadow: isActive ? "0 0 0 2px rgba(0, 255, 65, 0.3)" : "0 0 0 0px rgba(255, 255, 255, 0)"
                            },
                            transition: {
                              duration: animationDuration * 1.25,
                              ease: [0.4, 0, 0.2, 1]
                            },
                            whileHover: !isActive ? { scale: 1.05 } : {},
                            children: testimonial.author.split(' ').map(n => n[0]).join('').slice(0, 2)
                          })
                    }),
                    _jsx(motion.div, {
                      style: {
                        display: "grid",
                        overflow: "hidden"
                      },
                      animate: {
                        gridTemplateColumns: showName ? "1fr" : "0fr",
                        opacity: showName ? 1 : 0,
                        marginLeft: showName ? 8 : 0
                      },
                      transition: {
                        duration: animationDuration * 1.25,
                        ease: [0.4, 0, 0.2, 1]
                      },
                      children: _jsx("div", {
                        style: {
                          overflow: "hidden"
                        },
                        children: _jsx(motion.span, {
                          style: {
                            fontSize: "14px",
                            fontWeight: 500,
                            whiteSpace: "nowrap",
                            display: "block"
                          },
                          animate: {
                            color: isActive ? "#000000" : quoteColor
                          },
                          transition: {
                            duration: animationDuration * 0.75
                          },
                          children: testimonial.author
                        })
                      })
                    })
                  ]
                }, index);
              })
            })
          ]
        })
      ]
    })
  });
}
