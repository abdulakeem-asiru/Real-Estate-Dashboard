import React from 'react'
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"


const TabsComponent =() =>  {
  return (
    <Tabs defaultValue="customer" className="max-w-[500px] w-full">
      <TabsList className="grid w-full grid-cols-3 h-[60px]">
        <TabsTrigger value="customer" className='transition-all data-[state=active]:bg-[var(--primary-color)] data-[state=active]:text-[#ffffff] data-[state=active]:shadow-md'>Customer</TabsTrigger>
        <TabsTrigger value="agent" className='transition-all data-[state=active]:bg-[var(--primary-color)] data-[state=active]:text-[#ffffff] data-[state=active]:shadow-md'>Agent</TabsTrigger>
        <TabsTrigger value="company" className=' transition-all data-[state=active]:bg-[var(--primary-color)] data-[state=active]:text-[#ffffff] data-[state=active]:shadow-md'>Company</TabsTrigger>
      </TabsList>
      <TabsContent value="customer">
        <Card>
          <CardHeader>
            <CardTitle>Account</CardTitle>
            <CardDescription>
              Make changes to your account here. Click save when you &apos;re done.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="name">Name</Label>
              <Input id="name" defaultValue="Pedro Duarte" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="username">Username</Label>
              <Input id="username" defaultValue="@peduarte" />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Save changes</Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="agent">
        <Card>
          <CardHeader>
            <CardTitle>Password</CardTitle>
            <CardDescription>
              Change your password here. After saving, you&apos;ll be logged out.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="current">Current password</Label>
              <Input id="current" type="password" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="new">New password</Label>
              <Input id="new" type="password" />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Save password</Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="company">
        <Card>
          <CardHeader>
            <CardTitle>Password</CardTitle>
            <CardDescription>
              Change your password here. After saving, you&apos;ll be logged out.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="current">Current password</Label>
              <Input id="current" type="password" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="new">New password</Label>
              <Input id="new" type="password" />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Save password</Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  )
}


function page() {
  return (
      <div className='w-full flex flex-col justify-center items-center mt-10'>
        <h2 className='md:text-[40px] text-[24px] text-[var(--text-primary)] font-medium tracking-[-1%]'>Create an account as</h2>
        <div className='mt-4 w-full flex justify-center items-center'>
          <TabsComponent />
        </div>
      </div>

  )
}

export default page
