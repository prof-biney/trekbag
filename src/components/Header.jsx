import Counter from "./Counter";
import Logo from "./Logo";
import { useItemsContext } from "../lib/hooks";

export default function Header() {
  const { items } = useItemsContext();

  return (
    <header>
      <Logo />
      <Counter
        packedItems={items.filter((item) => item.packed).length}
        totalItems={items.length}
      />
    </header>
  );
}
