"use client";

import Link from "next/link";

import {
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarProvider,
} from "@repo/ui";

import { Home, Briefcase, BarChart } from "lucide-react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <div className="flex w-screen min-h-screen">

        {/* Sidebar */}
        <div className="w-[200px] min-w-[200px] max-w-[200px] border-r bg-white">

          <SidebarContent className="w-full p-2">

            <SidebarGroup>
              <SidebarGroupLabel className="text-xs">
                Menu
              </SidebarGroupLabel>

              <SidebarMenu>

                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <Link href="/">
                      <Home className="mr-2 h-4 w-4" />
                      Home
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>

                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <Link href="/dashboard/work">
                      <Briefcase className="mr-2 h-4 w-4" />
                      Work
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>

                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <Link href="/dashboard">
                      <BarChart className="mr-2 h-4 w-4" />
                      Dashboard
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>

              </SidebarMenu>
            </SidebarGroup>

          </SidebarContent>

        </div>

        {/* Main Content */}
        <div className="flex-1 min-w-0 overflow-auto bg-gray-50">
          {children}
        </div>

      </div>
    </SidebarProvider>
  );
}
