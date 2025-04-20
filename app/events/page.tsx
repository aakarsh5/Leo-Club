import { EventCard } from "@/components/event-card"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CalendarIcon } from "lucide-react"

export const metadata = {
  title: "Events & Announcements | Leo Club of Biratnagar Central Megha",
  description:
    "Stay updated with upcoming events, meetings, and announcements from Leo Club of Biratnagar Central Megha.",
}

export default function EventsPage() {
  return (
    <div className="container px-4 py-12 md:px-6 md:py-24">
      <div className="mx-auto max-w-5xl space-y-12">
        <div className="space-y-4 text-center">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">Events & Announcements</h1>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            Stay updated with our upcoming events, meetings, and community initiatives.
          </p>
        </div>

        <Tabs defaultValue="upcoming" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="upcoming">Upcoming Events</TabsTrigger>
            <TabsTrigger value="calendar">Calendar</TabsTrigger>
            <TabsTrigger value="announcements">Announcements</TabsTrigger>
          </TabsList>
          <TabsContent value="upcoming" className="space-y-6 pt-6">
            <div className="grid gap-6 md:grid-cols-2">
              <EventCard
                title="Community Health Camp"
                description="Free health checkups and consultations for the local community."
                date="April 15, 2024"
                location="Biratnagar Community Center"
                imageSrc="/Slideshow and teamwork/FB_IMG_1744432733977.jpg"
              />
              <EventCard
                title="Annual Fundraising Gala"
                description="Join us for an evening of celebration and fundraising for our upcoming projects."
                date="May 20, 2024"
                location="Hotel Xenial, Biratnagar"
                imageSrc="/placeholder.svg?height=200&width=300"
              />
              <EventCard
                title="Youth Leadership Summit"
                description="A day-long summit featuring workshops, panel discussions, and networking opportunities for young leaders."
                date="June 5, 2024"
                location="Biratnagar City Hall"
                imageSrc="/placeholder.svg?height=200&width=300"
              />
              <EventCard
                title="Monthly General Meeting"
                description="Regular meeting for all club members to discuss ongoing projects and future plans."
                date="April 5, 2024"
                location="Leo Club Office, Biratnagar"
                imageSrc="/placeholder.svg?height=200&width=300"
              />
              <EventCard
                title="Environmental Awareness Workshop"
                description="Learn about sustainable practices and how to reduce your carbon footprint."
                date="April 22, 2024"
                location="Biratnagar Public Library"
                imageSrc="/placeholder.svg?height=200&width=300"
              />
              <EventCard
                title="Blood Donation Drive"
                description="Donate blood and help save lives in our community."
                date="May 10, 2024"
                location="Regional Blood Bank, Biratnagar"
                imageSrc="/placeholder.svg?height=200&width=300"
              />
            </div>
          </TabsContent>
          <TabsContent value="calendar" className="space-y-6 pt-6">
            <div className="grid gap-6 md:grid-cols-[1fr_300px]">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CalendarIcon className="h-5 w-5" /> Event Calendar
                  </CardTitle>
                  <CardDescription>View all our scheduled events for the month</CardDescription>
                </CardHeader>
                <CardContent>
                  <Calendar mode="single" className="rounded-md border" />
                </CardContent>
              </Card>
              <div className="space-y-4">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">April 5, 2024</CardTitle>
                    <CardDescription>Monthly General Meeting</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-xs text-muted-foreground">Leo Club Office, 6:00 PM</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">April 15, 2024</CardTitle>
                    <CardDescription>Community Health Camp</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-xs text-muted-foreground">Biratnagar Community Center, 9:00 AM</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">April 22, 2024</CardTitle>
                    <CardDescription>Environmental Awareness Workshop</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-xs text-muted-foreground">Biratnagar Public Library, 3:00 PM</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">May 10, 2024</CardTitle>
                    <CardDescription>Blood Donation Drive</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-xs text-muted-foreground">Regional Blood Bank, Biratnagar, 10:00 AM</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">May 20, 2024</CardTitle>
                    <CardDescription>Annual Fundraising Gala</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-xs text-muted-foreground">Hotel Xenial, Biratnagar, 6:30 PM</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="announcements" className="space-y-6 pt-6">
            <div className="space-y-6">
              {[
                {
                  title: "New Partnership with Local Schools",
                  date: "March 28, 2024",
                  content:
                    "We're excited to announce our new partnership with five local schools to expand our Digital Literacy Program. This collaboration will allow us to reach more students and make a greater impact in our community.",
                },
                {
                  title: "Call for Volunteers: Community Health Camp",
                  date: "March 25, 2024",
                  content:
                    "We're looking for volunteers to help with our upcoming Community Health Camp on April 15. If you have medical experience or are willing to assist with logistics, please contact our Service Director.",
                },
                {
                  title: "Annual Report Published",
                  date: "March 20, 2024",
                  content:
                    "Our annual report for 2023-2024 is now available on our website. Check it out to see our achievements, financial summary, and plans for the coming year.",
                },
                {
                  title: "Congratulations to Our New Board Members",
                  date: "March 15, 2024",
                  content:
                    "Please join us in congratulating our newly elected board members who will lead the club for the 2024-2025 term. We look forward to their leadership and fresh ideas.",
                },
                {
                  title: "Fundraising Goal Achieved",
                  date: "March 10, 2024",
                  content:
                    "Thanks to your generous support, we've reached our fundraising goal for the Clean Water Initiative. The funds will be used to install water purification systems in three more communities.",
                },
              ].map((announcement, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle>{announcement.title}</CardTitle>
                    <CardDescription>{announcement.date}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{announcement.content}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

