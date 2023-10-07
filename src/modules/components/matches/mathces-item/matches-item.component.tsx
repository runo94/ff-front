import { FC } from "react"
import { Link } from "react-router-dom"

interface MatchProps {
    id: string,
    h_team_id: string,
    g_team_id: string,
    h_team_score: string,
    g_team_score: string,
    date: string,
    teamByHTeamId: {
        name: string,
        logo: string
    },
    teamByGTeamId: {
        name: string,
        logo: string
    }
}

export const MatchesItem: FC<MatchProps> = (item) => {
    return (
        <li key={item.id} className="overflow-hidden rounded-md bg-white px-4 min-h-fit py-2 shadow divide-y divide-gray-100 ring-1 ring-gray-900/5 sm:rounded-xl">
            <div className="grid grid-cols-5 gap-0 sm:grid-cols-5 lg:grid-cols-5 items-center">
                <p className="w-full col-span-5 text-center text-xl font-semibold">Товариська гра</p>
                <p className="w-full col-span-5 text-center">{item.date}</p>
                <div className="grid col-span-5 grid-cols-5 gap-0 sm:grid-cols-5 lg:grid-cols-5 items-center" >
                    <div className="col-span-1  text-center gap-3 items-center">
                        <img src={item.teamByHTeamId.logo} />
                        {item.teamByHTeamId.name}
                    </div>
                    <div className="grid col-span-3 text-center place-content-center">
                        <span className="text-4xl w-full  col-span-5"><b>{item.h_team_score}</b>:<b>{item.g_team_score}</b></span>
                        <Link to={'/'} className="block col-span-5 mt-5 w-fit rounded bg-emerald-600 px-2 py-1 text-xs font-semibold text-white shadow-sm hover:bg-emerald-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600" >Переглянути деталі</Link>
                    </div>
                    <div className="col-span-1  text-center gap-3 items-center">
                        <img src={item.teamByGTeamId.logo} className="w-fit" />
                        {item.teamByGTeamId.name}
                    </div>
                </div>
            </div>
        </li>
    )
}

