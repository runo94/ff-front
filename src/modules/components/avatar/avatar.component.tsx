import { FC } from "react"

interface IAvatar {
    image: string
}

export const Avatar: FC<IAvatar> = ({image:image}) => {
    return (
        <img className="h-24 w-24 rounded-full ring-4 ring-white sm:h-36 sm:w-36" src={image} alt="" />
    )
}