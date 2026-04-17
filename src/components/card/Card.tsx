import "./Card.css";

type CardProps = {
  title: string;
  subtitle?: string;
  description: string;
  image: string;
  github?: string;
  live?: string;
  docs?: string;
};

function Card({ title, subtitle, description, image, github, live, docs }: CardProps) {
  return (
    <div className="card">
      <div className="card-image">
        <img src={image} alt={title} />
      </div>

      <p className="card-title">{title}</p>

      {subtitle && <p className="card-subtitle">{subtitle}</p>}

      <p className="card-body">{description}</p>

      <div className="card-actions">
        {github && (
          <a href={github} target="_blank" rel="noreferrer">
            GitHub
          </a>
        )}
        {live && (
          <a href={live} target="_blank" rel="noreferrer">
            Live
          </a>
        )}
        {docs && (
          <a href={docs} target="_blank" rel="noreferrer">
            Docs
          </a>
        )}
      </div>
    </div>
  );
}

export default Card;