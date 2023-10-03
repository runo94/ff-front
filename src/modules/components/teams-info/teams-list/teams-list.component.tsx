import { TeamsItem } from "@app/modules/components/teams-info/teams-item/teams-item.component"


const teams = [
    { name: 'Football Fun', initials: 'FF', href: '#', status: 'manager', bgColor: 'bg-pink-600' },
    { name: 'Hobbiton Team', initials: 'HT', href: '#', status: 'capitan', bgColor: 'bg-purple-600' },
    { name: 'Buffonads', initials: 'B', href: '#', status: 'player', bgColor: 'bg-yellow-500' },
    { name: 'Computools', initials: 'C', href: '#', status: 'player', bgColor: 'bg-green-500' },
  ]

export const TeamsList = () => {
    return (
        <div className="mt-5">
            <ul role="list" className="mt-3 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
                {teams.map((item) => (
                    <TeamsItem {...item} />
                ))}
            </ul>
        </div>
    )
}