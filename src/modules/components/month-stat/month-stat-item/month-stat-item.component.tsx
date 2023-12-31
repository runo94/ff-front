import { FC } from 'react'
import { ArrowDownIcon, ArrowUpIcon } from '@heroicons/react/20/solid'


interface IMonthStatProps {
        id: number,
        changeType: string,
        change: string,
        name: string,
        stat: string,
        Icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>
}

const classNames = (...classes: string[]) => {
    return classes.filter(Boolean).join(' ')
}

export const MonthStatItem: FC<IMonthStatProps> = ({...item}) => {
    return (
        <div
            key={item.id}
            className="relative overflow-hidden rounded-lg bg-white px-4 shadow sm:px-6 sm:pt-6 divide-y divide-gray-100   ring-1 ring-gray-900/5 sm:rounded-xl"
        >
            <dt>
                {/* <div className="absolute rounded-md bg-indigo-500 p-3">
                    <item.Icon className="h-6 w-6 text-white" aria-hidden="true" />
                </div> */}
                <p className="ml-16 truncate text-sm font-medium text-gray-500">{item.name}</p>
            </dt>
            <dd className="ml-16 flex items-baseline pb-6 sm:pb-7">
                <p className="text-2xl font-semibold text-gray-900">{item.stat}</p>
                <p
                    className={classNames(
                        item.changeType === 'increase' ? 'text-green-600' : 'text-red-600',
                        'ml-2 flex items-baseline text-sm font-semibold'
                    )}
                >
                    {item.changeType === 'increase' ? (
                        <ArrowUpIcon className="h-5 w-5 flex-shrink-0 self-center text-green-500" aria-hidden="true" />
                    ) : (
                        <ArrowDownIcon className="h-5 w-5 flex-shrink-0 self-center text-red-500" aria-hidden="true" />
                    )}

                    <span className="sr-only"> {item.changeType === 'increase' ? 'Increased' : 'Decreased'} by </span>
                    {item.change}
                </p>
            </dd>
        </div>
    )
}