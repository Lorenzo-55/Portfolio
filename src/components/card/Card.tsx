import "./Card.css";

type CardProps = {
  title: string;
  subtitle: string;
  description: string;
};

function Card({ title, subtitle, description }: CardProps) {
  return (
    <div className="uiverse-card">
      <div className="uiverse-card-inner">
        <p className="heading">{title}</p>
        <p>{subtitle}</p>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default Card;