"use client";

import { useState } from "react";
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

import { GiHamburgerMenu, GiOpenTreasureChest } from "react-icons/gi";
// import { GiHamburgerMenu } from "react-icons/gi";
import { HiHome } from "react-icons/hi";
import { IoRoseSharp } from "react-icons/io5";
import { LiaMoneyBillWaveAltSolid } from "react-icons/lia";
import { PiMoneyWavyFill } from "react-icons/pi";
import { TfiGallery } from "react-icons/tfi";
import { GiLargeDress } from "react-icons/gi";
import Link from "next/link";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => setIsOpen(false);

  return (
    <>
      <div className="absolute top-4 right-4 w-10 flex rounded-md items-center justify-center">
        <DarkThemeToggle />
      </div>

      <div className="absolute top-4 left-4">
        <Button
          color="gray"
          size="sm"
          className="cursor-pointer rounded-full w-8 h-8 bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-600 dark:text-gray-900 dark:hover:bg-gray-700"
          onClick={() => setIsOpen(true)}
        >
          <GiHamburgerMenu />
        </Button>
      </div>

      <Drawer open={isOpen} onClose={handleClose}>
        <DrawerHeader title="MENU" />
        <DrawerItems>
          <div>Hello</div>
          <Sidebar>
            <SidebarItems>
              <SidebarItemGroup>
                <SidebarItem icon={HiHome}>
                  <Link href="/">Home</Link>
                </SidebarItem>

                <SidebarItem icon={GiLargeDress}>
                  <Link href="/attire">Attire</Link>
                </SidebarItem>
                <SidebarItem icon={IoRoseSharp}>
                  <Link href="/18-roses">18 Roses</Link>
                </SidebarItem>
                <SidebarItem icon={GiOpenTreasureChest}>
                  <Link href="/18-treasures">18 Treasures</Link>
                </SidebarItem>
                <SidebarItem icon={LiaMoneyBillWaveAltSolid}>
                  <Link href="/18-yellow-bills">18 Yellow Bills</Link>
                </SidebarItem>
                <SidebarItem icon={PiMoneyWavyFill}>
                  <Link href="/18-blue-bills">18 Blue Bills</Link>
                </SidebarItem>
                <SidebarItem icon={TfiGallery}>
                  <Link href="/gallery">Gallery</Link>
                </SidebarItem>
              </SidebarItemGroup>
            </SidebarItems>
          </Sidebar>
        </DrawerItems>
      </Drawer>
    </>
  );
}
