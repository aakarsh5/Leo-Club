"use client"

import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useLanguage } from "@/components/language-provider";

export default function AboutPage() {
  const { t } = useLanguage();

  return (
    <div className="container px-4 py-12 md:px-6 md:py-24">
      <div className="mx-auto max-w-4xl space-y-12">
        <div className="space-y-4 text-center">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
            {t("about.title")}
          </h1>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            {t("about.description")}
          </p>
        </div>

        <Tabs defaultValue="about" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="about">{t("about.tabs.about")}</TabsTrigger>
            <TabsTrigger value="history">{t("about.tabs.history")}</TabsTrigger>
            <TabsTrigger value="team">{t("about.tabs.team")}</TabsTrigger>
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
                <h2 className="text-2xl font-bold">{t("about.whoWeAre.title")}</h2>
                <p className="text-muted-foreground">
                  {t("about.whoWeAre.description1")}
                </p>
                <p className="text-muted-foreground">
                  {t("about.whoWeAre.description2")}
                </p>
                <h2 className="text-2xl font-bold mt-6">{t("about.vision.title")}</h2>
                <p className="text-muted-foreground">
                  {t("about.vision.description")}
                </p>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="history" className="space-y-6 pt-6">
            <div className="space-y-6">
              <h2 className="text-2xl font-bold">{t("about.journey.title")}</h2>
              <p className="text-muted-foreground">
                {t("about.journey.description")}
              </p>
              <div className="grid gap-6 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle>2010</CardTitle>
                    <CardDescription>{t("about.timeline.foundation")}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>
                      {t("about.timeline.foundationDesc")}
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>2015</CardTitle>
                    <CardDescription>{t("about.timeline.growth")}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>
                      {t("about.timeline.growthDesc")}
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>2018</CardTitle>
                    <CardDescription>{t("about.timeline.initiatives")}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>
                      {t("about.timeline.initiativesDesc")}
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>2020-Present</CardTitle>
                    <CardDescription>{t("about.timeline.transformation")}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>
                      {t("about.timeline.transformationDesc")}
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="team" className="space-y-6 pt-6">
            <h2 className="text-2xl font-bold">{t("about.team.title")}</h2>
            <p className="text-muted-foreground mb-6">
              {t("about.team.description")}
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
