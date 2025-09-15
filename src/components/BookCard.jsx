import NoCover from "./NoCover"
import { Box, Card, CardContent, Typography, CardMedia } from "@mui/material";

export default function BookCard({ book }) {
    const coverUrl = book.coverId
        ? `https://covers.openlibrary.org/b/id/${book.coverId}-M.jpg`
        : null;

    return (
        <Card sx={{ height: "100%", display: "flex", flexDirection: "column", maxWidth: 300, margin: 1, boxShadow: 3 }}>
            {coverUrl ? (<CardMedia
                component="img"
                height="220"
                image={coverUrl}
                alt={book.title}
                sx={{ height: "100%" }}
            />) : (
                <Box
                    sx={{
                        height: 300,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        bgcolor: "#f0f0f0",
                    }}
                >
                    <NoCover />
                </Box>
            )
            }
            <CardContent>
                <Typography variant="h6" gutterBottom>
                    {book.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {book.author}
                </Typography>
                <Typography variant="caption" display="block" sx={{ marginTop: 1 }}>
                    {book.year}
                </Typography>
            </CardContent>
        </Card>
    );
}