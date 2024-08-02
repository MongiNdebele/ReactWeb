import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import styles from '../../sass/app-pages/stickywall.module.sass'
import { AiOutlinePlus } from "react-icons/ai";





const StickyWall = ({isShifted}) => {
  const notes = [
    { title: 'Social Media', content: ['- Plan social content', '- Build content calendar', '- Plan promotion and distribution'], color: 'bg-yellow' },
    { title: 'Content Strategy', content: ['Would need time to get insights (goals, personals, budget, audits), but after, it would be good to focus on assembling my team (start with SEO specialist, then perhaps an email marketer?). Also need to brainstorm on tooling.'], color: 'bg-blue' },
    { title: 'Email A/B Tests', content: ['- Subject lines', '- Sender', '- CTA', '- Sending times'], color: 'bg-warning' },
    { title: 'Banner Ads', content: ["Notes from the workshop:",'- Sizing matters', '- Choose distinctive imagery', '- The landing page must match the display ad'], color: 'bg-danger' },
  ];

  return (
    <div className={` ${styles.stickywallContainer} ${isShifted? styles.shift: ""}`}>
      <Row className=''>
        {notes.map((note, index) => (
          <Col md={4} lg={2} className={`${styles.stickynotecolumn} ${isShifted? styles.shifts: ""}`} key={index}>
            <Card className={`${styles.noteCard} ${styles[note.color]} ${isShifted? styles.shiftted: ""}`}>
                <h3 className={`ms-4 mt-4 mb-3 ${styles.stickynotetitle}`}>{note.title}</h3>
                <div >
                  {note.content.map((item, idx) => (
                    <div className={`mx-4 ${styles.stickynotecontent}`} key={idx}>{item}</div>
                  ))}
                </div>
            </Card>
          </Col>
        ))}
        <Col md={4} lg={3} className={`${styles.stickynotecolumn} ${isShifted? styles.shifts: ""}`}>
          <Card className={`${styles.addNoteCard} ${isShifted? styles.shiftts: ""}`}>
            <Card.Body className="d-flex justify-content-center align-items-center">
              <div className={styles.addNote}><AiOutlinePlus /></div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default StickyWall;
