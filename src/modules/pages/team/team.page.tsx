import { TeamHeader } from "@app/modules/components/team-header/team-header.component"
import { MonthStats } from "@app/modules/components/month-stat/month-stat-list/month-stat-list.component"
import { Container } from "@app/common/components/app-container/app-container.component"

export const Team = () => {
    return (
        <Container>
            <TeamHeader />
            <MonthStats />
        </Container>
    )    
}