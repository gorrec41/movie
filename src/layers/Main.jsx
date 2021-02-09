import '../styles/Main.css'
import {Card} from '../components/Card'
import {Search} from '../components/Search'
function Main() {
    return <main className='main'>
        <div className='container'>
                <Search />
                <Card />
            </div>
        </main>
}
export {Main}