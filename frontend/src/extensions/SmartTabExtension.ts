import { Extension } from "@tiptap/core";

const SmartTabExtension = Extension.create({
  name: "smart-tab",

  addKeyboardShortcuts() {
    return {
      Tab: () => {
        const { state, commands } = this.editor;
        const { $from } = state.selection;

        // Traverse up from the cursor position to find if inside a listItem
        let inListItem = false;
        for (let i = $from.depth; i > 0; i--) {
          const node = $from.node(i);
          if (node.type.name === "listItem") {
            inListItem = true;
            break;
          }
        }

        console.log("SmartTab: inside list item?", inListItem);

        if (inListItem) {
          return commands.sinkListItem("listItem");
        }

        // Not in list -> insert 2 spaces
        commands.insertContent("  ");
        return true;
      },

      "Shift-Tab": () => {
        const { state, commands } = this.editor;
        const { $from } = state.selection;

        let inListItem = false;
        for (let i = $from.depth; i > 0; i--) {
          const node = $from.node(i);
          if (node.type.name === "listItem") {
            inListItem = true;
            break;
          }
        }

        if (inListItem) {
          return commands.liftListItem("listItem");
        }

        return false;
      },
    };
  },
});

export default SmartTabExtension;
