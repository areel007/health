import './Circle.css';

type TCircleCheck = {
    text: string;
    linked: boolean;
}

const CircleCheck = ({ text, linked = false }: TCircleCheck) => {
    return (
        <div className={`circle ${linked ? 'linked' : ''}`}>
            <div className="inner-circle">{linked ? '✓' : ''}</div>
            <div className="text">{text}</div>
        </div>
    );
};

export default CircleCheck;
