import { Button } from "@/components/ui/button"
import { Plus } from 'lucide-react'

export default function ToolsPage() {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-white">Tools</h1>
        <Button 
          className="bg-gradient-to-r from-[#4F7FFF] to-[#9F5AFF] hover:opacity-90 transition-opacity"
        >
          <Plus className="w-4 h-4 mr-2" />
          Add Tool
        </Button>
      </div>
      <div className="bg-[#1E2230] rounded-lg border border-[#2A2F3E] p-6">
        <p className="text-gray-400">Add your first tool to get started</p>
      </div>
    </div>
  )
}

