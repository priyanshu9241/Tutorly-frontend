import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {    UserIcon,
      ClockIcon,
      CalendarIcon, } from "@/components/svg";

export default function SessionCard(session) {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <CalendarIcon className="h-5 w-5" />
            <span className="text-sm font-medium">{session.title}</span>
          </div>
          <div className="flex items-center gap-2">
            <ClockIcon className="h-5 w-5" />
            <span className="text-sm font-medium">{session.duration}</span>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h3 className="text-lg font-semibold">{session.subject}</h3>
            {session.topics.map((topic) => (
              <span className="text-sm text-muted-foreground">{topic + ","} </span>
            ))}
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <UserIcon className="h-5 w-5" />
            <span className="text-sm font-medium">{session.id}</span>
            {/* <span className="text-sm font-medium">{session.tutorId}</span> */}
          </div>
          <Button variant="outline" size="sm">
            View Details
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
