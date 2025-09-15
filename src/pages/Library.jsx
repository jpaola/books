import { useState, useEffect } from "react";
import { Box, Grid, Container, Typography, CircularProgress } from "@mui/material";
import BookCard from "../components/BookCard";
import SearchBar from "../components/SearchBar";

export default function Library() {
    const [query, setQuery] = useState("Harry"); // default search
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(false);

    // Fetch books from OpenLibrary
    useEffect(() => {
        if (!query) return;

        setLoading(true);

        fetch(`https://openlibrary.org/search.json?q=${encodeURIComponent(query)}&limit=20`)
            .then((res) => res.json())
            .then((data) => {
                // Transform API data to match our BookCard
                const mappedBooks = data.docs.map((doc, index) => ({
                    id: doc.key || index,
                    title: doc.title,
                    author: doc.author_name ? doc.author_name.join(", ") : "Unknown Author",
                    year: doc.first_publish_year || "N/A",
                    coverId: doc.cover_i, // 👈 Add this
                }));

                setBooks(mappedBooks);
                setLoading(false);
            })
            .catch(() => {
                setBooks([]);
                setLoading(false);
            });
    }, [query]);

    return (
        <Container sx={{ paddingY: 5 }}>
            <Typography variant="h4" gutterBottom align="center">
                📚 My Book Library
            </Typography>
            <Box sx={{ mb: 4, textAlign: "center" }}>
                <SearchBar query={query} setQuery={setQuery} />
            </Box>
            {loading ? (
                <CircularProgress sx={{ marginTop: 3 }} />
            ) : (
                <Grid container spacing={2}>
                    {books.length > 0 ? (
                        books.map((book) => (
                            <Grid key={book.id} container spacing={2}>
                                <BookCard book={book} />
                            </Grid>
                        ))
                    ) : (
                        <Typography variant="body1" color="text.secondary" sx={{ marginTop: 3 }}>
                            No books found.
                        </Typography>
                    )}
                </Grid>
            )}
        </Container>
    );
}