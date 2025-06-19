# Reflection Questions

## 1. How did I handle state updates when the text changed?

I used `useState` in React to manage both the input (`text`) and statistics (`stats`).  
- `setText` updates the current text.  
- `setStats` updates word/character counts using the latest input.  
- I used the functional form of `setStats` to avoid stale data during rapid input.  

This ensured accurate, real-time updates while typing.

---

## 2. What considerations did I make when calculating reading time?

- Split the text by spaces, filtering out empty values.  
- Assumed 200 words per minute as the average reading speed.  
- Calculated reading time and displayed it in `mm:ss` format.  
- Rounded to two decimals for clarity.  
- Compared against a target reading time to apply conditional styling (green/yellow).  
- Handled empty input by setting time to `0`.

---

## 3. How did I ensure the UI remained responsive during rapid text input?

- Kept calculations lightweight (e.g., `text.length` for characters).  
- Let React handle efficient updates.  
- Directly bound the text input to state.  
- Used Tailwind CSS to maintain layout stability.  
- Tested fast typing on both desktop and mobile for smooth performance.

---

## 4. What challenges did I face when implementing the statistics calculations?

- **Word count**: Handled extra spaces and blank input.  
- **Zero input**: Ensured the app didn’t break with empty strings.  
- **Reading time**: Selected 200 wpm and made results readable.  
- **Time formatting**: Learned how to convert to proper `mm:ss` format.  
- **Performance**: Simplified logic to avoid slowing the app.

Fixing these edge cases helped create a reliable and fast experience.
