import { render, screen, waitFor } from "@testing-library/react";
import Async from "./Async";

describe("Async component", () => {
  test("renders posts if the request succeeds", async () => {
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: async () => [{ id: "p1", title: "First post" }],
    });
    render(<Async />);
    await waitFor(() => {
      const listItemElements = screen.getAllByRole("listitem");
      expect(listItemElements).not.toHaveLength(0);
    });
  });
});
