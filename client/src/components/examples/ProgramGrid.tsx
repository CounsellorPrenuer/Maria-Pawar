import ProgramGrid from '../ProgramGrid'
import { Users, Lightbulb, TrendingUp, Heart, Target, Presentation } from 'lucide-react'

export default function ProgramGridExample() {
  const programs = [
    {
      icon: Users,
      title: "Executive Presence",
      description: "Develop commanding presence and leadership charisma"
    },
    {
      icon: Lightbulb,
      title: "Leadership Coaching",
      description: "Transform into an inspiring and effective leader"
    },
    {
      icon: TrendingUp,
      title: "Communication Skills",
      description: "Master the art of impactful communication"
    },
    {
      icon: Heart,
      title: "Emotional Intelligence",
      description: "Harness emotions for better relationships and decisions"
    },
    {
      icon: Target,
      title: "Change Enablement",
      description: "Lead organizational transformation with confidence"
    },
    {
      icon: Presentation,
      title: "Presentation Skills",
      description: "Deliver compelling and memorable presentations"
    }
  ]

  return (
    <div className="p-8 bg-gradient-to-br from-background to-secondary/5">
      <ProgramGrid programs={programs} />
    </div>
  )
}
