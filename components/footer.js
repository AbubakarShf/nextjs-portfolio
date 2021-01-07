import React from 'react'
import Link from 'next/link'
import SocialIcons from '@/components/social-icons'

export default function Footer() {
  return (
    <div className="bottom-0 max-w-3xl mx-auto my-36">
      <footer>
        <div className="max-w-3xl mx-auto text-lg lg:text-xl text-inactive-gray">
          Made from scratch using{' '}
          <a
            className="link-styling cursor-pointer"
            href="https://nextjs.org"
            rel="noopener"
            target="_blank"
          >
            Next.js
          </a>
          ,{' '}
          <a
            className="link-styling cursor-pointer"
            href="https://vercel.com"
            rel="noopener"
            target="_blank"
          >
            Vercel
          </a>{' '}
          and{' '}
          <a
            className="link-styling cursor-pointer"
            href="https://tailwindcss.com"
            rel="noopener"
            target="_blank"
          >
            Tailwind CSS
          </a>
          . The code is{' '}
          <a
            className="link-styling cursor-pointer"
            href="https://github.com/GLaDO8/nextjs-portfolio"
            rel="noopener"
            target="_blank"
          >
            open-source
          </a>
          .
        </div>
        <div className="text-sm text-inactive-gray flex justify-start font-light py-4">
          © 2020-2077 by Shreyas Gupta, All rights reserved.
        </div>
      </footer>
    </div>
  )
}
