"use client";

import { Button } from "@/components/ui/button";

import styles from "./styles.module.css";
import { useChatsBar } from "@/components/contexts/chats-bar-context";
import { PanelLeft } from "lucide-react";

export function ChatsBar() {
  const { chatsBarIsOpen, toggleChatsBar } = useChatsBar();

  return (
    <aside
      className={styles.chatsBar}
      data-open={chatsBarIsOpen ? "on" : "off"}
    >
      <div className={styles.wrapper}>
        <header>
          <Button variant="outline">Nova conversa</Button>
          <Button
            variant="outline"
            onClick={toggleChatsBar}
            style={{ fontSize: 0 }}
          >
            <PanelLeft size={16} />
          </Button>
        </header>

        <main>
          <Button data-selected="true">Chat tal</Button>
          <Button>
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </span>
          </Button>
          <Button>Chat tal</Button>
          <Button>Chat tal</Button>
          <Button>Chat tal</Button>
          <Button>Chat tal</Button>
          <Button>Chat tal</Button>
        </main>

        <footer>Jonatan Frederico</footer>
      </div>
    </aside>
  );
}
