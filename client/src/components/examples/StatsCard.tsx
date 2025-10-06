import StatsCard from '../StatsCard'
import { Users, Award, Globe } from 'lucide-react'

export default function StatsCardExample() {
  return (
    <div className="p-8 bg-gradient-to-br from-primary/10 to-secondary/10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl">
        <StatsCard icon={Users} value="36,000+" label="Learners Trained" color="primary" />
        <StatsCard icon={Award} value="24 Years" label="Experience" color="secondary" />
        <StatsCard icon={Globe} value="130+" label="Countries" color="accent" />
      </div>
    </div>
  )
}
