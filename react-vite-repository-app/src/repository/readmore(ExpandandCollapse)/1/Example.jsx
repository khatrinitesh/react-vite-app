import React, { useState} from "react";
import "./style.css";

const Example = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleText = () => {
      setIsExpanded(!isExpanded);
    };
  return (
    <>
    <div>
      <h1 align="center">What is CSS?</h1>
        <p>
          Cascading Style Sheets (CSS) is a style sheet language used for
          describing the presentation of a document written in a markup
          language. Although most often used to set the visual style of web
          pages and user interfaces written in HTML and XHTML, the language can
          be applied to any XML document, including plain XML, SVG and XUL, and
          is applicable to rendering in speech, or on other media. Along with
          HTML and JavaScript, CSS is a cornerstone technology used by most
          websites to create visually engaging webpages, user interfaces for web
          applications, and user interfaces for many mobile applications.
        </p>
        {isExpanded && (
          <p>
            CSS is designed primarily to enable the separation of document
            content from document presentation, including aspects such as the
            layout, colors, and fonts. This separation can improve content
            accessibility, provide more flexibility and control in the
            specification of presentation characteristics, enable multiple HTML
            pages to share formatting by specifying the relevant CSS in a
            separate .css file, and reduce complexity and repetition in the
            structural content. Separation of formatting and content makes it
            possible to present the same markup page in different styles for
            different rendering methods, such as on-screen, in print, by voice
            (via speech-based browser or screen reader), and on Braille-based
            tactile devices. It can also display the web page differently
            depending on the screen size or viewing device. Readers can also
            specify a different style sheet, such as a CSS file stored on their
            own computer, to override the one the author specified. Changes to
            the graphic design of a document (or hundreds of documents) can be
            applied quickly and easily, by editing a few lines in the CSS file
            they use, rather than by changing markup in the documents. The CSS
            specification describes a priority scheme to determine which style
            rules apply if more than one rule matches against a particular
            element. In this so-called cascade, priorities (or weights) are
            calculated and assigned to rules, so that the results are
            predictable. The CSS specifications are maintained by the World
            Wide Web Consortium (W3C). Internet media type (MIME type)
            text/css is registered for use with CSS by RFC 2318 (March 1998).
            The W3C operates a free CSS validation service for CSS documents.
            <br />
            <span className="source">Source:</span>
            <a href="https://en.wikipedia.org/wiki/Cascading_Style_Sheets">
              Wikipedia
            </a>
          </p>
        )}
      </div>
      <div className="btn-container">
        <button onClick={toggleText}>
          {isExpanded ? (<><b>Read Less</b></>) : (<><b>Read More</b></>)}
        </button>
      </div>
    </>
  );
};

export default Example;

