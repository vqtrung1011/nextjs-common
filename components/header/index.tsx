import PreHeader from "./pre-header";
import Header from "./header";

export default function HeaderComponent() {
  return (
    <div className="relative w-full z-50">
      <PreHeader />
      <Header />
    </div>
  );
}
