import { Inter } from 'next/font/google'
import TopMenu from '@/app/ui/components/top-menu/top-menu'
import Login from '@/app/ui/components/login/login'
import Foot from '@/app/ui/components/foot-menu/foot-menu'
import Register from '@/app/ui/components/register/register'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <h1 className="text-medium bg-login">
      <TopMenu/>
      <Register/>
      <Foot/>
    </h1>
  )
}