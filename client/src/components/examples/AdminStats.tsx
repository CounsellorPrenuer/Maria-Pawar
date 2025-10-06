import AdminStats from '../AdminStats'

export default function AdminStatsExample() {
  const stats = [
    { label: "Total Bookings", value: 0, color: "text-foreground" },
    { label: "Pending", value: 0, color: "text-yellow-600" },
    { label: "Contacted", value: 0, color: "text-blue-600" },
    { label: "Completed", value: 0, color: "text-green-600" },
    { label: "Contact Forms", value: 0, color: "text-purple-600" },
    { label: "Lead Downloads", value: 0, color: "text-orange-600" },
    { label: "Total Payments", value: 0, color: "text-blue-600" },
    { label: "Revenue", value: 0, color: "text-green-600" },
  ]

  return (
    <div className="p-8">
      <AdminStats stats={stats} />
    </div>
  )
}
