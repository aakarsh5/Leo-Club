import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MembershipForm } from "@/components/membership-form"
import { VolunteerForm } from "@/components/volunteer-form"

export const metadata = {
  title: "Join Us | Leo Club of Biratnagar Central Megha",
  description:
    "Become a member or volunteer with Leo Club of Biratnagar Central Megha and make a difference in your community.",
}

export default function JoinPage() {
  return (
    <div className="container px-4 py-12 md:px-6 md:py-24">
      <div className="mx-auto max-w-4xl space-y-12">
        <div className="space-y-4 text-center">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">Join Our Community</h1>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            Become a member or volunteer with Leo Club of Biratnagar Central Megha and make a difference in your
            community.
          </p>
        </div>

        <Tabs defaultValue="membership" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="membership">Membership</TabsTrigger>
            <TabsTrigger value="volunteer">Volunteer</TabsTrigger>
            <TabsTrigger value="benefits">Benefits</TabsTrigger>
          </TabsList>
          <TabsContent value="membership" className="space-y-6 pt-6">
            <div className="grid gap-6 md:grid-cols-[1fr_400px]">
              <Card>
                <CardHeader>
                  <CardTitle>Become a Member</CardTitle>
                  <CardDescription>
                    Join our club and become part of a global network of young leaders making a difference.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <MembershipForm />
                </CardContent>
              </Card>
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Membership Requirements</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <p className="text-sm text-muted-foreground">• Age between 18-30 years</p>
                    <p className="text-sm text-muted-foreground">• Commitment to attend monthly meetings</p>
                    <p className="text-sm text-muted-foreground">• Willingness to participate in service projects</p>
                    <p className="text-sm text-muted-foreground">• Annual membership fee of NPR 1,000</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Application Process</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <p className="text-sm text-muted-foreground">1. Submit the membership application form</p>
                    <p className="text-sm text-muted-foreground">2. Attend an orientation session</p>
                    <p className="text-sm text-muted-foreground">3. Pay the membership fee</p>
                    <p className="text-sm text-muted-foreground">4. Receive official induction into the club</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="volunteer" className="space-y-6 pt-6">
            <div className="grid gap-6 md:grid-cols-[1fr_400px]">
              <Card>
                <CardHeader>
                  <CardTitle>Volunteer With Us</CardTitle>
                  <CardDescription>
                    Support our projects and initiatives without becoming a full member.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <VolunteerForm />
                </CardContent>
              </Card>
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Volunteer Opportunities</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <p className="text-sm text-muted-foreground">• Community health camps</p>
                    <p className="text-sm text-muted-foreground">• Environmental initiatives</p>
                    <p className="text-sm text-muted-foreground">• Educational programs</p>
                    <p className="text-sm text-muted-foreground">• Fundraising events</p>
                    <p className="text-sm text-muted-foreground">• Special skills (photography, design, etc.)</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Upcoming Volunteer Needs</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <p className="text-sm text-muted-foreground">• April 15: Community Health Camp (10 volunteers)</p>
                    <p className="text-sm text-muted-foreground">• April 22: Environmental Workshop (5 volunteers)</p>
                    <p className="text-sm text-muted-foreground">• May 10: Blood Donation Drive (8 volunteers)</p>
                    <p className="text-sm text-muted-foreground">• May 20: Annual Fundraising Gala (15 volunteers)</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="benefits" className="space-y-6 pt-6">
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Leadership Development</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Opportunities to lead projects and initiatives</li>
                    <li>• Access to leadership training workshops</li>
                    <li>• Experience in planning and executing events</li>
                    <li>• Public speaking and presentation skills</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Networking Opportunities</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Connect with like-minded individuals</li>
                    <li>• Build relationships with community leaders</li>
                    <li>• Access to regional and national Leo events</li>
                    <li>• Potential mentorship from Lions Club members</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Personal Growth</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Develop communication and teamwork skills</li>
                    <li>• Gain confidence through community service</li>
                    <li>• Learn project management and organization</li>
                    <li>• Build a sense of purpose and fulfillment</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Professional Development</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Add valuable experience to your resume</li>
                    <li>• Develop transferable skills for your career</li>
                    <li>• Receive letters of recommendation</li>
                    <li>• Potential internship and job opportunities</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
            <div className="flex justify-center mt-8">
              <Button size="lg" className="gap-2">
                Apply for Membership Today
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

