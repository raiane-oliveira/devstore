import Image from 'next/image'
import Link from 'next/link'
import { CartWidget } from './cart-widget'
import { SearchForm } from './search-form'

export function Header() {
  return (
    <header className="flex items-center justify-between">
      <nav className="flex items-center gap-5">
        <Link href="/" className="font-extrabold text-white text-2xl">
          devstore
        </Link>

        <SearchForm />
      </nav>

      <div className="flex items-center gap-4">
        <CartWidget />

        <div aria-hidden className="w-px h-4 bg-zinc-700" />

        <Link href="/" className="flex items-center gap-2 hover:underline">
          <span className="text-sm">Account</span>
          <Image
            src="https://github.com/raiane-oliveira.png"
            alt=""
            className="w-6 h-6 rounded-full"
            width={24}
            height={24}
          />
        </Link>
      </div>
    </header>
  )
}
