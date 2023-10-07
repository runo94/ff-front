import { MatchesItem } from "@app/modules/components/matches/mathces-item/matches-item.component"

const matchList = [
    {
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
    },
    {
        id: 'qe123qwe1ds12',
        h_team_id: 'asdqweas',
        g_team_id: 'zxcasdasd',
        h_team_score: '2',
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
    },
    {
        id: 'qe123qwe1ds13',
        h_team_id: 'asdqweas',
        g_team_id: 'zxcasdasd',
        h_team_score: '1',
        g_team_score: '2',
        date: '05.10.2023',
        teamByHTeamId: {
            name: "Football Fun",
            logo: "https://seeklogo.com/images/M/mexico-national-football-team-logo-DD4918797B-seeklogo.com.png"
        },
        teamByGTeamId: {
            name: "Hobbiton",
            logo: "https://seeklogo.com/images/M/mexico-national-football-team-logo-DD4918797B-seeklogo.com.png"
        }
    },
    {
        id: 'qe123qwe1ds13',
        h_team_id: 'asdqweas',
        g_team_id: 'zxcasdasd',
        h_team_score: '1',
        g_team_score: '2',
        date: '05.10.2023',
        teamByHTeamId: {
            name: "Football Fun",
            logo: "https://seeklogo.com/images/M/mexico-national-football-team-logo-DD4918797B-seeklogo.com.png"
        },
        teamByGTeamId: {
            name: "Hobbiton",
            logo: "https://seeklogo.com/images/M/mexico-national-football-team-logo-DD4918797B-seeklogo.com.png"
        }
    }
]

export const MatchesList = () => {
    return (
        <ul role="list" className="grid grid-cols-1 gap-5 sm:grid-cols-1 lg:grid-cols-2">
            {matchList.map((item) => (
                <MatchesItem {...item} />
            ))}
        </ul>
    )
}
