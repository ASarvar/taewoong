import { Accordion } from "react-bootstrap";

const RaveloAccordion = ({ event, active, onClick, title, content }) => {
  const isExpanded = active === event;

  return (
    <div className="accordion-item">
      <h5 className="accordion-header">
        <Accordion.Toggle
          as="button"
          className={`accordion-button ${isExpanded ? "" : "collapsed"}`}
          eventKey={event}
          aria-expanded={isExpanded ? "true" : "false"}
          onClick={onClick}
        >
          {title}
        </Accordion.Toggle>
      </h5>
      <Accordion.Collapse eventKey={event}>
        <div className="accordion-body">
          {content} {/* Render dynamic content here */}
        </div>
      </Accordion.Collapse>
    </div>
  );
};

export default RaveloAccordion;
