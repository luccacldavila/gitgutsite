"use server"

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
  } from "@/components/ui/navigation-menu"



export default async function Navbar() {

  return (
    <div className="flex justify-between items-center p-4">
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <NavigationMenuLink href="/">Gitgutsite</NavigationMenuLink>
                </NavigationMenuItem>
                {/* <NavigationMenuItem className="ml-auto">
                <NavigationMenuTrigger>Categories</NavigationMenuTrigger>
                <NavigationMenuContent className="gap-2">
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <NavigationMenuLink href="/category/action">Action</NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuLink href="/category/adventure">Adventure</NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuLink href="/category/fantasy">Fantasy</NavigationMenuLink>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenuContent>
                </NavigationMenuItem> */}
            </NavigationMenuList>
        </NavigationMenu>
    </div>
  );
}
