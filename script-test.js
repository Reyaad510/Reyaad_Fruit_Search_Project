describe("Search function", function () {
  it("should search through fruit array and push all fruits into results array that match those letters", function () {
    const result = search("ap");
    expect(result.length).toEqual(7);
  });

  it("should be case-insensitive", function () {
    const result = search("APplE");
    expect(result).toContain("Apple");
  });
  it("should return a empty array for an empty input", function () {
    const result = search("");
    expect(result.length).toEqual(0);
  });
});
