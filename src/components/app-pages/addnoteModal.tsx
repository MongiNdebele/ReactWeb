import React, { ChangeEvent } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

interface AddNoteModalProps {
  show: boolean;
  onHide: () => void;
  onSubmit: () => void;
  note: {
    title: string;
    content: string;
    color: string;
  };
  onInputChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
}

const AddNoteModal: React.FC<AddNoteModalProps> = ({ show, onHide, onSubmit, note, onInputChange }) => {
  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Add Sticky Note</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="noteTitle">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              name="title"
              value={note.title}
              onChange={onInputChange}
              placeholder="Enter note title"
            />
          </Form.Group>
          <Form.Group controlId="noteContent" className="mt-3">
            <Form.Label>Content</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="content"
              value={note.content}
              onChange={onInputChange}
              placeholder="Enter note content"
            />
          </Form.Group>
          <Form.Group controlId="noteColor" className="mt-3">
            <Form.Label>Color</Form.Label>
            <Form.Select name="color" value={note.color} onChange={onInputChange}>
              <option value="bg-yellow">Yellow</option>
              <option value="bg-blue">Blue</option>
              <option value="bg-warning">Red</option>
              <option value="bg-danger">Orange</option>
            </Form.Select>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
        <Button variant="primary" onClick={onSubmit}>
          Add Note
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddNoteModal;
