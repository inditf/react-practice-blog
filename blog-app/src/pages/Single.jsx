import React from "react";
import { Link } from "react-router-dom";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import MarkNav from 'markdown-navbar';
import rehypeHighlight from 'rehype-highlight'
import 'markdown-navbar/dist/navbar.css';

const article = `# Markdown-Navbar Demo

The current page is a demo for markdown-navbar You can click **the button below** to edit or debug it on *codesandbox.io*.

[![Edit markdown-navbar-demo-online](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/markdown-navbar-demo-online-e7e0n?fontsize=14&hidenavigation=1&theme=dark)

## Chapter 1

Chicken Chicken Chicken Chicken Chicken Chicken Chicken Chicken Chicken Chicken.

* Chicken Chicken Chicken Chicken Chicken.
* Chicken Chicken Chicken Chicken Chicken.
* Chicken Chicken Chicken Chicken Chicken.

Chicken Chicken Chicken Chicken Chicken Chicken Chicken Chicken Chicken Chicken.

Chicken Chicken Chicken Chicken Chicken Chicken Chicken Chicken Chicken Chicken Chicken Chicken Chicken Chicken Chicken.

### Chicken Chicken Chicken

Chicken Chicken Chicken Chicken Chicken.

Chicken Chicken Chicken Chicken Chicken Chicken Chicken Chicken Chicken Chicken.

Chicken Chicken Chicken Chicken Chicken Chicken Chicken Chicken Chicken Chicken Chicken Chicken Chicken Chicken Chicken.

#### Chicken Chicken Chicken Chicken

Chicken Chicken Chicken Chicken Chicken.

Chicken Chicken Chicken Chicken Chicken Chicken Chicken Chicken Chicken Chicken.

Chicken Chicken Chicken Chicken Chicken Chicken Chicken Chicken Chicken Chicken Chicken Chicken Chicken Chicken Chicken.

## Chapter 2

Chicken Chicken Chicken Chicken Chicken.

### Chicken Chicken Chicken

Chicken Chicken Chicken Chicken Chicken.

Chicken Chicken Chicken Chicken Chicken Chicken Chicken Chicken Chicken Chicken.

#### Chicken Chicken Chicken Chicken

Chicken Chicken Chicken Chicken Chicken.

Chicken Chicken Chicken Chicken Chicken Chicken Chicken Chicken Chicken Chicken.

Chicken Chicken Chicken Chicken Chicken Chicken Chicken Chicken Chicken Chicken Chicken Chicken Chicken Chicken Chicken.

## Chapter 3

Chicken Chicken Chicken Chicken Chicken.

Chicken Chicken Chicken Chicken Chicken Chicken Chicken Chicken Chicken Chicken.

Chicken Chicken Chicken Chicken Chicken Chicken Chicken Chicken Chicken Chicken Chicken Chicken Chicken Chicken Chicken.

## Chapter 4

Chicken Chicken Chicken Chicken Chicken.

Chicken Chicken Chicken Chicken Chicken Chicken Chicken Chicken Chicken Chicken.

Chicken Chicken Chicken Chicken Chicken Chicken Chicken Chicken Chicken Chicken Chicken Chicken Chicken Chicken Chicken.

## Chapter 5

Chicken Chicken Chicken Chicken Chicken.

Chicken Chicken Chicken Chicken Chicken Chicken Chicken Chicken Chicken Chicken.

Chicken Chicken Chicken Chicken Chicken Chicken Chicken Chicken Chicken Chicken Chicken Chicken Chicken Chicken Chicken.

## Chapter 6

Chicken Chicken Chicken Chicken Chicken.

Chicken Chicken Chicken Chicken Chicken Chicken Chicken Chicken Chicken Chicken.

Chicken Chicken Chicken Chicken Chicken Chicken Chicken Chicken Chicken Chicken Chicken Chicken Chicken Chicken Chicken.

## Chapter 7

Chicken Chicken Chicken Chicken Chicken.

Chicken Chicken Chicken Chicken Chicken Chicken Chicken Chicken Chicken Chicken.

Chicken Chicken Chicken Chicken Chicken Chicken Chicken Chicken Chicken Chicken Chicken Chicken Chicken Chicken Chicken.

## Chapter 8

Chicken Chicken Chicken Chicken Chicken.

Chicken Chicken Chicken Chicken Chicken Chicken Chicken Chicken Chicken Chicken.

Chicken Chicken Chicken Chicken Chicken Chicken Chicken Chicken Chicken Chicken Chicken Chicken Chicken Chicken Chicken.

## Chapter 9

Chicken Chicken Chicken Chicken Chicken.

Chicken Chicken Chicken Chicken Chicken Chicken Chicken Chicken Chicken Chicken.

Chicken Chicken Chicken Chicken Chicken Chicken Chicken Chicken Chicken Chicken Chicken Chicken Chicken Chicken Chicken.

## Chapter 10

Chicken Chicken Chicken Chicken Chicken.

Chicken Chicken Chicken Chicken Chicken Chicken Chicken Chicken Chicken Chicken.

Chicken Chicken Chicken Chicken Chicken Chicken Chicken Chicken Chicken Chicken Chicken Chicken Chicken Chicken Chicken.

## Chapter 11

Chicken Chicken Chicken Chicken Chicken.

Chicken Chicken Chicken Chicken Chicken Chicken Chicken Chicken Chicken Chicken.

Chicken Chicken Chicken Chicken Chicken Chicken Chicken Chicken Chicken Chicken Chicken Chicken Chicken Chicken Chicken.

## Chapter 12

Chicken Chicken Chicken Chicken Chicken.

Chicken Chicken Chicken Chicken Chicken Chicken Chicken Chicken Chicken Chicken.

Chicken Chicken Chicken Chicken Chicken Chicken Chicken Chicken Chicken Chicken Chicken Chicken Chicken Chicken Chicken.


`;
const Single = () => {
    return (
        <div className="single">
            {/* <h1>Read Page</h1> */}
            <div className="single-content">
                {/* <h1>Single Page</h1> */}
                <div className="content">
                    <h2>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h2>
                    <div className="info">
                        <span >Lin</span>
                        <p>Posted 1 hour ago</p>
                    </div>
                    <div className="desc">
                        {/* <ReactMarkdown source={article} /> */}
                        <div className="detailed-content" >
                            <ReactMarkdown rehypePlugins={[rehypeHighlight]}>
                                {article}
                            </ReactMarkdown>
                        </div>
                    </div>
                </div>
                <div className="sidebar">
                    <h1>NavBar</h1>
                    <MarkNav className="markdown-nav" source={article} />
                </div>
            </div>
        </div>
    );
}
export default Single;