export function getReadingTime(content: string) {
  const words = content.trim().split(/\s+/).length;

  const wordsPerMinute = 200;

  const minutes = Math.ceil(words / wordsPerMinute);

  return minutes;
}
