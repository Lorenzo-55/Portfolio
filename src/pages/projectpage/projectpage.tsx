import { useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { getProjectData } from "../../data/projectdata";
import "./projectpage.css";

function ProjectPage() {
  const navigate = useNavigate();
  const { slug } = useParams();


  const project = useMemo(() => getProjectData(slug), [slug]);

  const images = useMemo(() => {
    if (!project) return [];
    if (project.gallery && project.gallery.length > 0) return project.gallery;
    if (project.image) return [project.image];
    return [];
  }, [project]);

  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    setActiveImageIndex(0);
  }, [slug]);

  const goPrev = () => {
    if (images.length <= 1) return;
    setActiveImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goNext = () => {
    if (images.length <= 1) return;
    setActiveImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  if (!project) {
    return (
      <main className="project-page">
        <div className="project-page-inner">
          <div className="project-page-header">
            <button
              className="project-back-button"
              onClick={() => navigate(-1)}
              aria-label="Go back"
            >
              <IoIosArrowBack />
            </button>

            <h1 className="project-title">Project not found</h1>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="project-page">
      <div className="project-page-inner">
        <div className="project-page-header">
          <button
            className="project-back-button"
            onClick={() => navigate(-1)}
            aria-label="Go back"
          >
            <IoIosArrowBack />
          </button>

          <h1 className="project-title">{project.title}</h1>
        </div>

        {images.length > 0 && (
          <div className="project-gallery">
            <div className="project-image-stage">
              <img
                src={images[activeImageIndex]}
                alt={`${project.title} screenshot ${activeImageIndex + 1}`}
                className="project-image-main"
              />

              {images.length > 1 && (
                <>
                  <button
                    className="gallery-nav gallery-nav-left"
                    onClick={goPrev}
                    aria-label="Previous image"
                  >
                    <FiChevronLeft />
                  </button>

                  <button
                    className="gallery-nav gallery-nav-right"
                    onClick={goNext}
                    aria-label="Next image"
                  >
                    <FiChevronRight />
                  </button>
                </>
              )}
            </div>

            {images.length > 1 && (
              <div className="project-thumbnails">
                {images.map((image, index) => (
                  <button
                    key={index}
                    className={`project-thumbnail ${
                      index === activeImageIndex ? "active" : ""
                    }`}
                    onClick={() => setActiveImageIndex(index)}
                    aria-label={`Show image ${index + 1}`}
                  >
                    <img
                      src={image}
                      alt={`${project.title} thumbnail ${index + 1}`}
                    />
                  </button>
                ))}
              </div>
            )}
          </div>
        )}

        <div className="project-content">
          {project.description && (
            <div className="project-block">
              <h2 className="project-label">Description:</h2>
              <p className="project-text">{project.description}</p>
            </div>
          )}

          {project.responsibilities && project.responsibilities.length > 0 && (
            <div className="project-block">
              <h2 className="project-label">Responsibilities:</h2>
              <ul className="project-list">
                {project.responsibilities.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          )}

          {project.skills && project.skills.length > 0 && (
            <div className="project-block">
              <h2 className="project-label">Skills:</h2>
              <div className="project-skills">
                {project.skills.map((skill, index) => (
                  <span key={index} className="project-skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )}

          {typeof project.teamSize === "number" && (
            <div className="project-block">
              <h2 className="project-label">Team size: {project.teamSize}</h2>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}

export default ProjectPage;