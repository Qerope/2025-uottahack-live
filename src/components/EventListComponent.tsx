import React from 'react';
import './EventListComponent.css';

import { EVENT_LIST_ITEM_HEIGHT, DUMMY_EVENT } from '../constants';
import { PropTypesDay, IEvent } from '../interfaces';
import { dateToMinutesInDay, getRelativeEventTime, formattedEventTime } from '../utils';

import EventListItem from './EventListItem';
import ModalDialog from './ModalDialog';
import { EventCategory, RelativeTime } from '../enums';

function sortEvents(event1: IEvent, event2: IEvent) {
  return event1.start.getTime() - event2.start.getTime();
}

// Update the state interface to include modalShow, modalFormattedTime, selectedEvent, and events
interface EventListFilterState {
  modalShow: boolean;
  modalFormattedTime: string;
  selectedEvent: IEvent;
  events: IEvent[];
  selectedFilters: {
    foodTime: boolean;
    sponsors: boolean;
    workshops: boolean;
    deadlines: boolean;
  };
}

class EventListComponent extends React.Component<PropTypesDay, EventListFilterState> {
  scrollContainerRef: React.RefObject<HTMLDivElement>;

  constructor(props: PropTypesDay) {
    super(props);
    this.scrollContainerRef = React.createRef();

    const events = this.props.day.events;
    const past = events.filter(event => this.relativeTime(event) === RelativeTime.Past).sort(sortEvents);
    const presentAndFuture = events
      .filter(event => this.relativeTime(event) !== RelativeTime.Past)
      .sort(sortEvents);
    const filteredAndSortedEvents = past.concat(presentAndFuture);

    this.state = {
      modalShow: false,
      modalFormattedTime: '',
      selectedEvent: DUMMY_EVENT,
      events: filteredAndSortedEvents,
      selectedFilters: {
        foodTime: false,
        sponsors: false,
        workshops: false,
        deadlines: false
      }
    };
  }

  componentDidMount() {
    if (this.props.showAsToday) {
      this.updateScroll();
    }
  }

  updateScroll() {
    window.requestAnimationFrame(() => {
      if (this.scrollContainerRef.current) {
        this.scrollContainerRef.current.scrollTop =
          this.computeFirstActiveEventIndex(this.state.events) * EVENT_LIST_ITEM_HEIGHT;
      }
    });
  }

  handleEventListItemClick(event: IEvent) {
    this.setState({
      modalShow: true,
      modalFormattedTime: formattedEventTime(event),
      selectedEvent: event
    });
  }

  computeFirstActiveEventIndex(events: IEvent[]) {
    const now = dateToMinutesInDay(new Date());
    let i = 0;
    for (; i < events.length; ++i) {
      const event = events[i];
      const start = dateToMinutesInDay(event.start);
      const end = start + event.duration;

      if (now < end) {
        break;
      }
    }
    return i;
  }

  relativeTime(event: IEvent) {
    return this.props.showAsToday ? getRelativeEventTime(event) : this.props.relativeDayTime;
  }

  handleFilterChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, checked } = event.target;
    try {
      this.setState((prevState) => ({
        selectedFilters: {
          ...prevState.selectedFilters,
          [name]: checked
        }
      }));
    }
    catch { }
  }

  getFilteredEvents() {
    const { foodTime, sponsors, workshops, deadlines } = this.state.selectedFilters;
    return this.state.events.filter(event => {
      return (
        (foodTime ? event.category == EventCategory.Food : true) &&
        (sponsors ? event.category == EventCategory.Career : true) &&
        (workshops ? (event.category == EventCategory.Workshop1 || event.category == EventCategory.Workshop2 || event.category == EventCategory.Workshop3 || event.category == EventCategory.Workshop4) : true) &&
        (deadlines ? event.category == EventCategory.Main : true)
      );
    });
  }

  render() {
    return (
      <div>
        {/* Filter Section */}
        <div className="filter-container">
          <label>
            <input
              type="checkbox"
              name="foodTime"
              checked={this.state.selectedFilters.foodTime}
              onChange={e => this.handleFilterChange(e)}
            />
            Food Time
          </label>
          <label>
            <input
              type="checkbox"
              name="sponsors"
              checked={this.state.selectedFilters.sponsors}
              onChange={e => this.handleFilterChange(e)}
            />
            Sponsors
          </label>
          <label>
            <input
              type="checkbox"
              name="workshops"
              checked={this.state.selectedFilters.workshops}
              onChange={e => this.handleFilterChange(e)}
            />
            Workshops
          </label>
          <label>
            <input
              type="checkbox"
              name="deadlines"
              checked={this.state.selectedFilters.deadlines}
              onChange={e => this.handleFilterChange(e)}
            />
            Deadlines
          </label>
        </div>

        {/* Event List */}
        <div id="event-list" ref={this.scrollContainerRef}>
          <ModalDialog
            show={this.state.modalShow}
            onHide={() => this.setState({ modalShow: false })}
            formattedTime={this.state.modalFormattedTime}
            event={this.state.selectedEvent}
          />
          {this.getFilteredEvents().map((event, index) => (
            <div
              key={`event-list-item-${index}`}
              onClick={() => this.handleEventListItemClick(event)}
              className="event-item-container"
            >
              <EventListItem
                event={event}
                showAsToday={this.props.showAsToday}
                relativeDayTime={this.relativeTime(event)}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default EventListComponent;
