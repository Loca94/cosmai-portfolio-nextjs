'use client';

import { Button } from '@/components/ui/Button';
import {
  BoldIcon,
  ItalicIcon,
  UnderlineIcon,
  TextAlignLeftIcon,
  TextAlignRightIcon,
  TextAlignCenterIcon,
  TextAlignJustifyIcon,
  CopyIcon,
  ArrowBendUpLeftIcon,
  ArrowBendUpRightIcon,
} from '@/components/Icons';
import { useEditor, EditorContent, Editor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import TextAlign from '@tiptap/extension-text-align';
import Underline from '@tiptap/extension-underline';

const MenuBar = ({ editor }: { editor: Editor | null }) => {
  if (!editor) {
    return null;
  }

  const handleCopy = () => {
    const content = editor.getHTML();
    navigator.clipboard.writeText(content).then(() => {
      alert('Content copied to clipboard');
    });
  };

  return (
    <div className="flex flex-col divide-y divide-slate-700 border-l border-slate-700">
      <Button
        onClick={() => editor.chain().focus().toggleBold().run()}
        className={`${editor.isActive('bold') ? 'bg-slate-700 text-slate-50' : ''}`}
        variant="richTextEditor"
      >
        <div className="sr-only">Bold</div>
        <BoldIcon className="h-4 w-4" />
      </Button>
      <Button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        className={`${editor.isActive('italic') ? 'bg-slate-700 text-slate-50' : ''}`}
        variant="richTextEditor"
      >
        <div className="sr-only">Italic</div>
        <ItalicIcon className="h-4 w-4" />
      </Button>
      <Button
        onClick={() => editor.chain().focus().toggleUnderline().run()}
        className={`${editor.isActive('underline') ? 'bg-slate-700 text-slate-50' : ''}`}
        variant="richTextEditor"
      >
        <div className="sr-only">Underline</div>
        <UnderlineIcon className="h-4 w-4" />
      </Button>
      <Button
        onClick={() => editor.chain().focus().setTextAlign('left').run()}
        className={`${editor.isActive({ textAlign: 'left' }) ? 'bg-slate-700 text-slate-50' : ''}`}
        variant="richTextEditor"
      >
        <div className="sr-only">Align Left</div>
        <TextAlignLeftIcon className="h-4 w-4" />
      </Button>
      <Button
        onClick={() => editor.chain().focus().setTextAlign('center').run()}
        className={`${editor.isActive({ textAlign: 'center' }) ? 'bg-slate-700 text-slate-50' : ''}`}
        variant="richTextEditor"
      >
        <div className="sr-only">Align Center</div>
        <TextAlignCenterIcon className="h-4 w-4" />
      </Button>
      <Button
        onClick={() => editor.chain().focus().setTextAlign('right').run()}
        className={`${editor.isActive({ textAlign: 'right' }) ? 'bg-slate-700 text-slate-50' : ''}`}
        variant="richTextEditor"
      >
        <div className="sr-only">Align Right</div>
        <TextAlignRightIcon className="h-4 w-4" />
      </Button>
      <Button
        onClick={() => editor.chain().focus().setTextAlign('justify').run()}
        className={`${editor.isActive({ textAlign: 'justify' }) ? 'bg-slate-700 text-slate-50' : ''}`}
        variant="richTextEditor"
      >
        <div className="sr-only">Justify</div>
        <TextAlignJustifyIcon className="h-4 w-4" />
      </Button>
      <Button onClick={handleCopy} variant="richTextEditor">
        <div className="sr-only">Copy Content</div>
        <CopyIcon className="h-4 w-4" />
      </Button>
      <Button
        onClick={() => editor.chain().focus().undo().run()}
        disabled={!editor.can().undo()}
        variant="richTextEditor"
      >
        <div className="sr-only">Undo</div>
        <ArrowBendUpLeftIcon className="h-4 w-4" />
      </Button>
      <Button
        onClick={() => editor.chain().focus().redo().run()}
        disabled={!editor.can().redo()}
        variant="richTextEditor"
      >
        <div className="sr-only">Redo</div>
        <ArrowBendUpRightIcon className="h-4 w-4" />
      </Button>
    </div>
  );
};

const RichTextEditor = () => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      TextAlign.configure({
        types: ['heading', 'paragraph'],
        alignments: ['left', 'center', 'right', 'justify'],
      }),
      Underline.configure({
        HTMLAttributes: {
          class: 'text-red-600',
        },
      }),
    ],
    content: '<p>Write something here...</p>',
  });

  return (
    <div className="flex rounded border border-slate-700 text-slate-200">
      <div className="flex-1 p-4">
        <EditorContent className="h-full" editor={editor} />
      </div>
      <MenuBar editor={editor} />
    </div>
  );
};

export default RichTextEditor;
