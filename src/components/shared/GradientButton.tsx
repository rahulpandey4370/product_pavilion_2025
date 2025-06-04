'use client';

import React, { useRef, MouseEvent } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cn } from '@/lib/utils';
import { type ButtonProps } from '@/components/ui/button'; // Keep this for type compatibility
import type { LucideIcon } from 'lucide-react';

interface GradientButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  icon?: LucideIcon;
  iconPosition?: 'left' | 'right';
  size?: 'sm' | 'lg' | 'default' | 'icon'; // From ButtonProps
  variant?: ButtonProps['variant']; // From ButtonProps
}

export default function GradientButton({
  className,
  variant, // unused with new CSS, but kept for type
  size,   // unused with new CSS, but kept for type
  asChild = false,
  icon: Icon,
  iconPosition = 'left',
  children,
  onClick,
  ...props
}: GradientButtonProps) {
  const Comp = asChild ? Slot : 'button';
  const btnRef = useRef<HTMLButtonElement>(null);

  const handleRipple = (event: MouseEvent<HTMLButtonElement>) => {
    const button = event.currentTarget;
    const circle = document.createElement('span');
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;

    const existingRipple = button.querySelector('.ripple');
    if (existingRipple) {
      existingRipple.remove();
    }
    
    circle.style.width = circle.style.height = `${diameter}px`;
    // Calculate click position relative to the button
    const rect = button.getBoundingClientRect();
    circle.style.left = `${event.clientX - rect.left - radius}px`;
    circle.style.top = `${event.clientY - rect.top - radius}px`;
    circle.classList.add('ripple');
        
    button.appendChild(circle);

    // Call original onClick if it exists
    if (onClick) {
      onClick(event);
    }
  };
  
  const magneticEffect = (event: MouseEvent<HTMLButtonElement>) => {
    const button = event.currentTarget;
    const textElement = button.querySelector('.btn-text') as HTMLElement | null;
    if (!textElement) return;

    const rect = button.getBoundingClientRect();
    const x = (event.clientX - rect.left - rect.width / 2) * 0.3; // 30% movement strength
    const y = (event.clientY - rect.top - rect.height / 2) * 0.3;

    textElement.style.transform = `translate(${x}px, ${y}px)`;
  };

  const resetMagneticEffect = (event: MouseEvent<HTMLButtonElement>) => {
    const button = event.currentTarget;
    const textElement = button.querySelector('.btn-text') as HTMLElement | null;
    if (textElement) {
      textElement.style.transform = 'translate(0px, 0px)';
    }
  };


  if (asChild) {
    // Slot merges its props. Child needs to handle ripple if desired.
    // Pass ref if the child can accept it.
    return (
      <Slot
        ref={props.ref || btnRef} // Forward ref if provided, else use internal for potential effects
        className={cn('magnetic-btn', className)} // Apply base magnetic class
        onClick={onClick} // Forward onClick
        onMouseMove={magneticEffect}
        onMouseLeave={resetMagneticEffect}
        {...props} // Spread remaining props
      >
        {/* Ensure children are wrapped correctly if they are not a single element.
            This might need adjustment based on how Slot handles complex children with these event handlers.
            For a simple Link as child, this should work.
        */}
        {React.Children.map(children, child => {
           if (React.isValidElement(child)) {
             // Try to clone and add .btn-text if it's a string or simple structure
             // This is tricky; ideally, the child component (Link) would have its own span.
             // For now, we rely on the child structure being <Link><span>Text</span> Icon</Link>
             return child;
           }
           return child;
         })}
      </Slot>
    );
  }

  return (
    <button
      ref={btnRef}
      className={cn('magnetic-btn', className)}
      onClick={handleRipple} // Ripple effect for actual button
      onMouseMove={magneticEffect}
      onMouseLeave={resetMagneticEffect}
      {...props}
    >
      {Icon && iconPosition === 'left' && <Icon className="mr-2 h-4 w-4" />}
      <span className="btn-text">{children}</span> {/* Text wrapped for magnetic effect */}
      {Icon && iconPosition === 'right' && <Icon className="ml-2 h-4 w-4" />}
    </button>
  );
}
