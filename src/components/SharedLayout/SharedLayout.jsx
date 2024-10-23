import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'

import { MutatingDots } from 'react-loader-spinner'

import { SuspenseWrapper } from './SharedLayout.styled'
import Main from '../Main/Main'
import Header from '../Header/Header'
import Footer from '../sections/Footer/Footer'
import { AppWrapper } from './SharedLayout.styled'

export const SharedLayout = () => {
    return (
        <AppWrapper>
            <Header />
            <Main>
                <Suspense
                    fallback={
                        <SuspenseWrapper>
                            <MutatingDots
                                height={100}
                                width={100}
                                color="#1976d2"
                                secondaryColor="#1976d2"
                                radius={12.5}
                                ariaLabel="mutating-dots-loading"
                                visible={true}
                            />
                        </SuspenseWrapper>
                    }
                >
                    <Outlet />
                </Suspense>
            </Main>
            <Footer />
        </AppWrapper>
    )
}
