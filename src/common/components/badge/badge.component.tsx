import { FC } from "react"

interface BadgeProps {
    position: string
}
const classNames = (...classes: string[]) => {
  return classes.filter(Boolean).join(' ')
}

export const Badge: FC<BadgeProps> = ({ position }) => {

    return (
        <>
            <span className={classNames(
                position === "FW"
                    ? 'bg-red-400/10 text-red-400 ring-red-400/20'
                    : position === "MD"
                        ? 'bg-blue-400/10 text-blue-400 ring-blue-400/20'
                        : position === "GK"
                            ? 'bg-yellow-400/10 text-yellow-400 ring-yellow-400/20'
                            : 'bg-green-400/10 text-green-400 ring-green-400/20',
                'inline-flex items-center rounded-md  px-2 py-1 text-xs font-medium  ring-1 ring-inset'
            )}
            >
                {position}
            </span>
        </>
    )
}