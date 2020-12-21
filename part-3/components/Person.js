const Person = (props) => {
    let hobbyList = null;
    if (props.hobbies) {
        hobbyList = props.hobbies.map(hobby => <li>{hobby}</li>);
    }

    return (
        <div>
            <p>Learn some information about this person</p>
            <h3>{props.name.length > 8 ? props.name.slice(0, 6) : props.name} | {props.age} years old</h3>
            <h3>{props.age >= 18 ? `You are legally allowed to vote, but it's really not that important because your choices all absolutely suck and political action is mostly meaningless for individuals` : 'You must be 18 to learn the harsh truth about our cultural narratives'}</h3>
            {props.hobbies ? <h4>Hobbies:</h4> : null}
            {props.hobbies ? <ul>{hobbyList}</ul> : null}
        </div>
    )
};