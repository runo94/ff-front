import { TeamsList } from "@app/modules/components/teams-list/teams-list/teams-list.component"
import { Avatar } from "@app/modules/components/avatar/avatar.component"

const profile = {
  name: 'Ricardo Cooper',
  email: 'ricardo.cooper@example.com',
  role: 'Team manager',
  avatar:
    'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
  fields: [
    ['Email', 'ricardocooper@example.com'],
    ['Title', 'Captain'],
    ['Team', 'Football Fun'],
    ['Location', 'San Francisco'],
    ['Sits', 'Oasis, 4th floor'],
    ['Salary', '$145,000'],
    ['Birthday', 'June 8, 1990'],
  ],
}

export const UserProfileHeader = () => {
  return (
    <div>
      <div className="mx-auto max-w-12">
        <div className="sm:flex sm:items-end sm:space-x-5">
          <div className="flex">
                <Avatar image={profile.avatar} />
          </div>
          <div className="sm:flex sm:min-w-0 sm:flex-1 sm:items-center sm:justify-end sm:space-x-6 sm:pb-1">
            <div className="mt-6 min-w-0 flex-1 sm:hidden md:block">
              <h1 className="truncate text-2xl font-bold text-gray-900">{profile.name}</h1>
              <span className="inline-flex items-center rounded-md bg-green-500/10 px-2 py-1 text-xs font-medium text-green-400 ring-1 ring-inset ring-green-500/20">
                {profile.role}
              </span>
            </div>
            <TeamsList />
          </div>
        </div>
      </div>
      <div className="mt-6 hidden min-w-0 flex-1 sm:block md:hidden">
        <h1 className="truncate text-2xl font-bold text-gray-900">{profile.name}</h1>
      </div>
    </div>
  )
}