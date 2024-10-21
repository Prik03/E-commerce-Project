import { Link } from "react-router-dom";
import Badge, { BadgeProps } from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { styled } from "@mui/material/styles";
import { useSelector } from "react-redux";
import { RootState, AppDispatch } from "../../store";

const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

const Navbar = () => {
  const { totalQuantity } = useSelector((state: RootState) => state.cart);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/product">
              Product
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/Cart">
              Cart{" "}
              <IconButton aria-label="cart">
                <StyledBadge badgeContent={totalQuantity} color="secondary">
                  <ShoppingCartIcon />
                </StyledBadge>
              </IconButton>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
