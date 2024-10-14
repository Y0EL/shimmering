'use client'

import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"

const Section = ({ id, title, content, imageSrc, onNext, isLast }) => (
  <section id={id} className="relative h-screen flex items-center justify-center text-center text-white">
    <div className="absolute inset-0 z-0">
      <Image
        src={imageSrc}
        layout="fill"
        objectFit="cover"
        alt={title}
        priority
      />
    </div>
    <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
    <div className="relative z-20 max-w-4xl px-6">
      <h2 className="text-4xl md:text-5xl font-bold mb-6">{title}</h2>
      {content}
      {!isLast && (
        <Button
          onClick={onNext}
          className="mt-8 bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300"
        >
          Next Section
        </Button>
      )}
    </div>
  </section>
)

export default function CollaborationProposal() {
  const [currentSection, setCurrentSection] = useState(0)
  const sectionsRef = useRef([])

  const sections = [
    {
      id: "hero",
      title: "Elevate Your Brand with Exquisite Jewelry",
      imageSrc: "/placeholder.svg?height=1080&width=1920",
      content: (
        <p className="text-xl md:text-2xl mb-8">
          Join us in a stunning collaboration that merges influencer charisma with timeless elegance. Together, we'll craft a collection that resonates with your audience and sparkles with innovation.
        </p>
      )
    },
    {
      id: "requirements",
      title: "Collaboration Requirements",
      imageSrc: "/placeholder.svg?height=1080&width=1920",
      content: (
        <ul className="list-none space-y-4 text-lg">
          <li>Established social media presence with at least 50,000 followers</li>
          <li>Engagement rate of 3% or higher</li>
          <li>Authentic passion for jewelry and fashion</li>
          <li>Ability to create high-quality content (photos/videos)</li>
          <li>Willingness to participate in promotional events</li>
        </ul>
      )
    },
    {
      id: "purpose",
      title: "Collaboration Purpose",
      imageSrc: "/placeholder.svg?height=1080&width=1920",
      content: (
        <>
          <p className="text-lg mb-4">
            Our collaboration aims to create a unique jewelry line that combines your personal style with our craftsmanship. Together, we'll design pieces that resonate with your audience and showcase the beauty of fine jewelry.
          </p>
          <p className="text-lg">
            This partnership will not only produce stunning jewelry but also create engaging content that tells a story, inspiring your followers to embrace their own style through our collaborative creations.
          </p>
        </>
      )
    },
    {
      id: "benefits",
      title: "Collaboration Benefits",
      imageSrc: "/placeholder.svg?height=1080&width=1920",
      content: (
        <ul className="grid md:grid-cols-2 gap-4 text-lg">
          {[
            "Exclusive jewelry pieces tailored to your style",
            "Revenue share from sales of the collaborative collection",
            "Increased brand visibility and credibility",
            "Professional photo and video shoots",
            "VIP access to fashion events and product launches",
            "Opportunity to expand your influence in the luxury market"
          ].map((benefit, index) => (
            <li key={index} className="flex items-start">
              <svg className="w-6 h-6 text-primary mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span>{benefit}</span>
            </li>
          ))}
        </ul>
      )
    }
  ]

  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js'
    script.async = true
    document.body.appendChild(script)

    script.onload = () => {
      if (window.particlesJS) {
        window.particlesJS('particles-js', {
          particles: {
            number: { value: 80, density: { enable: true, value_area: 800 } },
            color: { value: "#ffffff" },
            shape: { type: "circle" },
            opacity: { value: 0.5, random: true, anim: { enable: true, speed: 1, opacity_min: 0.1, sync: false } },
            size: { value: 3, random: true, anim: { enable: false, speed: 40, size_min: 0.1, sync: false } },
            line_linked: { enable: true, distance: 150, color: "#ffffff", opacity: 0.4, width: 1 },
            move: { enable: true, speed: 6, direction: "none", random: false, straight: false, out_mode: "out", bounce: false, attract: { enable: false, rotateX: 600, rotateY: 1200 } }
          },
          interactivity: {
            detect_on: "canvas",
            events: { onhover: { enable: true, mode: "repulse" }, onclick: { enable: true, mode: "push" }, resize: true },
            modes: { grab: { distance: 400, line_linked: { opacity: 1 } }, bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 }, repulse: { distance: 200, duration: 0.4 }, push: { particles_nb: 4 }, remove: { particles_nb: 2 } }
          },
          retina_detect: true
        })
      }
    }

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault()
    }
    window.addEventListener('wheel', handleWheel, { passive: false })
    return () => {
      window.removeEventListener('wheel', handleWheel)
    }
  }, [])

  const handleNext = () => {
    if (currentSection < sections.length - 1) {
      setCurrentSection(currentSection + 1)
      sectionsRef.current[currentSection + 1].scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="h-screen overflow-hidden">
      <div id="particles-js" className="fixed inset-0 z-0 pointer-events-none"></div>
      
      {sections.map((section, index) => (
        <div key={section.id} ref={(el) => (sectionsRef.current[index] = el)} className="h-screen">
          <Section
            {...section}
            onNext={handleNext}
            isLast={index === sections.length - 1}
          />
        </div>
      ))}

      <footer className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white py-4 px-4 text-center z-50">
        <h3 className="text-xl font-bold mb-2">Shimmering Jewelry</h3>
        <p className="mb-2">&copy; {new Date().getFullYear()} Shimmering Jewelry. All rights reserved.</p>
        <Link href="https://www.shimmeringjewelry.com" className="text-primary hover:underline">
          Visit our official store
        </Link>
      </footer>

      <div className="fixed top-4 right-4 z-50">
        <Button
          onClick={() => {
            setCurrentSection(0)
            sectionsRef.current[0].scrollIntoView({ behavior: 'smooth' })
          }}
          className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 rounded-full w-12 h-12 flex items-center justify-center"
          aria-label="Scroll to top"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
          </svg>
        </Button>
      </div>
    </div>
  )
}
