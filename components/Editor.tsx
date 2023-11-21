import { useEditor, Editable } from "@wysimark/react";
import { useState } from "react";

export default function Editor() {
  const [markdown, setMarkdown] = useState("hello");
  const editor = useEditor();
  return <Editable value={markdown} onChange={setMarkdown} />;
}
