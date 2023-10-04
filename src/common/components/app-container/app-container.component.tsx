import { FC, PropsWithChildren } from 'react';
import { Header } from '@app/common/components/header/header.component';
import { Footer } from '@app/common/components/footer/footer.component';

export const Container: FC<PropsWithChildren> = ({ children }) => {
    return (
        <div className="min-h-screen flex flex-col h-screen justify-between">
            <Header />
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"></div>
            <main className="lg:-mt-72 -mt-28">
                <div className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
                    <div className="rounded-lg bg-white px-5 py-6 shadow sm:px-6">{children}</div>
                </div>
            </main>
            <Footer />
        </div>
    )
};