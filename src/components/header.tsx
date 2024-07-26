
import React from "react";
import {AcmeLogo} from "public/AcmeLogo.jsx";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@nextui-org/navbar";
import Link from "next/link.js";
import { Button } from "@nextui-org/button";

export default function Header() {
  return (
    <Navbar maxWidth="full"  isBordered position="sticky" className="bg-white pos ">
      <NavbarBrand>
        <AcmeLogo />
        <Link 
            href="\"
            className="font-bold text-inherit">Neux
        </Link>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="\TestCentre">
            Take Test
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="\TestCentre\Review" aria-current="page">
            Review
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
