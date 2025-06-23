import EmailForm from '@/app/features/auth/ui/ResetPasswordEmail/EmailForm'
import React from 'react'

function page() {
  return (
    <div className='m-auto'>
      <div className='flex flex-col items-center justify-center p-6 mt-6'>  
      <h2 className='text-4xl text-[var(--text-primary)] leading-normal font-medium'>Forgot Password</h2>
      <p className='text-[16px] text-[var(--text-secondary)] font-normal'>Enter your email for verification.</p>
      <div className='mt-4 min-w-[400px]'>
       <EmailForm />
      </div>

      </div>
    </div>
  )
}

export default page
