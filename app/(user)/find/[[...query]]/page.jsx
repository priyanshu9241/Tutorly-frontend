"use client";

import { useState, useMemo } from "react";
import { Input } from "@/components/ui/input";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import {
  BadgeIcon,
  DollarSignIcon,
  AwardIcon,
  StarIcon,
  BookIcon,
} from "@/components/svg";
import Image from 'next/image'

export default function FindTutor({params}) {
  const{query}=params
  const [searchTerm, setSearchTerm] = useState(query&&query[0]||"");
  const [filters, setFilters] = useState({
    rating: [],
    subject: [],
    cost: [],
    experience: [],
  });
  const tutors = [
    {
      id: 1,
      name: "John Doe",
      image: "/placeholder.svg",
      price: 50,
      experience: 5,
      rating: 4.8,
      subjects: ["Math", "Science", "English"],
    },
    {
      id: 2,
      name: "Jane Smith",
      image: "/placeholder.svg",
      price: 45,
      experience: 3,
      rating: 4.6,
      subjects: ["Math", "History"],
    },
    {
      id: 3,
      name: "Michael Johnson",
      image: "/placeholder.svg",
      price: 60,
      experience: 7,
      rating: 4.9,
      subjects: ["Science", "English", "Computer Science"],
    },
    {
      id: 4,
      name: "Emily Davis",
      image: "/placeholder.svg",
      price: 55,
      experience: 4,
      rating: 4.7,
      subjects: ["Math", "English", "Art"],
    },
    {
      id: 5,
      name: "David Wilson",
      image: "/placeholder.svg",
      price: 65,
      experience: 8,
      rating: 4.8,
      subjects: ["Science", "History", "Geography"],
    },
  ];
  const filteredTutors = useMemo(() => {
    return tutors.filter((tutor) => {
      const searchMatch =
        tutor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        tutor.subjects.some((subject) =>
          subject.toLowerCase().includes(searchTerm.toLowerCase())
        );
      const ratingMatch =
        filters.rating.length === 0 ||
        filters.rating.includes(Math.floor(tutor.rating));
      const subjectMatch =
        filters.subject.length === 0 ||
        filters.subject.some((subject) => tutor.subjects.includes(subject));
      const costMatch =
        filters.cost.length === 0 ||
        filters.cost.some((cost) => tutor.price <= cost);
      const experienceMatch =
        filters.experience.length === 0 ||
        filters.experience.some((exp) => tutor.experience >= exp);
      return (
        searchMatch &&
        ratingMatch &&
        subjectMatch &&
        costMatch &&
        experienceMatch
      );
    });
  }, [searchTerm, filters,tutors]);
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };
  const handleFilterChange = (type, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [type]: prevFilters[type].includes(value)
        ? prevFilters[type].filter((item) => item !== value)
        : [...prevFilters[type], value],
    }));
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-[240px_1fr] gap-8 p-4 md:p-8">
      <div className="grid gap-6">
        <Input
          placeholder="Search tutors or subjects..."
          value={searchTerm}
          onChange={handleSearch}
          className="w-full"
        />
        <Accordion type="single" collapsible>
          <AccordionItem value="rating">
            <AccordionTrigger className="text-base font-medium">
              Rating
            </AccordionTrigger>
            <AccordionContent>
              <div className="grid gap-2">
                <Label className="flex items-center gap-2 font-normal">
                  <Checkbox
                    checked={filters.rating.includes(5)}
                    onCheckedChange={() => handleFilterChange("rating", 5)}
                  />
                  5 stars
                </Label>
                <Label className="flex items-center gap-2 font-normal">
                  <Checkbox
                    checked={filters.rating.includes(4)}
                    onCheckedChange={() => handleFilterChange("rating", 4)}
                  />
                  4 stars
                </Label>
                <Label className="flex items-center gap-2 font-normal">
                  <Checkbox
                    checked={filters.rating.includes(3)}
                    onCheckedChange={() => handleFilterChange("rating", 3)}
                  />
                  3 stars
                </Label>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="subject">
            <AccordionTrigger className="text-base font-medium">
              Subject
            </AccordionTrigger>
            <AccordionContent>
              <div className="grid gap-2">
                <Label className="flex items-center gap-2 font-normal">
                  <Checkbox
                    checked={filters.subject.includes("Math")}
                    onCheckedChange={() =>
                      handleFilterChange("subject", "Math")
                    }
                  />
                  Math
                </Label>
                <Label className="flex items-center gap-2 font-normal">
                  <Checkbox
                    checked={filters.subject.includes("Science")}
                    onCheckedChange={() =>
                      handleFilterChange("subject", "Science")
                    }
                  />
                  Science
                </Label>
                <Label className="flex items-center gap-2 font-normal">
                  <Checkbox
                    checked={filters.subject.includes("English")}
                    onCheckedChange={() =>
                      handleFilterChange("subject", "English")
                    }
                  />
                  English
                </Label>
                <Label className="flex items-center gap-2 font-normal">
                  <Checkbox
                    checked={filters.subject.includes("History")}
                    onCheckedChange={() =>
                      handleFilterChange("subject", "History")
                    }
                  />
                  History
                </Label>
                <Label className="flex items-center gap-2 font-normal">
                  <Checkbox
                    checked={filters.subject.includes("Computer Science")}
                    onCheckedChange={() =>
                      handleFilterChange("subject", "Computer Science")
                    }
                  />
                  Computer Science
                </Label>
                <Label className="flex items-center gap-2 font-normal">
                  <Checkbox
                    checked={filters.subject.includes("Art")}
                    onCheckedChange={() => handleFilterChange("subject", "Art")}
                  />
                  Art
                </Label>
                <Label className="flex items-center gap-2 font-normal">
                  <Checkbox
                    checked={filters.subject.includes("Geography")}
                    onCheckedChange={() =>
                      handleFilterChange("subject", "Geography")
                    }
                  />
                  Geography
                </Label>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="cost">
            <AccordionTrigger className="text-base font-medium">
              Cost
            </AccordionTrigger>
            <AccordionContent>
              <div className="grid gap-2">
                <Label className="flex items-center gap-2 font-normal">
                  <Checkbox
                    checked={filters.cost.includes(50)}
                    onCheckedChange={() => handleFilterChange("cost", 50)}
                  />
                  Up to $50
                </Label>
                <Label className="flex items-center gap-2 font-normal">
                  <Checkbox
                    checked={filters.cost.includes(75)}
                    onCheckedChange={() => handleFilterChange("cost", 75)}
                  />
                  Up to $75
                </Label>
                <Label className="flex items-center gap-2 font-normal">
                  <Checkbox
                    checked={filters.cost.includes(100)}
                    onCheckedChange={() => handleFilterChange("cost", 100)}
                  />
                  Up to $100
                </Label>
                <Label className="flex items-center gap-2 font-normal">
                  <Checkbox
                    checked={filters.cost.includes(150)}
                    onCheckedChange={() => handleFilterChange("cost", 150)}
                  />
                  Up to $150
                </Label>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="experience">
            <AccordionTrigger className="text-base font-medium">
              Experience
            </AccordionTrigger>
            <AccordionContent>
              <div className="grid gap-2">
                <Label className="flex items-center gap-2 font-normal">
                  <Checkbox
                    checked={filters.experience.includes(1)}
                    onCheckedChange={() => handleFilterChange("experience", 1)}
                  />
                  1+ years
                </Label>
                <Label className="flex items-center gap-2 font-normal">
                  <Checkbox
                    checked={filters.experience.includes(3)}
                    onCheckedChange={() => handleFilterChange("experience", 3)}
                  />
                  3+ years
                </Label>
                <Label className="flex items-center gap-2 font-normal">
                  <Checkbox
                    checked={filters.experience.includes(5)}
                    onCheckedChange={() => handleFilterChange("experience", 5)}
                  />
                  5+ years
                </Label>
                <Label className="flex items-center gap-2 font-normal">
                  <Checkbox
                    checked={filters.experience.includes(7)}
                    onCheckedChange={() => handleFilterChange("experience", 7)}
                  />
                  7+ years
                </Label>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <div className="grid gap-6">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredTutors.map((tutor) => (
           <Link  key={tutor.id} href={`tutor/${tutor.id}`}>
            <div
             
              className="bg-background rounded-lg shadow-lg overflow-hidden"
            >
              <Image
                src="/placeholder.svg"
                alt={tutor.name}
                width={300}
                height={200}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{tutor.name}</h3>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <DollarSignIcon className="w-4 h-4" />
                  {tutor.price} per hour
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <AwardIcon className="w-4 h-4" />
                  {tutor.experience} years of experience
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <StarIcon className="w-4 h-4 fill-primary" />
                  {tutor.rating.toFixed(1)} rating
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <BookIcon className="w-4 h-4" />
                  {tutor.subjects.join(", ")}
                </div>
              </div>
            </div></Link>
          ))}
        </div>
      </div>
    </div>
  );
}
