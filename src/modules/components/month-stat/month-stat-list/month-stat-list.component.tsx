// import { CalendarDaysIcon, CheckBadgeIcon, TrophyIcon } from '@heroicons/react/24/outline'
import { MonthStatItem } from '@app/modules/components/month-stat/month-stat-item/month-stat-item.component'

const stats = [
    { id: 1, name: 'Wined Games', stat: '71,897', change: '122', changeType: 'increase' },
    { id: 2, name: 'Total Games', stat: '58.16%', change: '5.4%', changeType: 'increase' },
    { id: 3, name: 'MVP', stat: '24.57%', change: '3.2%', changeType: 'decrease' },
]

export const MonthStats = () => {
    return (
        <div className="my-5">
            <h3 className="text-xl font-semibold my-5 text-gray-900">Last 30 days</h3>
            <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {stats.map((item, i) => (
                    <MonthStatItem {...item}   key={`${item.id}-${i}`} />
                ))}
            </dl>
        </div>
    )
}
