import { RepositoryList } from './components/repositoryList'
import './styles/global.scss'
import { UserProvider, useUser } from './components/useUser'
import { SearchBar } from './components/SearchBar'
import { Profile } from './components/Profile'


export function App() {

    return (
        <UserProvider>
            <SearchBar />
            <div className="wrapper">
                <Profile />
                <main>
                    <RepositoryList />
                </main>
            </div>
        </UserProvider>
    )
}