import * as React from 'react';
import { css } from 'emotion';
import Img from 'gatsby-image';

interface PageContentProps {
  title: string;
  featureImage: any;
  children?: React.ReactNode;
}

export default function PageContent(props: PageContentProps) {
  return (
    <section
      className={css`
        padding: 6rem 3rem 4rem 3rem;
        background-color: #f3f3f3;
        height: 100%;
      `}
    >
      <header
        className={css`
          max-width: 35rem;
          margin: 0 auto 3rem auto;
          text-align: center;
        `}
      >
        <div
          className={css`
            content: '';
            display: inline-block;
            width: 6.5rem;
            height: 0.25rem;
            margin: 0 0 1.5rem 0;
            border-radius: 4px;
            background-color: #4a98e2;
          `}
        />
        <h1
          className={css`
            margin: 0;
            font-size: 2.75rem;
            line-height: 1.3;
            text-transform: uppercase;
            letter-spacing: 0.05em;
            font-family: 'Raleway', Helvetica, sans-serif;
            font-weight: 800;
            color: #3f3f3f;
          `}
        >
          {props.title}
        </h1>
      </header>
      <div
        className={css`
          background-color: #fff;
          border-radius: 4px;
        `}
      >
        <Img
          fluid={props.featureImage}
          className={css`
            border-radius: 4px;
          `}
        />
        <div
          className={css`
            padding: 3rem 4rem;
            > *:last-child {
              margin-bottom: 0;
            }
          `}
        >
          {props.children}
        </div>
      </div>
    </section>
  );
}
