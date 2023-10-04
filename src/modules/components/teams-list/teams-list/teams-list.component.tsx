import { TeamsItem } from "@app/modules/components/teams-list/teams-item/teams-item.component"


const teams = [
    { name: 'Football Fun', initials: 'FF', href: '#', status: 'manager', bgColor: 'bg-pink-600' },
    { name: 'Hobbiton Team', initials: 'HT', href: '#', status: 'capitan', bgColor: 'bg-purple-600' },
    { name: 'Buffonads', initials: 'B', href: '#', status: 'player', bgColor: 'bg-yellow-500' },
    { name: 'Computools', initials: 'C', href: '#', status: 'player', bgColor: 'bg-green-500' },
]

export const TeamsList = () => {
    return (
        <div className="max-w-6 flex flex-col justify-stretch space-y-3 mt-5 md:mt-0 sm:flex-row sm:space-x-4 sm:space-y-0">
            <ul role="list" className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
                {teams.map((item, i) => (
                    <TeamsItem {...item}  key={`${item.initials}-${i}`} />
                ))}
            </ul>
        </div>
    )
}