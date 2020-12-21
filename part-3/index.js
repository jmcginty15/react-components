const jasonHobbies = [
    'Reading real valuable philosophy instead of wasting time thinking about politics',
    'Developing software projects instead of wasting time thinking about politics',
    'Not concerning myself with politics'
];
const billyHobbies = [
    'Doing kid stuff',
    'Not thinking about politics hopefully'
];

const App = () => (
    <div>
        <Person name="Jason" age={28} hobbies={jasonHobbies} />
        <Person name="Billy" age={14} hobbies={billyHobbies}/>
        <Person name="Bartholomew" age={19} />
    </div>
);

ReactDOM.render(<App />, document.getElementById('root'));