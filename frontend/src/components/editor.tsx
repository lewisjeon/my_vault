import { useEditor, EditorContent, Editor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import Highlight from "@tiptap/extension-highlight";
import TextStyle from "@tiptap/extension-text-style";
// import CodeBlock from "@tiptap/extension-code-block";
import "./Editor.css";
import { FontSize } from "../extensions/FontSize";
import { List, ListOrdered, Highlighter } from "lucide-react";
import SmartTabExtension from "../extensions/SmartTabExtension";

const MenuBar = ({ editor }: { editor: Editor | null }) => {
  if (!editor) return null;

  return (
    <div className="toolbar">
      <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        className={`toolbar-btn ${editor.isActive("bold") ? "active" : ""}`}
      >
        <b>B</b>
      </button>
      <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        className={`toolbar-btn ${editor.isActive("italic") ? "active" : ""}`}
      >
        <i>I</i>
      </button>
      <button
        onClick={() => editor.chain().focus().toggleUnderline().run()}
        className={`toolbar-btn ${
          editor.isActive("underline") ? "active" : ""
        }`}
      >
        <u>U</u>
      </button>
      <button
        onClick={() => editor.chain().focus().toggleStrike().run()}
        className={`toolbar-btn ${editor.isActive("strike") ? "active" : ""}`}
      >
        <s>S</s>
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHighlight().run()}
        className={`toolbar-btn highlight-icon-btn ${
          editor.isActive("highlight") ? "active" : ""
        }`}
        title="Highlight"
      >
        <Highlighter size={18} color="#fdd835" />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={`toolbar-btn ${
          editor.isActive("bulletList") ? "active" : ""
        }`}
        title="Bullet List"
      >
        <List size={18} />
      </button>

      <button
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={`toolbar-btn ${
          editor.isActive("orderedList") ? "active" : ""
        }`}
        title="Numbered List"
      >
        <ListOrdered size={18} />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
        className={`toolbar-btn ${
          editor.isActive("codeBlock") ? "active" : ""
        }`}
      >
        {"</>"}
      </button>

      {/* Font Size Dropdown */}
      <select
        onChange={(e) =>
          editor
            .chain()
            .focus()
            .setMark("fontSize", { fontSize: e.target.value })
            .run()
        }
        defaultValue=""
        className="toolbar-btn"
      >
        <option value="" disabled>
          Font Size
        </option>
        <option value="0.875rem">Small</option>
        <option value="1rem">Normal</option>
        <option value="1.25rem">Large</option>
        <option value="1.5rem">Extra Large</option>
      </select>
    </div>
  );
};

export default function TiptapEditor() {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        codeBlock: false,
      }),
      Underline,
      TextStyle,
      FontSize,
      Highlight,
      SmartTabExtension,
    ],
    content: null,
  });

  return (
    <div className="editor-wrapper">
      <MenuBar editor={editor} />
      <EditorContent editor={editor} className="editor-box" />
    </div>
  );
}
