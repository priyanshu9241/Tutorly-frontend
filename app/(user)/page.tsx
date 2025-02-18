"use client";

/** Add fonts into your Next.js project:
 
import { Archivo } from 'next/font/google'
import { Libre_Franklin } from 'next/font/google'

archivo({
  subsets: ['latin'],
  display: 'swap',
  })
  
  libre_franklin({
    subsets: ['latin'],
    display: 'swap',
    })
    
    To read more about using these font, please visit the Next.js documentation:
    - App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
    - Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
    **/
import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import TutorCard from "@/components/TutorCard";

import { Card, CardContent } from "@/components/ui/card";
import {
  BookIcon,
  StarIcon,
  SparkleIcon,
  ZapIcon,
  ThumbsUpIcon,
} from "@/components/svg";
import Footer from "@/components/Footer";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

export default function Home() {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const tutors = [
    {
      id: 1,
      name: "John Doe",
      subject: "Math",
      rating: 4.9,
      reviews: 156,
      price: 60,
      image: "/placeholder-user.jpg",
    },
    {
      id: 2,
      name: "Jane Doe",
      subject: "Science",
      rating: 4.8,
      reviews: 142,
      price: 65,
      image: "/placeholder-user.jpg",
    },
    {
      id: 3,
      name: "James Doe",
      subject: "English",
      rating: 4.9,
      reviews: 128,
      price: 70,
      image: "/placeholder-user.jpg",
    },
    {
      id: 4,
      name: "Jenny Doe",
      subject: "History",
      rating: 4.7,
      reviews: 120,
      price: 55,
      image: "/placeholder-user.jpg",
    },
    {
      id: 5,
      name: "Jack Doe",
      subject: "Geography",
      rating: 4.9,
      reviews: 156,
      price: 60,
      image: "/placeholder-user.jpg",
    },
    {
      id: 6,
      name: "Jill Doe",
      subject: "Physics",
      rating: 4.8,
      reviews: 142,
      price: 65,
      image: "/placeholder-user.jpg",
    },
    {
      id: 7,
      name: "Jared Doe",
      subject: "Chemistry",
      rating: 4.9,
      reviews: 128,
      price: 70,
      image: "/placeholder-user.jpg",
    },
    {
      id: 8,
      name: "Jasmine Doe",
      subject: "Biology",
      rating: 4.7,
      reviews: 120,
      price: 55,
      image: "/placeholder-user.jpg",
    },
    {
      id: 9,
      name: "Josh Doe",
      subject: "Algebra",
      rating: 4.9,
      reviews: 156,
      price: 60,
      image: "/placeholder-user.jpg",
    },
    {
      id: 10,
      name: "Jenna Doe",
      subject: "Calculus",
      rating: 4.8,
      reviews: 142,
      price: 65,
      image: "/placeholder-user.jpg",
    },
    {
      id: 11,
      name: "Jasper Doe",
      subject: "Trigonometry",
      rating: 4.9,
      reviews: 128,
      price: 70,
      image: "/placeholder-user.jpg",
    },
  ];
  const topTutors = [
    {
      id: 1,
      name: "John Doe",
      subject: "Math",
      rating: 4.9,
      reviews: 156,
      price: 60,
      image: "/placeholder-user.jpg",
    },
    {
      id: 2,
      name: "Jane Doe",
      subject: "Science",
      rating: 4.8,
      reviews: 142,
      price: 65,
      image: "/placeholder-user.jpg",
    },
    {
      id: 3,
      name: "James Doe",
      subject: "English",
      rating: 4.9,
      reviews: 128,
      price: 70,
      image: "/placeholder-user.jpg",
    },
    {
      id: 4,
      name: "Jenny Doe",
      subject: "History",
      rating: 4.7,
      reviews: 120,
      price: 55,
      image: "/placeholder-user.jpg",
    },
    {
      id: 5,
      name: "Jack Doe",
      subject: "Geography",
      rating: 4.9,
      reviews: 156,
      price: 60,
      image: "/placeholder-user.jpg",
    },
    {
      id: 6,
      name: "Jill Doe",
      subject: "Physics",
      rating: 4.8,
      reviews: 142,
      price: 65,
      image: "/placeholder-user.jpg",
    },
    {
      id: 7,
      name: "Jared Doe",
      subject: "Chemistry",
      rating: 4.9,
      reviews: 128,
      price: 70,
      image: "/placeholder-user.jpg",
    },
    {
      id: 8,
      name: "Jasmine Doe",
      subject: "Biology",
      rating: 4.7,
      reviews: 120,
      price: 55,
      image: "/placeholder-user.jpg",
    },
    {
      id: 9,
      name: "Josh Doe",
      subject: "Algebra",
      rating: 4.9,
      reviews: 156,
      price: 60,
      image: "/placeholder-user.jpg",
    },
    {
      id: 10,
      name: "Jenna Doe",
      subject: "Calculus",
      rating: 4.8,
      reviews: 142,
      price: 65,
      image: "/placeholder-user.jpg",
    },
    {
      id: 11,
      name: "Jasper Doe",
      subject: "Trigonometry",
      rating: 4.9,
      reviews: 128,
      price: 70,
      image: "/placeholder-user.jpg",
    },
  ];

  return (
    <main className="flex min-h-screen flex-col">
      <div className="min-h-screen bg-background text-foreground">
        <main>
          <section className="bg-primary py-12 md:py-20 px-4">
            <div className="flex flex-col lg:flex-row lg:justify-between	 space-y-12 items-center">
              <div className="space-y-8 text-center px-10">
                <h1 className="text-3xl font-bold tracking-tight text-white md:text-6xl">
                  Find the Perfect Tutor for You
                </h1>
                <p className="text-primary-foreground/80  text-center w-full">
                  Browse our network of experienced tutors and find the right
                  one to help you achieve your academic goals.
                </p>
                <div className="flex gap-2">
                  <Input
                    value={query}
                    type="search"
                    placeholder="Search by subject or grade level"
                    className="flex-1"
                    onChange={(e) => {
                      setQuery(e.target.value);
                    }}
                  />
                  <Button
                    onClick={() => {
                      router.push(`/find/${query}`);
                    }}
                    variant="pro"
                    type="submit"
                  >
                    Search
                  </Button>
                </div>
              </div>
              <div>
                <Image
                  src="/tutor2.jpg"
                  width={600}
                  height={400}
                  alt="Hero Image"
                  className="rounded-xl object-cover"
                />
              </div>
            </div>
          </section>
          <section className="py-12 md:py-20">
            <div className="container px-4 md:px-6">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold tracking-tight">
                  Featured Tutors
                </h2>
                <Link
                  href="/find"
                  className="text-primary hover:underline underline-offset-4"
                  prefetch={false}
                >
                  View all tutors
                </Link>
              </div>
              <div className="px-12">
                <Carousel>
                  <CarouselContent className="grid grid-flow-col auto-cols-max gap-4">
                    {tutors.map((tutor) => (
                      <CarouselItem key={tutor.id}>
                        <TutorCard />
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
              </div>
            </div>
          </section>
          <section className="bg-muted py-12 md:py-20">
            <div className=" px-4 md:px-6">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="flex items-center justify-center">
                  <Image
                    src="/tutor1.jpg"
                    width={500}
                    height={400}
                    alt="Why Choose Tutorly"
                    className="rounded-xl object-cover"
                  />
                </div>
                <div>
                  <h2 className="text-2xl font-bold tracking-tight mb-4">
                    Why Choose Tutorly?
                  </h2>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <SparkleIcon className="w-6 h-6 text-primary shrink-0" />
                      <div>
                        <h3 className="font-semibold">Experienced Tutors</h3>
                        <p className="text-muted-foreground">
                          Our tutors are highly qualified and have a proven
                          track record of helping students succeed.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <ZapIcon className="w-6 h-6 text-primary shrink-0" />
                      <div>
                        <h3 className="font-semibold">Personalized Learning</h3>
                        <p className="text-muted-foreground">
                          We match you with the perfect tutor who can cater to
                          your unique learning needs and goals.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <ThumbsUpIcon className="w-6 h-6 text-primary shrink-0" />
                      <div>
                        <h3 className="font-semibold">Flexible Scheduling</h3>
                        <p className="text-muted-foreground">
                          Book sessions at your convenience, with options for
                          in-person or online tutoring.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="py-12 md:py-20">
            <div className="container px-4 md:px-6">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold tracking-tight">
                  Top Rated Tutors
                </h2>
                <Link
                  href="find"
                  className="text-primary hover:underline underline-offset-4"
                  prefetch={false}
                >
                  View all tutors
                </Link>
              </div>
              <div className="px-12">
                <Carousel>
                  <CarouselContent className="grid grid-flow-col auto-cols-max gap-4">
                    {topTutors.map((tutor) => (
                      <CarouselItem key={tutor.id}>
                        <TutorCard />
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </main>
  );
}
