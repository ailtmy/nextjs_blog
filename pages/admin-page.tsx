import { FC } from 'react'
import Auth from '../components/Auth'
import Layout from '../components/Layout'

const AdminPage: FC = () => {
  return (
    <Layout title="Admin">
      <Auth />
    </Layout>
  )
}
export default AdminPage
