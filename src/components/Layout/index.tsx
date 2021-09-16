import { LayoutContainer } from "./styles";

interface LayoutProps {
  children: JSX.Element;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <LayoutContainer>
      <div className="layout-container__wrapper">{children}</div>
    </LayoutContainer>
  );
};
