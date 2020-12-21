const Tweet = (props) => (
    <div>
        <h3>{props.username}</h3>
        <h6>{props.date} | {props.name}</h6>
        <p>{props.message}</p>
    </div>
);