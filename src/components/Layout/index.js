import { Outlet } from 'react-router-dom'
import Projects from '../Projects'
import SideBar from '../Sidebar'
import './index.scss'
import { Helmet } from 'react-helmet'
import favicon from './favicon.png'

const Layout = () => {
  return (
    <div className="App">
      <Helmet>
        <title>Munaimun Bari Fahad</title>
        <link rel="icon" type="image/png" href={favicon} sizes="16x16" />
        {/* Additional meta tags or links if needed */}
      </Helmet>
      <SideBar />
      <div className="page">
        {/* <span className="tags top-tags">&lt;body&gt;</span> */}

        <Outlet />

        <span className="tags bottom-tags">
          {/* &lt;/body&gt; */}
          <br />
        </span>
      </div>
    </div>
  )
}

export default Layout
