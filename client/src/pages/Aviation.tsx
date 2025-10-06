import { Plane, Users, Target, Award } from "lucide-react";
import GlassCard from "@/components/GlassCard";

export default function Aviation() {
  return (
    <div className="min-h-screen">
      <div className="bg-gradient-to-br from-primary/10 to-secondary/10 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-6">
              <Plane className="w-10 h-10 text-primary" />
            </div>
            <h1 className="font-serif text-4xl lg:text-5xl font-bold mb-6">
              Specialized Programs for the Aviation Industry
            </h1>
          </div>

          <GlassCard className="mb-8">
            <p className="text-lg text-muted-foreground text-center leading-relaxed mb-8">
              With deep expertise in the aviation sector, Inspire2Grow offers specialized training and development programs designed to meet the unique challenges of the industry. More information coming soon.
            </p>
            <p className="text-lg text-center">
              Please connect with me to discuss your specific requirements and how we can help elevate your aviation organization.
            </p>
          </GlassCard>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <GlassCard className="text-center" hover>
              <Users className="w-10 h-10 text-secondary mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">Crew Training</h3>
              <p className="text-sm text-muted-foreground">
                Specialized programs for flight crews and cabin staff
              </p>
            </GlassCard>
            <GlassCard className="text-center" hover>
              <Target className="w-10 h-10 text-secondary mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">Safety Excellence</h3>
              <p className="text-sm text-muted-foreground">
                Advanced safety protocols and emergency response training
              </p>
            </GlassCard>
            <GlassCard className="text-center" hover>
              <Award className="w-10 h-10 text-secondary mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">Leadership</h3>
              <p className="text-sm text-muted-foreground">
                Executive development for aviation industry leaders
              </p>
            </GlassCard>
          </div>
        </div>
      </div>
    </div>
  );
}
