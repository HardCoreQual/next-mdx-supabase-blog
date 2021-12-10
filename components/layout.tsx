import {ReactNode} from 'react';

export interface LayoutProps {
  path: string;
  id: number;
}

export function Layout(props: LayoutProps & {children: ReactNode}) {
  return (
    <>
      <header>{props.path}</header>
      <main>{props.children}</main>
      <footer>{props.id}</footer>
    </>
  );
}