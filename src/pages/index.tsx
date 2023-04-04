import { Inter } from 'next/font/google'
import TopMenu from '@/app/ui/components/top-menu/top-menu'
import Login from '@/app/ui/components/login/login'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <h1 className="text-medium">
      <TopMenu/>
      <Login/>
    </h1>
  )
}