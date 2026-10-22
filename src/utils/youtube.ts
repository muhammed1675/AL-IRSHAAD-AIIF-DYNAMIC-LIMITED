export function toYouTubeEmbed(url: string): string | null {
  if (!url) return null;
  const match =
  url.match(/youtu\.be\/([\w-]{6,})/) ||
  url.match(/[?&]v=([\w-]{6,})/) ||
  url.match(/youtube\.com\/(?:embed|live|shorts)\/([\w-]{6,})/);
  return match ? `https://www.youtube-nocookie.com/embed/${match[1]}` : null;
}