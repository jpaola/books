import { useState } from "react";
import { IconButton, InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export default function SearchBar({ query, setQuery }) {
    const [input, setInput] = useState(query);

    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            setQuery(input);
        }
    };

    return (
        <TextField
            label="Search books..."
            variant="outlined"
            placeholder="Search books..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyPress}
            fullWidth
            sx={{ maxWidth: 400, marginBottom: 3, input: { color: "#f5f5f5" } }}
            slotProps={{
                input: {
                    endAdornment: (
                        <InputAdornment position="end" >
                            <IconButton >
                                <SearchIcon />
                            </IconButton>
                        </InputAdornment>
                    ),
                },
            }}
        />
    );
}