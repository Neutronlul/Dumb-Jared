import Image from 'next/image'
import NavLinks from '@/app/lib/nav-links';

export default function Navbar() {
  return (
    <div className="flex h-full flex-col w-full md:w-54 pt-4 md:px-2">
      {/* Header Section */}
      <div className="relative mx-2 md:mx-0 mb-2 flex items-center justify-center rounded-md bg-orange-200 p-1">
        {/* Desktop Image */}
        <Image
          src="/Dumbjared.png"
          alt="DumbJared"
          width={95}
          height={95}
          className="hidden md:block rotate-25 z-0"
        />

        {/* DumbJared Text */}
        <h1 className="absolute z-10 text-5xl font-bold text-center top-1/5 left-2 md:top-1 md:right-18 md:-rotate-25">
          Dumb
        </h1>
        <h1 className="absolute z-10 text-5xl font-bold text-center top-1/5 right-2 md:top-15 md:right-18 md:-rotate-[345deg]">
          Jared
        </h1>

        {/* Mobile Image */}
        <Image
          src="/Dumbjared.png"
          alt="DumbJared"
          width={95}
          height={95}
          className="block md:hidden rotate-25 relative right-1/48 z-0"
        />
      </div>

      {/* Nav Links + Gradient Footer */}
      <div className="flex flex-row md:flex-col w-auto grow ml-2 md:ml-0 space-x-2 md:space-x-0 md:space-y-2 md:justify-between">
        <NavLinks />

        {/* Gradient Footer with X Link */}
        <div className="hidden md:flex flex-col items-center justify-center w-full grow rounded-md border border-orange-300 bg-gradient-to-br from-yellow-200 to-pink-500 p-3">
          <a
            href="https://x.com/DumbJared"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-lg font-semibold text-black hover:text-pink-600 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.37l-5.313-6.944L4.93 21.75H1.62l7.73-8.842L1.17 2.25h5.834l4.806 6.38L18.244 2.25Zm-1.162 17.52h1.833L7.03 4.126H5.063L17.082 19.77Z" />
            </svg>
            Follow DumbJared
          </a>
        </div>
      </div>
    </div>
  );
}