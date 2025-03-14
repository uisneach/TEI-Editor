# TEI-XML Web Editor

TEI-XML Web Processor is a modular, Node.js-based application that will allow users to parse, edit, and generate TEI XML files in a structured manner. It will integrate components from existing TEI-related projects, including:

- **[TEIC/Stylesheets](https://github.com/TEIC/Stylesheets)** for transforming TEI XML into various formats (HTML, PDF, etc.).
- **[TEIC/CETEIcean](https://github.com/TEIC/CETEIcean)** for rendering TEI content in the browser.
- **[arjanski/tei2json](https://github.com/arjanski/tei2json)** for converting TEI XML into JSON for easier manipulation.
- **[josdejong/jsoneditor](https://github.com/josdejong/jsoneditor)** for interactively editing JSON files.

## Features (coming)

- **TEI XML Parsing**: Converts TEI XML documents into JSON for structured editing.
- **Module-based Editing**: Supports modification of TEI sections (header, metadata, text body, etc.).
- **Transformation and Export**: Uses XSLT stylesheets to generate different output formats (HTML, PDF, etc.).
- **Web Interface**: Interactive UI for editing and managing TEI files.
- **REST API**: Provides endpoints for interacting with TEI data programmatically.

## Installation

Ensure you have [Node.js](https://nodejs.org/) installed, then clone from this repository:

```sh
git clone https://github.com/uisneach/tei-editor.git
cd tei-editor
```

Then make sure that npm has all the necessary dependencies installed:

```sh
npm install
```

If successful, run:

```sh
npm start
# or
npm run dev
```

## Usage

Coming soon.

## Roadmap

Coming soon.

## License

MIT License