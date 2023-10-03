import { ProfileHeader } from "@app/modules/components/profile-header/profile-header.component"
import { MonthStats } from "@app/modules/components/month-stat/month-stat-list/month-stat-list.component"
import { Container } from "@library/common/components/app-container/app-container.component"

export const UserProfile = () => {
    return (
        <Container>
            <ProfileHeader />
            <MonthStats />
        </Container>
    )    
}