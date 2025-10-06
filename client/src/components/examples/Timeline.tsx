import Timeline from '../Timeline'
import { ClipboardList, BarChart, MessageSquare } from 'lucide-react'

export default function TimelineExample() {
  const steps = [
    {
      icon: ClipboardList,
      title: "Psychometric Assessment",
      description: "Complete a comprehensive assessment to measure your interests, personality, and abilities."
    },
    {
      icon: BarChart,
      title: "Detailed Report",
      description: "Receive a personalized report with insights into your strengths and recommended career paths."
    },
    {
      icon: MessageSquare,
      title: "Personalized Counselling",
      description: "Work one-on-one with expert career coaches to create your customized action plan."
    }
  ]

  return (
    <div className="p-8 max-w-3xl">
      <Timeline steps={steps} />
    </div>
  )
}
