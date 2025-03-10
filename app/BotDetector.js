"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function BotDetector() {
  const router = useRouter();

  useEffect(() => {
    import("@fingerprintjs/botd")
      .then(({ load }) => load())
      .then((botd) => botd.detect())
      .then((result) => {
        console.log("Bot Detection Result:", result);

        if (result.bot) {
          console.warn("Bot detected — redirecting.");
          router.push("/bot-blocked");
        } else {
          console.log("✅ Human detected — access granted.");
        }
      })
      .catch(console.error);
  }, [router]);

  return null;
}
