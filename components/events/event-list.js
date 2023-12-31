import EventItem from "./event-item";
import classes from './event-list.module.css';

function EventList(props) {
    const { items } = props;
    //const items = props.items;

    return (
        <ul className={classes.list}>
            {items.map(event => 
                <EventItem id={event.id} 
                title={event.title} 
                location={event.location} 
                date={event.date} 
                image={event.image} />
            )}
        </ul>
    );
}

export default EventList;