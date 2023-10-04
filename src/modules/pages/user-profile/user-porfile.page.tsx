import { UserProfileHeader } from "@app/modules/components/user-profile-header/user-profile-header.component"
import { MonthStats } from "@app/modules/components/month-stat/month-stat-list/month-stat-list.component"
import { Container } from "@app/common/components/app-container/app-container.component"

export const UserProfile = () => {
    return (
        <Container>
            <UserProfileHeader />
            <MonthStats />
        </Container>
    )    
}