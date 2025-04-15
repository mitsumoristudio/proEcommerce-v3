import React from 'react';
import HeroHeader from "../components/HeroHeader";
import CustomLoader from "../components/CustomLoader";

export default function HomeScreen() {
    return (
        <>
            <main className={"relative"} >
                <section className={"xl:p-1"}>
                    <HeroHeader />
                </section>

            </main>

        </>
    )
}