"use client";
import React from "react";
import Head from "next/head";
import { useSelector, useDispatch } from "react-redux";

import {
  selectCount,
  increment,
  decrement,
  incrementByAmount,
} from "@/features/counter-slice";

const Home: React.FC = () => {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();

  return (
    <div>
      <Head>
        <title>Next.js Homepage</title>
        <meta name="description" content="Welcome to the Next.js homepage" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto mt-8">
        {/* <h1 className="text-3xl font-bold text-center mb-4">
          Welcome to Next.js
        </h1>
        <p className="text-lg text-gray-700 text-center">
          This is the homepage of your Next.js application.
        </p> */}

        <div>
          <div>Count: {count}</div>
          <button onClick={() => dispatch(increment())}>Increment</button>
          <button onClick={() => dispatch(decrement())}>Decrement</button>
          <button onClick={() => dispatch(incrementByAmount(5))}>
            Increment by 5
          </button>
        </div>
      </main>
    </div>
  );
};

export default Home;
