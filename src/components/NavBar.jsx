export default function NavBar({ children }) {
    return (
        <header className="">
            <nav className="note-app__header--nav">
                <h1 className="note-app__header--logo">Notes</h1>
                {children}
            </nav>
        </header>
    );
}