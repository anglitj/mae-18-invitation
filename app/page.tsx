"use client";

import {
  Button,
  DarkThemeToggle,
  Drawer,
  DrawerHeader,
  DrawerItems,
  Sidebar,
  SidebarItem,
  SidebarItemGroup,
  SidebarItems,
} from "flowbite-react";
import Link from "next/link";
import { useState } from "react";
import { GiHamburgerMenu, GiOpenTreasureChest } from "react-icons/gi";
import { HiHome } from "react-icons/hi";
import { IoRoseSharp } from "react-icons/io5";
import { LiaMoneyBillWaveAltSolid } from "react-icons/lia";
import { PiMoneyWavyFill } from "react-icons/pi";
import { TfiGallery } from "react-icons/tfi";
import { GiLargeDress } from "react-icons/gi";

export default function Home() {
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => setIsOpen(false);

  return (
    <main className="flex min-h-screen flex-col bg-white px-4 py-24 dark:bg-gray-900">
      <div className="absolute top-4 right-4">
        <DarkThemeToggle className="cursor-pointer" />
      </div>
      <div className="absolute top-4 left-4">
        <Button
          color="gray"
          size="sm"
          className="cursor-pointer rounded-full bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-600 dark:text-gray-900 dark:hover:bg-gray-700"
          onClick={() => setIsOpen(true)}
        >
          <GiHamburgerMenu />
        </Button>
      </div>

      <Drawer open={isOpen} onClose={handleClose}>
        <DrawerHeader title="MENU" />
        <DrawerItems>
          <Sidebar>
            <SidebarItems>
              <SidebarItemGroup>
                <SidebarItem href="/" icon={HiHome}>
                  Home
                </SidebarItem>

                <SidebarItem href="/" icon={GiLargeDress}>
                  Attire
                </SidebarItem>
                <SidebarItem href="/" icon={IoRoseSharp}>
                  18 Roses
                </SidebarItem>
                <SidebarItem href="/" icon={GiOpenTreasureChest}>
                  18 Treasures
                </SidebarItem>
                <SidebarItem href="/" icon={LiaMoneyBillWaveAltSolid}>
                  18 Yellow Bills
                </SidebarItem>
                <SidebarItem href="/" icon={PiMoneyWavyFill}>
                  18 Blue Bills
                </SidebarItem>
                <SidebarItem href="/" icon={TfiGallery}>
                  Photo Gallery
                </SidebarItem>
              </SidebarItemGroup>
            </SidebarItems>
          </Sidebar>
        </DrawerItems>
      </Drawer>
      <div className="flex h-full flex-col items-center justify-center gap-20">
        <h3 className="text-center text-lg font-semibold text-gray-800 uppercase lg:text-2xl dark:text-gray-300">
          Join us to celebrate
        </h3>
        <div className="flex flex-col items-center justify-center dark:text-gray-300">
          <h1 className="text-4xl font-bold">Mae</h1>
          <h3 className="text-4xl font-bold">at</h3>
          <h1 className="text-4xl font-bold">18</h1>
        </div>
        <div className="flex flex-col items-center justify-center font-semibold text-gray-800 md:text-lg lg:text-2xl dark:text-gray-300">
          <p>March 27, 2025</p>
          <p>10 PM</p>
        </div>
        <div className="cursor-pointer text-center font-semibold text-gray-800 uppercase underline hover:text-cyan-800 md:text-lg lg:text-2xl dark:text-gray-100 dark:hover:text-cyan-400">
          <Link
            href="https://www.google.com/maps/dir//Santa+Ana+rd,+Santo+Tomas,+Batangas/@14.0668232,121.1086801,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x33bd695dd883bd7f:0xca8ddd043881fa5e!2m2!1d121.1910819!2d14.0668372?entry=ttu&g_ep=EgoyMDI1MDMyNC4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
          >
            <p>Jhoenie&apos;s Island Resort</p>
            <p>Santa Ana Rd., Sto. Tomas, Batangas</p>
          </Link>
        </div>
      </div>
    </main>
  );
}
