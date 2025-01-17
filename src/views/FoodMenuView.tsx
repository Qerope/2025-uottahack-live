import React from 'react';
import './FoodMenuView.css';
import DaySelector from '../components/DaySelector';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import { foodDays } from '../data/foodMenuData';

const FoodMenuView: React.FC = () => {
    const [selectedDay, setSelectedDay] = React.useState(foodDays[0]);
    const [mobile, setMobile] = React.useState(window.innerWidth < 768);

    React.useEffect(() => {
        const updateDimensions = () => setMobile(window.innerWidth < 768);
        window.addEventListener('resize', updateDimensions);
        return () => window.removeEventListener('resize', updateDimensions);
    }, []);

    return (
        <Container id="food-menu-view" fluid>
            <Col>
                <div className="d-flex flex-column">
                    <DaySelector
                        days={foodDays}
                        selectedDay={selectedDay}
                        setDay={setSelectedDay}
                        mobile={mobile}
                    />
                </div>

                <div className="foodmenu-content">
                    {selectedDay.content}
                </div>
            </Col>
        </Container>
    );
};

export default FoodMenuView;