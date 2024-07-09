import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import {
  BookIcon,
  SparkleIcon,
  StarIcon,
  ThumbsUpIcon,
  ZapIcon,
  AwardIcon,
  BadgeIcon,
  TrophyIcon,
} from "@/components/svg";
import Image from 'next/image'

export default function TutorProfile() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-background rounded-lg shadow-lg overflow-hidden">
          <div className="h-64 md:h-80 bg-muted">
            <Image
              src="/placeholder.svg"
              alt="Tutor Image"
              width={800}
              height={600}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-6 md:p-8">
            <h1 className="text-2xl md:text-3xl font-bold mb-2">John Doe</h1>
            <p className="text-muted-foreground text-lg mb-4">Math, Science, English</p>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <h3 className="text-lg font-semibold mb-1">Sessions Offered</h3>
                <p className="text-muted-foreground">1-on-1, Group</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">Cost</h3>
                <p className="text-muted-foreground">$50/hr</p>
              </div>
            </div>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center gap-1">
                <StarIcon className="w-5 h-5 fill-primary" />
                <StarIcon className="w-5 h-5 fill-primary" />
                <StarIcon className="w-5 h-5 fill-primary" />
                <StarIcon className="w-5 h-5 fill-primary" />
                <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
              </div>
              <span className="text-muted-foreground">4.5 (120 reviews)</span>
            </div>
            <Button className="w-full">Book Now</Button>
          </div>
        </div>
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>About Me</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                I am a highly experienced tutor with a passion for helping students succeed. I have a degree in
                Education and over 10 years of teaching experience. I specialize in Math, Science, and English, and I
                tailor my lessons to each student's individual needs and learning style.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Qualifications</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <div className="flex items-center gap-2">
                    <AwardIcon className="w-5 h-5" />
                    <span>Bachelor's Degree in Education</span>
                  </div>
                </li>
                <li>
                  <div className="flex items-center gap-2">
                    <BadgeIcon className="w-5 h-5" />
                    <span>Teaching Certificate</span>
                  </div>
                </li>
                <li>
                  <div className="flex items-center gap-2">
                    <TrophyIcon className="w-5 h-5" />
                    <span>10+ Years of Teaching Experience</span>
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Reviews</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <Avatar className="border w-11 h-11">
                    <AvatarImage src="/placeholder-user.jpg" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div className="grid gap-1">
                    <div className="font-semibold">Sarah Johnson</div>
                    <div className="flex items-center gap-2 text-xs font-semibold">
                      <div className="flex items-center gap-px">
                        <StarIcon className="w-3 h-3 fill-primary" />
                        <StarIcon className="w-3 h-3 fill-primary" />
                        <StarIcon className="w-3 h-3 fill-primary" />
                        <StarIcon className="w-3 h-3 fill-primary" />
                        <StarIcon className="w-3 h-3 fill-muted stroke-muted-foreground" />
                      </div>
                      <span>1 week ago</span>
                    </div>
                    <p className="text-muted-foreground">
                      John is an amazing tutor! He is patient, knowledgeable, and really tailors the lessons to my
                      child's needs. I highly recommend him.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Avatar className="border w-11 h-11">
                    <AvatarImage src="/placeholder-user.jpg" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div className="grid gap-1">
                    <div className="font-semibold">Michael Brown</div>
                    <div className="flex items-center gap-2 text-xs font-semibold">
                      <div className="flex items-center gap-px">
                        <StarIcon className="w-3 h-3 fill-primary" />
                        <StarIcon className="w-3 h-3 fill-primary" />
                        <StarIcon className="w-3 h-3 fill-primary" />
                        <StarIcon className="w-3 h-3 fill-primary" />
                        <StarIcon className="w-3 h-3 fill-primary" />
                      </div>
                      <span>2 weeks ago</span>
                    </div>
                    <p className="text-muted-foreground">
                      I've been working with John for a few months now and he's been an absolute game-changer for my
                      son's academic performance. Highly recommended!
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
