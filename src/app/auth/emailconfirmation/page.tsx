'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Mail } from 'lucide-react'

export default function EmailConfirmationPage() {
  return (
    <div className="m-auto mt-20">
      <Card className="w-full max-w-md shadow-lg border-none">
        <CardHeader className="flex flex-col items-center space-y-2">
          <div className="bg-[#E46323]/5 p-4 rounded-full">
            <Mail className="text-[#E46323]" size={50} />
          </div>
          <CardTitle className="text-2xl font-semibold text-[var(--text-primary)] text-center">
            Check your email
          </CardTitle>
        </CardHeader>
        <CardContent className="text-center text-gray-600">
          We`ve sent a confirmation link to your email.  
          Please check your inbox to verify your account.
        </CardContent>
      </Card>
    </div>
  )
}
