import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
import { Container, Col } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import Alert from "react-bootstrap/Alert";
import "../styles/Todolist.css";

function Todolist({ todobox, onDelete, onEdit }) {
  const [editItem, setEditItem] = useState(null);
  const [editValues, setEditValues] = useState({});
  const [saved, setSaved] = useState(false);

  const handleEditClick = (item) => {
    setEditItem(item);
    setEditValues({
      task: item.task,
      date: item.date,
    });
  };

  const handleSaveClick = (item) => {
    onEdit({ ...item, ...editValues });
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
    setEditItem(null);
  };

  return (
    <section>
      <Container className="todo-container">
        <Col xs={12} sm={12} md={12} lg={12}>
          <div className="table-responsive">
            {todobox.length === 0 ? (
              <p className="empty-message text-center">The todobox is empty.</p>
            ) : (
              <Table className="table">
                <thead>
                  <tr className="table-headings">
                    <th className="todo-list-names">Todo</th>
                    <th className="todo-list-names">Date</th>
                    <th className="todo-list-names">Actions</th>
                  </tr>
                </thead>
                <tbody className="tbody">
                  {todobox.map((item) => {
                    return (
                      <tr key={item.id} className="table-d">
                        <td>
                          {editItem === item ? (
                            <input
                              type="text"
                              value={editValues.task}
                              onChange={(e) =>
                                setEditValues({
                                  ...editValues,
                                  task: e.target.value,
                                })
                              }
                            />
                          ) : (
                            item.task
                          )}
                        </td>
                        <td>
                          {editItem === item ? (
                            <input
                              type="date"
                              value={editValues.date}
                              onChange={(e) =>
                                setEditValues({
                                  ...editValues,
                                  date: e.target.value,
                                })
                              }
                            />
                          ) : (
                            item.date
                          )}
                        </td>
                        <td>
                          {editItem === item ? (
                            <button
                              className="save-button"
                              onClick={() => handleSaveClick(item)}
                            >
                              Save
                            </button>
                          ) : (
                            <div className="buttons-set">
                              <button
                                className="edit-button"
                                onClick={() => handleEditClick(item)}
                              >
                                <FontAwesomeIcon
                                  icon={faEdit}
                                  className="edit-icon"
                                />
                              </button>
                              <button
                                className="delete-button"
                                onClick={() => onDelete(item.id)}
                              >
                                <FontAwesomeIcon
                                  icon={faTrash}
                                  className="delete-icon"
                                />
                              </button>
                            </div>
                          )}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            )}
          </div>
          {saved && <Alert variant="success">Saved!</Alert>}
        </Col>
      </Container>
    </section>
  );
}

export default Todolist;
