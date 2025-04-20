"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { useToast } from "@/hooks/use-toast"
import emailjs from '@emailjs/browser'

export function VolunteerForm() {
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()
  const [interests, setInterests] = useState<string[]>([])
  const [availability, setAvailability] = useState<string[]>([])

  const toggleInterest = (value: string) => {
    setInterests(prev => 
      prev.includes(value) 
        ? prev.filter(item => item !== value) 
        : [...prev, value]
    )
  }

  const toggleAvailability = (value: string) => {
    setAvailability(prev => 
      prev.includes(value) 
        ? prev.filter(item => item !== value) 
        : [...prev, value]
    )
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    const form = e.target as HTMLFormElement
    const formData = new FormData(form)
    const templateParams = {
      firstName: formData.get('first-name'),
      lastName: formData.get('last-name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      interests: interests.join(', '),
      availability: availability.join(', '),
      skills: formData.get('skills'),
      message: formData.get('message'),
      formType: 'Volunteer Application'
    }

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '',
        process.env.NEXT_PUBLIC_EMAILJS_VOLUNTEER_TEMPLATE_ID || '',
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ''
      )

      toast({
        title: "Thank you!",
        description: "Your volunteer application has been received.",
      })
      form.reset()
      setInterests([])
      setAvailability([])
    } catch (error) {
      console.error('Failed to send application:', error)
      toast({
        title: "Error",
        description: "Failed to submit application. Please try again later.",
        variant: "destructive"
      })
    } finally {
      setIsLoading(false)
    }
  }

  const interestAreas = [
    "Health & Wellness",
    "Education",
    "Environment",
    "Community Development",
    "Event Planning",
    "Marketing & Communications",
    "Photography & Design",
    "Fundraising",
  ]

  const availabilityTimes = [
    "Weekday Mornings",
    "Weekday Afternoons",
    "Weekday Evenings",
    "Weekend Mornings",
    "Weekend Afternoons",
    "Weekend Evenings",
  ]

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="first-name">First Name</Label>
          <Input id="first-name" name="first-name" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="last-name">Last Name</Label>
          <Input id="last-name" name="last-name" required />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" name="email" type="email" required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="phone">Phone</Label>
        <Input id="phone" name="phone" type="tel" required />
      </div>
      <div className="space-y-2">
        <Label>Areas of Interest</Label>
        <div className="grid gap-2 sm:grid-cols-2">
          {interestAreas.map((area) => (
            <div key={area} className="flex items-center space-x-2">
              <Checkbox 
                id={area.toLowerCase().replace(/\s+/g, "-")} 
                checked={interests.includes(area)}
                onCheckedChange={() => toggleInterest(area)}
              />
              <Label htmlFor={area.toLowerCase().replace(/\s+/g, "-")}>{area}</Label>
            </div>
          ))}
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="availability">Availability</Label>
        <div className="grid gap-2 sm:grid-cols-2">
          {availabilityTimes.map((time) => (
            <div key={time} className="flex items-center space-x-2">
              <Checkbox 
                id={time.toLowerCase().replace(/\s+/g, "-")} 
                checked={availability.includes(time)}
                onCheckedChange={() => toggleAvailability(time)}
              />
              <Label htmlFor={time.toLowerCase().replace(/\s+/g, "-")}>{time}</Label>
            </div>
          ))}
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="skills">Special Skills or Qualifications</Label>
        <Textarea
          id="skills"
          name="skills"
          placeholder="Tell us about any special skills you have that could benefit our projects"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="message">Why do you want to volunteer with us?</Label>
        <Textarea id="message" name="message" required />
      </div>
      <Button type="submit" className="w-full" disabled={isLoading}>
        {isLoading ? "Submitting..." : "Submit"}
      </Button>
    </form>
  )
}

