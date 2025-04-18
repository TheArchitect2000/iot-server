import { useState, useEffect } from 'react'
import Menu from '@/components/ui/Menu'
import AuthorityCheck from '@/components/shared/AuthorityCheck'
import VerticalSingleMenuItem from './VerticalSingleMenuItem'
import VerticalCollapsedMenuItem from './VerticalCollapsedMenuItem'
import { themeConfig } from '@/configs/theme.config'
import {
    NAV_ITEM_TYPE_TITLE,
    NAV_ITEM_TYPE_COLLAPSE,
    NAV_ITEM_TYPE_ITEM,
} from '@/constants/navigation.constant'
import {
    SIDE_NAV_WIDTH,
    SIDE_NAV_COLLAPSED_WIDTH,
    NAV_MODE_DARK,
    NAV_MODE_THEMED,
    NAV_MODE_TRANSPARENT,
    SIDE_NAV_CONTENT_GUTTER,
    LOGO_X_GUTTER,
} from '@/constants/theme.constant'
import useMenuActive from '@/utils/hooks/useMenuActive'
import { useTranslation } from 'react-i18next'
import { Direction, NavMode } from '@/@types/theme'
import type { NavigationTree } from '@/@types/navigation'
import Logo from '../Logo'
import { setSideNavCollapse, useAppDispatch, useAppSelector } from '@/store'

export interface VerticalMenuContentProps {
    isMobile?: boolean
    navMode: NavMode
    collapsed?: boolean
    routeKey: string
    navigationTree?: NavigationTree[]
    userAuthority: string[]
    onMenuItemClick?: () => void
    direction?: Direction
}

const { MenuGroup } = Menu

const VerticalMenuContent = (props: VerticalMenuContentProps) => {
    const {
        navMode = themeConfig.navMode,
        collapsed,
        routeKey,
        navigationTree = [],
        userAuthority = [],
        onMenuItemClick,
        direction = themeConfig.direction,
    } = props

    const { t } = useTranslation()

    const [defaulExpandKey, setDefaulExpandKey] = useState<string[]>([])

    const { activedRoute } = useMenuActive(navigationTree, routeKey)

    const dispatch = useAppDispatch()

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 1000) {
                dispatch(setSideNavCollapse(true))
            } else {
                //dispatch(setSideNavCollapse(false))
            }
        }

        window.addEventListener('resize', handleResize)
        handleResize() // Check initial width
        return () => window.removeEventListener('resize', handleResize)
    }, [dispatch])

    useEffect(() => {
        if (defaulExpandKey.length === 0 && activedRoute?.parentKey) {
            setDefaulExpandKey([activedRoute?.parentKey])
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [activedRoute?.parentKey])

    const handleLinkClick = () => {
        onMenuItemClick?.()
    }

    const getNavItem = (nav: NavigationTree) => {
        // props.isMobile

        if (nav.subMenu.length === 0 && nav.type === NAV_ITEM_TYPE_ITEM) {
            return (
                <VerticalSingleMenuItem
                    key={nav.key}
                    nav={nav}
                    sideCollapsed={collapsed && !props.isMobile}
                    userAuthority={userAuthority}
                    direction={direction}
                    onLinkClick={handleLinkClick}
                />
            )
        }

        if (nav.subMenu.length > 0 && nav.type === NAV_ITEM_TYPE_COLLAPSE) {
            return (
                <VerticalCollapsedMenuItem
                    key={nav.key}
                    nav={nav}
                    sideCollapsed={collapsed}
                    userAuthority={userAuthority}
                    direction={direction}
                    onLinkClick={onMenuItemClick}
                />
            )
        }

        if (nav.type === NAV_ITEM_TYPE_TITLE) {
            if (nav.subMenu.length > 0) {
                return (
                    <AuthorityCheck
                        key={nav.key}
                        userAuthority={userAuthority}
                        authority={nav.authority}
                    >
                        <MenuGroup label={t(nav.translateKey) || nav.title}>
                            {nav.subMenu.map((subNav) =>
                                subNav.subMenu.length > 0 ? (
                                    <VerticalCollapsedMenuItem
                                        key={subNav.key}
                                        nav={subNav}
                                        sideCollapsed={collapsed}
                                        userAuthority={userAuthority}
                                        direction={direction}
                                        onLinkClick={onMenuItemClick}
                                    />
                                ) : (
                                    <VerticalSingleMenuItem
                                        key={subNav.key}
                                        nav={subNav}
                                        sideCollapsed={collapsed}
                                        userAuthority={userAuthority}
                                        direction={direction}
                                        onLinkClick={onMenuItemClick}
                                    />
                                )
                            )}
                        </MenuGroup>
                    </AuthorityCheck>
                )
            } else {
                return <MenuGroup label={nav.title} />
            }
        }
    }

    const mode = useAppSelector((state) => state.theme.mode)

    const sideNavCollapse = useAppSelector(
        (state) => state.theme.layout.sideNavCollapse
    )

    const logoMode = () => {
        if (navMode === NAV_MODE_THEMED) {
            return NAV_MODE_DARK
        }

        if (navMode === NAV_MODE_TRANSPARENT) {
            return mode
        }

        return navMode
    }

    return (
        <Menu
            className={`px-4 pb-4 flex flex-col h-full ${
                props.isMobile && 'pt-6'
            }`}
            variant={navMode}
            sideCollapsed={collapsed}
            defaultActiveKeys={activedRoute?.key ? [activedRoute.key] : []}
            defaultExpandedKeys={defaulExpandKey}
        >
            {navigationTree.map((nav) => getNavItem(nav))}
            <Logo
                mode={logoMode()}
                type={
                    sideNavCollapse && !props.isMobile ? 'streamline' : 'full'
                }
                logoWidth={sideNavCollapse && !props.isMobile ? '100%' : '50%'}
                className={`mx-auto mt-auto`}
            />
            {!sideNavCollapse ||
                (props.isMobile && (
                    <p className="text-center">Powered by FidesInnova</p>
                ))}
        </Menu>
    )
}

export default VerticalMenuContent
