// @refresh reload
import Navbar from "@/components/Navbar";
import "@/root.css";
import { onMount, Suspense } from "solid-js";
import {
  Body,
  ErrorBoundary,
  FileRoutes,
  Head,
  Html,
  Meta,
  Routes,
  Scripts,
  Title,
} from "solid-start";

export default function Root() {
  onMount(() => {
    function handleResize() {
      document.documentElement.style.setProperty(
        "--app-height",
        `${window.innerHeight}px`
      );
    }
    window.addEventListener("resize", handleResize);
    handleResize();
  });

  return (
    <Html lang="en">
      <Head>
        <Meta charset="utf-8" />
        <Meta
          name="viewport"
          content="width=device-width, height=device-height, initial-scale=1"
        />
        <Title>spotify api example</Title>
      </Head>
      <Body>
        <Suspense>
          <ErrorBoundary>
            <Navbar />
            <Routes>
              <FileRoutes />
            </Routes>
          </ErrorBoundary>
        </Suspense>
        <Scripts />
      </Body>
    </Html>
  );
}
