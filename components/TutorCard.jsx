import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import {
  BookIcon,
  StarIcon,
  SparkleIcon,
  ZapIcon,
  ThumbsUpIcon,
} from "@/components/svg";
export default function TutorCard() {
  return (
    <Card className="p-4">
      <div className="flex items-center gap-4 px-4">
        <Avatar className="w-16 h-16 border">
          <AvatarImage src="/placeholder-user.jpg" />
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
        <div>
          <h3 className="font-semibold">John Doe</h3>
          <div className="text-muted-foreground text-sm">
            Math, Science, English
          </div>
          <div className="flex items-center gap-1 text-xs font-semibold">
            <StarIcon className="w-3 h-3 fill-primary" />
            <span>4.9</span>
            <span className="text-muted-foreground">(124 reviews)</span>
          </div>
        </div>
      </div>
      <Separator className="my-4" />
      <div className="flex items-center justify-between">
        <div className="text-muted-foreground text-sm">$50 / hour</div>
        <Button size="sm">Book Now</Button>
      </div>
    </Card>
  );
}
