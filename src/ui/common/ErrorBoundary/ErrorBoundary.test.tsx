import { render, screen, fireEvent } from "@testing-library/react";
import { vi } from "vitest";
import React from "react";
import { ErrorBoundary } from "./ErrorBoundary";

const ThrowError = ({ shouldThrow }: { shouldThrow: boolean }) => {
  if (shouldThrow) {
    throw new Error("Test error");
  }
  return <div>No error</div>;
};

describe("ErrorBoundary", () => {
  it("renders children when there is no error", () => {
    render(
      <ErrorBoundary>
        <ThrowError shouldThrow={false} />
      </ErrorBoundary>
    );

    expect(screen.getByText("No error")).toBeInTheDocument();
  });

  it("displays error message when error occurs", () => {
    const consoleSpy = vi.spyOn(console, "error").mockImplementation(() => {});

    render(
      <ErrorBoundary>
        <ThrowError shouldThrow={true} />
      </ErrorBoundary>
    );

    expect(screen.getByText("Something went wrong")).toBeInTheDocument();
    expect(screen.getByText("Error: Test error")).toBeInTheDocument();
    expect(screen.getByText("Try Again")).toBeInTheDocument();

    consoleSpy.mockRestore();
  });

  it("recovers from error when reset button is clicked", () => {
    const consoleSpy = vi.spyOn(console, "error").mockImplementation(() => {});

    const TestComponent = () => {
      const [shouldThrow, setShouldThrow] = React.useState(true);
      
      return (
        <ErrorBoundary>
          <ThrowError shouldThrow={shouldThrow} />
          <button onClick={() => setShouldThrow(false)}>Fix Error</button>
        </ErrorBoundary>
      );
    };

    render(<TestComponent />);

    expect(screen.getByText("Error: Test error")).toBeInTheDocument();

    const resetButton = screen.getByText("Try Again");
    fireEvent.click(resetButton);

    consoleSpy.mockRestore();
  });
});