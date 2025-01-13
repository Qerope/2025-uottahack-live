import React, { useEffect, useState } from 'react';
import './WorkshopView.css';

import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import { RelativeTime } from '../enums';
import EventListItem from '../components/EventListItem';
import ModalDialog from '../components/ModalDialog';
import { formattedEventTime } from '../utils';
import { DUMMY_EVENT } from '../constants';
import { IEvent, IEventDay } from '../interfaces';
import { Spinner } from 'react-bootstrap';

const fetchScheduleData = async (): Promise<{ [key: string]: IEventDay }> => {
  try {
    const response = await fetch('https://me.uottahack.ca/api/live/get-schedule-data');
    if (!response.ok) {
      throw new Error('Failed to fetch schedule data');
    }

    const scheduleData = (await response.json()).data;

    const uOttaHack: { [key: string]: IEventDay } = Object.fromEntries(
      Object.entries(scheduleData.uOttaHack).map(([key, eventDay]) => [
        key,
        convertEventDayDates(eventDay),
      ])
    );

    return uOttaHack;
  } catch (error) {
    console.error('Error fetching schedule data:', error);
    return {};
  }
};

const convertEventDates = (event: IEvent): IEvent => ({
  ...event,
  start: new Date(event.start),
});

const convertEventDayDates = (eventDay: any): IEventDay => ({
  ...eventDay,
  date: new Date(eventDay.date),
  events: eventDay.events.map(convertEventDates),
});

const WorkshopView: React.FC = () => {
  const [days, setDays] = useState<{ [key: string]: IEventDay }>({});
  const [loading, setLoading] = useState(true); // Track loading state
  const [show, setShow] = useState(false);
  const [formattedTime, setFormattedTime] = useState('');
  const [workshop, setWorkshop] = useState(DUMMY_EVENT);

  const filterWorkshops = (events: IEvent[]) =>
    events.filter(event => event.category.toLowerCase().includes("workshop"));

  useEffect(() => {
    const loadSchedule = async () => {
      const newDays = await fetchScheduleData();
      setDays(newDays);
      setLoading(false); 
    };

    loadSchedule();
  }, []);

  if (loading) {
    return (
      <Container fluid>
        <Row className="justify-content-center">
          <Col md={4} className="text-center">
            <Spinner animation="border" variant="primary" />
            <p>Loading Schedule...</p>
          </Col>
        </Row>
      </Container>
    );
  }

  return (
    <Container id="workshop-view" fluid>
      <Col>
        <div>
          <ModalDialog
            show={show}
            onHide={() => setShow(false)}
            formattedTime={formattedTime}
            event={workshop}
          />
          {Object.values(days).map((day, index) =>
            filterWorkshops(day.events).length !== 0 ? (
              <div key={`workshop-day-${index}`} className="workshop-day">
                <h5>Saturday 🕺</h5>
                <div className="workshops">
                  <div className="col-md-12 row">
                    {filterWorkshops(day.events).map((event, index) => (
                      <div className="col-md-6" key={`event-list-item-${index}`}>
                        <div
                          className="event-item-container"
                          onClick={() => {
                            setShow(true);
                            setFormattedTime(formattedEventTime(event));
                            setWorkshop(event);
                          }}
                        >
                          <EventListItem
                            event={event}
                            showAsToday={false}
                            relativeDayTime={RelativeTime.Future}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : null
          )}
        </div>
      </Col>
    </Container>
  );
};

export default WorkshopView;