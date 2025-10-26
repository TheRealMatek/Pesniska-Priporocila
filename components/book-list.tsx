"use client";

import { useState, useMemo } from "react";
import { authors } from "@/lib/books";
import { Input } from "@/components/ui/input";
import { Search, BookOpen } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { ToggleSwitch } from "@/components/ui/toggle-switch";

export function BookList() {
  const [showForeign, setShowForeign] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [readBooks, setReadBooks] = useState<Set<string>>(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("readBooks");
      return stored ? new Set(JSON.parse(stored)) : new Set();
    }
    return new Set();
  });

  const filteredAuthors = useMemo(() => {
    const query = searchQuery.toLowerCase().trim();
    return authors
      .filter((author) => {
        // Filter by foreign status
        if (showForeign) {
          if (!author.foreign) return false;
        } else {
          if (author.foreign) return false;
        }
        // Filter by search
        return (
          author.name.toLowerCase().includes(query) ||
          author.books.some((book) => book.title.toLowerCase().includes(query))
        );
      })
      .sort((a, b) => (a.birthYear || 0) - (b.birthYear || 0));
  }, [searchQuery, showForeign]);

  const toggleRead = (bookId: string) => {
    setReadBooks((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(bookId)) {
        newSet.delete(bookId);
      } else {
        newSet.add(bookId);
      }
      if (typeof window !== "undefined") {
        localStorage.setItem("readBooks", JSON.stringify([...newSet]));
      }
      return newSet;
    });
  };

  const readCount = readBooks.size;
  const totalCount = authors.reduce(
    (acc, author) => acc + author.books.length,
    0
  );

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-4xl px-4 py-6 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-6">
          <div className="mb-1 flex items-center gap-2">
            <BookOpen className="h-6 w-6 text-primary" />
            <h1 className="font-serif text-3xl font-bold tracking-tight text-balance">
              Alja Pušič svetuje
            </h1>
          </div>
          <div className="mt-2 text-xs text-muted-foreground">
            {readCount} od {totalCount} prebranih
          </div>
        </div>

        {/* Search & Foreign Toggle */}
        <div className="mb-6 flex items-center gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Išči po naslovu ali avtorju..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          <ToggleSwitch
            checked={showForeign}
            onCheckedChange={setShowForeign}
            label="Tuji"
          />
        </div>

        <div className="space-y-4">
          {filteredAuthors.length === 0 ? (
            <div className="py-8 text-center text-sm text-muted-foreground">
              Ni najdenih knjig, ki ustrezajo vašemu iskanju.
            </div>
          ) : (
            filteredAuthors.map((author) => (
              <div key={author.name} className="space-y-2 border-2 border-blue-100 rounded-sm p-4">
                {/* Author header */}
                <h2 className="font-serif text-xl font-semibold text-foreground text-balance">
                  {author.name}{" "}
                  {author.birthYear ? (
                    <span className="text-xs text-muted-foreground">
                      ({author.birthYear})
                    </span>
                  ) : null}
                </h2>
                <div className="flex flex-wrap gap-2">
                  {[...author.books]
                    .sort((a, b) => (a.year || 0) - (b.year || 0))
                    .map((book) => {
                      const isRead = readBooks.has(book.id);
                      return (
                        <div
                          key={book.id}
                          className={`group flex items-center gap-2 rounded-lg border px-3 py-1.5 transition-all hover:border-primary/50 hover:bg-accent/30 ${
                            isRead
                              ? "border-border/50 bg-accent/20"
                              : "border-border"
                          }`}
                          onClick={(e) => {
                            // Prevent toggling twice if checkbox is clicked (Radix uses data-slot="checkbox")
                            if (
                              (e.target as HTMLElement)?.closest(
                                '[data-slot="checkbox"]'
                              )
                            )
                              return;
                            toggleRead(book.id);
                          }}
                          style={{ cursor: "pointer" }}
                        >
                          <Checkbox
                            checked={isRead}
                            onCheckedChange={(checked) => {
                              // Only toggle if checked is boolean
                              if (typeof checked === "boolean")
                                toggleRead(book.id);
                            }}
                            className="h-4 w-4 shrink-0 data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                          />
                          <div
                            className={`transition-opacity ${
                              isRead ? "opacity-40" : "opacity-100"
                            }`}
                          >
                            <div className="flex items-baseline gap-1.5">
                              <span className="text-sm font-medium text-balance leading-snug">
                                {book.title}
                              </span>
                              {book.year && (
                                <span className="text-xs text-muted-foreground whitespace-nowrap">
                                  (
                                  {book.year > 0
                                    ? book.year
                                    : `${Math.abs(book.year)} pr. n. št.`}
                                  )
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
