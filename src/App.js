import { useState } from "react";

// Click on a title to display the content under it.Click again to close the hide the content.
// Click on a title does not affect the contents under other titles.

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    title: "How long do I have to return my chair?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
];

function App() {
  return (
    <div>
      <Accordion data={faqs} />
    </div>
  );
}

function Accordion({ data }) {
  return (
    <>
      {data.map((faq) => (
        <AccordionItem faq={faq} />
      ))}
    </>
  );
}

function AccordionItem({ faq }) {
  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    setIsOpen(() => !isOpen);
  }

  return (
    <>
      <h2 onClick={handleClick}>{faq.title}</h2>
      {isOpen && <p>{faq.text}</p>}
    </>
  );
}

export default App;
