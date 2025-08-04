
import './App.css'
import { Route, Switch, Link } from 'wouter'
import Grad01 from './components/Grad01/Grad01'
import Grad02 from './components/Grad02/Grad02'

function App() {
  return (
    <>
      <nav style={{ padding: '20px', borderBottom: '1px solid #ccc' }}>
        <Link href="/grad01">
          <a style={{ marginRight: '20px' }}>Grad01</a>
        </Link>
        <Link href="/grad02">
          <a style={{ marginRight: '20px' }}>Grad02</a>
        </Link>
      </nav>

      <div style={{ padding: '20px' }}>
        <Switch>
          <Route path="/grad01" component={Grad01} />
          <Route path="/grad02" component={Grad02} />
          <Route>
            <div>
              <h1>UTC Gradient Experiments</h1>
              <p>Navigate to:</p>
              <ul>
                <li><Link href="/grad01"><a>Grad01</a></Link></li>
                <li><Link href="/grad02"><a>Grad02</a></Link></li>
              </ul>
            </div>
          </Route>
        </Switch>
      </div>
    </>
  )
}

export default App
