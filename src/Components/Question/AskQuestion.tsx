import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import ReactMde from "react-mde";
import Showdown from "showdown";

type viewType = "write" | "preview";

function AskQuestion() {
    let converter = new Showdown.Converter({
        tables: true,
        simplifiedAutoLink: true,
        strikethrough: true,
        tasklists: true,
    });
    const [body, setBody] = useState<string>("");
    const [view, setView] = useState<viewType>("write");
    return (
        <Form>
            <Container>
                <h2 className="display-4">Ask a Question</h2>
                <Row>
                    <Col>
                        <Form.Group controlId="questionTitle">
                            <Form.Label>Title</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Question Title..."
                            />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Label>Body</Form.Label>
                        <ReactMde
                            value={body}
                            onChange={body => setBody(body)}
                            onTabChange={(tab): void => setView(tab)}
                            selectedTab={view}
                            generateMarkdownPreview={markdown =>
                                Promise.resolve(converter.makeHtml(markdown))
                            }
                        />
                    </Col>
                </Row>
                <br/>
                <Row>
                    <Col md={{ span: 1, offset: 10 }}>
                        <Button type="submit">Submit</Button>
                    </Col>
                    <Col md={{ span: 1, offset: 12 }}>
                        <Button variant="light" type="submit">Cancel</Button>
                    </Col>
                </Row>
            </Container>
        </Form>
    );
}

export default AskQuestion;
