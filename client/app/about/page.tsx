import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const metadata = {
  title: "About Us | Leo Club of Biratnagar Central Megha",
  description:
    "Learn about the Leo Club of Biratnagar Central Megha, our history, mission, and the team behind our community service initiatives.",
};

export default function AboutPage() {
  return (
    <div className="container px-4 py-12 md:px-6 md:py-24">
      <div className="mx-auto max-w-4xl space-y-12">
        <div className="space-y-4 text-center">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
            About Us
          </h1>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            Learn about our club, our history, and the dedicated team behind our
            community service initiatives.
          </p>
        </div>

        <Tabs defaultValue="about" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="about">About</TabsTrigger>
            <TabsTrigger value="history">History</TabsTrigger>
            <TabsTrigger value="team">Our Team</TabsTrigger>
          </TabsList>
          <TabsContent value="about" className="space-y-6 pt-6">
            <div className="grid gap-6 md:grid-cols-2 md:gap-12">
              <Image
                src="/Team.jpg?height=400&width=600"
                width={600}
                height={400}
                alt="Leo Club members at a community event"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover"
              />
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Who We Are</h2>
                <p className="text-muted-foreground">
                  The Leo Club of Biratnagar Central Megha is a youth
                  organization that is part of Lions Clubs International. We are
                  dedicated to serving our community through various service
                  projects and initiatives.
                </p>
                <p className="text-muted-foreground">
                  Our club provides young people with an opportunity to develop
                  leadership skills by organizing and carrying out community
                  service activities. We are committed to making a positive
                  impact in our community and beyond.
                </p>
                <h2 className="text-2xl font-bold mt-6">Our Vision</h2>
                <p className="text-muted-foreground">
                  To be the global leader in community and humanitarian service,
                  empowering youth to become agents of positive change.
                </p>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="history" className="space-y-6 pt-6">
            <div className="space-y-6">
              <h2 className="text-2xl font-bold">Our Journey</h2>
              <p className="text-muted-foreground">
                The Leo Club of Biratnagar Central Megha was founded in 2010
                with a small group of passionate young individuals who wanted to
                make a difference in their community. Since then, we have grown
                into a vibrant organization with dozens of active members.
              </p>
              <div className="grid gap-6 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle>2010</CardTitle>
                    <CardDescription>Foundation</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Established with 15 founding members under the sponsorship
                      of Lions Club of Biratnagar Central.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>2015</CardTitle>
                    <CardDescription>Growth & Recognition</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Expanded to 30 members and received regional recognition
                      for community service excellence.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>2018</CardTitle>
                    <CardDescription>Major Initiatives</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Launched signature projects including the Clean Water
                      Initiative and Youth Leadership Program.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>2020-Present</CardTitle>
                    <CardDescription>Digital Transformation</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Adapted to virtual service during the pandemic and
                      expanded our digital presence to reach more community
                      members.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="team" className="space-y-6 pt-6">
            <h2 className="text-2xl font-bold">Leadership Team</h2>
            <p className="text-muted-foreground mb-6">
              Meet the dedicated individuals who lead our club and drive our
              mission forward.
            </p>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  name: "Aaryan Baskota",
                  position: "President",
                  bio: "Passionate about community development and youth empowerment.",
                  image: "/President.jpg?height=300&width=300",
                },
                {
                  name: "Pawan Kumar Kafle",
                  position: "Vice President",
                  bio: "Dedicated to environmental conservation and sustainable development.",
                  image: "/VicePresident.jpg?height=300&width=300",
                },
                {
                  name: "Sandeep Das Shrestha",
                  position: "Club Advisior",
                  bio: "Focused on education initiatives and digital literacy programs.",
                  image: "/ClubAdvisor.jpg?height=300&width=300",
                },
                {
                  name: "Prawin Giri",
                  position: "Treasurer",
                  bio: "Expert in financial management and fundraising strategies.",
                  image: "/Treasurer.jpg?height=300&width=300",
                },
                {
                  name: "Prashansha Gautam",
                  position: "Secretary",
                  bio: "Coordinates all service projects and volunteer activities.",
                  image: "/Secretary.jpg?height=300&width=300",
                },
                // {
                //   name: "Anita Thapa",
                //   position: "Marketing Director",
                //   bio: "Manages club communications and public relations.",
                //   image: "/placeholder.svg?height=300&width=300",
                // },
              ].map((member, index) => (
                <Card key={index} className="overflow-hidden">
                  <div className="aspect-square w-full">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      width={300}
                      height={300}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>{member.name}</CardTitle>
                    <CardDescription>{member.position}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{member.bio}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
