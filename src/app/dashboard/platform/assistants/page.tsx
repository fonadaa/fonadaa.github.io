'use client'

import { useState } from 'react'
import { Plus, Copy, Link2, Volume2, Wand2, Settings2, LineChart } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"

export default function AssistantsPage() {
  const [assistantId, setAssistantId] = useState('cc11be54-d867-4cb5-...')
  
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-white">New Assistant</h1>
        <Dialog>
          <DialogTrigger asChild>
            <Button 
              className="bg-gradient-to-r from-[#4F7FFF] to-[#9F5AFF] hover:opacity-90 transition-opacity"
            >
              <Plus className="w-4 h-4 mr-2" />
              Create Assistant
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[600px] bg-[#1E2230] border-[#2A2F3E] text-white">
            <DialogHeader>
              <DialogTitle>Create New Assistant</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="name">Assistant Name</Label>
                <Input id="name" placeholder="Enter assistant name" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="model">Model</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select model" />
                  </SelectTrigger>
                  <SelectContent className='text-dark'>
                    <SelectItem value="gpt4" >GPT-4</SelectItem>
                    <SelectItem value="gpt35" >GPT-3.5 Turbo</SelectItem>
                    <SelectItem value="claude" >Claude 2</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="language">Language</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select language" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="en">English</SelectItem>
                    <SelectItem value="es">Spanish</SelectItem>
                    <SelectItem value="multi">Multi-language</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="voice">Voice</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select voice" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="nova">Nova</SelectItem>
                    <SelectItem value="echo">Echo</SelectItem>
                    <SelectItem value="aurora">Aurora</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-center gap-2">
                <Switch id="noise-reduction" />
                <Label htmlFor="noise-reduction">Background Noise Reduction</Label>
              </div>
            </div>
            <div className="flex justify-end gap-2">
              <Button variant="outline">Cancel</Button>
              <Button className="bg-gradient-to-r from-[#4F7FFF] to-[#9F5AFF]">Create</Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <Card className="bg-[#1E2230] border-[#2A2F3E]">
        <CardContent className="p-6">
          <div className="mb-6">
            <h2 className="text-sm font-medium text-gray-400 mb-2">Assistant ID</h2>
            <div className="flex items-center gap-2">
              <code className="bg-black/20 px-2 py-1 rounded text-sm text-gray-300">{assistantId}</code>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Copy className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Link2 className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-black/20 p-4 rounded-lg">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-gray-400">Cost</span>
                <span className="text-sm text-[#4F7FFF]">~$0.09 /min</span>
              </div>
              <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                <div className="h-full w-3/4 bg-gradient-to-r from-[#4F7FFF] to-[#9F5AFF]" />
              </div>
            </div>
            <div className="bg-black/20 p-4 rounded-lg">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-gray-400">Latency</span>
                <span className="text-sm text-[#4F7FFF]">~700 ms</span>
              </div>
              <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                <div className="h-full w-1/2 bg-gradient-to-r from-[#4F7FFF] to-[#9F5AFF]" />
              </div>
            </div>
          </div>

          <Tabs defaultValue="model">
            <TabsList className="bg-black/20 border-[#2A2F3E]">
              <TabsTrigger value="model" className="data-[state=active]:bg-[#4F7FFF]">
                <Wand2 className="w-4 h-4 mr-2" />
                Model
              </TabsTrigger>
              <TabsTrigger value="transcriber" className="data-[state=active]:bg-[#4F7FFF]">
                <Settings2 className="w-4 h-4 mr-2" />
                Transcriber
              </TabsTrigger>
              <TabsTrigger value="voice" className="data-[state=active]:bg-[#4F7FFF]">
                <Volume2 className="w-4 h-4 mr-2" />
                Voice
              </TabsTrigger>
              <TabsTrigger value="analysis" className="data-[state=active]:bg-[#4F7FFF]">
                <LineChart className="w-4 h-4 mr-2" />
                Analysis
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="model" className="mt-4">
              <div className="space-y-4">
                <div className="grid gap-2">
                  <Label className="text-white">Provider</Label>
                  <Select defaultValue="deepgram">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="deepgram">Deepgram</SelectItem>
                      <SelectItem value="whisper">Whisper</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-2">
                  <Label className="text-white">Language</Label>
                  <Select defaultValue="en">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="en">English</SelectItem>
                      <SelectItem value="es">Spanish</SelectItem>
                      <SelectItem value="multi">Multi-language</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex items-center gap-2">
                  <Switch id="denoise" defaultChecked />
                  <Label htmlFor="denoise">Background Denoising Enabled</Label>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="transcriber">
              <div className="text-gray-400">
                Configure transcription settings here.
              </div>
            </TabsContent>
            
            <TabsContent value="voice">
              <div className="text-gray-400">
                Configure voice settings here.
              </div>
            </TabsContent>
            
            <TabsContent value="analysis">
              <div className="text-gray-400">
                View analysis and metrics here.
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}

