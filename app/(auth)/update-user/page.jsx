"use client"
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogCancel,
  AlertDialogAction,
} from "@/components/ui/alert-dialog";
import { UploadIcon } from "@/components/svg";

export default function Component() {
  return (
    <div className="w-full max-w-3xl mx-auto bg-background rounded-lg shadow-lg p-8 sm:p-10">
      <h1 className="text-2xl font-bold mb-8">Account Settings</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-lg font-semibold mb-4">Personal Details</h2>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input id="name" type="text" defaultValue="John Doe" />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  defaultValue="john@example.com"
                />
              </div>
            </div>
            <div>
              <Label htmlFor="profile-picture">Profile Picture</Label>
              <div className="flex items-center gap-4">
                <Avatar className="h-16 w-16">
                  <AvatarImage src="/placeholder-user.jpg" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <Button variant="outline">
                  <UploadIcon className="mr-2 h-4 w-4" />
                  Change
                </Button>
              </div>
            </div>
            <Button className="w-full">Save Changes</Button>
          </div>
        </div>
        <div>
          <h2 className="text-lg font-semibold mb-4">Password</h2>
          <div className="space-y-4">
            <div>
              <Label htmlFor="current-password">Current Password</Label>
              <Input id="current-password" type="password" />
            </div>
            <div>
              <Label htmlFor="new-password">New Password</Label>
              <Input id="new-password" type="password" />
            </div>
            <div>
              <Label htmlFor="confirm-password">Confirm Password</Label>
              <Input id="confirm-password" type="password" />
            </div>
            <Button className="w-full">Save Changes</Button>
          </div>
        </div>
        <div>
          <h2 className="text-lg font-semibold mb-4">Address</h2>
          <div className="space-y-4">
            <div>
              <Label htmlFor="street">Street</Label>
              <Input id="street" type="text" defaultValue="123 Main St" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="city">City</Label>
                <Input id="city" type="text" defaultValue="Anytown" />
              </div>
              <div>
                <Label htmlFor="state">State</Label>
                <Input id="state" type="text" defaultValue="CA" />
              </div>
            </div>
            <div>
              <Label htmlFor="zip">Zip Code</Label>
              <Input id="zip" type="text" defaultValue="12345" />
            </div>
            <Button className="w-full">Save Changes</Button>
          </div>
        </div>
        <div>
          <h2 className="text-lg font-semibold mb-4">Phone Number</h2>
          <div className="space-y-4">
            <div>
              <Label htmlFor="phone">Phone Number</Label>
              <Input id="phone" type="tel" defaultValue="+1 (555) 555-5555" />
            </div>
            <Button className="w-full">Save Changes</Button>
          </div>
        </div>
      </div>
      <Separator className="my-8" />
      <div className="flex justify-end">
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button variant="destructive">Delete Account</Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>
                Are you sure you want to delete your account?
              </AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. All your data will be permanently
                deleted.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction>Delete Account</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </div>
  );
}
