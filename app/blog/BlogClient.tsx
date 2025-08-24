"use client";

import { useEffect, useMemo, useState, Suspense } from "react";
import ImageWithFallback from "../components/ImageWithFallback";
import Link from "next/link";
import { track } from "../components/track";
import NewsletterSubscription from "../components/NewsletterSubscription";
import TextQuoteWidget from "../components/TextQuoteWidget";
import InternalLinks from "../components/InternalLinks";
import BlogSearch from "../components/BlogSearch";
import { useSearchParams } from "next/navigation";

// NOTE: We import the content by requiring the old file to avoid duplicating large markup here.
const Old = require("./page.client.impl").default;

export default function BlogClient() {
  return (
    <Suspense>
      <Old />
    </Suspense>
  );
}


