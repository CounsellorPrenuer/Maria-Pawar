import GlassCard from '../GlassCard'

export default function GlassCardExample() {
  return (
    <div className="p-8 bg-gradient-to-br from-primary/20 to-secondary/20">
      <GlassCard hover>
        <h3 className="font-serif text-2xl font-bold mb-4">Glassmorphism Card</h3>
        <p className="text-muted-foreground">
          This is a premium glassmorphism card with backdrop blur and subtle transparency.
        </p>
      </GlassCard>
    </div>
  )
}
