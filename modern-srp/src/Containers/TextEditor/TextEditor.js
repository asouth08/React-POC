import React, {Component} from 'react';

import {Container, Row, Col} from '../../Components/BootstrapComponents/BootstrapComponents';

import { EditorState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import '../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

import './TextEditor.scss';

class TextEditor extends Component {
    state = {
        editorState: EditorState.createEmpty(),
        }

    onEditorStateChange = (editorState) => {
        this.setState({
            editorState,
        });
    };

    render() {
        const { editorState } = this.state;
        return (
            <Container>
                <Row className="justify-content-center">
                    <Col xs={8}>
                        <Editor
                            editorState={editorState}
                            wrapperClassName="demo-wrapper"
                            editorClassName="demo-editor"
                            onEditorStateChange={this.onEditorStateChange}
                            toolbar={{
                                options: ['inline', 'blockType', 'list', 'textAlign', 'colorPicker', 'link', 'image', 'history'],
                                inline: {
                                    options: ['bold', 'italic', 'underline', 'strikethrough']
                                },
                                list : {
                                    options: ['unordered', 'ordered']
                                },
                                colorPicker: {
                                    colors: ['#2174bb', '#6caf5b']
                                },
                                link: {
                                    options: ['link']
                                }
                            }}
                        />
                        <textarea
                            disabled
                            value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}
                            className="w-100"
                        />
                    </Col>
                </Row>
            </Container>
        );
    }
}
 
export default TextEditor;