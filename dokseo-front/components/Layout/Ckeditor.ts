import React, { useEffect, useRef } from "react";

export default function CKeditor({ onChange, editorLoaded, name, value }: any) {
    const editorRef: any = useRef();
    const { CKEditor, ClassicEditor }: any = editorRef.current || {};
    useEffect(() => {
        editorRef.current = {
            CKEditor: require("@ckeditor/ckeditor5-react").CKEditor,
            ClassicEditor: require("@ckeditor/ckeditor5-build-classic")
        };
    }, []);
    // return ()
}