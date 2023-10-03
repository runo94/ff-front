import { FC } from 'react'

interface ITeamsProps {
    name: string,
    initials: string,
    href: string,
    status: string,
    bgColor: string
}


function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

export const TeamsItem: FC<ITeamsProps> = ({ ...item }) => {
    return (
        <li key={item.name} className="col-span-1 flex rounded-md shadow-sm">
            <div
                className={classNames(
                    item.bgColor,
                    'flex w-16 flex-shrink-0 items-center justify-center rounded-l-md text-sm font-medium text-white'
                )}
            >
                {item.initials}
            </div>
            <div className="flex flex-1 items-center justify-between truncate rounded-r-md border-b border-r border-t border-gray-200 bg-white">
                <div className="flex-1 truncate px-4 py-2 text-sm">
                    <a href={item.href} className="font-medium text-gray-900 hover:text-gray-600">
                        {item.name}
                    </a>
                    <p className="text-gray-500 text-xs font-medium"><span className="text-gray-400">Status</span>: {item.status}</p>
                </div>
            </div>
        </li>
    )
}