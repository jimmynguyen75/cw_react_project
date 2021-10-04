import React, { useEffect, useState } from 'react'
import { useHistory, useLocation } from "react-router-dom";
import parse from 'html-react-parser';
import DecoupledEditor from '@ckeditor/ckeditor5-build-decoupled-document';
import { CKEditor } from '@ckeditor/ckeditor5-react';
export default function ViewCategory() {
    const history = useHistory();
    const location = useLocation();
    const [title, setTitle] = useState('');
    const [record, setRecord] = useState('')
    useEffect(() => {
        document.title = title
        switch (location.pathname) {
            case (location.pathname):
                return (setTitle(location.state != null && location.state.record.Title))
        }
    }, [location.pathname, title])
    useEffect(() => {
        setRecord(location.state != null && location.state.record)
    })
    DecoupledEditor
        .create(document.querySelector('#editor'))
        .then(editor => {
            const toolbarContainer = document.querySelector('#toolbar-container');
            editor.isReadOnly = true
            toolbarContainer.appendChild(editor.ui.view.toolbar.element);
            editor.ui.view.top.remove(toolbarContainer)
        })
        .catch(error => {
            console.error(error);
        });
    return (
        <div className="headerCW">
            <div style={{ padding: '9.6px', fontWeight: 600, fontSize: 32, width: 900, marginTop: 30 }}> {record !== '' && record.Title}</div>
            <div style={{ fontWeight: '500', marginBottom: 1, fontSize: 18, padding: '9.6px', width: 900 }}>
                {record !== '' && record.Type === 1 ? <span style={{ color: '#555555', fontWeight: 450}}>Xe </span> :
                    record !== '' && record.Type === 2 ? <span style={{ color: '#555555', fontWeight: 450}}>Phụ kiện </span> :
                        record !== '' && record.Type === 3 ? <span style={{ color: '#555555', fontWeight: 450}}>Sự kiện </span> :
                            record !== '' && record.Type === 4 ? <span style={{ color: '#555555', fontWeight: 450}}>Cuộc thi </span> : null}
                - {record !== '' && record.Overview}
            </div>
            <div id="toolbar-container"></div>
            <div id="editor" style={{ width: 900 }}>
                <p>{record !== '' && parse(record.Contents)}</p>
            </div>
            <div style={{ paddingLeft: '9.6px', fontWeight: '500' }}>Thực hiện: {record !== '' && record.CreatedByNavigation.FullName}</div>
        </div>
    )
}
