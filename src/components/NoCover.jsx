import { CardMedia } from "@mui/material";
import MenuBookIcon from "@mui/icons-material/MenuBook";

export default function NoCover() {
    return (
        <CardMedia sx={{ height: 300, display: "flex", justifyContent: "center", alignItems: "center", bgcolor: "#f0f0f0" }}>
            <MenuBookIcon sx={{ fontSize: 60, color: "#ccc" }} />
        </CardMedia>
    );
}