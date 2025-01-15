
'use client'

import { Phone, Plus, Upload, FileText, AlertTriangle } from 'lucide-react'
import { Button } from "@/components/ui/button"
import Link from 'next/link'

export default function PhoneNumbersPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#161923] p-6">
      <div className="w-full max-w-2xl text-center space-y-4">
        {/* Icon */}
        <div className="w-20 h-20 mx-auto mb-6 bg-[#1E2230] rounded-2xl flex items-center justify-center">
          <Phone className="w-10 h-10 text-gray-400" />
        </div>

        {/* Heading and Description */}
        <h1 className="text-3xl font-bold text-white mb-4">Phone Numbers</h1>
        <p className="text-gray-400 mb-2">
          Assistants are able to be connected to phone numbers for calls.
        </p>
        <p className="text-gray-400 mb-8">
          You can import from Twilio, vonage, or by one directly from Vapi for use with your assistants.
        </p>

        {/* Buttons */}
        <div className="flex items-center justify-center gap-4 mb-6">
          <Button 
            className="bg-[#2A785E] hover:bg-[#236D54] text-white flex items-center gap-2"
          >
            <Plus className="w-4 h-4" />
            Buy Number
          </Button>
          <Button 
            className="bg-[#2A785E] hover:bg-[#236D54] text-white flex items-center gap-2"
          >
            <Upload className="w-4 h-4" />
            Import
          </Button>
          <Button 
            variant="ghost" 
            className="text-gray-400 hover:text-white flex items-center gap-2"
          >
            <FileText className="w-4 h-4" />
            Documentation
          </Button>
        </div>

        {/* Warning Message */}
        <div className="inline-flex items-center gap-2 bg-[#1E2230] px-4 py-2 rounded-lg text-sm">
          <AlertTriangle className="w-4 h-4 text-yellow-500" />
          <span className="text-gray-400">Please add</span>
          <Link href="/dashboard/billing" className="text-[#4F7FFF] hover:underline">
            Card Details
          </Link>
          <span className="text-gray-400">to Buy a Number</span>
        </div>
      </div>
    </div>
  )
}

