// components/CharacterCounter/CharacterCounter.tsx
import { useState } from "react";
import StatsDisplay from "../StatsDisplay/StatsDisplay";
import TextInput from "../TextInput/TextInput";
import type { CharacterCounterProps, TextStats } from "../../types";

const CharacterCounter: React.FC<CharacterCounterProps> = ({
  minWords = 25,
  maxWords = 100,
  targetReadingTime = 1, // in minutes
}) => {
  const [text, setText] = useState("");
  const [stats, setStats] = useState<TextStats>({
    characterCount: 0,
    wordCount: 0,
    readingTime: 0,
  });

  const handleTextChange = (newText: string) => {
    setText(newText);

    // Calculate word count (split by whitespace, filter out empty strings)
    const words = newText.trim().split(/\s+/).filter((word) => word.length > 0);
    const wordCount = newText.trim() ? words.length : 0;

    // Calculate reading time (assume 200 words per minute)
    const readingTime = wordCount / 200;

    setStats({
      characterCount: newText.length,
      wordCount,
      readingTime: Number(readingTime.toFixed(2)),
    });
  };

  // Calculate progress percentage for word count
  const wordProgress = maxWords
    ? Math.min((stats.wordCount / maxWords) * 100, 100)
    : 0;

  // Determine reading time status
  const readingTimeStatus =
    stats.readingTime >= targetReadingTime
      ? "text-green-500"
      : "text-yellow-500";

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Character Counter</h1>
      <TextInput
        onTextChange={handleTextChange}
        placeholder="Start typing your content here..."
        initialValue={text}
      />
      <div className="mt-4">
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div
            className={`bg-blue-500 h-2.5 rounded-full ${
              stats.wordCount > maxWords ? "bg-red-500" : ""
            }`}
            style={{ width: `${wordProgress}%` }}
          ></div>
        </div>
        <p className="text-sm text-gray-600 mt-1">
          Words: {stats.wordCount} (Min: {minWords} | Max: {maxWords})
        </p>
        <p className={`text-sm mt-1 ${readingTimeStatus}`}>
          Reading Time: {stats.readingTime.toFixed(2)} / {targetReadingTime} min
        </p>
      </div>
      <StatsDisplay stats={stats} showReadingTime={true} />
    </div>
  );
};

export default CharacterCounter;