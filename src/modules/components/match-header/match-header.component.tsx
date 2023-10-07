const match = {
    id: 'qe123qwe1ds11',
    h_team_id: 'asdqweas',
    g_team_id: 'zxcasdasd',
    h_team_score: '1',
    g_team_score: '1',
    date: '05.10.2023',
    teamByHTeamId: {
        name: "Hobbiton",
        logo: "https://seeklogo.com/images/M/mexico-national-football-team-logo-DD4918797B-seeklogo.com.png"
    },
    teamByGTeamId: {
        name: "Football Fun",
        logo: "https://seeklogo.com/images/M/mexico-national-football-team-logo-DD4918797B-seeklogo.com.png"
    }
};

export const MatchHeader = () => {
    return (
        <div className="grid place-content-center place-items-center grid-cols-6 gap-0 sm:grid-cols-6 lg:grid-cols-6 items-center">
            <p className="w-full col-span-6 text-center text-xl font-semibold">Товариська гра</p>
            <div className="grid col-span-6 sm:col-span-6  md:col-start-2 md:col-span-4 lg:col-start-3 lg:col-span-2 grid-cols-5 sm:grid-cols-5 lg:grid-cols-5  place-self-center" >
                <div className="col-span-1 text-center gap-3 items-center">
                    <img src={match.teamByHTeamId.logo} />
                    {match.teamByHTeamId.name}
                </div>
                <div className="grid col-span-3 text-center place-content-center">
                    <span className="text-4xl w-full col-span-5"><b>{match.h_team_score}</b>:<b>{match.g_team_score}</b></span>
                    <p className="w-full col-span-5">{match.date}</p>
                </div>
                <div className="col-span-1 text-center gap-3 items-center">
                    <img src={match.teamByGTeamId.logo} className="w-fit" />
                    {match.teamByGTeamId.name}
                </div>
            </div>
        </div>
    )
}