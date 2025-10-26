"use client"

import { useState, useMemo } from "react"
import { books } from "@/lib/books"
import { Input } from "@/components/ui/input"
import { Search, BookOpen } from "lucide-react"
import { Checkbox } from "@/components/ui/checkbox"

export function BookList() {
  const [searchQuery, setSearchQuery] = useState("")
  const [readBooks, setReadBooks] = useState<Set<string>>(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("readBooks")
      return stored ? new Set(JSON.parse(stored)) : new Set()
    }
    return new Set()
  })

  const groupedBooks = useMemo(() => {
    const query = searchQuery.toLowerCase().trim()

    // Filter books first
    const filtered = query
      ? books.filter((book) => book.title.toLowerCase().includes(query) || book.author.toLowerCase().includes(query))
      : books

    // Group by author
    const grouped = filtered.reduce(
      (acc, book) => {
        if (!acc[book.author]) {
          acc[book.author] = []
        }
        acc[book.author].push(book)
        return acc
      },
      {} as Record<string, typeof books>,
    )

    // Sort authors alphabetically and sort books within each author by year
    return Object.entries(grouped)
      .sort(([authorA], [authorB]) => authorA.localeCompare(authorB))
      .map(([author, authorBooks]) => ({
        author,
        books: authorBooks.sort((a, b) => (a.year || 0) - (b.year || 0)),
      }))
  }, [searchQuery])

  const toggleRead = (bookId: string) => {
    setReadBooks((prev) => {
      const newSet = new Set(prev)
      if (newSet.has(bookId)) {
        newSet.delete(bookId)
      } else {
        newSet.add(bookId)
      }
      if (typeof window !== "undefined") {
        localStorage.setItem("readBooks", JSON.stringify([...newSet]))
      }
      return newSet
    })
  }

  const readCount = readBooks.size
  const totalCount = books.length

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-4xl px-4 py-6 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-6">
          <div className="mb-1 flex items-center gap-2">
            <BookOpen className="h-6 w-6 text-primary" />
            <h1 className="font-serif text-3xl font-bold tracking-tight text-balance">Reading List</h1>
          </div>
          <p className="text-sm text-muted-foreground text-balance">Track your literary journey</p>
          <div className="mt-2 text-xs text-muted-foreground">
            {readCount} of {totalCount} books read
          </div>
        </div>

        {/* Search */}
        <div className="mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search by title or author..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        <div className="space-y-6">
          {groupedBooks.length === 0 ? (
            <div className="py-8 text-center text-sm text-muted-foreground">No books found matching your search.</div>
          ) : (
            groupedBooks.map(({ author, books: authorBooks }) => (
              <div key={author} className="space-y-2">
                {/* Author header */}
                <h2 className="font-serif text-xl font-semibold text-foreground text-balance">{author}</h2>

                <div className="flex flex-wrap gap-2">
                  {authorBooks.map((book) => {
                    const isRead = readBooks.has(book.id)
                    return (
                      <div
                        key={book.id}
                        className={`group flex items-center gap-2 rounded-lg border px-3 py-1.5 transition-all hover:border-primary/50 hover:bg-accent/30 ${
                          isRead ? "border-border/50 bg-accent/20" : "border-border"
                        }`}
                      >
                        <Checkbox
                          checked={isRead}
                          onCheckedChange={() => toggleRead(book.id)}
                          className="h-4 w-4 shrink-0 data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                        />

                        <div className={`transition-opacity ${isRead ? "opacity-40" : "opacity-100"}`}>
                          <div className="flex items-baseline gap-1.5">
                            <span className="text-sm font-medium text-balance leading-snug">{book.title}</span>
                            {book.year && (
                              <span className="text-xs text-muted-foreground whitespace-nowrap">
                                ({book.year > 0 ? book.year : `${Math.abs(book.year)} BCE`})
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  )
}
