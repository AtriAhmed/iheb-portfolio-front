import React from "react"
import { Link, NavLink } from "react-router-dom"
import { useUIToolsContext } from "../../contexts/UIToolsProvider"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid"
import AnchorLink from "react-anchor-link-smooth-scroll"

const navigation = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Work', href: '#work' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
]

function Navbare() {
  const { mobileNavbarOpen, setMobileNavbarOpen } = useUIToolsContext()

  return (
    <div className="fixed top-0 left-0 z-[100] w-full bg-black text-white">
      <div className="w-full max-w-7xl flex items-center justify-between m-auto px-3 py-4">
        <Link to="#">
          <strong className='flex gap-2'><span className='text-yellow-500'>Iheb Kacem</span><span>|</span> <span>Data Scientist</span></strong>
        </Link>
        <button
          className="min-[950px]:hidden"
          onClick={() => setMobileNavbarOpen(mobileNavbarOpen ? false : true)}
        >
          {mobileNavbarOpen ? <XMarkIcon className="h-8 w-8" /> : <Bars3Icon className="h-8 w-8" />}
        </button>
        <ul className="hidden min-[950px]:flex gap-4 text-sm list-none">
          {navigation.map((item) => (
            <AnchorLink
              key={item.name}
              href={item.href}
              className={`hover:bg-gray-700 hover:text-white', 'px-3 py-2 rounded-md text-sm font-bold transition duration-300`}
            >
              {item.name}
            </AnchorLink>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Navbare