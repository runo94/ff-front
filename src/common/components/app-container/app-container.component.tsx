import { FC, PropsWithChildren } from 'react';
import { Header } from '@app/common/components/header/header.component';

export const Container: FC<PropsWithChildren> = ({ children }) => {
    return (
        <>
            <Header />
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
        </>
    )
};