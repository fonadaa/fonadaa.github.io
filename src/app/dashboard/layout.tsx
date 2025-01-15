'use client'

import { useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { LayoutDashboard, Server, Users, Phone, FileText, PenToolIcon as Tool, Boxes, Users2, Mic, ClipboardList, Webhook, UserCircle, LogOut } from 'lucide-react'
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarProvider,
} from '@/components/ui/sidebar'
// import { useAuth } from '@/lib/auth-context'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const [open, setOpen] = useState(true)
//   const { logout } = useAuth()
  const router = useRouter()

  const handleLogout = () => {
    // logout()
    router.push('/')
  }

  const menuItems = [
    { icon: LayoutDashboard, label: 'Overview', href: '/dashboard' },
    { 
      icon: Server, 
      label: 'Platform', 
      href: '/dashboard/platform',
      submenu: [
        { icon: Users, label: 'Assistants', href: '/dashboard/platform/assistants' },
        { icon: Phone, label: 'Phone Numbers', href: '/dashboard/platform/phone-numbers' },
        { icon: FileText, label: 'Files', href: '/dashboard/platform/files' },
        { icon: Tool, label: 'Tools', href: '/dashboard/platform/tools' },
        { icon: Boxes, label: 'Blocks', href: '/dashboard/platform/blocks' },
        { icon: Users2, label: 'Squads', href: '/dashboard/platform/squads' },
      ]
    },
    { icon: Mic, label: 'Voice Library', href: '/dashboard/voice-library' },
    {
      icon: ClipboardList,
      label: 'Logs',
      href: '/dashboard/logs',
      submenu: [
        { icon: Phone, label: 'Calls', href: '/dashboard/logs/calls' },
        { icon: Tool, label: 'API Requests', href: '/dashboard/logs/api-requests' },
        { icon: Webhook, label: 'Webhooks', href: '/dashboard/logs/webhooks' },
      ]
    },
  ]

  return (
    <div className="flex h-screen bg-[#0F1117]">
      <SidebarProvider defaultOpen={true}>
        <Sidebar className="bg-[#161923] border-r border-[#2A2F3E]">
          <SidebarHeader className="border-b border-[#2A2F3E] p-4">
            <Image 
                src="/img/logo.webp" 
              alt="Logo"
              width={100}
              height={30}
              className="h-8 w-auto"
            />
          </SidebarHeader>
          <SidebarContent>
            {menuItems.map((item, index) => (
              <SidebarGroup key={index}>
                {item.submenu ? (
                  <>
                    <SidebarGroupLabel className="text-gray-400">{item.label}</SidebarGroupLabel>
                    <SidebarGroupContent>
                      <SidebarMenu>
                        {item.submenu.map((subItem, subIndex) => (
                          <SidebarMenuItem key={subIndex}>
                            <SidebarMenuButton 
                              asChild
                              isActive={pathname === subItem.href}
                              className={`hover:bg-[#1E2230] ${pathname === subItem.href ? 'bg-gradient-to-r from-[#4F7FFF] to-[#9F5AFF] text-white' : 'text-gray-400'}`}
                            >
                              <Link href={subItem.href}>
                                <subItem.icon className="w-4 h-4" />
                                <span>{subItem.label}</span>
                              </Link>
                            </SidebarMenuButton>
                          </SidebarMenuItem>
                        ))}
                      </SidebarMenu>
                    </SidebarGroupContent>
                  </>
                ) : (
                  <SidebarGroupContent>
                    <SidebarMenu>
                      <SidebarMenuItem>
                        <SidebarMenuButton 
                          asChild
                          isActive={pathname === item.href}
                          className={`hover:bg-[#1E2230] ${pathname === item.href ? 'bg-gradient-to-r from-[#4F7FFF] to-[#9F5AFF] text-white' : 'text-gray-400'}`}
                        >
                          <Link href={item.href}>
                            <item.icon className="w-4 h-4" />
                            <span>{item.label}</span>
                          </Link>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    </SidebarMenu>
                  </SidebarGroupContent>
                )}
              </SidebarGroup>
            ))}
          </SidebarContent>
          <div className="mt-auto border-t border-[#2A2F3E] p-4">
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton 
                  asChild
                  className="text-gray-400 hover:bg-[#1E2230]"
                >
                  <Link href="/dashboard/profile" className="flex items-center">
                    <UserCircle className="w-4 h-4" />
                    <span>Profile</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton 
                  onClick={handleLogout}
                  className="text-gray-400 hover:bg-[#1E2230]"
                >
                  <LogOut className="w-4 h-4" />
                  <span>Logout</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </div>
        </Sidebar>
        <div className="flex-1 overflow-auto">
          {children}
        </div>
      </SidebarProvider>
    </div>
  )
}

