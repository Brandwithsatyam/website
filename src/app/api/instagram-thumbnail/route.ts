import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const url = searchParams.get("url");

    if (!url || !url.includes("instagram.com")) {
      return NextResponse.json({ error: "Invalid URL" }, { status: 400 });
    }

    const response = await fetch(url, {
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
      },
      next: { revalidate: 86400 }, // Cache response for 24 hours
    });

    if (!response.ok) {
      return NextResponse.json({ error: "Failed to fetch Instagram page" }, { status: response.status });
    }

    const html = await response.text();
    const match = html.match(/property="og:image"\s+content="([^"]+)"/) || 
                  html.match(/content="([^"]+)"\s+property="og:image"/);

    if (match) {
      // Decode HTML entities like &amp; in the URL
      const imageUrl = match[1].replace(/&amp;/g, "&");
      return NextResponse.json({ thumbnailUrl: imageUrl });
    }

    return NextResponse.json({ error: "Thumbnail not found in metadata" }, { status: 404 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message || "Internal Server Error" }, { status: 500 });
  }
}
