'use client'
import { TextEffect } from '@/components/ui/text-effect'
import Link from 'next/link'

export function Header() {
  return (
    <header className="mb-8 flex items-center justify-between w-full max-w-5xl mx-auto px-2 py-12">
      <div>
        <Link href="/" className="font-extrabold text-2xl md:text-3xl text-zinc-900 dark:text-zinc-100 tracking-tight leading-snug hover:text-blue-600 dark:hover:text-blue-400 transition">
          Dinesh Gupta
        </Link>
        <TextEffect
          as="p"
          preset="fade"
          per="char"
          className="text-zinc-600 dark:text-zinc-500"
          delay={0.5}
        >
          Senior Software Engineer at FanDuel, United Kingdom
        </TextEffect>
      </div>
      <nav className="flex gap-2">
        <Link
          href="/blog"
          className="relative overflow-hidden rounded-2xl bg-zinc-300/30 px-5 py-2 dark:bg-zinc-600/30 transition-shadow hover:shadow-lg"
        >
          Blog
        </Link>
        <Link
          href="/"
          className="relative overflow-hidden rounded-2xl bg-zinc-300/30 px-5 py-2 dark:bg-zinc-600/30 transition-shadow hover:shadow-lg"
        >
          About
        </Link>
      </nav>
    </header>

  )
}
