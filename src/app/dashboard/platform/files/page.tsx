'use client'

import { useState, useCallback } from 'react'
import { Upload, Link } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { 
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function FilesPage() {
  const [dragActive, setDragActive] = useState(false)
  const [fileUrl, setFileUrl] = useState('')

  const handleDrag = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true)
    } else if (e.type === "dragleave") {
      setDragActive(false)
    }
  }, [])

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      // Handle file upload
      console.log("File dropped:", e.dataTransfer.files[0])
    }
  }, [])

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      // Handle file upload
      console.log("File selected:", e.target.files[0])
    }
  }

  const handleUrlSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle URL upload
    console.log("URL submitted:", fileUrl)
  }

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-white">Knowledge Base</h1>
      </div>

      <Tabs defaultValue="upload" className="w-full">
        <TabsList>
          <TabsTrigger value="upload">File Upload</TabsTrigger>
          <TabsTrigger value="url">URL Upload</TabsTrigger>
        </TabsList>

        <TabsContent value="upload">
          <Card>
            <CardHeader>
              <CardTitle>Upload Files</CardTitle>
              <CardDescription>
                Knowledge base is a bank of files that are accessible by your assistants.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div 
                className={`
                  flex flex-col items-center justify-center w-full min-h-[200px] 
                  border-2 border-dashed rounded-lg p-6 transition-colors
                  ${dragActive ? 'border-primary bg-primary/10' : 'border-gray-600'}
                `}
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
              >
                <Upload className="w-12 h-12 text-gray-400 mb-4" />
                <p className="text-sm text-gray-400 text-center mb-4">
                  Drag and drop a file here or click to select file locally.
                </p>
                <p className="text-xs text-gray-500 mb-4">
                  You can upload a PDF, etc and attach it to your assistants, they pull from these for more context during conversations.
                </p>
                <Button 
                  variant="outline" 
                  onClick={() => document.getElementById('file-upload')?.click()}
                >
                  Choose File
                </Button>
                <input
                  id="file-upload"
                  type="file"
                  className="hidden"
                  onChange={handleFileChange}
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="url">
          <Card>
            <CardHeader>
              <CardTitle>Upload from URL</CardTitle>
              <CardDescription>
                Add files to your knowledge base by providing a URL.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleUrlSubmit} className="flex gap-2">
                <Input
                  type="url"
                  placeholder="Enter file URL"
                  value={fileUrl}
                  onChange={(e) => setFileUrl(e.target.value)}
                  className="flex-1"
                />
                <Button type="submit">
                  <Link className="w-4 h-4 mr-2" />
                  Upload
                </Button>
              </form>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

