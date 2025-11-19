'use client';
import Link from "next/link"
import { Button } from "../ui/button"
import React from "react"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { LanguageToggle } from "@/components/ui/LanguageToggle"
import { useTranslations, useLocale } from 'next-intl';
import Logo from "./logo"

const HeroHeader = () => {
    const t = useTranslations('nav');
    const locale = useLocale();
    const [menuState, setMenuState] = React.useState(false)
    const [isScrolled, setIsScrolled] = React.useState(false)


    const menuItems = [
        { name: t('features'), href: `/${locale}/#features` },
        { name: t('pricing'), href: `/${locale}/pricing` },
        { name: t('partnerProgram'), href: `/${locale}/partner-program` },
        { name: t('demo'), href: `/${locale}/#demo` },
        { name: t('contacts'), href: `/${locale}/contacts` }
    ]

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <header>
            <nav
                data-state={menuState && 'active'}
                className="fixed z-50 w-full px-2 group">
                <div className={cn('mx-auto mt-2 container transition-all duration-300 ', isScrolled && 'bg-background/50 max-w-4xl rounded-2xl border backdrop-blur-lg lg:px-5')}>
                    <div className="relative flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
                        <div className="flex w-full justify-between lg:w-auto">
                            <Link
                                href={`/${locale}`}
                                aria-label="home"
                                className="flex items-center space-x-2">
                                <Logo />
                            </Link>

                            <button
                                onClick={() => setMenuState(!menuState)}
                                aria-label={menuState == true ? 'Close Menu' : 'Open Menu'}
                                className="relative z-20 block cursor-pointer p-2.5 lg:hidden">
                                <Menu className="in-data-[state=active]:rotate-180 group-data-[state=active]:scale-0 group-data-[state=active]:opacity-0 m-auto size-6 duration-200" />
                                <X className="group-data-[state=active]:rotate-0 group-data-[state=active]:scale-100 group-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200" />
                            </button>
                        </div>

                        <div className="absolute inset-0 m-auto hidden size-fit lg:block">
                            <ul className="flex gap-8 text-sm">
                                {menuItems.map((item, index) => (
                                    <li key={index}>
                                        <a
                                            href={item.href}
                                            className="text-muted-foreground hover:text-accent-foreground block duration-150">
                                            {item.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-background group-data-[state=active]:block lg:group-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border p-6 shadow-2xl shadow-zinc-300/20 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none">
                            <div className="lg:hidden">
                                <ul className="space-y-6 text-base">
                                    {menuItems.map((item, index) => (
                                        <li key={index}>
                                            <a
                                                href={item.href}
                                                className="text-muted-foreground hover:text-accent-foreground block duration-150">
                                                {item.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="flex w-full flex-col sm:items-center space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit">

                                <Button
                                    asChild
                                    variant="outline"
                                    size="sm"
                                    className={cn(isScrolled && 'lg:hidden')}>
                                    <a
                                        href={`https://app.gridix.live/${locale}/auth/signin`}>
                                        <span>{t('login')}</span>
                                    </a>
                                </Button>
                                <Button
                                    asChild
                                    size="sm"
                                    className={cn(isScrolled && 'lg:hidden')}>
                                    <a
                                        href={`https://app.gridix.live/${locale}/auth/signup`}>
                                        <span>{t('signUp')}</span>
                                    </a>
                                </Button>
                                <Button
                                    asChild
                                    size="sm"
                                    className={cn(isScrolled ? 'lg:inline-flex' : 'hidden')}>
                                    <a
                                        href={`https://app.gridix.live/${locale}/`}>
                                        <span>{t('getStarted')}</span>
                                    </a>
                                </Button>

                                <LanguageToggle />

                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header >
    )
}

export default HeroHeader


