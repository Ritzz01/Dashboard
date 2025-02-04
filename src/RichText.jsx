import React, { useEffect, useState } from 'react';
import { Editor, EditorState, RichUtils, convertFromRaw, convertToRaw, ContentState } from 'draft-js';

function RichText() {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [userData, setUserData] = useState(null);

  // Load user data from localStorage when the component mounts
  useEffect(() => {
    const savedData = localStorage.getItem('userData');
    if (savedData) {
      const data = JSON.parse(savedData);
      setUserData(data);

      // Format the content with block type (like paragraphs and lists)
      const content = `
        Name: ${data.name}
        Address: ${data.address}
        Email: ${data.email}
        Phone: ${data.phone}
      `;
      
      // Create the content state properly formatted
      const blocks = [
        {
          key: 'a1',
          text: content,
          type: 'unstyled', // Use 'unstyled' or other block types like 'ordered-list-item', 'unordered-list-item'
          depth: 0,
          inlineStyleRanges: [],
          entityRanges: [],
        },
      ];

      const contentState = convertFromRaw({
        entityMap: {},
        blocks,
      });

      setEditorState(EditorState.createWithContent(contentState));
    }
  }, []);

  // Handle inline styles (Bold, Italic, Underline)
  const toggleInlineStyle = (style) => {
    setEditorState(RichUtils.toggleInlineStyle(editorState, style));
  };

  // Handle block styles (for lists)
  const toggleBlockStyle = (blockType) => {
    setEditorState(RichUtils.toggleBlockType(editorState, blockType));
  };

  // Save the editor content to localStorage
  const handleSave = () => {
    const contentState = editorState.getCurrentContent();
    const rawContent = convertToRaw(contentState);
    localStorage.setItem('userData', JSON.stringify(rawContent));
    alert("Data saved!");
  };

  return (
    <div className="Rich-container">
      <h2>Rich Text Editor</h2>

      {/* Formatting buttons for Inline styles */}
      <button onClick={() => toggleInlineStyle('BOLD')}>B</button>
      <button onClick={() => toggleInlineStyle('ITALIC')}>I</button>
      <button onClick={() => toggleInlineStyle('UNDERLINE')}>U</button>

      {/* Block buttons for Lists */}
      <button onClick={() => toggleBlockStyle('unordered-list-item')}>UL</button>
      <button onClick={() => toggleBlockStyle('ordered-list-item')}>OL</button>

      {/* Draft.js Editor */}
      <Editor
        editorState={editorState}
        onChange={setEditorState}
      />

      <br />

      {/* Button to save the modified data */}
      <button onClick={handleSave}>Save Changes</button>
    </div>
  );
}

export default RichText;
