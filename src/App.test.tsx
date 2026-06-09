import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { App } from "./App";

describe("Portfolio", () => {
  it("renders Yuri's name and main project", () => {
    render(<App />);

    expect(screen.getByRole("heading", { name: "Yuri Barbosa Couto" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "OpsFlow Administrativo" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Como o GitHub se conecta" })).toBeInTheDocument();
  });
});
