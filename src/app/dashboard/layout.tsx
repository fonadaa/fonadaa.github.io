"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { LayoutDashboard, Users, Phone, FileText, PenToolIcon as Tool, Boxes, Users2, Mic, ClipboardList, ChevronDown, Settings, LogOut, Plus, Copy, Link2, } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {  useSession } from "next-auth/react";
interface NavSection {
  id: string;
  label: string;
  icon: React.ElementType;
}
const thirdColumnTabs: NavSection[] = [
  { id: "model", label: "Model", icon: Tool },
  { id: "transcriber", label: "Transcriber", icon: Mic },
  { id: "voice", label: "Voice", icon: Users },
  { id: "functions", label: "Functions", icon: Settings },
  { id: "advanced", label: "Advanced", icon: Settings },
  { id: "analysis", label: "Analysis", icon: ChevronDown },
];
const menuItems = [
  {
    icon: LayoutDashboard,
    label: "Overview",
    href: "/dashboard",
  },
  {
    icon: Users,
    label: "Platform",
    href: "/dashboard/platform",
    isExpanded: true,
    submenu: [
      { icon: Users, label: "Assistants", href: "/dashboard/platform/assistants", isActive: true },
      { icon: Phone, label: "Phone Numbers", href: "/dashboard/platform/phone-numbers" },
      { icon: FileText, label: "Files", href: "/dashboard/platform/files" },
      { icon: Tool, label: "Tools", href: "/dashboard/platform/tools" },
      { icon: Boxes, label: "Blocks", href: "/dashboard/platform/blocks" },
      { icon: Users2, label: "Squads", href: "/dashboard/platform/squads" },
    ],
  },
  {
    icon: Mic,
    label: "Voice Library",
    href: "/dashboard/voice-library",
  },
  {
    icon: ClipboardList,
    label: "Logs",
    href: "/dashboard/logs",
    submenu: [
      { icon: Phone, label: "Calls", href: "/dashboard/logs/calls" },
      { icon: Tool, label: "API Requests", href: "/dashboard/logs/api-requests" },
    ],
  },
];
export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [selectedSection, setSelectedSection] = useState<string | null>(null);
  const [showMiddleSection, setShowMiddleSection] = useState(false);
  const [activeTab, setActiveTab] = useState("model");
  const [showThirdSection, setShowThirdSection] = useState(false);
  const handleNavClick = (href: string) => {
    setSelectedSection(href);
    setShowMiddleSection(true);
    setShowThirdSection(false);
  };
  const handleCreateAssistant = () => {
    setShowThirdSection(true);
  };
  const { data: session } = useSession();
  return (
    <div className="flex h-screen bg-[#0F1117] text-white">
      {/* Left Column - Navigation */}
      <div className="w-64 flex-shrink-0 bg-[#161923] border-r border-[#2A2F3E]">
        <div className="flex h-full flex-col">
          {/* Logo */}
          <div className="flex h-16 items-center px-6">
            <Image src="/img/logo.webp" alt="Logo" width={80} height={32} className="h-8 w-auto" />
          </div>
          {/* Navigation */}
          <nav className="flex-1 space-y-1 px-3 py-2">
            {menuItems.map((item) => (
              <div key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className={cn(
                    "flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors",
                    pathname === item.href ? "bg-[#252A3D] text-white" : "text-gray-400 hover:bg-[#1E2230] hover:text-white"
                  )}
                >
                  <item.icon className="h-4 w-4" />
                  <span>{item.label}</span>
                  {item.submenu && <ChevronDown className={cn("ml-auto h-4 w-4 transition-transform", item.isExpanded ? "rotate-180" : "")} />}
                </Link>
                {item.submenu && item.isExpanded && (
                  <div className="mt-1 ml-4 space-y-1">
                    {item.submenu.map((subItem) => (
                      <Link
                        key={subItem.href}
                        href={subItem.href}
                        onClick={() => handleNavClick(subItem.href)}
                        className={cn(
                          "flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors",
                          pathname === subItem.href
                            ? "bg-gradient-to-r from-[#4F7FFF] to-[#9F5AFF] text-white"
                            : "text-gray-400 hover:bg-[#1E2230] hover:text-white"
                        )}
                      >
                        <subItem.icon className="h-4 w-4" />
                        <span>{subItem.label}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
          {/* User section */}
          <div className="border-t border-[#2A2F3E] p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-full bg-[#252A3D] flex items-center justify-center">
                  <span className="text-sm font-medium">AY</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-medium">Welcome, {session?.user?.name}!</span>
                </div>
              </div>
              <Button variant="ghost" size="icon" className="h-8 w-8" >
                <LogOut href="/" className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
      {/* Middle Column - Document List */}
      {showMiddleSection && (
        <div className="w-[400px] flex-shrink-0 border-r border-[#2A2F3E] bg-[#161923] overflow-y-auto">
          <div className="p-4">
            <div className="flex items-center justify-between mb-4">
              <h1 className="text-xl font-semibold">Document...</h1>
              <Button className="bg-[#2A2F3E] hover:bg-[#363C4F]" onClick={handleCreateAssistant}>
                <Plus className="h-4 w-4 mr-2" />
                Create Assistant
              </Button>
            </div>
            <div className="space-y-2">
              <div className="rounded-lg border border-[#2A2F3E] p-4 hover:bg-[#1E2230] cursor-pointer">
                <h3 className="font-medium">New Assistant</h3>
                <p className="text-sm text-gray-400">Last updated 2 hours ago</p>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* Right Column - Dynamic Content */}
      {showThirdSection ? (
        <div className="flex-1 overflow-y-auto bg-[#161923] p-6">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold">New Assistant</h1>
            <Button className="bg-gradient-to-r from-[#4F7FFF] to-[#9F5AFF]">Talk with Assistant</Button>
          </div>
          {/* Assistant ID Section */}
          <div className="mb-6">
            <h2 className="text-sm font-medium text-gray-400 mb-2">Assistant ID</h2>
            <div className="flex items-center gap-2">
              <code className="bg-[#1E2230] px-2 py-1 rounded text-sm text-gray-300">cc11be54-d867-4cb5...</code>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Copy className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Link2 className="h-4 w-4" />
              </Button>
            </div>
          </div>
          {/* Metrics */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-[#1E2230] p-4 rounded-lg">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-gray-400">Cost</span>
                <span className="text-sm text-[#4F7FFF]">~$0.09 /min</span>
              </div>
              <div className="h-2 bg-[#252A3D] rounded-full overflow-hidden">
                <div className="h-full w-3/4 bg-gradient-to-r from-[#4F7FFF] to-[#9F5AFF]" />
              </div>
            </div>
            <div className="bg-[#1E2230] p-4 rounded-lg">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-gray-400">Latency</span>
                <span className="text-sm text-[#4F7FFF]">~700 ms</span>
              </div>
              <div className="h-2 bg-[#252A3D] rounded-full overflow-hidden">
                <div className="h-full w-1/2 bg-gradient-to-r from-[#4F7FFF] to-[#9F5AFF]" />
              </div>
            </div>
          </div>
          {/* Tabs Navigation */}
          <div className="flex space-x-1 bg-[#1E2230] p-1 rounded-lg mb-6">
            {thirdColumnTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-md transition-colors",
                  activeTab === tab.id ? "bg-gradient-to-r from-[#4F7FFF] to-[#9F5AFF] text-white" : "text-gray-400 hover:text-white hover:bg-[#252A3D]"
                )}
              >
                <tab.icon className="h-4 w-4" />
                {tab.label}
              </button>
            ))}
          </div>
          {/* Dynamic Tab Content */}
          <div className="bg-[#1E2230] rounded-lg p-6">
            {activeTab === "model" && (
              <div className="space-y-4">
                <h3 className="text-lg font-medium mb-4">Model Configuration</h3>
                {children}
              </div>
            )}
            {/* Add other tab contents as needed */}
          </div>
        </div>
      ) : (
        <div className="flex-1 overflow-y-auto">{children}</div>
      )}
    </div>
  );
}
