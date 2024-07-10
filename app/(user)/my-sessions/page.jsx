"use client";
import { useState } from "react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuCheckboxItem,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationPrevious,
  PaginationLink,
  PaginationNext,
} from "@/components/ui/pagination";
import SessionCard from "@/components/Session-card";
import {    UserIcon,
  LogOutIcon,
      FilterIcon,
      ClockIcon,
      CalendarPlusIcon,
      CalendarIcon, } from "@/components/svg";
export default function MySessions() {
  const sessions = {
    CurrentBookings: [
      {
        id: 1,
        title: "Session #122",
        duration: "90 mins",
        subjects:"English",
        
        topics:[
              "HISTORYU",   "DEC","SCEW",
        ],
       
      },
      {
        id: 1,
        title: "Session #122",
        duration: "90 mins",
        subjects:"English",
        
        topics:[
              "HISTORYU",   "DEC","SCEW",
        ],
       
      },
      
    ],
    PastBookings: [  {
      id: 1,
      title: "Session #122",
      duration: "90 mins",
      subjects:"English",
      
      topics:[
            "HISTORYU",   "DEC","SCEW",
      ],
     
    },
    {
      id: 1,
      title: "Session #122",
      duration: "90 mins",
      subjects:"English",
      
      topics:[
            "HISTORYU",   "DEC","SCEW",
      ],
     
    },
    
    ],
    upcomingSessions: [
      {
        id: 1,
        title: "Session #122",
        duration: "90 mins",
        subjects:"English",
        
        topics:[
              "HISTORYU",   "DEC","SCEW",
        ],
       
      },
      {
        id: 1,
        title: "Session #122",
        duration: "90 mins",
        subjects:"English",
        
        topics:[
              "HISTORYU",   "DEC","SCEW",
        ],
       
      },
    ],
  };
  const [selectedFilter, setSelectedFilter] = useState("upcoming");
  const handleFilterChange = (filter) => {
    setSelectedFilter(filter);
  };
  return (
    <div className="flex min-h-screen w-full">
      <div className="hidden w-64 flex-col border-r bg-background p-6 lg:flex">
        <div className="mb-6 flex items-center gap-2">
          <CalendarIcon className="h-6 w-6" />
          <h2 className="text-xl font-semibold">Sessions</h2>
        </div>
        <nav className="flex flex-col gap-2">
          <Link
            href="#"
            className={`flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors ${
              selectedFilter === "upcoming"
                ? "bg-primary text-primary-foreground"
                : "hover:bg-muted hover:text-foreground"
            }`}
            onClick={() => handleFilterChange("upcoming")}
            prefetch={false}
          >
            <CalendarPlusIcon className="h-5 w-5" />
            Upcoming Sessions
          </Link>
          <Link
            href="#"
            className={`flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors ${
              selectedFilter === "past"
                ? "bg-primary text-primary-foreground"
                : "hover:bg-muted hover:text-foreground"
            }`}
            onClick={() => handleFilterChange("past")}
            prefetch={false}
          >
            <ClockIcon className="h-5 w-5" />
            Past Sessions
          </Link>
          <Link
            href="#"
            className={`flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors ${
              selectedFilter === "current"
                ? "bg-primary text-primary-foreground"
                : "hover:bg-muted hover:text-foreground"
            }`}
            onClick={() => handleFilterChange("current")}
            prefetch={false}
          >
            <CalendarIcon className="h-5 w-5" />
            Current Bookings
          </Link>
        </nav>
      </div>
      <div className="flex-1 p-6">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-semibold">Upcoming Sessions</h2>
          <div className="flex items-center gap-2">
            <Input
              type="search"
              placeholder="Search sessions..."
              className="max-w-xs rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm"
            />
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon">
                  <FilterIcon className="h-5 w-5" />
                  <span className="sr-only">Filter</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Filter by</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuCheckboxItem
                  checked={selectedFilter === "upcoming"}
                  onCheckedChange={() => handleFilterChange("upcoming")}
                >
                  Upcoming
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem
                  checked={selectedFilter === "past"}
                  onCheckedChange={() => handleFilterChange("past")}
                >
                  Past
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem
                  checked={selectedFilter === "current"}
                  onCheckedChange={() => handleFilterChange("current")}
                >
                  Current
                </DropdownMenuCheckboxItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        <div className="grid gap-4">
          
          {selectedFilter === "upcoming" && (
            <>
              {/* {sessions.upcomingSessions.map((session,idx) => <SessionCard key={idx} session={session}/>)} */}
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <CalendarIcon className="h-5 w-5" />
                      <span className="text-sm font-medium">Session #124</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <ClockIcon className="h-5 w-5" />
                      <span className="text-sm font-medium">45 mins</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h3 className="text-lg font-semibold">Science</h3>
                      <p className="text-sm text-muted-foreground">
                        Biology, Chemistry, Physics
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">History</h3>
                      <p className="text-sm text-muted-foreground">
                        Ancient Civilizations, World History, US History
                      </p>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <UserIcon className="h-5 w-5" />
                      <span className="text-sm font-medium">Jane Smith</span>
                    </div>
                    <Button variant="outline" size="sm">
                      View Details
                    </Button>
                  </div>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <CalendarIcon className="h-5 w-5" />
                      <span className="text-sm font-medium">Session #125</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <ClockIcon className="h-5 w-5" />
                      <span className="text-sm font-medium">90 mins</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h3 className="text-lg font-semibold">
                        Computer Science
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Algorithms, Data Structures, Programming
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">Art</h3>
                      <p className="text-sm text-muted-foreground">
                        Drawing, Painting, Sculpture
                      </p>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <UserIcon className="h-5 w-5" />
                      <span className="text-sm font-medium">
                        Michael Johnson
                      </span>
                    </div>
                    <Button variant="outline" size="sm">
                      View Details
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            </>
          )}
          {selectedFilter === "past" && (
            <>
              {/* {sessions.PastBookings.map((session,idx) => <SessionCard key={idx} session={session}/>)} */}

              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <CalendarIcon className="h-5 w-5" />
                      <span className="text-sm font-medium">Session #120</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <ClockIcon className="h-5 w-5" />
                      <span className="text-sm font-medium">60 mins</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h3 className="text-lg font-semibold">Math</h3>
                      <p className="text-sm text-muted-foreground">
                        Algebra, Geometry, Trigonometry
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">English</h3>
                      <p className="text-sm text-muted-foreground">
                        Reading Comprehension, Writing, Grammar
                      </p>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <UserIcon className="h-5 w-5" />
                      <span className="text-sm font-medium">John Doe</span>
                    </div>
                    <Button variant="outline" size="sm">
                      View Details
                    </Button>
                  </div>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <CalendarIcon className="h-5 w-5" />
                      <span className="text-sm font-medium">Session #119</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <ClockIcon className="h-5 w-5" />
                      <span className="text-sm font-medium">45 mins</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h3 className="text-lg font-semibold">Science</h3>
                      <p className="text-sm text-muted-foreground">
                        Biology, Chemistry, Physics
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">History</h3>
                      <p className="text-sm text-muted-foreground">
                        Ancient Civilizations, World History, US History
                      </p>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <UserIcon className="h-5 w-5" />
                      <span className="text-sm font-medium">Jane Smith</span>
                    </div>
                    <Button variant="outline" size="sm">
                      View Details
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            </>
          )}
          {selectedFilter === "current" && (
            <>
              {/* {sessions.CurrentBookings.map((session,idx) => <SessionCard key={idx} session={session}/>)} */}

              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <CalendarIcon className="h-5 w-5" />
                      <span className="text-sm font-medium">Session #122</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <ClockIcon className="h-5 w-5" />
                      <span className="text-sm font-medium">90 mins</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h3 className="text-lg font-semibold">
                        Computer Science
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Algorithms, Data Structures, Programming
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">Art</h3>
                      <p className="text-sm text-muted-foreground">
                        Drawing, Painting, Sculpture
                      </p>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <UserIcon className="h-5 w-5" />
                      <span className="text-sm font-medium">
                        Michael Johnson
                      </span>
                    </div>
                    <Button variant="outline" size="sm">
                      View Details
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            </>
          )}
        </div>
        <div className="mt-8 flex justify-center">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" isActive>
                  2
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">3</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </div>
    </div>
  );
}
