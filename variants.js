// Framer Motion Animation Variants
// Reusable animation configuration for consistent animations across components
// 
// Parameters:
// - direction: Animation direction ('up', 'down', 'left', 'right')
// - delay: Animation delay in seconds
//
// Returns an object with two states:
// - hidden: Initial state (element starts invisible and offset)
// - show: Final state (element is visible and in position)
export const fadeIn = (direction, delay) => {
  return {
    // Hidden State - element before animation
    hidden: {
      // Vertical offset: moves up 80px, down -80px, or stays at 0
      y: direction === 'up' ? 80 : direction === 'down' ? -80 : 0,
      opacity: 0,  // Invisible
      // Horizontal offset: moves left 80px, right -80px, or stays at 0
      x: direction === 'left' ? 80 : direction === 'right' ? -80 : 0,
      transition: {
        type: 'tween',  // Smooth interpolation (not spring physics)
        duration: 1.5,  // Animation duration in seconds
        delay: delay,  // Delay before animation starts
        // Easing curve: [x1, y1, x2, y2] for cubic bezier
        // This creates a smooth, natural motion
        ease: [0.25, 0.6, 0.3, 0.8],
      },
    },
    // Show State - element after animation
    show: {
      y: 0,  // No vertical offset
      x: 0,  // No horizontal offset
      opacity: 1,  // Fully visible
      transition: {
        type: 'tween',
        duration: 1.4,  // Slightly faster than hidden state
        delay: delay,
        // Different easing for show state (slightly different feel)
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };
};
