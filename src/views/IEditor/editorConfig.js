export const editorConfig = {
    highlight: {
        options: [
            {
                model: "yellowMarker",
                class: "marker-yellow",
                title: "Yellow Marker",
                color: "var(--ck-highlight-marker-yellow)",
                type: "marker",
            },
            {
                model: "greenMarker",
                class: "marker-green",
                title: "Green marker",
                color: "var(--ck-highlight-marker-green)",
                type: "marker",
            },
            {
                model: "pinkMarker",
                class: "marker-pink",
                title: "Pink marker",
                color: "var(--ck-highlight-marker-pink)",
                type: "marker",
            },
            {
                model: "blueMarker",
                class: "marker-blue",
                title: "Blue marker",
                color: "var(--ck-highlight-marker-blue)",
                type: "marker",
            },
            {
                model: "redPen",
                class: "pen-red",
                title: "Red pen",
                color: "var(--ck-highlight-pen-red)",
                type: "pen",
            },
            {
                model: "greenPen",
                class: "pen-green",
                title: "Green pen",
                color: "var(--ck-highlight-pen-green)",
                type: "pen",
            },
        ],
    },
    heading: {
        options: [
            {
                model: "paragraph",
                title: "Paragraph",
                class: "ck-heading_paragraph",
            },
            {
                model: "heading1",
                view: "h1",
                title: "Heading 1",
                class: "ck-heading_heading1",
            },
            {
                model: "heading2",
                view: "h2",
                title: "Heading 2",
                class: "ck-heading_heading2",
            },
            {
                model: "heading3",
                view: "h3",
                title: "Heading 3",
                class: "ck-heading_heading3",
            },
            {
                model: "heading4",
                view: "h4",
                title: "Heading 4",
                class: "ck-heading_heading4",
            },
            {
                model: "heading5",
                view: "h5",
                title: "Heading 5",
                class: "ck-heading_heading5",
            },
            {
                model: "heading6",
                view: "h6",
                title: "Heading 6",
                class: "ck-heading_heading6",
            },
        ],
    },
    table: {
        contentToolbar: ['tableColumn', 'tableRow', 'mergeTableCells']
    },
    toolbar: [
        "heading",
        "|",
        "bold",
        "italic",
        "link",
        "bulletedList",
        "numberedList",
        "|",
        "outdent",
        "indent",
        "|",
        "uploadImage",
        "blockQuote",
        "insertTable",
        "mediaEmbed",
        "undo",
        "redo",
    ],
};



