import React from 'react';

export default function Head() {
  return (
    <>
      <title>Piotr Szczypka - Creative Dev</title>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
        // @ts-ignore
        precedence={'default'}
      />

      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
        // @ts-ignore
        precedence={'default'}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
        // @ts-ignore
        precedence={'default'}
      />
      <link
        rel="manifest"
        href="/site.webmanifest"
        // @ts-ignore
        precedence={'default'}
      />
      <link
        rel="mask-icon"
        href="/safari-pinned-tab.svg"
        color="#5bbad5"
        // @ts-ignore
        precedence={'default'}
      />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#ffffff" />
      <meta
        name="description"
        content="Created by Piotr Szczypka, about Piotr Szczypka. Based on NextJS v13 with React v18"
      />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </>
  );
}
