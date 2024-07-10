import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import Link from "next/link";
import { UserIcon, LogOutIcon } from "@/components/svg";
import { getCookie,setCookie,deleteCookie } from "cookies-next";


export default function User() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="rounded-full">
          <Avatar className="h-10 w-10">
            <AvatarImage src="/placeholder-user.jpg" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <span className="sr-only">Toggle user menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem>
          <Link
            href="/my-sessions"
            className="flex items-center gap-2"
            prefetch={false}
          >
            <UserIcon className="h-4 w-4" />
            <span>My Sessions</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Link
            href="/update-user"
            className="flex items-center gap-2"
            prefetch={false}
          >
            <UserIcon className="h-4 w-4" />
            <span>Update Profile</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Button onClick={async ()=>{
            const role=getCookie("role")
            const reqUrl =
            process.env.NEXT_PUBLIC_API_URL +
            (role === "tutor"
              ? "/api/v1/tutorsAuth/logout"
              : "/api/v1/studentsAuth/logout");
          console.log(reqUrl);
          const res = await fetch(reqUrl)
          // console.log(await res.json())
          deleteCookie("token")
          deleteCookie("role")

          }}className="flex items-center gap-2">
            <LogOutIcon className="h-4 w-4" />
            <span>Logout</span>
          </Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
