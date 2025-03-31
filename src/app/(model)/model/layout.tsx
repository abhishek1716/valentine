import "../../../../public/styles/global.css";
export const metadata = {
  title: "Portfolio",
  description: "Model Portfolio",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
