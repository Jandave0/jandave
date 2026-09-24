"use client";

import React, { useState } from "react";
import { Check, Copy } from "lucide-react";

interface CopyButtonProps {
  textToCopy: string;
  label?: string;
  iconOnly?: boolean;
  className?: string;
}

export function CopyButton({
  textToCopy,
  label,
  iconOnly = true,
  className = "",
}: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <button
      onClick={handleCopy}
      type="button"
      className={`inline-flex items-center justify-center gap-1 transition-all text-xs font-mono rounded p-1.5 shrink-0 ${
        copied
          ? "bg-emerald-500/15 text-emerald-500 dark:text-emerald-400 border border-emerald-500/30"
          : "hover:bg-neutral-200 dark:hover:bg-neutral-800 text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-200 border border-transparent"
      } ${className}`}
      title={copied ? "Copied to clipboard!" : `Click to copy: ${textToCopy}`}
      aria-label={`Copy ${label || textToCopy}`}
    >
      {copied ? (
        <Check className="w-3.5 h-3.5 text-emerald-500 dark:text-emerald-400" />
      ) : (
        <Copy className="w-3.5 h-3.5" />
      )}
      {!iconOnly && label && <span>{copied ? "Copied!" : label}</span>}
    </button>
  );
}
