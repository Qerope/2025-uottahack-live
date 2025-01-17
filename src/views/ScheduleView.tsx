import React, { useState, useEffect } from 'react';
import './ScheduleView.css';

import { ONE_MINUTE_MILLISECOND, SHOW_AS_LIVE_DATES, MOBILE_BREAKPOINT_WIDTH } from '../constants';
import { EventListener, RelativeTime } from '../enums';

import Container from 'react-bootstrap/Container';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import { Spinner } from 'react-bootstrap';

import TimelineComponent from '../components/TimelineComponent';
import EventListComponent from '../components/EventListComponent';
import { getRelativeDayTime } from '../utils';
import { IEvent, IEventDay } from '../interfaces';

import scheduleData from '../data/schedule.json';

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

const ScheduleView: React.FC = () => {
  const [days, setDays] = useState<{ [key: string]: IEventDay }>({});
  const [loading, setLoading] = useState(true); // Track loading state
  const [mobile, setMobile] = useState(true);
  const [day, setDay] = useState<IEventDay | null>(null);

  const updateDimensions = () => {
    const isMobile = window.innerWidth < MOBILE_BREAKPOINT_WIDTH;
    if (mobile !== isMobile) {
      setMobile(isMobile);
    }
  };

  useEffect(() => {
    // Fetch the schedule data when the component mounts
    const loadSchedule = async () => {
      const newDays = await fetchScheduleData();
      setDays(newDays);
      setDay(newDays.firstEventDay); // Set the default day
      setLoading(false); // Set loading to false once data is fetched
    };

    loadSchedule();

    window.addEventListener(EventListener.Resize, updateDimensions);
    const interval = setInterval(() => {
      setDay((prevDay) => prevDay); // Force re-render every minute
    }, ONE_MINUTE_MILLISECOND);

    return () => {
      window.removeEventListener(EventListener.Resize, updateDimensions);
      clearInterval(interval);
    };
  }, [mobile]);

  if (loading) {
    // Render a loading spinner until the data is fetched
    return (
      <Container fluid>
        <Row className="justify-content-center">
          <div className="text-center">
            <Spinner animation="border" variant="primary" />
            <p>Loading Schedule...</p>
          </div>
        </Row>
      </Container>
    );
  }

  if (!day) {
    return <div>Error: No data available.</div>; // Handle case where no day is available
  }

  const hasPassed = new Date().getTime() >= new Date(scheduleData.dayAfterLastDay).getTime();
  const relativeDayTime = hasPassed ? RelativeTime.Future : getRelativeDayTime(new Date(day.date));
  const showAsToday = (relativeDayTime === RelativeTime.Present || !SHOW_AS_LIVE_DATES) && !hasPassed;

  return (
    <Container id="schedule" fluid>
      <div className="d-flex flex-column">
      <ButtonGroup className="button-group">
        {Object.values(days).map((dayInfo, index) => (
          <Button
            key={`btn-group-${index}`}
            onClick={() => setDay(dayInfo)}
            className={`schedule-button ${index === day.index ? "active" : ""}`}
          >
            {!mobile && dayInfo.longTitle || dayInfo.title}
          </Button>
        ))}
      </ButtonGroup>
      </div>
      <Row>
        <div className="col-md-9 col-sm-12 mt-3">
          <div className="mr-2 ml-2">
            <TimelineComponent day={day} showAsToday={showAsToday} relativeDayTime={relativeDayTime} />
          </div>
        </div>
        <div className="col-md-3 mt-2">
          <div className="ml-2 mr-2">
            <EventListComponent
              key={day.title}
              day={day}
              showAsToday={showAsToday}
              relativeDayTime={relativeDayTime}
            />
          </div>
        </div>
      </Row>
      {/* Add the timezone note */}
      <div style={{ textAlign: 'left', marginTop: '5px', marginLeft: '15px', fontSize: '14px', color: '#6c757d' }}>
        *All event times are displayed in your local time zone
      </div>
    </Container>
  );
};

export default ScheduleView;