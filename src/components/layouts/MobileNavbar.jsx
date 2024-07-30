import { Transition } from "@headlessui/react"
import React, { useEffect, useState } from "react"
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react"
import { Link } from "react-router-dom"
import { useUIToolsContext } from "../../contexts/UIToolsProvider"
import { XMarkIcon } from "@heroicons/react/16/solid"
import AnchorLink from "react-anchor-link-smooth-scroll"

function MobileNavbar() {
    const { mobileNavbarOpen, setMobileNavbarOpen } = useUIToolsContext()
    const [open, setOpen] = useState(-1);

    //   closing the dropdown whenever the navbar closes
    useEffect(() => {
        !mobileNavbarOpen && setOpen(-1)
    }, [mobileNavbarOpen])

    return (
        <div
            className={`fixed top-11 left-0 w-full h-screen overflow-hidden z-[1000] ${mobileNavbarOpen ? "pointer-events-auto" : "pointer-events-none"
                }`}
        >
            <Transition
                show={mobileNavbarOpen}
                enter="transition-opacity duration-1000"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity duration-1000"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
            >
                <div className="bg-black text-white w-full py-8 px-4 absolute top-0 right-0 font-open font-semibold text-base overflow-y-scroll">
                    {/* menu */}
                    <ul className="divide-y">
                        {items.map((item) =>
                            <li className="px-3 py-2" key={item.title}>
                                <AnchorLink
                                    href={item.path}
                                    onClick={() => setMobileNavbarOpen(false)}
                                    className="block w-full"
                                >
                                    {item.title}
                                </AnchorLink>
                            </li>
                        )}
                    </ul>
                </div>
            </Transition>
        </div>
    )
}

export default MobileNavbar

const items = [
    {
        title: "About",
        path: "#about",
    },
    {
        title: "Experience",
        path: "#experience"
    },
    {
        title: "Work",
        path: "#work",
    },
    {
        title: "Skills",
        path: "#skills"
    },
    {
        title: "Contact",
        path: "#contact"
    }
]
