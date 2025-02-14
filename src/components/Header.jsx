import Counter from "./Counter";
import Logo from "./Logo";

export default function Header({ packedItems, totalItems }) {
  return (
    <header>
      <Logo />
      <Counter packedItems={packedItems} totalItems={totalItems} />
    </header>
  );
}
