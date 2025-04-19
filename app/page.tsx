"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Calendar, Users, Heart, MapPin, ArrowUpRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ProjectCard } from "@/components/project-card"
import { EventCard } from "@/components/event-card"
import { NewsletterForm } from "@/components/newsletter-form"
import { Badge } from "@/components/ui/badge"
import { useLanguage } from "@/components/language-provider"
import ImageSlideshow from "@/components/image-slideshow"
import { Input } from "@/components/ui/input"

export default function Home() {
  const { t } = useLanguage()

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-6 md:py-12 lg:py-20 xl:py-28 hero-gradient overflow-hidden">
        <div className="container px-4 md:px-6 relative mb-52">
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-primary/20 blur-3xl" />
            <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-accent/20 blur-3xl" />
          </div>

          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-start space-y-4 pt-0 mt-0">
              <Badge className="w-fit animate-fade-in" variant="outline">
                {t("home.hero.tagline")}
              </Badge>
              <div className="space-y-3">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none blue-yellow-gradient-text animate-fade-in text-balance">
                  {t("home.hero.title")}
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl animate-fade-in delay-100 text-balance">
                  {t("home.hero.description")}
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row animate-fade-in delay-200 pt-1">
                <Link href="/join">
                  <Button size="lg" className="gap-1 rounded-full bg-primary hover:bg-primary/90">
                    {t("common.joinUs")} <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/projects">
                  <Button
                    size="lg"
                    variant="outline"
                    className="rounded-full border-accent text-accent hover:bg-accent/10"
                  >
                    {t("nav.projects")}
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px]">
              <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-primary/10 to-accent/10 rounded-3xl blur-xl" />
              <div className="w-full h-full rounded-3xl overflow-hidden shadow-xl animate-fade-in delay-100">
                <ImageSlideshow />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="w-full py-12 md:py-16 border-y accent-gradient">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {[
              { value: "10+", label: t("home.stats.yearsOfService") },
              { value: "50+", label: t("home.stats.activeMembers") },
              { value: "100+", label: t("home.stats.projectsCompleted") },
              { value: "5,000+", label: t("home.stats.livesImpacted") },
            ].map((stat, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center p-4 text-center animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <span className="text-3xl md:text-4xl font-bold blue-yellow-gradient-text">{stat.value}</span>
                <span className="text-sm md:text-base text-muted-foreground">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <Badge className="animate-fade-in bg-accent text-accent-foreground">{t("home.mission.title")}</Badge>
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight blue-yellow-gradient-text animate-fade-in delay-100">
                {t("home.mission.heading")}
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl animate-fade-in delay-200 text-balance">
                {t("home.mission.description")}
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-8 md:grid-cols-3">
              <Card className="flex flex-col items-center text-center card-hover animate-fade-in delay-300 border-none bg-gradient-to-b from-background to-muted/50 shadow-md">
                <CardHeader>
                  <div className="rounded-full bg-primary/10 p-3 w-16 h-16 flex items-center justify-center mx-auto mb-2">
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle>{t("home.mission.leadership.title")}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{t("home.mission.leadership.description")}</p>
                </CardContent>
              </Card>
              <Card className="flex flex-col items-center text-center card-hover animate-fade-in delay-400 border-none bg-gradient-to-b from-background to-muted/50 shadow-md">
                <CardHeader>
                  <div className="rounded-full bg-accent/10 p-3 w-16 h-16 flex items-center justify-center mx-auto mb-2">
                    <Heart className="h-8 w-8 text-accent" />
                  </div>
                  <CardTitle>{t("home.mission.experience.title")}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{t("home.mission.experience.description")}</p>
                </CardContent>
              </Card>
              <Card className="flex flex-col items-center text-center card-hover animate-fade-in delay-500 border-none bg-gradient-to-b from-background to-muted/50 shadow-md">
                <CardHeader>
                  <div className="rounded-full bg-primary/10 p-3 w-16 h-16 flex items-center justify-center mx-auto mb-2">
                    <MapPin className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle>{t("home.mission.opportunity.title")}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{t("home.mission.opportunity.description")}</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Projects Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 accent-gradient">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
            <Badge className="animate-fade-in bg-primary text-primary-foreground">{t("home.projects.title")}</Badge>
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight blue-yellow-gradient-text animate-fade-in delay-100">
                {t("home.projects.heading")}
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl animate-fade-in delay-200 text-balance">
                {t("home.projects.description")}
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl gap-6 py-8 md:grid-cols-2 lg:grid-cols-3">
            <ProjectCard
              title="Clean Water Initiative"
              description="Providing clean drinking water to underserved communities in Biratnagar."
              imageSrc="/placeholder.svg?height=200&width=300"
              date="March 2023"
              className="animate-fade-in delay-300"
            />
            <ProjectCard
              title="Youth Leadership Workshop"
              description="Training the next generation of community leaders through interactive workshops."
              imageSrc="/placeholder.svg?height=200&width=300"
              date="May 2023"
              className="animate-fade-in delay-400"
            />
            <ProjectCard
              title="Tree Plantation Drive"
              description="Planting over 500 trees to combat deforestation and promote environmental sustainability."
              imageSrc="/placeholder.svg?height=200&width=300"
              date="July 2023"
              className="animate-fade-in delay-500"
            />
          </div>
          <div className="flex justify-center mt-8 animate-fade-in delay-600">
            <Link href="/projects">
              <Button
                variant="outline"
                size="lg"
                className="rounded-full group border-primary text-primary hover:bg-primary/10"
              >
                {t("common.viewAll")}
                <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
            <Badge className="animate-fade-in bg-accent text-accent-foreground">{t("home.events.title")}</Badge>
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight blue-yellow-gradient-text animate-fade-in delay-100">
                {t("home.events.heading")}
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl animate-fade-in delay-200 text-balance">
                {t("home.events.description")}
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl gap-6 py-8 md:grid-cols-2">
            <EventCard
              title="Community Health Camp"
              description="Free health checkups and consultations for the local community."
              date="April 15, 2024"
              location="Biratnagar Community Center"
              imageSrc="/placeholder.svg?height=200&width=300"
              className="animate-fade-in delay-300"
            />
            <EventCard
              title="Annual Fundraising Gala"
              description="Join us for an evening of celebration and fundraising for our upcoming projects."
              date="May 20, 2024"
              location="Hotel Xenial, Biratnagar"
              imageSrc="/placeholder.svg?height=200&width=300"
              className="animate-fade-in delay-400"
            />
          </div>
          <div className="flex justify-center mt-8 animate-fade-in delay-500">
            <Link href="/events">
              <Button
                variant="outline"
                size="lg"
                className="gap-2 rounded-full group border-accent text-accent hover:bg-accent/10"
              >
                <Calendar className="h-4 w-4" />
                {t("common.viewAll")}
                <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section 
        className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden"
        style={{
          backgroundImage: 'url("https://media.istockphoto.com/id/181891488/photo/group-of-running-happy-indian-children-desert-village-india.jpg?s=612x612&w=0&k=20&c=Ynpx7RaghSfyZVug80jBa4rbo6Pn9TjI8ntvYSOdhGM=")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        {/* Overlay for better readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/70 to-accent/60 mix-blend-multiply"></div>

        <div className="container px-4 md:px-6 relative z-10">
          <div className="grid gap-10 px-10 md:gap-16 lg:grid-cols-2">
            <div className="space-y-4 animate-fade-in">
              <Badge className="mb-2 bg-white text-primary">{t("home.cta.title")}</Badge>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-white">
                {t("home.cta.heading")}
              </h2>
              <p className="text-white/90 md:text-xl text-balance">{t("home.cta.description")}</p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row pt-2">
                <Link href="/join">
                  <Button size="lg" className="rounded-full bg-white text-primary hover:bg-white/90">
                    {t("common.joinUs")}
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button
                    size="lg"
                    variant="outline"
                    className="rounded-full border-white text-white hover:bg-white/10"
                  >
                    {t("common.contactUs")}
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex flex-col items-start space-y-4 animate-fade-in delay-200">
              <div className="w-full space-y-4 p-6 rounded-xl bg-white/10 backdrop-blur-sm shadow-lg">
                <div className="space-y-2">
                  <Badge className="mb-2 bg-white text-primary">{t("home.newsletter.title")}</Badge>
                  <h3 className="text-xl font-bold text-white">{t("home.newsletter.heading")}</h3>
                  <p className="text-white/90 text-balance">{t("home.newsletter.description")}</p>
                </div>
                <form onSubmit={(e) => e.preventDefault()} className="space-y-3">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    required
                    className="rounded-full bg-white/90 placeholder:text-gray-600"
                  />
                  <Button
                    type="submit"
                    className="w-full rounded-full bg-accent text-accent-foreground hover:bg-accent/90"
                  >
                    {t("common.subscribe")}
                  </Button>
                </form>
                <p className="text-xs text-white/80">{t("common.privacyNotice")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

