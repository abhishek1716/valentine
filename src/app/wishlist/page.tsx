import WishlistApp from "../components/whishlist/whishlist";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create New Wishlist",
  description: "Create a new Secret Santa wishlist",
};
export default function WishlistPage() {
  return (
    <main className="min-h-screen p-4">
      <WishlistApp />
    </main>
  );
}
