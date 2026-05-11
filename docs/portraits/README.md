# Portrait Images Setup

This directory contains portrait image placeholders for the Hero Section typewriter effect.

## What Was Implemented

The Hero Section now displays a portrait image that **automatically changes** when the typewriter text changes:

- **Position**: Right side of the screen, behind the hero text, in front of the Beams background
- **Size**: Portrait orientation (responsive from 192x256px mobile to 288x384px desktop)
- **Animation**: Smooth fade/transition when changing between images
- **Typewriter Sync**: Image changes **exactly** when typewriter switches to a new title

## Current Placeholders

Three placeholder SVG images are loaded:

1. `/portraits/ai-engineer.svg` → "AI ENGINEER"
2. `/portraits/fullstack-developer.svg` → "FULL-STACK DEVELOPER"
3. `/portraits/system-architect.svg` → "SYSTEM ARCHITECT"

## How to Add Your Images

### Option 1: Replace SVG files with PNG files (Recommended)

1. Convert your portrait images to PNG format
2. Ensure they are portrait orientation (height > width)
3. Name them exactly:
   - `ai-engineer.png`
   - `fullstack-developer.png`
   - `system-architect.png`

4. Place them in this directory (`/public/portraits/`)

5. Update `src/components/sections/HeroSection.tsx` line 14-17:
   ```typescript
   const portraits = [
     '/portraits/ai-engineer.png',           // Change .svg to .png
     '/portraits/fullstack-developer.png',   // Change .svg to .png
     '/portraits/system-architect.png'       // Change .svg to .png
   ];
   ```

### Option 2: Update paths directly

If your images have different names, update the `portraits` array in `HeroSection.tsx` with your custom paths:

```typescript
const portraits = [
  '/portraits/your-ai-engineer-image.png',
  '/portraits/your-fullstack-image.png',
  '/portraits/your-architect-image.png'
];
```

## Image Requirements

- **Format**: PNG (or SVG, JPG, etc. - any web-supported format)
- **Orientation**: Portrait (taller than wide)
- **Recommended Size**: 400x600px or 800x1200px
- **File Size**: Optimize for web (< 500KB each recommended)

## Fallback Behavior

If an image fails to load, the system will display a placeholder image from `placeholder.com` automatically.

## Z-Index Stack (Hero Section)

```
z-0:  Beams background (animated shader)
z-5:  Portrait image (your images go here)
z-10: Text content (typewriter, title, description)
z-20: Scroll hint (bottom right arrow)
```

## Customization

### Change Image Position
In `HeroSection.tsx`, modify the positioning classes:
- `justify-end` - Right side (change to `justify-start` for left, `justify-center` for center)
- `pr-8 md:pr-16 lg:pr-24` - Right padding (adjust spacing)

### Change Transition Speed
Modify the `duration-700` class to adjust how fast images transition:
- `duration-300` - Fast
- `duration-500` - Medium
- `duration-700` - Slow (current)

### Change Opacity
Modify `opacity-80` to change how visible the portrait is:
- `opacity-50` - Very transparent
- `opacity-75` - Moderate
- `opacity-100` - Fully opaque

## Example File Structure

```
/public
  /portraits
    ai-engineer.png              ← Your image
    fullstack-developer.png      ← Your image
    system-architect.png         ← Your image
```

That's it! The portrait will automatically sync with the typewriter text changes.
