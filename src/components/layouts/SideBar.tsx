import {
  BookOpen,
  CircleUserRound,
  MapIcon,
  ShoppingCart,
  Users,
  Zap,
} from 'lucide-react'
import Link from 'next/link'
import { MenuItem } from '../common'

const SIDE_BAR_LIST = [
  {
    label: 'Trang chủ',
    href: '/',
    icon: <MapIcon />,
  },
  {
    label: 'Khu vực học tập',
    href: '/study',
    icon: <BookOpen />,
  },
  {
    label: 'Giới thiệu',
    href: '/about',
    icon: <CircleUserRound />,
  },
  {
    label: 'Quản lý khóa học',
    href: '/manage/course',
    icon: <Zap />,
  },
  {
    label: 'Quản lý thành viên',
    href: '/manage/users',
    icon: <Users />,
  },
  {
    label: 'Quản lý đơn hàng',
    href: '/manage/orders',
    icon: <ShoppingCart />,
  },
]

type Props = {}
const SideBar = (props: Props) => {
  return (
    <aside className='px-4 py-6 border-r border-gray-200'>
      <Link
        href={'/'}
        className='mb-6 block hover:text-blue-700 transition-all'
      >
        <h2 className='text-4xl font-extrabold'>
          <span className='text-primary'>F</span>
          abbi JSC
        </h2>
      </Link>

      <ul className='flex flex-col gap-y-2'>
        {SIDE_BAR_LIST.map((sidebarItem, idx) => {
          return (
            <li key={idx}>
              <MenuItem {...sidebarItem} />
            </li>
          )
        })}
      </ul>
    </aside>
  )
}

export default SideBar
