// components/StatsDisplay/StatsDisplay.tsx
import React from "react";
import type { StatsDisplayProps } from "../../types";

const StatsDisplay: React.FC<StatsDisplayProps> = ({
  stats,
  showReadingTime = true,
}) => {
  // Format reading time as mm:ss
  const formatReadingTime = (minutes: number) => {
    const totalSeconds = Math.round(minutes * 60);
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  return (
    <div className="grid grid-cols-2 gap-4 mt-4 p-4 bg-gray-100 rounded-lg">
      <div>
        <p className="text-lg font-semibold">Characters</p>
        <p className="text-xl">{stats.characterCount}</p>
      </div>
      <div>
        <p className="text-lg font-semibold">Words</p>
        <p className="text-xl">{stats.wordCount}</p>
      </div>
      {showReadingTime && (
        <div className="col-span-2">
          <p className="text-lg font-semibold">Reading Time</p>
          <p className="text-xl">{formatReadingTime(stats.readingTime)}</p>
        </div>
      )}
    </div>
  );
};

export default StatsDisplay;