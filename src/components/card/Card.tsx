import "./Card.css";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { Link } from "react-router-dom";

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
  const isInternalDocsLink = docs?.startsWith("/");

  return (
    <div className="card">
      <div className="card-image">
        <img src={image} alt={title} />
      </div>

      <p className="card-title">{title}</p>

      {subtitle && <p className="card-subtitle">{subtitle}</p>}

      <p className="card-body">{description}</p>

      <div className="card-actions">
        <div className="card-actions-row">
          {github && (
            <a href={github} target="_blank" rel="noreferrer" className="icon-btn">
              <FaGithub />
            </a>
          )}

          {live && (
            <a href={live} target="_blank" rel="noreferrer" className="icon-btn">
              <FiExternalLink />
            </a>
          )}
        </div>

        {docs &&
          (isInternalDocsLink ? (
            <Link to={docs} className="info-btn">
              More Info <FiExternalLink />
            </Link>
          ) : (
            <a
              href={docs}
              target="_blank"
              rel="noreferrer"
              className="info-btn"
            >
              More Info <FiExternalLink />
            </a>
          ))}
      </div>
    </div>
  );
}

export default Card;