"use client"

import { useState, useEffect } from 'react'
import Image from 'next/image'

// Define the priority image that should always be included
const PRIORITY_IMAGE = '/Slideshow and teamwork/FB_IMG_1744432700171.jpg'

// List of all available images in the Slideshow and teamwork directory
const allImages = [
  '/Slideshow and teamwork/IMG-20250111-WA0018.jpg',
  '/Slideshow and teamwork/IMG-20240819-WA0003.jpg',
  '/Slideshow and teamwork/IMG-20240809-WA0048.jpg',
  '/Slideshow and teamwork/IMG-20240809-WA0001.jpg',
  '/Slideshow and teamwork/FB_IMG_1744432953473.jpg',
  '/Slideshow and teamwork/FB_IMG_1744432940159.jpg',
  '/Slideshow and teamwork/FB_IMG_1744432932815.jpg',
  '/Slideshow and teamwork/FB_IMG_1744432916654.jpg',
  '/Slideshow and teamwork/FB_IMG_1744432893399.jpg',
  '/Slideshow and teamwork/FB_IMG_1744432863040.jpg',
  '/Slideshow and teamwork/FB_IMG_1744432857256.jpg',
  '/Slideshow and teamwork/FB_IMG_1744432825869.jpg',
  '/Slideshow and teamwork/FB_IMG_1744432805494.jpg',
  '/Slideshow and teamwork/FB_IMG_1744432796752.jpg',
  '/Slideshow and teamwork/FB_IMG_1744432788513.jpg',
  '/Slideshow and teamwork/FB_IMG_1744432755031.jpg',
  '/Slideshow and teamwork/FB_IMG_1744432752381.jpg',
  '/Slideshow and teamwork/FB_IMG_1744432745503.jpg',
  '/Slideshow and teamwork/FB_IMG_1744432733977.jpg',
  '/Slideshow and teamwork/FB_IMG_1744432705178.jpg',
  '/Slideshow and teamwork/FB_IMG_1744432700171.jpg', // This will be included separately
  '/Slideshow and teamwork/FB_IMG_1744432697145.jpg',
  '/Slideshow and teamwork/FB_IMG_1744432691941.jpg',
  '/Slideshow and teamwork/FB_IMG_1744432650155.jpg',
  '/Slideshow and teamwork/FB_IMG_1744432633474.jpg',
  '/Slideshow and teamwork/FB_IMG_1744432631227.jpg',
  '/Slideshow and teamwork/FB_IMG_1744432614228.jpg',
  '/Slideshow and teamwork/FB_IMG_1744432607873.jpg',
  '/Slideshow and teamwork/FB_IMG_1744432592494.jpg',
  '/Slideshow and teamwork/FB_IMG_1744432513157.jpg',
]

// Function to shuffle an array (Fisher-Yates algorithm)
function shuffleArray<T>(array: T[]): T[] {
  const newArray = [...array]
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[newArray[i], newArray[j]] = [newArray[j], newArray[i]]
  }
  return newArray
}

// Generate a seed for randomization that changes every time
function getRandomSeed() {
  return Date.now() + Math.floor(Math.random() * 1000000);
}

export default function ImageSlideshow() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [selectedImages, setSelectedImages] = useState<string[]>([])
  const [randomSeed] = useState(getRandomSeed())
  
  // Select random images on component mount with the random seed
  useEffect(() => {
    const selectRandomImages = () => {
      console.log("Selecting random images with seed:", randomSeed);
      
      // Filter out the priority image to avoid duplicates
      const otherImages = allImages.filter(img => img !== PRIORITY_IMAGE)
      
      // Shuffle with the generated random seed
      const shuffled = shuffleArray(otherImages)
      
      // Get a random number between 9 and 11 (for total of 10-12 with priority image)
      const count = Math.floor(Math.random() * 3) + 9
      
      // Combine priority image with random selection of other images
      let selection = [PRIORITY_IMAGE, ...shuffled.slice(0, count)]
      
      // Shuffle the final selection to randomize position of priority image
      selection = shuffleArray(selection)
      
      console.log("Selected images:", selection);
      setSelectedImages(selection)
    }
    
    // Select random images immediately
    selectRandomImages()
    
    // Force reselection when component gets focus (useful for development)
    window.addEventListener('focus', selectRandomImages)
    
    return () => {
      window.removeEventListener('focus', selectRandomImages)
    }
  }, [randomSeed])
  
  // Change image every 4 seconds
  useEffect(() => {
    if (selectedImages.length === 0) return
    
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % selectedImages.length)
    }, 4000)
    
    return () => clearInterval(interval)
  }, [selectedImages])
  
  if (selectedImages.length === 0) {
    return null // Loading state or fallback could be added here
  }
  
  return (
    <div className="relative w-full h-full">
      {selectedImages.map((src, index) => (
        <div
          key={`${src}-${index}-${randomSeed}`}
          className={`absolute inset-0 transition-opacity duration-1500 ease-in-out rounded-3xl overflow-hidden ${
            index === currentImageIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
          style={{ 
            animationDelay: `${index * 0.5}s`,
            display: index === currentImageIndex ? 'block' : 'none'
          }}
        >
          <Image
            src={src}
            alt={`Leo Club image ${index + 1}`}
            fill
            className={`object-cover ${index === currentImageIndex ? 'image-zoom' : ''}`}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={index === 0}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </div>
      ))}
      
      {/* Navigation dots */}
      <div className="absolute bottom-4 left-0 right-0 z-20 flex justify-center space-x-2">
        {selectedImages.map((_, index) => (
          <button
            key={`dot-${index}-${randomSeed}`}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentImageIndex ? 'w-4 bg-white' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
} 