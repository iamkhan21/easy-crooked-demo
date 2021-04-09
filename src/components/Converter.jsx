import parseHtmlToMarkdown from "easy-crooked";

import React from "react";
import styles from "./Converter.module.css";

const Converter = () => {
  const htmlInput = React.useRef(null);
  const [markdown, setMarkdown] = React.useState("");
  const [isConverting, toggleConverting] = React.useState(false);

  const convertHtmlToMarkdown = async () => {
    toggleConverting(true);
    const htmlString = htmlInput.current.value;

    const markdown = parseHtmlToMarkdown(htmlString);

    setMarkdown(markdown);
    toggleConverting(false);
  };
  return (
    <section className={styles.section}>
      <div className={styles.field}>
        <h3 className={styles.title}>HTML</h3>
        <textarea
          id="html_input"
          className={styles.textarea}
          ref={htmlInput}
          rows="20"
          readOnly={isConverting}
        />
      </div>

      <div className={styles.buttonField}>
        <button
          type="button"
          onClick={convertHtmlToMarkdown}
          disabled={isConverting}
        >
          Convert
        </button>
      </div>

      <div className={styles.field}>
        <h3 className={styles.title}>Markdown</h3>
        <pre>
          <code>{markdown}</code>
        </pre>
      </div>
    </section>
  );
};

export default Converter;
