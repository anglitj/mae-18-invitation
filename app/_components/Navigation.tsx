"use client";

import { useState } from "react";
import Link from "next/link";

//Flowbite components
import {
  Button,
  DarkThemeToggle,
  Drawer,
  DrawerHeader,
  DrawerItems,
  Sidebar,
} from "flowbite-react";

// Icons
import { GiHamburgerMenu, GiOpenTreasureChest } from "react-icons/gi";
import { HiHome, HiQuestionMarkCircle } from "react-icons/hi";
import { IoRoseSharp } from "react-icons/io5";
import { LiaMoneyBillWaveAltSolid } from "react-icons/lia";
import { PiMoneyWavyFill } from "react-icons/pi";
import { TfiGallery } from "react-icons/tfi";
import { GiLargeDress } from "react-icons/gi";
import { MdInsertInvitation } from "react-icons/md";

const links = [
  {
    href: "/",
    label: "Home",
    icon: HiHome,
  },
  {
    href: "/attire",
    label: "Attire",
    icon: GiLargeDress,
  },
  {
    href: "/18-roses",
    label: "18 Roses",
    icon: IoRoseSharp,
  },
  {
    href: "/18-treasures",
    label: "18 Treasures",
    icon: GiOpenTreasureChest,
  },
  {
    href: "/18-yellow-bills",
    label: "18 Yellow Bills",
    icon: LiaMoneyBillWaveAltSolid,
  },
  {
    href: "/18-blue-bills",
    label: "18 Blue Bills",
    icon: PiMoneyWavyFill,
  },
  {
    href: "/gallery",
    label: "Gallery",
    icon: TfiGallery,
  },
  {
    href: "/rsvp",
    label: "RSVP",
    icon: MdInsertInvitation,
  },
  {
    href: "/faqs",
    label: "FAQs",
    icon: HiQuestionMarkCircle,
  },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => setIsOpen(false);

  return (
    <nav className="fixed inset-x-0 top-0 z-50">
      <div className="absolute right-4 top-4 flex w-10 items-center justify-center rounded-md">
        <DarkThemeToggle />
      </div>

      <div className="absolute left-4 top-4">
        <Button
          color="gray"
          size="sm"
          className="flex size-10 cursor-pointer items-center justify-center rounded-full bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-400 dark:text-gray-900 dark:hover:bg-gray-700"
          onClick={() => setIsOpen(true)}
        >
          <GiHamburgerMenu />
        </Button>
      </div>

      <Drawer open={isOpen} onClose={handleClose}>
        <DrawerHeader title="Menu" />
        <DrawerItems>
          <Sidebar>
            {/* <SidebarItems> */}
            <div className="flex flex-col gap-4">
              {links.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={handleClose}
                  className="flex items-center gap-2 rounded-md px-2 hover:text-gray-800 dark:text-gray-300 dark:hover:text-gray-400 sm:text-lg"
                >
                  <link.icon />
                  {link.label}
                </Link>
              ))}
            </div>
          </Sidebar>
        </DrawerItems>
      </Drawer>
    </nav>
  );
}
