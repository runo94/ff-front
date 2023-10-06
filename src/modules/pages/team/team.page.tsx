import { TeamHeader } from "@app/modules/components/team-header/team-header.component"
import { MonthStats } from "@app/modules/components/month-stat/month-stat-list/month-stat-list.component"
import { Container } from "@app/common/components/app-container/app-container.component"
import { PlayersList } from "@app/modules/components/players-list/players-list/players-list.component"
import { ButtonSelect } from "@app/common/components/button-select/button-select.component"
import { MatchesList } from "@app/modules/components/matches/matches-list/matches-list.component"

export const Team = () => {
    return (
        <Container>
            <TeamHeader />
            <MonthStats />
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-6 lg:grid-cols-6">
                <div className="col-span-3 sm:col-span-3 lg:col-span-2">
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-2 items-center" >
                        <h2 className="text-xl font-semibold my-5">Склади команди</h2>
                        <ButtonSelect />
                    </div>
                    <PlayersList />
                </div>
                <div className="col-span-3 lg:col-span-4">
                    <h2 className="text-xl font-semibold my-5">Попередні матчі</h2>
                    <MatchesList />
                </div>
            </div>
        </Container>
    )
}