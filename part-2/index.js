const cats = 'Cats r cool';
const dogs = 'Dogs r cooler tho';
const brick = 'I love lamp';
const date = new Date();

const App = () => (
    <div>
        <Tweet username="catlady45" name="Susan" message={cats} date={date.toLocaleDateString('en-US')} />
        <Tweet username="firehydrant" name="Rufus" message={dogs} date={date.toLocaleDateString('en-US')} />
        <Tweet username="tridentguy" name="Brick Tamlund" message={brick} date={date.toLocaleDateString('en-US')} />
    </div>
);

ReactDOM.render(<App />, document.getElementById('root'));