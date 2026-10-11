"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

export function CopyEmailButton({ email }: { email: string }) {
  const [status, setStatus] = useState<"idle" | "copied" | "error">("idle");

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(email);
      setStatus("copied");
    } catch {
      setStatus("error");
    }
  }

  return (
    <div>
      <button type="button" className="social-pill" onClick={copyEmail}>
        {status === "copied" ? <Check size={16} aria-hidden="true" /> : <Copy size={16} aria-hidden="true" />}
        {status === "copied" ? "Copied!" : "Copy Email"}
      </button>
      <p role="status" className={status === "error" ? "mt-2 text-xs leading-5 text-stone-600" : "sr-only"}>
        {status === "copied" ? "Email copied to clipboard." : status === "error" ? "Copying isn’t available. You can select the email above or click it to open your email app." : ""}
      </p>
    </div>
  );
}
