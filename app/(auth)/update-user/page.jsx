"use client";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { UploadIcon } from "@/components/svg";
import { useUserContext } from "@/context/userContext";
import { useState } from "react";
export default function Component() {
  const { user } = useUserContext();
  // console.log(user)
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [phoneNumber, setPhoneNumber] = useState(user.phoneNumber);
  const [adress, setAdress] = useState(user.adress);
  const [file, setFile] = useState(user.file);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const submitUserDetails = () => {
    console.log(name);
  };
  const changePassword = () => {
    console.log(currentPassword, newPassword, confirmPassword);
  };
  return (
    <div className="w-full mt-10 max-w-3xl mx-auto bg-background rounded-lg shadow-lg p-8 sm:p-10">
      <h1 className="text-2xl font-bold mb-8">Account Settings</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <form onSubmit={submitUserDetails}>
          <div>
            <h2 className="text-lg font-semibold mb-4">Personal Details</h2>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
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
              <div>
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="adress">Adress</Label>
                <Input
                  id="adress"
                  type="text"
                  value={adress}
                  onChange={(e) => setAdress(e.target.value)}
                />
              </div>
              <Button type="submit" className="w-full">
                Save Changes
              </Button>
            </div>
          </div>
        </form>
        <form onSubmit={changePassword}>
          <h2 className="text-lg font-semibold mb-4">Password</h2>
          <div className="space-y-4">
            <div>
              <Label htmlFor="current-password">Current Password</Label>
              <Input
                id="current-password"
                type="password"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="new-password">New Password</Label>
              <Input
                id="new-password"
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="confirm-password">Confirm Password</Label>
              <Input
                id="confirm-password"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            <Button type="submit" className="w-full">
              Change Password
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
