"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Users, Heart, MapPin, ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ProjectCard } from "@/components/project-card";
import { NewsletterForm } from "@/components/newsletter-form";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/components/language-provider";
import Slideshow from "@/components/Slideshow";

export default function Home() {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
        {/* Gradient Background Overlay */}
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-primary/10 via-background to-accent/10 opacity-20" />

        {/* Blurred Circular Gradients */}
        <div className="absolute -top-1/4 -right-1/4 w-[800px] h-[800px] rounded-full bg-primary/10 blur-3xl z-[-1]" />
        <div className="absolute -bottom-1/4 -left-1/4 w-[800px] h-[800px] rounded-full bg-accent/10 blur-3xl z-[-1]" />

        <div className="container relative z-10 px-4 md:px-6 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content Column */}
            <div className="flex flex-col space-y-6 text-center lg:text-left mb-20">
              <Badge
                variant="outline"
                className="mx-auto lg:mx-0 animate-fade-in mb-12"
              >
                {t("home.hero.tagline")}
              </Badge>

              <div className="space-y-4">
                <h1 className="text-4xl py-10 md:text-5xl lg:text-6xl font-bold tracking-tight blue-yellow-gradient-text animate-slide-in-left">
                  {t("home.hero.title")}
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground max-w-[600px] mx-auto lg:mx-0 animate-fade-in delay-100">
                  {t("home.hero.description")}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in delay-200">
                <Link href="/join" className="w-full sm:w-auto">
                  <Button
                    size="lg"
                    className="w-full sm:w-auto rounded-full bg-primary hover:bg-primary/90 gap-2"
                  >
                    {t("common.joinUs")} <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/projects" className="w-full sm:w-auto">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full sm:w-auto rounded-full border-accent text-accent hover:bg-accent/10"
                  >
                    {t("nav.projects")}
                  </Button>
                </Link>
              </div>
            </div>
            {/* Image Column */}
            <div className="relative hidden lg:block">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-accent/10 rounded-3xl blur-xl" />

              
              
              
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
                <span className="text-3xl md:text-4xl font-bold blue-yellow-gradient-text">
                  {stat.value}
                </span>
                <span className="text-sm md:text-base text-muted-foreground">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <Badge className="animate-fade-in bg-accent text-accent-foreground">
              {t("home.mission.title")}
            </Badge>
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
                  <p className="text-muted-foreground">
                    {t("home.mission.leadership.description")}
                  </p>
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
                  <p className="text-muted-foreground">
                    {t("home.mission.experience.description")}
                  </p>
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
                  <p className="text-muted-foreground">
                    {t("home.mission.opportunity.description")}
                  </p>
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
            <Badge className="animate-fade-in bg-primary text-primary-foreground">
              {t("home.projects.title")}
            </Badge>
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

      {/* Call to Action Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-primary/20 blur-3xl" />
          <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-accent/20 blur-3xl" />
        </div>

        <div className="container px-4 md:px-6">
          <div className="grid gap-10 px-10 md:gap-16 lg:grid-cols-2">
            <div className="space-y-4 animate-fade-in">
              <Badge className="mb-2 bg-primary text-primary-foreground">
                {t("home.cta.title")}
              </Badge>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight blue-yellow-gradient-text">
                {t("home.cta.heading")}
              </h2>
              <p className="text-muted-foreground md:text-xl text-balance">
                {t("home.cta.description")}
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row pt-2">
                <Link href="/join">
                  <Button
                    size="lg"
                    className="rounded-full bg-primary hover:bg-primary/90"
                  >
                    {t("common.joinUs")}
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button
                    size="lg"
                    variant="outline"
                    className="rounded-full border-accent text-accent hover:bg-accent/10"
                  >
                    {t("common.contactUs")}
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex flex-col items-start space-y-4 animate-fade-in delay-200">
              <NewsletterForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// Add custom animations to your global CSS or Tailwind config
const customAnimations = `
@layer utilities {
  .animate-slide-in-left {
    animation: slide-in-left 0.8s ease-out;
  }
  
  .animate-float {
    animation: float 3s ease-in-out infinite;
  }
  
  @keyframes slide-in-left {
    from {
      opacity: 0;
      transform: translateX(-20px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
  
  @keyframes float {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
  }
}
`;
