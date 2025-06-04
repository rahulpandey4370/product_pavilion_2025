import { Slot } from '@radix-ui/react-slot';
import { cn } from '@/lib/utils';
import { Button, type ButtonProps } from '@/components/ui/button';
import type { LucideIcon } from 'lucide-react';

interface GradientButtonProps extends ButtonProps {
  asChild?: boolean;
  icon?: LucideIcon;
  iconPosition?: 'left' | 'right';
}

export default function GradientButton({
  className,
  variant,
  size,
  asChild = false,
  icon: Icon,
  iconPosition = 'left',
  children,
  ...props
}: GradientButtonProps) {
  const gradientStyleClasses = 'bg-gradient-to-r from-primary to-accent text-primary-foreground hover:opacity-90 transition-opacity shadow-lg';

  if (asChild) {
    // When asChild is true, GradientButton renders a Slot.
    // The Slot will merge its className with its direct child's className.
    // The icon/iconPosition props of GradientButton are ignored in this mode;
    // the child component (passed as `children`) is responsible for its own content, including icons.
    return (
      <Slot
        className={cn(gradientStyleClasses, className)}
        {...props}
      >
        {children}
      </Slot>
    );
  }

  // When not asChild, GradientButton renders a shadcn Button.
  // We pass our gradient classes in the className prop.
  // The shadcn Button will merge this with its own variant-based classes.
  return (
    <Button
      variant={variant}
      size={size}
      className={cn(gradientStyleClasses, className)}
      {...props}
    >
      {Icon && iconPosition === 'left' && <Icon className="mr-2 h-4 w-4" />}
      {children}
      {Icon && iconPosition === 'right' && <Icon className="ml-2 h-4 w-4" />}
    </Button>
  );
}
