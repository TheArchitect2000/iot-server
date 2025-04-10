import Avatar from '@/components/ui/Avatar'
import Dropdown from '@/components/ui/Dropdown'
import withHeaderItem from '@/utils/hoc/withHeaderItem'
import useAuth from '@/utils/hooks/useAuth'
import { Link } from 'react-router-dom'
import classNames from 'classnames'
import { HiOutlineCog, HiOutlineLogout, HiOutlineUser } from 'react-icons/hi'
import type { CommonProps } from '@/@types/common'
import {
    setAvatar,
    setFirstName,
    useAppDispatch,
    useAppSelector,
} from '@/store'
import { useEffect, useState } from 'react'
import { apiGetMyProfile } from '@/services/UserApi'
import { FaCode } from 'react-icons/fa'
import { useRoleStore } from '@/store/user/userRoleStore'

type DropdownList = {
    label: string
    path: string
    icon: JSX.Element
}

const dropdownItemList: DropdownList[] = [
    {
        label: 'Account Setting',
        path: '/account/settings/profile',
        icon: <HiOutlineCog />,
    },
]

const _UserDropdown = ({ className }: CommonProps) => {
    const [profileData, setProfileData] = useState('') as any
    const [isDeveloper, setIsDeveloper] = useState<boolean>(false)
    const { authority, email } = useAppSelector((state) => state.auth.user)
    const { avatarLink, firstName } = useAppSelector((state) => state.locale)
    const { fetchUserRoles, checkUserHasRole } = useRoleStore()
    const dispatch = useAppDispatch()

    useEffect(() => {
        async function fetchData() {
            const resData = (await apiGetMyProfile()) as any
            setProfileData(resData.data.data)
            dispatch(setAvatar(resData.data.data.avatar))
            dispatch(setFirstName(resData.data.data.firstName))
            await fetchUserRoles()
        }
        fetchData()
    }, [])

    const { signOut } = useAuth()

    const UserAvatar = (
        <div className={classNames(className, 'flex items-center gap-2')}>
            <Avatar
                size={32}
                shape="circle"
                badge={
                    <>
                        {checkUserHasRole('company_developer_a') && (
                            <div className="relative flex">
                                <img src="/img/others/medal/bronze.png" />
                                <p className="absolute bottom-[-5.5px] left-[5.75px] text-black font-bold text-[1rem]">
                                    A
                                </p>
                            </div>
                        )}
                        {checkUserHasRole('company_developer_b') && (
                            <div className="relative flex">
                                <img src="/img/others/medal/silver.png" />
                                <p className="absolute bottom-[-5.5px] left-[6.5px] text-black font-bold text-[1rem]">
                                    B
                                </p>
                            </div>
                        )}
                        {checkUserHasRole('company_developer_c') && (
                            <div className="relative flex">
                                <img src="/img/others/medal/gold.png" />
                                <p className="absolute bottom-[-5.5px] left-[5.5px] text-black font-bold text-[1rem]">
                                    C
                                </p>
                            </div>
                        )}
                    </>
                    /* <FaCode className="!text-xl" /> */
                }
                icon={
                    (avatarLink && <img src={avatarLink} />) || (
                        <HiOutlineUser />
                    )
                }
            />
            <div className="hidden md:block">
                <div className="text-xs capitalize">{authority?.[0] || ''}</div>
                <div className="font-bold">{firstName || ''}</div>
            </div>
        </div>
    )

    return (
        <div>
            <Dropdown
                menuStyle={{ minWidth: 240 }}
                renderTitle={UserAvatar}
                placement="bottom-end"
            >
                <Dropdown.Item variant="header">
                    <div className="py-2 px-3 flex items-center gap-2">
                        <Avatar
                            className="overflow-hidden"
                            size={32}
                            shape="circle"
                            icon={
                                (avatarLink && <img src={avatarLink} />) || (
                                    <HiOutlineUser />
                                )
                            }
                        />
                        <div>
                            <div className="font-bold text-gray-900 dark:text-gray-100">
                                {(firstName && firstName) ||
                                    email?.split('@')[0]}
                            </div>
                            <div className="text-xs">{email}</div>
                        </div>
                    </div>
                </Dropdown.Item>
                <Dropdown.Item variant="divider" />
                {dropdownItemList.map((item) => (
                    <Dropdown.Item
                        key={item.label}
                        eventKey={item.label}
                        className="mb-1 px-0"
                    >
                        <Link
                            className="flex h-full w-full px-2"
                            to={item.path}
                        >
                            <span className="flex gap-2 items-center w-full">
                                <span className="text-xl opacity-50">
                                    {item.icon}
                                </span>
                                <span>{item.label}</span>
                            </span>
                        </Link>
                    </Dropdown.Item>
                ))}
                {/* <Dropdown.Item variant="divider" /> */}
                <Dropdown.Item
                    eventKey="Sign Out"
                    className="gap-2"
                    onClick={signOut}
                >
                    <span className="text-xl opacity-50">
                        <HiOutlineLogout />
                    </span>
                    <span>Sign Out</span>
                </Dropdown.Item>
            </Dropdown>
        </div>
    )
}

const UserDropdown = withHeaderItem(_UserDropdown)

export default UserDropdown
