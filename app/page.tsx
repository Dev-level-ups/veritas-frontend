'use client'
import { useEffect, useState } from "react";
import { ThemeToggle } from "./components/theme-toggle";

export default function Home() {
  const [conversation, setConversation] = useState([
    {
      id: 1,
      role: "user",
      content: "What is Typescript?"
    },
    {
      id: 2,
      role: "assistant",
      content: "TypeScript is a superset of JavaScript..."
    },
    {
      id: 3,
      role: "user",
      content: "How is it different from JavaScript?"
    },
    {
      id: 4,
      role: "assistant",
      content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis placeat cum blanditiis itaque debitis, voluptatum ratione accusamus earum sint, quidem sed reprehenderit rem ea illo doloribus magnam quasi molestiae labore qui! Nam earum similique, facilis deserunt doloribus, ratione ab illo, saepe illum magnam quaerat reprehenderit. Minima facere ea magni sit impedit qui nisi eligendi ullam."
    }
  ]);



  return (
    <div className="">
      <nav className="flex items-center justify-around p-3">
        <div className="text-xl font-semibold">
          <span className="text-amber-600">Veri</span><span>tas</span>
        </div>
        <div><ThemeToggle /></div>
      </nav>
      <main className="">
        {conversation.map((message) => {
          const styles = (role: String) => {
            if (role === 'user') {
              return 'ml-auto bg-amber-400 dark:bg-amber-600 px-4 py-2 rounded-t-3xl rounded-bl-3xl rounded-br-sm mt-10';
            }
            return 'mt-5 max-w-4/5';
          }

          return (
            <div key={message.id}>
              <div className="w-2/3 mx-auto">
                <div className={`${styles(message.role)} m-1 w-fit`}>{message.content}</div>
              </div>
            </div>
          )
        })}
      </main>

      <footer className="bg-amber-200 fixed bottom-10 mx-auto w-full flex items-center justify-center">
        <div>
          <div>Upload PDF</div>
          <input type="text" />
        </div>
      </footer>

    </div>
  );
}
