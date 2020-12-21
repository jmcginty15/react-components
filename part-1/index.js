const App = () => (
    <div>
        <FirstComponent />
        <NamedComponent name="Jason" />
    </div>
);

ReactDOM.render(<App />, document.getElementById('root'));