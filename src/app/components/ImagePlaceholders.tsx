'use client';

import { useEffect } from 'react';

// This component is used to inject placeholder images for the demo
// In a real project, these would be real images stored in the public folder
export default function ImagePlaceholders() {
  useEffect(() => {
    // We're using this approach to avoid having to actually create image files
    // This is only for the demo - in a real project, use actual image files
    
    // Create a style element
    const style = document.createElement('style');
    
    // Add CSS to create image placeholders
    style.textContent = `
      /* Portfolio Placeholders */
      [src="/portfolio-1.jpg"]::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(45deg, #3b82f6, #2563eb);
        z-index: 1;
      }
      
      [src="/portfolio-2.jpg"]::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(45deg, #10b981, #059669);
        z-index: 1;
      }
      
      [src="/portfolio-3.jpg"]::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(45deg, #f59e0b, #d97706);
        z-index: 1;
      }
      
      [src="/portfolio-4.jpg"]::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(45deg, #ef4444, #dc2626);
        z-index: 1;
      }
      
      [src="/portfolio-5.jpg"]::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(45deg, #8b5cf6, #7c3aed);
        z-index: 1;
      }
      
      [src="/portfolio-6.jpg"]::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(45deg, #ec4899, #be185d);
        z-index: 1;
      }
      
      /* Testimonial Placeholders */
      [src="/testimonial-1.jpg"]::before {
        content: "AH";
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(45deg, #3b82f6, #1d4ed8);
        color: white;
        font-size: 16px;
        font-weight: bold;
        z-index: 1;
      }
      
      [src="/testimonial-2.jpg"]::before {
        content: "SR";
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(45deg, #10b981, #047857);
        color: white;
        font-size: 16px;
        font-weight: bold;
        z-index: 1;
      }
      
      [src="/testimonial-3.jpg"]::before {
        content: "BS";
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(45deg, #f59e0b, #b45309);
        color: white;
        font-size: 16px;
        font-weight: bold;
        z-index: 1;
      }
      
      /* Why Us Placeholder */
      [src="/why-us.jpg"]::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(45deg, #2563eb, #1d4ed8);
        z-index: 1;
      }
    `;
    
    // Append the style to the document head
    document.head.appendChild(style);
    
    // Clean up on component unmount
    return () => {
      document.head.removeChild(style);
    };
  }, []);
  
  return null; // This component doesn't render anything visible
} 