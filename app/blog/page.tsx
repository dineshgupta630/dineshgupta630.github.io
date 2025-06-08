'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { AnimatedBackground } from '@/components/ui/animated-background'

// Dummy data as a placeholder (replace with your real data)
export const BLOG_POSTS = [
  // {
  //   title: 'Exploring the Intersection of Design, AI, and Design Engineering',
  //   description: 'How AI is changing the way we design',
  //   link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
  //   uid: 'blog-1',
  //   image: 'https://cdn.cosmos.so/affd4b79-e848-4dfd-bd42-5f2c4a847365?format=jpeg'
  // },
  // {
  //   title: 'Why I left my job to start my own company',
  //   description:
  //     'A deep dive into my decision to leave my job and start my own company',
  //   link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
  //   uid: 'blog-2',
  //   image: 'https://cdn.cosmos.so/affd4b79-e848-4dfd-bd42-5f2c4a847365?format=jpeg'
  // },
  // {
  //   title: 'What I learned from my first year of freelancing',
  //   description:
  //     'A look back at my first year of freelancing and what I learned',
  //   link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
  //   uid: 'blog-3',
  //   image: 'https://cdn.cosmos.so/affd4b79-e848-4dfd-bd42-5f2c4a847365?format=jpeg'
  // },
  // {
  //   title: 'How to Export Metadata from MDX for Next.js SEO',
  //   description: 'A guide on exporting metadata from MDX files to leverage Next.js SEO features.',
  //   link: '/blog/example-mdx-metadata',
  //   uid: 'blog-4',
  //   image: 'https://cdn.cosmos.so/affd4b79-e848-4dfd-bd42-5f2c4a847365?format=jpeg'
  // },
]


// Motion variants and transition
const VARIANTS_SECTION = { hidden: { opacity: 0 }, visible: { opacity: 1 } }
const TRANSITION_SECTION = { duration: 0.6 }

export default function BlogPage() {
  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={VARIANTS_SECTION}
      transition={TRANSITION_SECTION}
    >
      <div className="flex flex-col space-y-0">
        Coming Soon
        <AnimatedBackground
          enableHover
          className="h-full w-full rounded-lg bg-zinc-100 dark:bg-zinc-900/80"
          transition={{
            type: 'spring',
            bounce: 0,
            duration: 0.2,
          }}
        >
          {BLOG_POSTS.map((post) => (
            <Link
              key={post.uid}
              className="-mx-3 rounded-xl px-3 py-3 flex items-center space-x-4"
              href={post.link}
              data-id={post.uid}
            >
              {/* Blog Post Text */}
              <div className="flex flex-col space-y-1">
                <h4 className="font-normal dark:text-zinc-100">
                  {post.title}
                </h4>
                <p className="text-zinc-500 dark:text-zinc-400">
                  {post.description}
                </p>
              </div>
            </Link>
          ))}

        </AnimatedBackground>
      </div>
    </motion.section>
  )
}
